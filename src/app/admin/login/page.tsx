import { redirect } from "next/navigation";

import AdminLoginForm from "@/components/Admin/AdminLoginForm";
import styles from "@/components/Admin/Admin.module.css";
import { getAdminSession } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  if (getAdminSession()) redirect("/admin/");

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1>DMG CMS</h1>
        <p>Sign in to manage your blog content.</p>
        <AdminLoginForm />
      </div>
    </main>
  );
}
