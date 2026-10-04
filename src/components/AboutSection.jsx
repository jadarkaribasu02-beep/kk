import React, { useState } from 'react';
import { User, GraduationCap, Code, Heart, Sparkles, BookOpen, CheckCircle2, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: User },
    { id: 'academic', label: 'JIT Davanagere', icon: GraduationCap },
    { id: 'philosophy', label: 'Engineering Principles', icon: Code },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 relative z-10 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with clean lines and floating sparkle animation */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-400 to-amber-300 animate-pulse"></div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <span>DISCOVER MY JOURNEY</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            ABOUT <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300 glow-text-emerald">KARIBASU JADAR</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Computer Science & Engineering student at JIT Davanagere with a focus on Java DSA and web technologies.
          </p>
        </div>

        {/* Minimalist Grid with Round Avatar Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Round Avatar Photo (like old) with Spinning Aura & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-6">
            
            <div className="relative group mx-auto sm:mx-0">
              {/* Spinning Colorful Glowing Aura */}
              <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-amber-400 opacity-75 blur-xl group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>
              
              {/* Round Avatar Container */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#0c1510] bg-gradient-to-b from-[#162e22] to-[#0c1510] shadow-2xl">
                <img
                  src="/karibasu.png"
                  alt="Karibasu Jadar"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Verified Check Badge */}
              <div className="absolute bottom-2 right-2 bg-emerald-500 text-slate-950 p-2 rounded-full border-4 border-[#0c1510] shadow-lg" title="BE CSE Student">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-heading font-bold text-2xl text-white group-hover:text-emerald-300 transition-colors">
                Karibasu Jadar
              </h3>
              <p className="text-xs font-mono-code text-emerald-300">@jadarkaribasu02-beep</p>
              <p className="text-xs text-slate-300">BE Computer Science & Engineering</p>
            </div>

            {/* Line-Divided Metrics with Hover Scale */}
            <div className="w-full pt-4 border-t border-white/10 flex items-center justify-around sm:justify-start sm:gap-10">
              <div className="hover:scale-105 transition-transform cursor-default">
                <div className="font-heading font-black text-3xl text-emerald-400 glow-text-emerald">100+</div>
                <div className="text-[11px] font-mono-code text-slate-400">DSA Programs</div>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div className="hover:scale-105 transition-transform cursor-default">
                <div className="font-heading font-black text-3xl text-amber-300 glow-text-gold">12</div>
                <div className="text-[11px] font-mono-code text-slate-400">GitHub Repos</div>
              </div>
            </div>
          </div>

          {/* Right Line-Accented Tabs Content with Smooth Transitions */}
          <div className="lg:col-span-7 space-y-6 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm card-lift">
            
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { playClickSound(); setActiveTab(tab.id); }}
                    onMouseEnter={playHoverSound}
                    className={`py-2 px-4 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                      isActive 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 shadow-md shadow-emerald-500/15 scale-105' 
                        : 'text-slate-400 hover:text-white border border-transparent hover:border-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Body with Keyframe Fade Animation */}
            <div className="py-2 min-h-[180px]">
              {activeTab === 'story' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-left-2 duration-300">
                  <h4 className="font-heading font-bold text-lg text-white">Background & Aspirations</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    I am a Computer Science & Engineering student at Jain Institute of Technology (JIT), Davanagere.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    My focus centers around Data Structures and Algorithms in Java and building modern responsive web applications with interactive graphics.
                  </p>
                </div>
              )}

              {activeTab === 'academic' && (
                <div className="space-y-3 animate-in fade-in slide-in-from-left-2 duration-300">
                  <h4 className="font-heading font-bold text-lg text-white">Jain Institute of Technology (JIT), Davanagere</h4>
                  <div className="space-y-1.5 text-sm text-slate-300">
                    <p><strong className="text-white">Degree:</strong> Bachelor of Engineering (B.E.) in CSE</p>
                    <p><strong className="text-white">Location:</strong> Davanagere, Karnataka, India</p>
                    <p><strong className="text-white">Core Subjects:</strong> Data Structures, OOP in Java, Database Management, Operating Systems, Web Technologies.</p>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="space-y-3 animate-in fade-in slide-in-from-left-2 duration-300">
                  <h4 className="font-heading font-bold text-lg text-white">Engineering Principles</h4>
                  <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                    <li><strong className="text-white">Daily Problem Solving:</strong> Consistency in Java algorithmic challenges.</li>
                    <li><strong className="text-white">Modular Clean Code:</strong> Well-documented and maintainable architecture.</li>
                    <li><strong className="text-white">Interactive UI:</strong> Crafting enjoyable, responsive experiences.</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-emerald-300 font-mono-code">Codolio: @karan_02</span>
              <a
                href="https://github.com/jadarkaribasu02-beep"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHoverSound}
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 group"
              >
                <span>Full GitHub Profile</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
