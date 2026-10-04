import React, { useState } from 'react';
import { Mail, Send, MapPin, Github, Instagram, ExternalLink, Check, Copy, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playHoverSound, playClickSound, playSuccessSound } from '../utils/audio';

export default function Contact3DSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const emailAddress = 'jadarkaribasu02@gmail.com';

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    playSuccessSound();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#34d399', '#fbbf24', '#f472b6', '#a7f3d0']
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 relative z-10 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with clean line */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-400 to-amber-300"></div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-emerald-300">
              LET'S COLLABORATE
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            GET IN <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300 glow-text-emerald">TOUCH</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Reach out for software development roles, projects, or algorithmic discussions.
          </p>
        </div>

        {/* Minimalist Line-Based Grid Layout (NO bulky heavy boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info with clean dividers */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Email with clean line */}
            <div className="space-y-2 pb-6 border-b border-white/10">
              <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">Email Address</span>
              <div className="flex items-center justify-between gap-4">
                <span className="font-heading font-bold text-lg sm:text-xl text-white select-all">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={playHoverSound}
                  className="px-4 py-1.5 rounded-full border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/20 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location with clean line */}
            <div className="space-y-1 pb-6 border-b border-white/10">
              <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">Based in</span>
              <div className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Davanagere, Karnataka, India</span>
              </div>
            </div>

            {/* Social Links as Clean Line Rows */}
            <div className="space-y-3">
              <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">Profiles & Handles</span>
              
              <div className="space-y-2">
                <a
                  href="https://github.com/jadarkaribasu02-beep"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="flex items-center justify-between p-3 rounded-2xl border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-white group-hover:text-emerald-400" />
                    <span className="text-sm font-semibold text-white">GitHub</span>
                  </div>
                  <span className="text-xs font-mono-code text-slate-400 group-hover:text-emerald-300">
                    @jadarkaribasu02-beep ↗
                  </span>
                </a>

                <a
                  href="https://codolio.com/profile/karan_02"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="flex items-center justify-between p-3 rounded-2xl border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-bold">⚡</span>
                    <span className="text-sm font-semibold text-white">Codolio</span>
                  </div>
                  <span className="text-xs font-mono-code text-slate-400 group-hover:text-amber-300">
                    @karan_02 ↗
                  </span>
                </a>

                <a
                  href="https://instagram.com/karibasu02"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="flex items-center justify-between p-3 rounded-2xl border border-white/10 hover:border-rose-400/50 hover:bg-white/[0.03] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-rose-400 group-hover:text-rose-300" />
                    <span className="text-sm font-semibold text-white">Instagram</span>
                  </div>
                  <span className="text-xs font-mono-code text-slate-400 group-hover:text-rose-300">
                    @karibasu02 ↗
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Minimalist Line Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out! I will review your message and reply soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/15 focus:border-emerald-400 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-code text-slate-400">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/15 focus:border-emerald-400 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code text-slate-400">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/15 focus:border-emerald-400 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-code text-slate-400">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/15 focus:border-emerald-400 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  onMouseEnter={playHoverSound}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 font-heading font-bold text-xs text-slate-950 shadow-lg shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message 🌿</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
