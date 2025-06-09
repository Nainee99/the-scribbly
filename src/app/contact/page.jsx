"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const faqs = [
    {
      question: "What topics does theScribbly cover?",
      answer:
        "theScribbly covers a wide range of topics including technology, culture, arts, science, personal development, and current events. Our writers bring diverse perspectives to create thought-provoking content.",
    },
    {
      question: "How can I contribute to theScribbly?",
      answer:
        "We welcome submissions from writers of all backgrounds. Please use the contact form on this page with the subject 'Writer Application' and include samples of your previous work.",
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We aim to respond to all inquiries within 48 hours during business days. For urgent matters, please mark your subject as 'Urgent'.",
    },
    {
      question: "Do you offer advertising opportunities?",
      answer:
        "Yes, we offer various advertising and partnership opportunities. Please contact our business team through this form with details about your company and goals.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroSubtitle}>
              Have questions, feedback, or just want to say hello? We&apos;d love to
              hear from you. Our team is always ready to connect with our
              readers and community.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="https://picsum.photos/600/400?random=10"
              alt="Contact theScribbly"
              width={600}
              height={400}
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.formContainer}>
            <h2>Send Us a Message</h2>
            <p className={styles.formDescription}>
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            {formStatus === "success" ? (
              <div className={styles.successMessage}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. We&apos;ll respond to your inquiry
                  shortly.
                </p>
                <button
                  className={styles.resetButton}
                  onClick={() => setFormStatus("idle")}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Writer Application">
                      Writer Application
                    </option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <span className={styles.submitting}>Sending...</span>
                  ) : (
                    <>
                      Send Message{" "}
                      <Send size={16} className={styles.sendIcon} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h2>Contact Information</h2>
              <p className={styles.infoDescription}>
                Here are the different ways you can reach us. We look forward to
                connecting with you!
              </p>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Email Us</h3>
                    <p>hello@thescribbly.com</p>
                    <p>support@thescribbly.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <MapPin />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Our Location</h3>
                    <p>123 Content Avenue</p>
                    <p>Creativity District, CA 94103</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Phone />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Clock />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9AM - 5PM</p>
                    <p>Weekend: Closed</p>
                  </div>
                </div>
              </div>

              <div className={styles.mapContainer}>
                <Image
                  src="https://picsum.photos/600/300?random=11"
                  alt="Office Location Map"
                  width={600}
                  height={300}
                  className={styles.mapImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about theScribbly</p>
        </div>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <div className={styles.faqQuestion}>
                <MessageSquare className={styles.faqIcon} />
                <h3>{faq.question}</h3>
              </div>
              <p className={styles.faqAnswer}>{faq.answer}</p>
              <div className={styles.faqDivider}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter to receive the latest updates, articles,
            and news from theScribbly.
          </p>

          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
