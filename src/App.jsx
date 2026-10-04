import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroOverlay from './components/HeroOverlay';
import AboutSection from './components/AboutSection';
import Skills3DSection from './components/Skills3DSection';
import Projects3DSection from './components/Projects3DSection';
import CodolioSection from './components/CodolioSection';
import Contact3DSection from './components/Contact3DSection';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const isInteractingRef = useRef(false);
  const timeoutRef = useRef(null);

  // Mouse cursor reaction: Cat turns, wags tail, and reacts as cursor moves
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      // 3D Parallax translation (subtle, never exposes edges)
      setCursorOffset({
        x: normX * -15,
        y: normY * -10
      });

      // Scrub the cat video animation to react directly to cursor X position
      if (videoRef.current && videoRef.current.duration) {
        isInteractingRef.current = true;
        const duration = videoRef.current.duration;
        const targetRatio = Math.max(0, Math.min(1, e.clientX / innerWidth));
        videoRef.current.currentTime = targetRatio * duration;

        // Resume gentle playback when cursor pauses
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          isInteractingRef.current = false;
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        }, 1200);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleFeedCat = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 1.8;
      videoRef.current.play().catch(() => {});
      setTimeout(() => {
        if (videoRef.current) videoRef.current.playbackRate = 1.0;
      }, 2000);
    }
  };

  return (
    <div className="relative bg-[#0c1510] text-slate-100 min-h-screen overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      
      {/* 2.8 Second Cute Loading Animation */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {/* Nature & Forest Ambient Glows */}
      <Background3D />

      {/* Navigation Header */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
        onTriggerReload={() => setIsLoading(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        
        {/* HERO SECTION: Full Edge-to-Edge Forest Video with Cat positioned on Right, Frosted Cards on Left */}
        <section className="relative min-h-screen overflow-hidden flex items-center">
          
          {/* Fullscreen Video Background: Object-cover edge-to-edge (NO blank spaces) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <video
              ref={videoRef}
              src="/cat-animated.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                transform: `scale(1.08) translate3d(${cursorOffset.x}px, ${cursorOffset.y}px, 0px)`,
                transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
              className="w-full h-full object-cover object-[72%_center] pointer-events-none"
            />
            
            {/* Subtle Vignette Gradient: Forest is visible everywhere, cards are clear and readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1510]/60 via-[#0c1510]/15 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1510] via-transparent to-[#0c1510]/30 pointer-events-none"></div>
          </div>

          {/* Foreground Hero Content: Frosted Cards on Left */}
          <HeroOverlay 
            onOpenResume={() => setResumeOpen(true)} 
            onFeedCat={handleFeedCat}
          />
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Skills & Tech Matrix */}
        <Skills3DSection />

        {/* 3D Projects Showcase */}
        <Projects3DSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Codolio & Competitive Coding */}
        <CodolioSection />

        {/* Contact & 3D Interactive Form */}
        <Contact3DSection />

      </main>

      {/* Footer */}
      <Footer onTriggerReload={() => setIsLoading(true)} />

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

    </div>
  );
}
