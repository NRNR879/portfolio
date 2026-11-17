import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Clock, 
  MessageSquare, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteData } from '../data/siteData';
import DevPlaceholder from './DevPlaceholder';

export const Contact = () => {
  const { contact, personal } = siteData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Copy email to clipboard with toast
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Formspree-ready submission
      // If user hasn't configured Formspree endpoint yet, gracefully simulate success
      const isConfigured = !contact.formspreeEndpoint.includes('xyzkloqp');
      
      if (isConfigured) {
        const response = await fetch(contact.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          triggerSuccess();
        } else {
          setSubmitStatus('error');
        }
      } else {
        // Simulated responsive preview for development
        await new Promise((resolve) => setTimeout(resolve, 800));
        triggerSuccess();
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerSuccess = () => {
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Trigger confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#6366F1', '#F5B544', '#34D399'],
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <section 
      id="contact" 
      aria-label="Contact Rahul Nandan Reddy" 
      className="py-20 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-accentAmber/30 bg-accentAmber/10 text-accentAmber text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white dark:text-darkText light:text-lightText tracking-tight">
            {contact.heading}
          </h2>
          <div className="mt-2 flex items-center justify-center space-x-2 text-accentGreen font-mono text-sm">
            <Clock className="w-4 h-4" />
            <span>{contact.subheading}</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Connections */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card with Copy Button */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 shadow-glass">
              <span className="text-xs font-mono uppercase tracking-wider text-darkMuted block mb-2">
                Primary Contact Email
              </span>
              
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-accentAmber shrink-0" />
                  <span className="text-sm font-mono text-white truncate select-all">
                    {personal.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-accentIndigo text-white text-xs font-medium hover:bg-indigo-600 transition-all active:scale-95 shrink-0 shadow-sm"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accentGreen" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Toast for copy */}
              {copied && (
                <div className="mt-2 text-center text-xs font-mono text-accentGreen animate-fadeIn">
                  Email copied to clipboard!
                </div>
              )}

              <p className="text-xs text-darkMuted mt-4 leading-relaxed">
                Open to technical internship roles, open-source collaborations, and engineering discussions.
              </p>
            </div>

            {/* Social & Coding Network Cards */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 shadow-glass space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-darkMuted block mb-1">
                Professional & Coding Profiles
              </span>

              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-white">LinkedIn</div>
                    <div className="text-xs text-darkMuted">Connect professionally</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-darkMuted group-hover:text-white">View &rarr;</span>
              </a>

              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-sm font-semibold text-white">GitHub</div>
                    <div className="text-xs text-darkMuted">Browse repositories & code</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-darkMuted group-hover:text-white">View &rarr;</span>
              </a>

              <a
                href={personal.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FFA116]/40 hover:bg-[#FFA116]/10 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-5 rounded flex items-center justify-center bg-[#FFA116]/20 text-[#FFA116] font-mono text-xs font-bold">LC</span>
                  <div>
                    <div className="text-sm font-semibold text-white">LeetCode</div>
                    <div className="text-xs text-darkMuted">Daily algorithmic practice</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-darkMuted group-hover:text-white">View &rarr;</span>
              </a>
            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-xl bg-accentGreen/10 border border-accentGreen/30 text-xs text-slate-200 flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-accentGreen shrink-0 mt-0.5" />
              <span>{contact.notice}</span>
            </div>

          </div>

          {/* Right Column: Front-End Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass">
              <h3 className="font-heading font-bold text-xl text-white mb-1 flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-accentIndigo" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-darkMuted mb-6">
                Have a question or opportunity? Drop a note below and I'll get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-darkMuted mb-1.5 uppercase">
                      Your Name <span className="text-accentAmber">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-darkMuted/50 focus:outline-none focus:ring-1 transition-all ${
                        errors.name 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-white/10 focus:border-accentIndigo focus:ring-accentIndigo'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-darkMuted mb-1.5 uppercase">
                      Email Address <span className="text-accentAmber">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-darkMuted/50 focus:outline-none focus:ring-1 transition-all ${
                        errors.email 
                          ? 'border-red-400 focus:ring-red-400' 
                          : 'border-white/10 focus:border-accentIndigo focus:ring-accentIndigo'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-darkMuted mb-1.5 uppercase">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Internship Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-darkMuted/50 focus:outline-none focus:border-accentIndigo focus:ring-1 focus:ring-accentIndigo transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-darkMuted mb-1.5 uppercase">
                    Message <span className="text-accentAmber">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, project requirements, or questions..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-darkMuted/50 focus:outline-none focus:ring-1 transition-all resize-y ${
                      errors.message 
                        ? 'border-red-400 focus:ring-red-400' 
                        : 'border-white/10 focus:border-accentIndigo focus:ring-accentIndigo'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                {/* Form feedback status */}
                {submitStatus === 'success' && (
                  <div className="p-3.5 rounded-xl bg-accentGreen/15 border border-accentGreen/30 text-xs font-mono text-accentGreen flex items-center space-x-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Thank you! Your message was received. I will reply within 24 hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-xs font-mono text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Failed to send message. Please send an email directly to {personal.email}.</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-accentAmber text-gray-950 font-heading font-semibold text-sm hover:bg-amber-400 hover:shadow-glowAmber transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
