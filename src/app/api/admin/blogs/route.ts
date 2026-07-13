import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { getAdminSessionFromRequest } from "@/lib/adminAuth";
import { purgeBlogCache } from "@/lib/cloudflareCache";
import {
  createBlog,
  getAllBlogs,
  isSlugAvailable,
  slugify,
  type BlogInput,
} from "@/lib/cmsBlogs";

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

export async function GET(request: NextRequest) {
  if (!getAdminSessionFromRequest(request)) return unauthorized();

  try {
    return NextResponse.json({ blogs: await getAllBlogs() });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load blogs.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!getAdminSessionFromRequest(request)) return unauthorized();

  try {
    const body = (await request.json()) as Partial<BlogInput>;
    const validationError = validateInput(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (!(await isSlugAvailable(body.slug!))) {
      return NextResponse.json({ error: "That slug is already in use." }, { status: 409 });
    }

    const blog = await createBlog(body as BlogInput);
    revalidatePath("/blogs/");
    revalidatePath(`/blogs/${blog.slug}/`);
    revalidatePath("/sitemap.xml");
    if (blog.status === "published") await purgeBlogCache();
    return NextResponse.json({ blog }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create blog.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
