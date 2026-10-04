import React, { useState } from 'react';
import { Cpu, Globe, Database, Terminal, Code2, Layers, Sparkles } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';

export default function Skills3DSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web & 3D' },
    { id: 'dsa', label: 'DSA & Algorithms' },
    { id: 'tools', label: 'Tools & DB' },
  ];

  const skillItems = [
    { name: 'Java', level: 90, category: 'languages', icon: '☕', desc: 'Core Java, OOP, Collections, Multithreading' },
    { name: 'Python', level: 82, category: 'languages', icon: '🐍', desc: 'Scripting, Data Manipulation, Problem Solving' },
    { name: 'C', level: 85, category: 'languages', icon: '⚡', desc: 'Pointers, Memory Management, System Concepts' },
    { name: 'JavaScript', level: 88, category: 'languages', icon: '🟨', desc: 'ES6+, Async/Await, DOM, Event Loops' },
    { name: 'React', level: 85, category: 'web', icon: '⚛️', desc: 'Hooks, State Management, Component Architecture' },
    { name: 'Three.js / WebGL', level: 80, category: 'web', icon: '🧊', desc: '3D Scenes, Shaders, Canvas Animation' },
    { name: 'HTML5 & CSS3', level: 92, category: 'web', icon: '🎨', desc: 'Semantic Layouts, Responsive UI, Animations' },
    { name: 'Tailwind CSS', level: 90, category: 'web', icon: '🌊', desc: 'Modern Design Systems, Custom Themes' },
    { name: 'Arrays & Strings', level: 92, category: 'dsa', icon: '🔢', desc: 'Two Pointers, Sliding Window, Prefix Sums' },
    { name: 'Searching & Sorting', level: 90, category: 'dsa', icon: '🔍', desc: 'Binary Search, Quick Sort, Merge Sort' },
    { name: 'Trees & Graphs', level: 82, category: 'dsa', icon: '🌳', desc: 'BFS, DFS, Binary Search Trees, Traversal' },
    { name: 'SQL', level: 84, category: 'tools', icon: '🗄️', desc: 'Relational Schemas, Joins, Aggregation, Queries' },
    { name: 'Git & GitHub', level: 88, category: 'tools', icon: '🐙', desc: 'Version Control, Branching, PRs' },
    { name: 'VS Code & Vite', level: 90, category: 'tools', icon: '🛠️', desc: 'IDE Config, Build Tooling, Bundling' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillItems 
    : skillItems.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 relative z-10 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with clean lines and sparkle */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-400 to-amber-300 animate-pulse"></div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <span>TECHNICAL MATRIX</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            SKILLS & <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300 glow-text-emerald">TECHNOLOGIES</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Proficiencies across programming languages, algorithms, and development tools.
          </p>
        </div>

        {/* Filter Line Bar */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { playClickSound(); setActiveCategory(cat.id); }}
              onMouseEnter={playHoverSound}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 shadow-md shadow-emerald-500/15 scale-105'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Minimalist Line Skills Grid with Hover Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={playHoverSound}
              className="p-5 rounded-2xl border border-white/10 hover:border-emerald-400/50 bg-white/[0.02] hover:bg-white/[0.05] card-lift transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-emerald-300 transition-colors">{skill.name}</h3>
                    <span className="text-[10px] font-mono-code text-slate-400 capitalize">{skill.category}</span>
                  </div>
                </div>
                <span className="text-xs font-mono-code font-bold text-emerald-300 glow-text-emerald">{skill.level}%</span>
              </div>

              <p className="text-xs text-slate-300 leading-snug">{skill.desc}</p>

              {/* Clean Line Progress Bar with Shimmer Animation */}
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 rounded-full transition-all duration-1000 shadow-sm shadow-emerald-400/40"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
