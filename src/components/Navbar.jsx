import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, Menu, X, FileText, Code2, Github, RefreshCw } from 'lucide-react';
import { playHoverSound, playClickSound, setSoundEnabled, getSoundEnabled } from '../utils/audio';

export default function Navbar({ onOpenResume, onTriggerReload }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    playClickSound();
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Codolio', href: '#codolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className={`max-w-7xl mx-auto transition-all duration-300 ${
        isScrolled ? 'glass-pill shadow-2xl py-2.5 px-6 rounded-full border-emerald-500/30 backdrop-blur-xl' : 'bg-transparent py-2 px-2'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a 
            href="#" 
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-500 to-amber-400 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0c1510] rounded-full flex items-center justify-center font-heading font-black text-emerald-400 text-sm tracking-tighter">
                KJ
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-amber-400 rounded-full border-2 border-[#0c1510] animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wide text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                Karibasu Jadar
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              </span>
              <span className="text-[10px] font-mono-code text-emerald-400/90 uppercase tracking-widest">
                CSE 3D Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-5 py-2 rounded-full border-white/10 bg-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-200 hover:text-white hover:bg-emerald-500/20 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Controls (Intro Replay, Sound, Resume, Hire Button) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Cute Reload Intro Button */}
            <button
              onClick={() => { playClickSound(); if (onTriggerReload) onTriggerReload(); }}
              onMouseEnter={playHoverSound}
              title="Play 2.8s Cute Cat Intro Animation"
              className="glass-pill px-3 py-1.5 text-xs font-mono-code text-emerald-300 hover:text-white hover:bg-emerald-500/20 rounded-full flex items-center gap-1.5 transition-all duration-200"
            >
              <span>🐾 Cute Intro</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={playHoverSound}
              title={soundOn ? 'Sound On' : 'Sound Off'}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => { playClickSound(); onOpenResume(); }}
              onMouseEnter={playHoverSound}
              className="glass-pill px-4 py-2 text-xs font-semibold text-emerald-300 hover:text-white hover:bg-emerald-500/20 border-emerald-500/30 rounded-full flex items-center gap-1.5 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Bio & Resume</span>
            </button>

            {/* Hire Me Pill */}
            <a
              href="#contact"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="relative group overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 font-heading text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-1.5"
            >
              <span className="relative z-10">Get In Touch</span>
              <Sparkles className="w-3.5 h-3.5 relative z-10" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => { playClickSound(); if (onTriggerReload) onTriggerReload(); }}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-xs text-emerald-400"
              title="Play 2.8s Cute Intro"
            >
              🐾
            </button>

            <button
              onClick={toggleSound}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            <button
              onClick={() => { playClickSound(); setMobileMenuOpen(!mobileMenuOpen); }}
              className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-white border-emerald-500/30"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 glass-card p-6 rounded-3xl border-emerald-500/30 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => { playClickSound(); setMobileMenuOpen(false); }}
                className="px-4 py-3 rounded-2xl text-sm font-semibold text-slate-200 hover:bg-emerald-500/20 hover:text-white transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-emerald-400">→</span>
              </a>
            ))}
          </div>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => { playClickSound(); setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full py-3 rounded-2xl glass-pill text-xs font-semibold text-emerald-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View Bio & Resume
            </button>

            <button
              onClick={() => { playClickSound(); setMobileMenuOpen(false); if (onTriggerReload) onTriggerReload(); }}
              className="w-full py-2.5 rounded-2xl glass-pill text-xs font-semibold text-emerald-300 flex items-center justify-center gap-2"
            >
              <span>🐾 Play 2.8s Cute Intro</span>
            </button>

            <a
              href="#contact"
              onClick={() => { playClickSound(); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 font-heading text-xs font-bold text-slate-950 text-center shadow-lg shadow-emerald-500/30"
            >
              Get In Touch 🌿
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
