import React, { useState } from 'react';
import { Sparkles, ArrowRight, Code, Award, MapPin, Heart, Terminal, Fish } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playHoverSound, playClickSound, playSuccessSound } from '../utils/audio';

export default function HeroOverlay({ onOpenResume, onFeedCat }) {
  const [petCount, setPetCount] = useState(0);

  const handleFeedCode = () => {
    playClickSound();
    playSuccessSound();
    setPetCount(prev => prev + 1);
    if (onFeedCat) onFeedCat();

    confetti({
      particleCount: 85,
      spread: 75,
      origin: { x: 0.8, y: 0.5 },
      colors: ['#34d399', '#fbbf24', '#f472b6', '#a7f3d0', '#60a5fa']
    });
  };

  return (
    <div className="relative z-10 min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 lg:px-14 pointer-events-none">
      
      {/* Top Header Controls: Minimal feed button on top right */}
      <div className="flex items-center justify-end w-full pointer-events-auto">
        <button
          onClick={handleFeedCode}
          onMouseEnter={playHoverSound}
          className="px-5 py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 font-heading text-xs font-bold backdrop-blur-md shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <Fish className="w-4 h-4 text-emerald-400" />
          <span>Feed Fish! 🐟 ({petCount})</span>
        </button>
      </div>

      {/* Main Hero Layout: ANCHORED FULL LEFT (NO max-w centering) */}
      <div className="my-auto py-6 flex flex-col items-start justify-center pointer-events-auto max-w-xl space-y-6">
        
        {/* Top Tagline with delicate glowing line */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-400 to-amber-300"></div>
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-emerald-300 drop-shadow">
            BE CSE @ JIT Davanagere, KA
          </span>
        </div>

        {/* Title Section: FULL LEFT */}
        <div className="space-y-2">
          <div className="text-xs font-mono-code font-bold uppercase tracking-widest text-amber-300 drop-shadow">
            PORTFOLIO & CREATIVE DEVELOPER
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight leading-none drop-shadow-2xl">
            KARIBASU <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300 glow-text-emerald">
              JADAR
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-lg font-medium drop-shadow-md">
          Full Stack Developer & Java DSA Practitioner. Crafting interactive 3D web experiences, algorithmic problem-solving architectures, and responsive digital apps.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href="#projects"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 font-heading font-bold text-xs text-slate-950 shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => { playClickSound(); onOpenResume(); }}
            onMouseEnter={playHoverSound}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md font-heading font-semibold text-xs text-slate-100 border border-white/20 hover:border-emerald-400/50 transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Bio & Resume</span>
          </button>
        </div>

        {/* ONLY CLEAN ACCENT LINES FOR STATS (FULL LEFT) */}
        <div className="w-full pt-6 border-t border-emerald-500/30 flex flex-wrap items-center gap-6 sm:gap-8">
          
          <div className="flex items-center gap-3">
            <span className="font-heading font-black text-2xl text-white drop-shadow">100%</span>
            <span className="text-[11px] font-mono-code text-emerald-300 leading-tight">
              Clean Natural<br />Code
            </span>
          </div>

          <div className="h-8 w-px bg-emerald-500/30 hidden sm:block"></div>

          <div className="flex items-center gap-3">
            <span className="font-heading font-black text-2xl text-amber-300 drop-shadow">100+</span>
            <span className="text-[11px] font-mono-code text-slate-200 leading-tight">
              Java DSA<br />Problems
            </span>
          </div>

          <div className="h-8 w-px bg-emerald-500/30 hidden sm:block"></div>

          <div className="flex items-center gap-3">
            <div>
              <div className="text-xs font-bold text-white font-heading drop-shadow">Codolio</div>
              <a
                href="https://codolio.com/profile/karan_02"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono-code text-emerald-300 hover:text-amber-300 transition-colors flex items-center gap-1 font-semibold"
              >
                <span>@karan_02</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator anchored full left */}
      <div className="flex justify-start pointer-events-auto">
        <a 
          href="#about"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="flex items-center gap-3 text-xs font-mono-code text-slate-300 hover:text-emerald-300 transition-colors group"
        >
          <div className="w-4 h-7 rounded-full border border-emerald-400/60 p-0.5 flex justify-center">
            <div className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
          </div>
          <span className="tracking-wider uppercase text-[11px]">SCROLL TO EXPLORE WORK</span>
        </a>
      </div>

    </div>
  );
}
