"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import ContactInfo from "../ContactUs/ContactInfo";
import Image from "next/image";
import Turnstile, { TurnstileHandle } from "@/components/Common/Turnstile";

import contactImg from "../../../public/images/contact/contact2.png";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  location: string;
  message: string;
}

// Project categories mirror DMG's masonry services (see src/lib/servicesData.ts)
// plus an "Other" catch-all.
const CATEGORY_OPTIONS = [
  "Masonry Repair",
  "Stone Veneer",
  "Chimney Repair",
  "Fireplace Installation",
  "Retaining Wall Construction",
  "Foundation Repair",
  "Hardscaping",
  "Outdoor Kitchen",
  "Patio Stone Installation",
  "Custom Fire Pit",
  "Custom Pizza Oven",
  "Other",
];

// Calgary + surrounding service areas. Adjust to your actual coverage.
const LOCATION_OPTIONS = [
  "Calgary",
  "Airdrie",
  "Cochrane",
  "Chestermere",
  "Okotoks",
  "Other",
];

const DEFAULT_CATEGORY = CATEGORY_OPTIONS[0];
const DEFAULT_LOCATION = LOCATION_OPTIONS[0];

const RequestAQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    category: DEFAULT_CATEGORY,
    location: DEFAULT_LOCATION,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const turnstileRef = useRef<TurnstileHandle>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!token) {
      setError("Please complete the bot verification below.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken: token }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: DEFAULT_CATEGORY,
          location: DEFAULT_LOCATION,
          message: "",
        });
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
      // Turnstile tokens are single-use — reset for the next submission.
      turnstileRef.current?.reset();
      setToken("");
    }
  };

  return (
    <>
      <div className="contact-area bg-white-wrap ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 pe-5">
              <div className="contact-image">
                <Image src={contactImg} alt="contact" width={700} height={1012} />
              </div>
            </div>

            <div className="col-lg-7 col-md-12 ps-5 position-relative">
              <div className="contact-form-wrap">
                <div className="title">
                  <span>QUOTE</span>
                  <h2>Request A Quote Now For Your Next Project</h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-7 col-md-6">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>
                          YOUR NAME<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Your name"
                          disabled={loading}
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          EMAIL ADDRESS<span>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Email address"
                          disabled={loading}
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          PHONE NO<span>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="+0 321 546 2345"
                          disabled={loading}
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          CHOOSE PROJECT CATEGORY<span>*</span>
                        </label>

                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="form-select form-control"
                          disabled={loading}
                        >
                          {CATEGORY_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label>
                          CHOOSE PROJECT LOCATION<span>*</span>
                        </label>

                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="form-select form-control"
                          disabled={loading}
                        >
                          {LOCATION_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label>
                          YOUR MESSAGE HERE<span>*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Write your message here..."
                          disabled={loading}
                        ></textarea>
                      </div>

                      {error && (
                        <div className="alert alert-danger" role="alert" style={{ fontSize: "14px", marginBottom: "16px", borderRadius: "8px" }}>
                          {error}
                        </div>
                      )}

                      {success && (
                        <div className="alert alert-success" role="alert" style={{ fontSize: "14px", marginBottom: "16px", borderRadius: "8px" }}>
                          {success}
                        </div>
                      )}

                      <div className="form-group">
                        <Turnstile
                          ref={turnstileRef}
                          onVerify={setToken}
                          onExpire={() => setToken("")}
                          onError={() => setToken("")}
                        />
                      </div>

                      <button
                        type="submit"
                        className="default-btn"
                        disabled={loading}
                        style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                      >
                        {loading ? "Sending..." : "Send Message Now"}
                      </button>
                    </form>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    {/* ContactInfo */}
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestAQuoteForm;
