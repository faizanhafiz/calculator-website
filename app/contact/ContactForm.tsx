"use client";

import { useState } from 'react';
import Link from 'next/link';

// ─── Formspree Setup ──────────────────────────────────────────────────────────
// 1. Sign up FREE at https://formspree.io using faizanhafiz928@gmail.com
// 2. Create a new form → copy the form ID from your endpoint URL
//    e.g. if endpoint is https://formspree.io/f/xrgvkpqb → ID is "xrgvkpqb"
// 3. Replace YOUR_FORM_ID below with your actual ID
const FORMSPREE_FORM_ID = 'xojkvopl'; // e.g. 'xrgvkpqb'
// ─────────────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "How do I report a bug or incorrect result?",
    a: "Use the contact form above and select 'Bug Report' as your subject. Please include the calculator name and the values you entered so we can reproduce the issue quickly.",
  },
  {
    q: "Can I request a new calculator?",
    a: "Absolutely! We love suggestions. Select 'Calculator Request' and describe the tool you need. We review every request and prioritize based on demand.",
  },
  {
    q: "Is Zenicalculator free to use?",
    a: "Yes — 100% free, forever. No account, no subscription, and no hidden fees. All 80+ calculators are available to everyone at no cost.",
  },
  {
    q: "How long does it take to get a response?",
    a: "We aim to respond to all messages within 1–2 business days. Complex requests or bug investigations may take a little longer.",
  },
  {
    q: "Can I embed a Zenicalculator tool on my website?",
    a: "Please contact us through the form with details about your use case. We handle embedding requests on a case-by-case basis.",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen bg-white pt-24 md:px-8 lg:px-16 max-w-7xl mx-auto font-inter">

      {/* Hero */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-5">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Questions, feedback, bug reports, or calculator requests — we are here and happy to help.
        </p>
      </section>

      <div className="w-full px-4">
        <div className="w-full space-y-14">

          {/* Contact Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">Email Us</h3>
              <a href="mailto:faizanhafiz928@gmail.com" className="text-blue-700 font-medium hover:underline text-sm break-all">
                faizanhafiz928@gmail.com
              </a>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">Response Time</h3>
              <p className="text-gray-600 text-sm">Within 1–2 business days</p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">Available</h3>
              <p className="text-gray-600 text-sm">Mon – Fri, 9 AM – 6 PM IST</p>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Thank you for reaching out. We will get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 space-y-6">

                {/* Error banner */}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl text-sm font-medium">
                    Something went wrong. Please try again or email us at{' '}
                    <a href="mailto:faizanhafiz928@gmail.com" className="underline">faizanhafiz928@gmail.com</a>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      placeholder="Jane Smith" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="jane@example.com" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option value="" disabled>Select a subject...</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="Calculator Request">Calculator Request</option>
                    <option value="Partnership / Advertising">Partnership / Advertising</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={6} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold text-lg px-10 py-4 rounded-xl transition-colors duration-200 shadow-md flex items-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message →'}
                </button>

                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our{' '}
                  <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>.
                  We never share your information with third parties.
                </p>

              </form>
            )}
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 border border-blue-100 rounded-xl shadow-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-blue-900">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-blue-600 flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 pt-1 text-gray-700 text-base leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Back to home */}
          <section className="text-center pb-12">
            <p className="text-gray-600 text-lg mb-4">Looking for a specific calculator?</p>
            <Link
              href="/"
              className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              ← Back to All Calculators
            </Link>
          </section>

        </div>
      </div>
    </main>
  );
}
