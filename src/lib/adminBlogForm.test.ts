import assert from "node:assert/strict";
import test from "node:test";

import {
  getApiResponse,
  parseStoredBlogDraft,
  type StoredBlogDraft,
} from "./adminBlogForm";
import { sanitizeContentHtml } from "./cmsBlogs";

test("getApiResponse preserves JSON API errors", async () => {
  const response = new Response(JSON.stringify({ error: "R2 is not configured." }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });

  assert.deepEqual(await getApiResponse(response, "Upload failed."), {
    error: "R2 is not configured.",
  });
});

test("getApiResponse turns a plain 413 response into a useful upload error", async () => {
  const response = new Response("Request Entity Too Large", { status: 413 });

  assert.deepEqual(await getApiResponse(
    response,
    "Upload failed.",
    "The image is too large to upload. Choose a smaller image and try again.",
  ), {
    error: "The image is too large to upload. Choose a smaller image and try again.",
  });
});

test("parseStoredBlogDraft restores form fields and heading HTML", () => {
  const draft: StoredBlogDraft = {
    version: 1,
    sourceUpdatedAt: "2026-08-13T01:00:00.000Z",
    title: "Restored title",
    slug: "restored-title",
    slugEdited: true,
    excerpt: "Restored excerpt",
    category: "Repairs",
    coverImage: "/api/blog-assets/asset-id",
    status: "draft",
    contentHtml: "<h1>Restored heading</h1><p><strong>Formatted</strong> copy</p>",
  };

  assert.deepEqual(
    parseStoredBlogDraft(JSON.stringify(draft), draft.sourceUpdatedAt),
    draft,
  );
});

test("parseStoredBlogDraft ignores stale edits from an older server version", () => {
  const draft: StoredBlogDraft = {
    version: 1,
    sourceUpdatedAt: "2026-08-12T01:00:00.000Z",
    title: "Stale title",
    slug: "stale-title",
    slugEdited: true,
    excerpt: "Stale excerpt",
    category: "Repairs",
    coverImage: "/api/blog-assets/asset-id",
    status: "draft",
    contentHtml: "<p>Stale content</p>",
  };

  assert.equal(
    parseStoredBlogDraft(JSON.stringify(draft), "2026-08-13T01:00:00.000Z"),
    null,
  );
});

test("blog sanitization keeps supported heading formatting", () => {
  assert.equal(
    sanitizeContentHtml("<h1>Main heading</h1><h4>Small heading</h4>"),
    "<h1>Main heading</h1><h4>Small heading</h4>",
  );
});
