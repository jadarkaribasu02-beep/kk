import React from 'react';
import { X, Github, ExternalLink, Star, Code, CheckCircle } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-2xl w-full p-8 rounded-3xl border-emerald-500/30 space-y-6 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => { playClickSound(); onClose(); }}
          className="absolute top-6 right-6 w-9 h-9 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <span className={`px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-gradient-to-r ${project.langColor} text-slate-950 shadow-md`}>
            {project.lang}
          </span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>{project.description}</p>
          <div className="p-4 rounded-2xl glass-pill space-y-2 text-xs font-mono-code border-emerald-500/20">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Key Features & Architecture</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Clean object-oriented & algorithmic structure</li>
              <li>Integrated version control with GitHub repositories</li>
              <li>Fully documented source code & reproducible setup</li>
            </ul>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-2">
          <div className="text-xs font-mono-code text-slate-300">Tech Stack & Tags:</div>
          <div className="flex flex-wrap gap-2">
            {project.topics.map(t => (
              <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono-code bg-white/10 text-emerald-300 border border-emerald-500/20">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={playClickSound}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 font-heading font-bold text-xs text-slate-950 flex items-center gap-2 shadow-lg shadow-emerald-500/25"
          >
            <Github className="w-4 h-4" />
            <span>Open Repository on GitHub</span>
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            onClick={playClickSound}
            className="px-5 py-3 rounded-2xl glass-pill text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-2"
          >
            <span>Launch Live Preview / Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
