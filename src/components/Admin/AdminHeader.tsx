"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./Admin.module.css";

export default function AdminHeader() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function logout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout/", { method: "POST" });
    router.replace("/admin/login/");
    router.refresh();
  }

  return (
    <header className={styles.header}>
      <Link href="/admin/" className={styles.brand}>
        DMG <span>CMS</span>
      </Link>
      <div className={styles.headerActions}>
        <Link href="/blogs/" target="_blank" className={styles.headerLink}>
          View Website
        </Link>
        <button className={styles.logoutButton} onClick={logout} disabled={loggingOut}>
          {loggingOut ? "Logging out..." : "Log Out"}
        </button>
      </div>
    </header>
  );
}
