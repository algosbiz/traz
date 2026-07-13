import sanitizeHtml from "sanitize-html";

import { blogPosts, type BlogPost } from "./blogsData";
import { getSql, isDatabaseConfigured } from "./db";
import { deleteR2Assets, isR2Configured } from "./r2";

export type BlogStatus = "draft" | "published";

export interface CmsBlog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  contentHtml: string;
  status: BlogStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export type BlogSummary = Omit<CmsBlog, "contentHtml">;

export interface PublishedBlogsPage {
  posts: BlogSummary[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface BlogInput {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  contentHtml: string;
  status: BlogStatus;
}

function legacyContentToHtml(post: BlogPost) {
  const paragraphs = post.introduction.map((paragraph) => `<p>${paragraph}</p>`);

  for (const section of post.sections) {
    paragraphs.push(`<h2>${section.heading}</h2>`);
    paragraphs.push(...section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`));
    if (section.list) {
      paragraphs.push(`<ul>${section.list.map((item) => `<li>${item}</li>`).join("")}</ul>`);
    }
    if (section.closingParagraphs) {
      paragraphs.push(...section.closingParagraphs.map((paragraph) => `<p>${paragraph}</p>`));
    }
    if (section.faqs) {
      for (const faq of section.faqs) {
        paragraphs.push(`<h3>${faq.question}</h3><p>${faq.answer}</p>`);
      }
    }
  }

  return paragraphs.join("");
}

export function legacyPostToInput(post: BlogPost): BlogInput {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.description,
    category: post.category,
    coverImage: post.image,
    contentHtml: legacyContentToHtml(post),
    status: "published",
  };
}

function legacyPostToCmsBlog(post: BlogPost): CmsBlog {
  return {
    id: `legacy-${post.id}`,
    ...legacyPostToInput(post),
    createdAt: "2026-07-13T00:00:00.000Z",
    updatedAt: "2026-07-13T00:00:00.000Z",
    publishedAt: "2026-07-13T00:00:00.000Z",
  };
}

const allowedTags = [
  "p",
  "br",
  "h2",
  "h3",
  "h4",
  "strong",
  "em",
  "s",
  "blockquote",
  "ul",
  "ol",
  "li",
  "a",
  "img",
  "hr",
];

export function sanitizeContentHtml(content: string) {
  return sanitizeHtml(content, {
    allowedTags,
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "title"],
    },
    allowedSchemes: ["http", "https"],
    allowedSchemesByTag: {
      img: ["http", "https"],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        rel: "noopener noreferrer",
      }),
    },
  });
}

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180);
}

function normalizeBlog(row: Record<string, unknown>): CmsBlog {
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt),
    category: String(row.category),
    coverImage: String(row.cover_image),
    contentHtml: String(row.content_html ?? ""),
    status: row.status as BlogStatus,
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
    publishedAt: row.published_at
      ? new Date(String(row.published_at)).toISOString()
      : null,
  };
}

export async function getPublishedBlogs(): Promise<BlogSummary[]> {
  if (!isDatabaseConfigured()) {
    return blogPosts.map((post) => {
      const { contentHtml: _contentHtml, ...summary } = legacyPostToCmsBlog(post);
      return summary;
    });
  }

  const sql = getSql();
  const rows = await sql`
    SELECT id, slug, title, excerpt, category, cover_image, status,
           created_at, updated_at, published_at
    FROM blogs
    WHERE status = 'published'
    ORDER BY published_at DESC NULLS LAST, created_at DESC
  `;
  return rows.map((row) => {
    const { contentHtml: _contentHtml, ...summary } = normalizeBlog(row);
    return summary;
  });
}

export async function getPublishedBlogsPage(
  requestedPage = 1,
  requestedPageSize = 6,
): Promise<PublishedBlogsPage> {
  const pageSize = Math.min(Math.max(Math.trunc(requestedPageSize) || 6, 1), 50);
  const desiredPage = Math.max(Math.trunc(requestedPage) || 1, 1);

  if (!isDatabaseConfigured()) {
    const posts = await getPublishedBlogs();
    const total = posts.length;
    const totalPages = Math.max(Math.ceil(total / pageSize), 1);
    const page = Math.min(desiredPage, totalPages);
    const offset = (page - 1) * pageSize;

    return {
      posts: posts.slice(offset, offset + pageSize),
      page,
      pageSize,
      total,
      totalPages,
    };
  }

  const sql = getSql();
  const countRows = await sql`
    SELECT COUNT(*)::int AS total
    FROM blogs
    WHERE status = 'published'
  `;
  const total = Number(countRows[0]?.total ?? 0);
  const totalPages = Math.max(Math.ceil(total / pageSize), 1);
  const page = Math.min(desiredPage, totalPages);
  const offset = (page - 1) * pageSize;
  const rows = await sql`
    SELECT id, slug, title, excerpt, category, cover_image, status,
           created_at, updated_at, published_at
    FROM blogs
    WHERE status = 'published'
    ORDER BY published_at DESC NULLS LAST, created_at DESC
    LIMIT ${pageSize} OFFSET ${offset}
  `;

  return {
    posts: rows.map((row) => {
      const { contentHtml: _contentHtml, ...summary } = normalizeBlog(row);
      return summary;
    }),
    page,
    pageSize,
    total,
    totalPages,
  };
}

export async function getPublishedBlogBySlug(slug: string) {
  if (!isDatabaseConfigured()) {
    const post = blogPosts.find((item) => item.slug === slug);
    return post ? legacyPostToCmsBlog(post) : null;
  }

  const sql = getSql();
  const rows = await sql`
    SELECT * FROM blogs WHERE slug = ${slug} AND status = 'published' LIMIT 1
  `;
  return rows[0] ? normalizeBlog(rows[0]) : null;
}

export async function getAllBlogs() {
  const sql = getSql();
  const rows = await sql`SELECT * FROM blogs ORDER BY updated_at DESC`;
  return rows.map(normalizeBlog);
}

export async function getBlogById(id: string) {
  const sql = getSql();
  const rows = await sql`SELECT * FROM blogs WHERE id = ${id} LIMIT 1`;
  return rows[0] ? normalizeBlog(rows[0]) : null;
}

export async function createBlog(input: BlogInput) {
  const sql = getSql();
  const contentHtml = sanitizeContentHtml(input.contentHtml);
  const rows = await sql`
    INSERT INTO blogs (
      slug, title, excerpt, category, cover_image, content_html, status, published_at
    ) VALUES (
      ${slugify(input.slug)}, ${input.title.trim()}, ${input.excerpt.trim()},
      ${input.category.trim()}, ${input.coverImage}, ${contentHtml}, ${input.status},
      ${input.status === "published" ? new Date().toISOString() : null}
    )
    RETURNING *
  `;
  const blog = normalizeBlog(rows[0]);
  await linkAssetsToBlog(blog.id, [blog.coverImage, blog.contentHtml].join(" "));
  return blog;
}

export async function updateBlog(id: string, input: BlogInput) {
  const sql = getSql();
  const contentHtml = sanitizeContentHtml(input.contentHtml);
  const rows = await sql`
    UPDATE blogs SET
      slug = ${slugify(input.slug)},
      title = ${input.title.trim()},
      excerpt = ${input.excerpt.trim()},
      category = ${input.category.trim()},
      cover_image = ${input.coverImage},
      content_html = ${contentHtml},
      status = ${input.status},
      published_at = CASE
        WHEN ${input.status} = 'published' AND published_at IS NULL THEN NOW()
        WHEN ${input.status} = 'draft' THEN NULL
        ELSE published_at
      END,
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;
  if (!rows[0]) return null;
  const blog = normalizeBlog(rows[0]);
  await linkAssetsToBlog(blog.id, [blog.coverImage, blog.contentHtml].join(" "));
  return blog;
}

export async function deleteBlog(id: string) {
  const sql = getSql();
  const assets = await sql`
    SELECT object_key FROM blog_assets
    WHERE blog_id = ${id} AND object_key IS NOT NULL
  `;
  const rows = await sql`DELETE FROM blogs WHERE id = ${id} RETURNING id`;
  if (rows[0] && assets.length && isR2Configured()) {
    await deleteR2Assets(assets.map((asset) => String(asset.object_key))).catch(
      (error) => console.error("Unable to remove orphaned R2 assets:", error),
    );
  }
  return Boolean(rows[0]);
}

export async function isSlugAvailable(slug: string, excludeId?: string) {
  const sql = getSql();
  const normalizedSlug = slugify(slug);
  const rows = excludeId
    ? await sql`SELECT id FROM blogs WHERE slug = ${normalizedSlug} AND id <> ${excludeId} LIMIT 1`
    : await sql`SELECT id FROM blogs WHERE slug = ${normalizedSlug} LIMIT 1`;
  return rows.length === 0;
}

async function linkAssetsToBlog(blogId: string, content: string) {
  const ids = Array.from(
    content.matchAll(/\/api\/blog-assets\/([0-9a-f-]{36})/gi),
    (match) => match[1],
  );
  if (!ids.length) return;

  const sql = getSql();
  await Promise.all(
    [...new Set(ids)].map(
      (assetId) => sql`
        UPDATE blog_assets SET blog_id = ${blogId}
        WHERE id = ${assetId} AND (blog_id IS NULL OR blog_id = ${blogId})
      `,
    ),
  );
}
