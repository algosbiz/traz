"use client";

import ImageExtension from "@tiptap/extension-image";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { slugify, type BlogInput, type CmsBlog } from "@/lib/cmsBlogs";
import styles from "./Admin.module.css";

interface BlogEditorFormProps {
  blog?: CmsBlog;
}

export default function BlogEditorForm({ blog }: BlogEditorFormProps) {
  const router = useRouter();
  const inlineImageInput = useRef<HTMLInputElement>(null);
  const coverImageInput = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState(blog?.title ?? "");
  const [slug, setSlug] = useState(blog?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(blog));
  const [excerpt, setExcerpt] = useState(blog?.excerpt ?? "");
  const [category, setCategory] = useState(blog?.category ?? "");
  const [coverImage, setCoverImage] = useState(blog?.coverImage ?? "");
  const [status, setStatus] = useState<BlogInput["status"]>(blog?.status ?? "draft");
  const [contentHtml, setContentHtml] = useState(blog?.contentHtml ?? "<p></p>");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, ImageExtension],
    content: contentHtml,
    onUpdate: ({ editor: currentEditor }) => setContentHtml(currentEditor.getHTML()),
  });

  function updateTitle(value: string) {
    setTitle(value);
    if (!slugEdited) setSlug(slugify(value));
  }

  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/admin/assets/", {
      method: "POST",
      body: formData,
    });
    const result = (await response.json()) as { url?: string; error?: string };
    if (!response.ok || !result.url) throw new Error(result.error || "Image upload failed.");
    return result.url;
  }

  async function handleCoverUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      setCoverImage(await uploadImage(file));
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Image upload failed.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  async function handleInlineImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file || !editor) return;
    setError("");
    setUploading(true);
    try {
      const url = await uploadImage(file);
      editor.chain().focus().setImage({ src: url, alt: file.name }).run();
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Image upload failed.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");

    const payload: BlogInput = {
      title,
      slug,
      excerpt,
      category,
      coverImage,
      contentHtml,
      status,
    };

    setSaving(true);
    try {
      const response = await fetch(blog ? `/api/admin/blogs/${blog.id}/` : "/api/admin/blogs/", {
        method: blog ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to save blog.");
      router.push("/admin/");
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to save blog.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={submit}>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.formGrid}>
        <div>
          <section className={styles.formSection}>
            <h2>Blog Information</h2>
            <div className={styles.field}>
              <label htmlFor="blog-title">TITLE</label>
              <input
                id="blog-title"
                className={styles.input}
                value={title}
                onChange={(event) => updateTitle(event.target.value)}
                maxLength={220}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="blog-slug">SLUG</label>
              <input
                id="blog-slug"
                className={styles.input}
                value={slug}
                onChange={(event) => {
                  setSlug(slugify(event.target.value));
                  setSlugEdited(true);
                }}
                required
              />
              <small className={styles.hint}>Public URL: /blogs/{slug || "your-blog-slug"}/</small>
            </div>
            <div className={styles.field}>
              <label htmlFor="blog-excerpt">SHORT DESCRIPTION</label>
              <textarea
                id="blog-excerpt"
                className={styles.textarea}
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                maxLength={500}
                required
              />
              <small className={styles.hint}>{excerpt.length}/500 characters</small>
            </div>
          </section>

          <section className={styles.formSection}>
            <h2>Content</h2>
            <div className={styles.editorShell}>
              <div className={styles.toolbar}>
                <button
                  type="button"
                  data-active={editor?.isActive("bold")}
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                  title="Bold"
                >
                  <strong>B</strong>
                </button>
                <button
                  type="button"
                  data-active={editor?.isActive("italic")}
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                  title="Italic"
                >
                  <em>I</em>
                </button>
                <button
                  type="button"
                  data-active={editor?.isActive("heading", { level: 2 })}
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                >
                  H2
                </button>
                <button
                  type="button"
                  data-active={editor?.isActive("heading", { level: 3 })}
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                >
                  H3
                </button>
                <button
                  type="button"
                  data-active={editor?.isActive("bulletList")}
                  onClick={() => editor?.chain().focus().toggleBulletList().run()}
                  title="Bullet list"
                >
                  <i className="ri-list-unordered" />
                </button>
                <button
                  type="button"
                  data-active={editor?.isActive("orderedList")}
                  onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                  title="Numbered list"
                >
                  <i className="ri-list-ordered" />
                </button>
                <button
                  type="button"
                  data-active={editor?.isActive("blockquote")}
                  onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                  title="Quote"
                >
                  <i className="ri-double-quotes-l" />
                </button>
                <button
                  type="button"
                  onClick={() => inlineImageInput.current?.click()}
                  disabled={uploading}
                  title="Insert image"
                >
                  <i className="ri-image-add-line" />
                </button>
                <button type="button" onClick={() => editor?.chain().focus().undo().run()} title="Undo">
                  <i className="ri-arrow-go-back-line" />
                </button>
                <button type="button" onClick={() => editor?.chain().focus().redo().run()} title="Redo">
                  <i className="ri-arrow-go-forward-line" />
                </button>
                <input
                  ref={inlineImageInput}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={handleInlineImage}
                  hidden
                />
              </div>
              <EditorContent editor={editor} className={styles.editorContent} />
            </div>
          </section>
        </div>

        <aside>
          <div className={styles.stickyActions}>
            <section className={styles.formSection}>
              <h2>Publishing</h2>
              <div className={styles.field}>
                <label htmlFor="blog-status">STATUS</label>
                <select
                  id="blog-status"
                  className={styles.select}
                  value={status}
                  onChange={(event) => setStatus(event.target.value as BlogInput["status"])}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="blog-category">CATEGORY</label>
                <input
                  id="blog-category"
                  className={styles.input}
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  required
                />
              </div>
              <div className={styles.actionStack}>
                <button className={styles.primaryButton} type="submit" disabled={saving || uploading}>
                  {saving ? "Saving..." : blog ? "Update Blog" : "Create Blog"}
                </button>
                <Link className={styles.secondaryButton} href="/admin/">
                  Cancel
                </Link>
              </div>
            </section>

            <section className={styles.formSection}>
              <h2>Cover Image</h2>
              <div className={styles.coverPreview}>
                {coverImage ? (
                  <Image src={coverImage} alt="Blog cover preview" fill sizes="280px" />
                ) : (
                  <div className={styles.coverEmpty}>No cover image</div>
                )}
              </div>
              <button
                className={styles.secondaryButton}
                type="button"
                onClick={() => coverImageInput.current?.click()}
                disabled={uploading}
              >
                <i className="ri-upload-2-line" />
                {uploading ? "Uploading..." : "Upload Cover"}
              </button>
              <input
                ref={coverImageInput}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleCoverUpload}
                hidden
              />
              <small className={styles.hint}>JPG, PNG, WebP, or GIF. Maximum 4 MB.</small>
            </section>
          </div>
        </aside>
      </div>
    </form>
  );
}
