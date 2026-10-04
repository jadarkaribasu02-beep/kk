import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Star, Sparkles, ArrowRight, Eye, Code } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/audio';

export default function Projects3DSection({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: '100-programs',
      title: '100-Programs Build Problem Solving',
      category: 'dsa',
      lang: 'Java',
      langColor: 'from-amber-400 to-orange-500',
      description: 'Comprehensive repository containing 100+ structured Java programs covering fundamental algorithms, array manipulations, searching, sorting, and problem solving.',
      stars: 1,
      topics: ['Java', 'Algorithms', 'DSA', 'Problem Solving'],
      githubUrl: 'https://github.com/jadarkaribasu02-beep/100-Programs--build-problem-solving',
      demoUrl: 'https://github.com/jadarkaribasu02-beep/100-Programs--build-problem-solving',
      featured: true
    },
    {
      id: 'notes-hub',
      title: 'Notes Hub',
      category: 'web',
      lang: 'CSS / Web',
      langColor: 'from-emerald-400 to-teal-500',
      description: 'A centralized educational resource portal designed to help computer science students organize and access course notes, code snippets, and study materials.',
      stars: 0,
      topics: ['CSS', 'HTML', 'Web Portal', 'Student Resources'],
      githubUrl: 'https://github.com/jadarkaribasu02-beep/notes-hub',
      demoUrl: 'https://github.com/jadarkaribasu02-beep/notes-hub',
      featured: true
    },
    {
      id: 'hackerrank',
      title: 'HackerRank Solutions Suite',
      category: 'dsa',
      lang: 'Java',
      langColor: 'from-teal-400 to-emerald-600',
      description: 'Automated problem solving solutions suite for HackerRank challenges, formatted with clean Java code and structured explanations.',
      stars: 0,
      topics: ['Java', 'HackerRank', 'Auto-Documented', 'Algorithms'],
      githubUrl: 'https://github.com/jadarkaribasu02-beep/hackerrank-solutions',
      demoUrl: 'https://github.com/jadarkaribasu02-beep/hackerrank-solutions',
      featured: true
    },
    {
      id: 'leetcode',
      title: 'LeetCode Problem Vault',
      category: 'dsa',
      lang: 'Java',
      langColor: 'from-amber-400 to-yellow-500',
      description: 'Repository dedicated to LeetCode practice problems including arrays, strings, dynamic programming, two pointers, and trees.',
      stars: 0,
      topics: ['Java', 'LeetCode', 'Competitive Programming'],
      githubUrl: 'https://github.com/jadarkaribasu02-beep/leet-code-problems',
      demoUrl: 'https://github.com/jadarkaribasu02-beep/leet-code-problems',
      featured: false
    },
    {
      id: 'portfoliokj',
      title: 'Portfoliokj Web App',
      category: 'web',
      lang: 'CSS & HTML',
      langColor: 'from-emerald-500 to-teal-600',
      description: 'Personal web portfolio hosted on GitHub Pages showcasing software projects, skillsets, and academic profile.',
      stars: 1,
      topics: ['Portfolio', 'GitHub Pages', 'Responsive Design'],
      githubUrl: 'https://github.com/jadarkaribasu02-beep/portfoliokj',
      demoUrl: 'https://jadarkaribasu02-beep.github.io/portfoliokj/',
      featured: true
    },
    {
      id: 'dsa-lab',
      title: 'DSA Lab Programs',
      category: 'academic',
      lang: 'C',
      langColor: 'from-cyan-500 to-blue-600',
      description: 'Academic laboratory programs for Data Structures & Algorithms implemented in C for JIT Davanagere coursework.',
      stars: 0,
      topics: ['C Language', 'Pointers', 'Data Structures', 'Lab Work'],
      githubUrl: 'https://github.com/jadarkaribasu02-beep/DSA-lab-prgms',
      demoUrl: 'https://github.com/jadarkaribasu02-beep/DSA-lab-prgms',
      featured: false
    },
    {
      id: 'oop-lab',
      title: 'Object Oriented Programming Lab',
      category: 'academic',
      lang: 'Java',
      langColor: 'from-amber-500 to-orange-600',
      description: 'Java Object-Oriented Programming laboratory assignments showcasing inheritance, polymorphism, encapsulation, and interfaces.',
      stars: 0,
      topics: ['Java OOP', 'Interfaces', 'Polymorphism', 'Lab'],
      githubUrl: 'https://github.com/jadarkaribasu02-beep/oop-lab',
      demoUrl: 'https://github.com/jadarkaribasu02-beep/oop-lab',
      featured: false
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'dsa', label: 'Java & DSA' },
    { id: 'web', label: 'Web & Portfolios' },
    { id: 'academic', label: 'Lab & Academic' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 relative z-10 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header with clean lines and floating sparkle */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-400 to-amber-300 animate-pulse"></div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <span>FEATURED WORK & REPOSITORIES</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            MY PROJECT <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300 glow-text-emerald">SHOWCASE</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Structured algorithms, interactive web applications, and laboratory problem solving.
          </p>
        </div>

        {/* Filter Line Bar */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { playClickSound(); setFilter(tab.id); }}
              onMouseEnter={playHoverSound}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 shadow-md shadow-emerald-500/20 scale-105'
                  : 'text-slate-400 hover:text-white border border-transparent hover:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sleek Line-Accent Project Cards Grid with Card Lift Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={playHoverSound}
              className="p-6 rounded-3xl border border-white/10 hover:border-emerald-400/50 bg-white/[0.02] hover:bg-white/[0.05] card-lift flex flex-col justify-between space-y-6 group backdrop-blur-sm"
            >
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-gradient-to-r ${project.langColor} text-slate-950 shadow-sm group-hover:scale-105 transition-transform`}>
                    {project.lang}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400 group-hover:text-amber-300 transition-colors">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover:animate-bounce" />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.topics.map(topic => (
                    <span key={topic} className="px-2 py-0.5 rounded text-[10px] font-mono-code text-emerald-300/80 bg-emerald-500/10 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors">
                      #{topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => { playClickSound(); onSelectProject(project); }}
                    className="text-xs font-semibold text-emerald-300 hover:text-white flex items-center gap-1.5 transition-all group/btn"
                  >
                    <Eye className="w-3.5 h-3.5 group-hover/btn:scale-125 transition-transform" />
                    <span>Quick Preview</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={playClickSound}
                    className="w-8 h-8 rounded-full border border-white/15 hover:border-emerald-400 hover:bg-emerald-500/10 flex items-center justify-center text-slate-300 hover:text-white transition-all group/icon"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4 group-hover/icon:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
