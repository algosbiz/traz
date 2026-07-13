import { redirect } from "next/navigation";

import AdminHeader from "@/components/Admin/AdminHeader";
import BlogEditorForm from "@/components/Admin/BlogEditorForm";
import styles from "@/components/Admin/Admin.module.css";
import { getAdminSession } from "@/lib/adminAuth";
import { isDatabaseConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

export default function NewBlogPage() {
  if (!getAdminSession()) redirect("/admin/login/");
  if (!isDatabaseConfigured()) redirect("/admin/");

  return (
    <div className={styles.adminPage}>
      <AdminHeader />
      <main className={styles.main}>
        <div className={styles.pageHeading}>
          <div>
            <h1>Create Blog</h1>
            <p>Write and publish a new masonry article.</p>
          </div>
        </div>
        <BlogEditorForm />
      </main>
    </div>
  );
}
