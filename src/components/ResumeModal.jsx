import React from 'react';
import { X, Download, FileText, GraduationCap, Briefcase, Award, CheckCircle, Mail, MapPin } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-3xl w-full p-8 rounded-3xl border-emerald-500/30 space-y-6 relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => { playClickSound(); onClose(); }}
          className="absolute top-6 right-6 w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono-code text-amber-300 uppercase tracking-widest">
              CURRICULUM VITAE & BIOGRAPHY
            </div>
            <h2 className="font-heading font-black text-3xl text-white">
              Karibasu Jadar
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Davanagere, Karnataka</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-amber-400" /> jadarkaribasu02@gmail.com</span>
            </div>
          </div>

          <a
            href="https://github.com/jadarkaribasu02-beep"
            target="_blank"
            rel="noreferrer"
            onClick={playClickSound}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 font-heading font-bold text-xs text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Download className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-heading font-bold text-base">
            <GraduationCap className="w-5 h-5" />
            <span>Education</span>
          </div>
          <div className="glass-pill p-4 rounded-2xl border-white/10 space-y-1">
            <div className="flex justify-between items-start">
              <h4 className="font-heading font-bold text-white text-sm">
                Bachelor of Engineering (B.E.) in Computer Science & Engineering
              </h4>
              <span className="text-xs font-mono-code text-emerald-300">Undergraduate</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">Jain Institute of Technology (JIT), Davanagere</p>
            <p className="text-xs text-slate-400">Coursework: Data Structures & Algorithms, Object Oriented Programming in Java, Database Management Systems, Operating Systems, Computer Networks.</p>
          </div>
        </div>

        {/* Technical Competencies */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-heading font-bold text-base">
            <Award className="w-5 h-5" />
            <span>Core Competencies</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="glass-pill p-3.5 rounded-2xl border-white/10 space-y-1">
              <strong className="text-white block font-heading">Languages</strong>
              <p className="text-slate-300">Java (Core, OOP, Collections), C, Python, JavaScript</p>
            </div>
            <div className="glass-pill p-3.5 rounded-2xl border-white/10 space-y-1">
              <strong className="text-white block font-heading">Web Technologies</strong>
              <p className="text-slate-300">React.js, Three.js / WebGL, HTML5, CSS3, Tailwind CSS</p>
            </div>
            <div className="glass-pill p-3.5 rounded-2xl border-white/10 space-y-1">
              <strong className="text-white block font-heading">Algorithms & Problem Solving</strong>
              <p className="text-slate-300">100+ Solved in Java (Arrays, Sorting, Searching, Recursion)</p>
            </div>
            <div className="glass-pill p-3.5 rounded-2xl border-white/10 space-y-1">
              <strong className="text-white block font-heading">Developer Tools</strong>
              <p className="text-slate-300">Git, GitHub, VS Code, Vite, Linux Shell</p>
            </div>
          </div>
        </div>

        {/* Key Projects Summary */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-teal-400 font-heading font-bold text-base">
            <Briefcase className="w-5 h-5" />
            <span>Highlighted Works</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-2xl glass-pill space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>100-Programs Problem Solving Suite</span>
                <span className="text-amber-400">Java</span>
              </div>
              <p className="text-slate-300">Comprehensive structured algorithmic implementations for foundational computer science problems.</p>
            </div>
            <div className="p-3 rounded-2xl glass-pill space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>Notes Hub Educational Portal</span>
                <span className="text-emerald-400">Web App</span>
              </div>
              <p className="text-slate-300">Centralized resource platform designed to organize and distribute academic notes and code snippets.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
