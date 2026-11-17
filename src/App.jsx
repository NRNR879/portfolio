import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { Sparkles, HelpCircle, X } from 'lucide-react';

export function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode
  });

  const [currentRoute, setCurrentRoute] = useState(() => window.location.pathname);
  const [showDevInspector, setShowDevInspector] = useState(false);

  // Sync theme to HTML document class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  // Handle client-side routing (for 404 test)
  useEffect(() => {
    const handlePopState = () => setCurrentRoute(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
  };

  // If visiting /404, show NotFound page
  if (currentRoute === '/404') {
    return <NotFound onGoHome={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen bg-darkBg text-darkText transition-colors duration-300 relative selection:bg-accentIndigo/30 selection:text-white">
      {/* Background ambient lighting orbs */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accentIndigo/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-accentAmber/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-accentGreen/5 rounded-full blur-[160px]" />
      </div>

      {/* Semantic Navigation */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Main Semantic Page Content */}
      <main id="main-content" tabIndex="-1" className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProblemSolving />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Dev Mode Floating Inspector Pill (visible in development only) */}
      {import.meta.env.DEV && (
        <div className="fixed bottom-4 right-4 z-50">
          {!showDevInspector ? (
            <button
              onClick={() => setShowDevInspector(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-accentAmber border border-amber-500/40 text-xs font-mono shadow-lg hover:bg-amber-500/30 transition-all backdrop-blur-md"
              title="Dev Mode: Placeholders Active"
            >
              <span className="w-2 h-2 rounded-full bg-accentAmber animate-ping" />
              <span>Dev Placeholders</span>
            </button>
          ) : (
            <div className="w-80 glass-panel p-4 rounded-2xl border border-amber-500/40 shadow-2xl bg-darkSurface/95 backdrop-blur-xl animate-fadeIn text-xs font-mono space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="font-bold text-accentAmber flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>siteData.js Placeholders</span>
                </span>
                <button
                  onClick={() => setShowDevInspector(false)}
                  className="p-1 text-darkMuted hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[11px] text-darkMuted leading-relaxed">
                Items marked with <span className="text-accentAmber font-bold">[ADD: ...]</span> are highlighted on the page. Edit <code className="text-white bg-white/10 px-1 rounded">src/data/siteData.js</code> to populate your personal stats!
              </p>
              <div className="pt-2 border-t border-white/10 flex justify-between">
                <button
                  onClick={() => navigateTo('/404')}
                  className="text-[10px] text-accentIndigo hover:underline"
                >
                  Preview 404 Dino Page
                </button>
                <span className="text-[10px] text-darkMuted">Dev Mode Active</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
