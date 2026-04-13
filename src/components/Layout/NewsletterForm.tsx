"use client";

import React, { useState, ChangeEvent, FormEvent } from "react"; 

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(result.message);
        setEmail("");
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="single-footer-widget">
        <h3>SUBSCRIBE NEWSLETTER</h3>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-newsletter"
            placeholder="Your Email Here"
            value={email}
            onChange={handleChange}
            disabled={loading}
          />

          <button type="submit" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
            <i className="ri-arrow-right-line"></i>{loading ? "SUBSCRIBING..." : "SUBSCRIBE NEWSLETTER"}
          </button>

          {error && (
            <p style={{ color: "#e94560", fontSize: "12px", marginTop: "8px", marginBottom: "0" }}>
              {error}
            </p>
          )}

          {success && (
            <p style={{ color: "#2ecc71", fontSize: "12px", marginTop: "8px", marginBottom: "0" }}>
              {success}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default NewsletterForm;
