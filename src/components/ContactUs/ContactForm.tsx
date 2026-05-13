"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import ContactInfo from "./ContactInfo";
import Image from "next/image";

import contactImg from "../../../public/images/contact/contact.png";
import shape from "../../../public/images/contact/shape.png";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear messages on input
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Client-side validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(result.message);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-5 col-md-12 pe-5"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="contact-image">
                <Image src={contactImg} alt="contact" width={700} height={1012} />
              </div>
            </div>

            <div className="col-lg-7 col-md-12 ps-5">
              <div
                className="contact-form-wrap"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="title">
                  <h2>
                    <span>Start Your</span> Masonry Project
                  </h2>
                  <p>
                    Let&apos;s discuss your masonry project and how we can help create a timeless results for your property. Our team provides masonry solutions built for lasting quality.
                  </p>
                </div>

                <div className="row align-items-center">
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
                          placeholder="Jonathon Ronan"
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
                          placeholder="jonathonronana63@gmail.com"
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

        <div className="contact-shape1">
          <Image src={shape} alt="image" width={116} height={82} />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
