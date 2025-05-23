"use client";

import PageLayout from "@/components/PageLayout";
import EmailJSSetup from "@/components/EmailJSSetup";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [showSetup, setShowSetup] = useState(false);

  // Set this to false in production
  useEffect(() => {
    // Only show setup instructions in development
    const isProduction = process.env.NODE_ENV === "production";
    setShowSetup(!isProduction);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      // User's actual EmailJS credentials
      const serviceId = "service_4wz3chh"; // Replace with your EmailJS Service ID
      const templateId = "template_5d9k5ia"; // Replace with your EmailJS Template ID
      const publicKey = "_DYTUDB_14phqE19z"; // Replace with your new public key

      // EmailJS expects template parameters that match your email template
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        { publicKey }
      );

      if (response.status === 200) {
        setSuccess(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("There was an error sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="bg-[var(--background)] py-12 min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-3xl px-4">
          <h1 className="poppins-semibold text-center text-5xl mb-6">Let's Talk</h1>

          {/* EmailJS Setup Instructions - only shown in development */}
          {showSetup && <EmailJSSetup />}

          <div className="card p-8">
            {success ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold text-green-600 mb-4">Message Sent!</h3>
                <p className="mb-6">Thank you for contacting me. I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-md border border-[var(--border)] bg-[#f9f9f9]"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-md border border-[var(--border)] bg-[#f9f9f9]"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md border border-[var(--border)] bg-[#f9f9f9]"
                    disabled={loading}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 rounded-md border border-[var(--border)] bg-[#f9f9f9]"
                    disabled={loading}
                  ></textarea>
                </div>

                {error && (
                  <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-md">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center min-w-[120px]"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : null}
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
