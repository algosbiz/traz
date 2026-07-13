"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./Admin.module.css";

export default function DeleteBlogButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  async function deleteBlog() {
    if (!window.confirm(`Delete “${title}”? This action cannot be undone.`)) return;
    setDeleting(true);
    const response = await fetch(`/api/admin/blogs/${id}/`, { method: "DELETE" });
    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      window.alert(result.error || "Unable to delete blog.");
      setDeleting(false);
      return;
    }
    router.refresh();
  }

  return (
    <button
      className={styles.iconButton}
      type="button"
      onClick={deleteBlog}
      disabled={deleting}
      title="Delete blog"
      aria-label={`Delete ${title}`}
    >
      <i className={deleting ? "ri-loader-4-line" : "ri-delete-bin-line"} />
    </button>
  );
}
