import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Github, Instagram, ExternalLink, Code2 } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';

export default function Footer({ onTriggerReload }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative z-10 py-12 px-4 sm:px-8 border-t border-emerald-500/20 bg-[#08100c]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand */}
        <div className="space-y-2">
          <a href="#" className="font-heading font-black text-xl text-white flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400 flex items-center justify-center text-slate-950 text-xs font-bold shadow-md shadow-emerald-400/20">
              KJ
            </span>
            <span>KARIBASU JADAR</span>
          </a>
          <p className="text-xs text-slate-400 font-mono-code">
            Computer Science & Engineering Student @ JIT Davanagere
          </p>
        </div>

        {/* Live Clock & Status */}
        <div className="flex items-center gap-3">
          <div className="glass-pill px-5 py-2 rounded-full flex items-center gap-3 text-xs font-mono-code text-slate-300 border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Davanagere, KA: {timeStr || '10:30 PM'} IST</span>
          </div>

          {/* Cute Reload Intro Button */}
          <button
            onClick={() => { playClickSound(); onTriggerReload(); }}
            onMouseEnter={playHoverSound}
            className="glass-pill-forest px-4 py-2 rounded-full text-xs font-bold text-emerald-300 hover:text-white transition-all flex items-center gap-1.5 shadow-md border-emerald-400/30"
            title="Replay 2.8s Cute Intro"
          >
            <span>🐾 Replay Intro</span>
          </button>
        </div>

        {/* Social Icons & Copyright */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-end gap-3">
            <a
              href="https://github.com/jadarkaribasu02-beep"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://codolio.com/profile/karan_02"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-amber-300 hover:text-amber-100 hover:border-amber-400/50 transition-all"
              title="Codolio Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com/karibasu02"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-emerald-300 hover:text-amber-300 hover:border-emerald-500/50 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[11px] text-slate-500 font-mono-code">
            © {new Date().getFullYear()} Karibasu Jadar. Enchanted 3D Portfolio.
          </div>
        </div>

      </div>
    </footer>
  );
}
