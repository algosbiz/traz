"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import styles from "./Admin.module.css";

export default function AdminLoginForm() {
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ account, password }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to log in.");
      router.replace("/admin/");
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to log in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit}>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.field}>
        <label htmlFor="admin-account">ACCOUNT</label>
        <input
          id="admin-account"
          className={styles.input}
          type="text"
          value={account}
          onChange={(event) => setAccount(event.target.value)}
          autoComplete="username"
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="admin-password">PASSWORD</label>
        <input
          id="admin-password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />
      </div>
      <button className={styles.primaryButton} type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
}
