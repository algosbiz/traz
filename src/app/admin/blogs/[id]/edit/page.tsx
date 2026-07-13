import { notFound, redirect } from "next/navigation";

import AdminHeader from "@/components/Admin/AdminHeader";
import BlogEditorForm from "@/components/Admin/BlogEditorForm";
import styles from "@/components/Admin/Admin.module.css";
import { getAdminSession } from "@/lib/adminAuth";
import { getBlogById } from "@/lib/cmsBlogs";
import { isDatabaseConfigured } from "@/lib/db";

interface EditBlogPageProps {
  params: { id: string };
}

export const dynamic = "force-dynamic";

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  if (!getAdminSession()) redirect("/admin/login/");
  if (!isDatabaseConfigured()) redirect("/admin/");

  const blog = await getBlogById(params.id);
  if (!blog) notFound();

  return (
    <div className={styles.adminPage}>
      <AdminHeader />
      <main className={styles.main}>
        <div className={styles.pageHeading}>
          <div>
            <h1>Edit Blog</h1>
            <p>Update content, images, SEO details, and publication status.</p>
          </div>
        </div>
        <BlogEditorForm blog={blog} />
      </main>
    </div>
  );
}
