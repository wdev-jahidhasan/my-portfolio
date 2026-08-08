'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedin, FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-5 md:py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Toast Notification Container */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400">
              Touch
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-6">

              <div className="border-b border-slate-800/80 pb-4 mb-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Fill out the form below to send an email straight to my inbox. I&apos;ll get back to you as soon as possible!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Hiring"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-500/50 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl transition duration-200 shadow-lg shadow-teal-500/10 cursor-pointer disabled:cursor-not-allowed"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                {loading ? (
                  <FaSpinner className="animate-spin text-xs" />
                ) : (
                  <FaPaperPlane className="text-xs" />
                )}
              </button>
            </form>
          </div>

          {/* Left Column: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Mail Card */}
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Mail me at</p>
                  <a href="mailto:wdev.jahidhasan@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-teal-400 transition-colors">
                    wdev.jahidhasan@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Call me at</p>
                  <a href="tel:+8801601511360" className="text-sm font-semibold text-slate-200 hover:text-teal-400 transition-colors">
                    +880 1601-511360
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-slate-200">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Connect on Socials
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/wdev-jahidhasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-teal-400 transition duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/wdev-jahidhasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 hover:text-teal-400 transition duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}