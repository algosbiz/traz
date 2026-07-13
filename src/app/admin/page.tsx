import Link from "next/link";
import { redirect } from "next/navigation";

import AdminHeader from "@/components/Admin/AdminHeader";
import DeleteBlogButton from "@/components/Admin/DeleteBlogButton";
import styles from "@/components/Admin/Admin.module.css";
import { getAdminSession } from "@/lib/adminAuth";
import { getAllBlogs } from "@/lib/cmsBlogs";
import { isDatabaseConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  if (!getAdminSession()) redirect("/admin/login/");

  const configured = isDatabaseConfigured();
  const blogs = configured ? await getAllBlogs() : [];

  return (
    <div className={styles.adminPage}>
      <AdminHeader />
      <main className={styles.main}>
        <div className={styles.pageHeading}>
          <div>
            <h1>Blog Management</h1>
            <p>Create, edit, publish, and remove website articles.</p>
          </div>
          {configured && (
            <Link href="/admin/blogs/new/" className={styles.primaryButton}>
              <i className="ri-add-line" /> New Blog
            </Link>
          )}
        </div>

        <div className={styles.panel}>
          {!configured ? (
            <div className={styles.setupState}>
              <h2>Neon is not configured</h2>
              <p>Add DATABASE_URL to .env.local, then run npm run db:setup.</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className={styles.emptyState}>
              <h2>No blogs yet</h2>
              <p>Create your first article to get started.</p>
              <Link href="/admin/blogs/new/" className={styles.primaryButton}>
                Create Blog
              </Link>
            </div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Blog</th>
                  <th>Status</th>
                  <th>Updated</th>
                  <th aria-label="Actions" />
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>
                      <span className={styles.blogTitle}>{blog.title}</span>
                      <span className={styles.blogMeta}>/{blog.slug}/ · {blog.category}</span>
                    </td>
                    <td>
                      <span className={`${styles.status} ${styles[blog.status]}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td>{new Intl.DateTimeFormat("en-CA", { dateStyle: "medium" }).format(new Date(blog.updatedAt))}</td>
                    <td>
                      <div className={styles.rowActions}>
                        {blog.status === "published" && (
                          <Link
                            className={styles.iconButton}
                            href={`/blogs/${blog.slug}/`}
                            target="_blank"
                            title="View blog"
                            aria-label={`View ${blog.title}`}
                          >
                            <i className="ri-external-link-line" />
                          </Link>
                        )}
                        <Link
                          className={styles.iconButton}
                          href={`/admin/blogs/${blog.id}/edit/`}
                          title="Edit blog"
                          aria-label={`Edit ${blog.title}`}
                        >
                          <i className="ri-edit-line" />
                        </Link>
                        <DeleteBlogButton id={blog.id} title={blog.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
