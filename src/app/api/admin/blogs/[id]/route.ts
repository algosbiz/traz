import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { getAdminSessionFromRequest } from "@/lib/adminAuth";
import {
  deleteBlog,
  getBlogById,
  isSlugAvailable,
  slugify,
  updateBlog,
  type BlogInput,
} from "@/lib/cmsBlogs";

interface RouteContext {
  params: { id: string };
}

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
}

function validateInput(value: Partial<BlogInput>) {
  const required = ["title", "slug", "excerpt", "category", "coverImage", "contentHtml"] as const;
  const missing = required.find((field) => !value[field]?.trim());
  if (missing) return `${missing} is required.`;
  if (value.status !== "draft" && value.status !== "published") return "Invalid status.";
  if (value.title!.length > 220) return "Title is too long.";
  if (value.excerpt!.length > 500) return "Excerpt is too long.";
  if (!slugify(value.slug!)) return "Slug is invalid.";
  return null;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  if (!getAdminSessionFromRequest(request)) return unauthorized();

  try {
    const blog = await getBlogById(params.id);
    return blog
      ? NextResponse.json({ blog })
      : NextResponse.json({ error: "Blog not found." }, { status: 404 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load blog.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  if (!getAdminSessionFromRequest(request)) return unauthorized();

  try {
    const body = (await request.json()) as Partial<BlogInput>;
    const validationError = validateInput(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (!(await isSlugAvailable(body.slug!, params.id))) {
      return NextResponse.json({ error: "That slug is already in use." }, { status: 409 });
    }

    const previousBlog = await getBlogById(params.id);
    const blog = await updateBlog(params.id, body as BlogInput);
    if (blog) {
      revalidatePath("/blogs/");
      revalidatePath(`/blogs/${blog.slug}/`);
      if (previousBlog && previousBlog.slug !== blog.slug) {
        revalidatePath(`/blogs/${previousBlog.slug}/`);
      }
      revalidatePath("/sitemap.xml");
    }
    return blog
      ? NextResponse.json({ blog })
      : NextResponse.json({ error: "Blog not found." }, { status: 404 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update blog.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  if (!getAdminSessionFromRequest(request)) return unauthorized();

  try {
    const blog = await getBlogById(params.id);
    const deleted = await deleteBlog(params.id);
    if (!deleted) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    revalidatePath("/blogs/");
    if (blog) revalidatePath(`/blogs/${blog.slug}/`);
    revalidatePath("/sitemap.xml");
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to delete blog.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
