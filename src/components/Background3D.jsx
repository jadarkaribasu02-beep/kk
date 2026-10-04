import React from 'react';

export default function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0c1510]">
      {/* Soft Sunlight & Emerald Forest Mist Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-emerald-500/12 rounded-full blur-[140px]"></div>
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-teal-600/12 rounded-full blur-[160px]"></div>
    </div>
  );
}
