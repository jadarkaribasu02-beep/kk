import React from 'react';
import { Award, Flame, Code2, ExternalLink, ShieldCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';

export default function CodolioSection() {
  return (
    <section id="codolio" className="py-24 px-4 sm:px-8 relative z-10 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with clean lines and sparkle */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-400 to-amber-300 animate-pulse"></div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <span>COMPETITIVE CODING STATS</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            CODOLIO & <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300 glow-text-emerald">PROBLEM SOLVING</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Verified algorithmic activity on Codolio under handle <strong className="text-emerald-300 font-mono-code">@karan_02</strong>.
          </p>
        </div>

        {/* Minimalist Grid with Animated Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consistently solving Data Structures & Algorithms problems daily across platforms, specializing in Java problem solving, optimized space-time complexities, and structured algorithms.
            </p>

            {/* Line-Divided Metrics with Hover Bounce */}
            <div className="w-full py-6 border-y border-white/10 flex flex-wrap items-center gap-8 sm:gap-12">
              <div className="space-y-1 hover:scale-105 transition-transform cursor-default group">
                <div className="flex items-center gap-2 text-amber-400">
                  <Flame className="w-5 h-5 fill-amber-400 animate-pulse" />
                  <span className="font-heading font-black text-3xl text-white glow-text-gold">Active</span>
                </div>
                <div className="text-xs font-mono-code text-slate-400">Daily Streak</div>
              </div>

              <div className="h-10 w-px bg-white/10 hidden sm:block"></div>

              <div className="space-y-1 hover:scale-105 transition-transform cursor-default group">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="font-heading font-black text-3xl text-white glow-text-emerald">100+</span>
                </div>
                <div className="text-xs font-mono-code text-slate-400">Problems Solved</div>
              </div>

              <div className="h-10 w-px bg-white/10 hidden sm:block"></div>

              <div className="space-y-1 hover:scale-105 transition-transform cursor-default group">
                <div className="flex items-center gap-2 text-teal-400">
                  <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-heading font-black text-3xl text-white">Verified</span>
                </div>
                <div className="text-xs font-mono-code text-slate-400">Java & C Profile</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://codolio.com/profile/karan_02"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 font-heading font-bold text-xs text-slate-950 shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all group"
              >
                <span>Visit Codolio Profile (@karan_02)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Line Details with Card Lift */}
          <div className="lg:col-span-5 p-7 rounded-3xl border border-white/10 hover:border-emerald-400/40 bg-white/[0.02] backdrop-blur-sm space-y-4 card-lift">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-heading font-bold text-white text-base">Karibasu Jadar</span>
              <span className="text-xs font-mono-code text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>@karan_02</span>
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono-code text-slate-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Primary Language</span>
                <span className="text-amber-300 font-semibold">Java</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Secondary</span>
                <span className="text-emerald-300 font-semibold">C & Python</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Key Domain</span>
                <span className="text-white">Data Structures & Algo</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">College</span>
                <span className="text-slate-200">JIT Davanagere</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
