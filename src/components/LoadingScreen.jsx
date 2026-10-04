import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Fish } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Finding the coziest tree stump... 🌿');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const totalDuration = 2800; // Exact 2.8 seconds
    const intervalTime = 28; // update every 28ms (100 steps)
    const step = 1;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 35 && next < 70) {
          setStatusText('Waking up the fluffy kitten... 🐾');
        } else if (next >= 70) {
          setStatusText('Preparing Karibasu Jadar\'s Portfolio... ✨');
        }
        if (next >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 400); // smooth fade transition
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a120e] transition-opacity duration-400 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Soft Glows */}
      <div className="absolute w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute w-80 h-80 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-6">
        
        {/* Cute Animated Fluffy Cat Illustration */}
        <div className="relative w-28 h-28 flex items-center justify-center animate-bounce">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-emerald-400/30 to-amber-300/30 blur-lg"></div>
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-[#13241c] to-[#0c1712] border-2 border-emerald-400/50 shadow-2xl flex items-center justify-center">
            {/* Cute Cat SVG */}
            <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow">
              {/* Ears */}
              <polygon points="25,35 15,10 40,25" fill="#ffffff" />
              <polygon points="25,33 18,15 37,25" fill="#fda4af" />
              <polygon points="75,35 85,10 60,25" fill="#ffffff" />
              <polygon points="75,33 82,15 63,25" fill="#fda4af" />
              {/* Head */}
              <circle cx="50" cy="52" r="32" fill="#ffffff" />
              {/* Cheeks */}
              <circle cx="28" cy="58" r="6" fill="#f472b6" opacity="0.6" />
              <circle cx="72" cy="58" r="6" fill="#f472b6" opacity="0.6" />
              {/* Big Green Eyes */}
              <circle cx="36" cy="48" r="8" fill="#34d399" />
              <circle cx="36" cy="48" r="5" fill="#064e3b" />
              <circle cx="34" cy="46" r="2.5" fill="#ffffff" />
              <circle cx="64" cy="48" r="8" fill="#34d399" />
              <circle cx="64" cy="48" r="5" fill="#064e3b" />
              <circle cx="62" cy="46" r="2.5" fill="#ffffff" />
              {/* Pink Nose & Smile */}
              <polygon points="50,56 47,53 53,53" fill="#f43f5e" />
              <path d="M 45 60 Q 50 64 55 60" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          {/* Floating Paw */}
          <div className="absolute -top-1 -right-1 text-amber-300 text-lg animate-spin-slow">
            ✨
          </div>
        </div>

        {/* Title & Status */}
        <div className="space-y-1.5">
          <div className="font-heading font-black text-xl text-white tracking-wide">
            KARIBASU JADAR
          </div>
          <div className="text-xs font-mono-code text-emerald-300 min-h-[20px] transition-all">
            {statusText}
          </div>
        </div>

        {/* Cute Progress Bar */}
        <div className="w-full space-y-2">
          <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden p-0.5 border border-emerald-500/20 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 transition-all duration-75 shadow-md shadow-emerald-400/30"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono-code text-slate-400">
            <span>2.8s Loading</span>
            <span className="text-amber-300 font-bold">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
