import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Menu, X, Terminal } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Navbar = ({ isDark, setIsDark }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Problem Solving', href: '#problem-solving' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll Progress and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);

      // Section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top thin scroll progress bar */}
      <div 
        className="h-1 bg-gradient-to-r from-accentIndigo via-accentAmber to-accentGreen transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Page reading progress"
      />

      <nav 
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2"
      >
        <div className="glass-panel px-4 sm:px-6 py-3 flex items-center justify-between border border-white/10 dark:border-white/10 shadow-lg">
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            className="flex items-center space-x-2 text-darkText dark:text-darkText light:text-lightText group"
            aria-label="Rahul Nandan Reddy - Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accentIndigo to-accentAmber flex items-center justify-center text-white font-mono font-bold shadow-md shadow-accentIndigo/20 group-hover:scale-105 transition-transform">
              <span className="text-sm">RN</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg leading-tight tracking-tight text-white dark:text-darkText light:text-lightText group-hover:text-accentIndigo transition-colors">
                Rahul Nandan Reddy
              </span>
              <span className="text-[11px] font-mono text-accentAmber dark:text-accentAmber light:text-amber-600">
                CSE '29 · GRIET
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white dark:text-white bg-accentIndigo/20 border border-accentIndigo/40 shadow-sm'
                      : 'text-darkMuted hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-accentAmber rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs: Theme Toggle & Resume Download */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-darkMuted hover:text-accentAmber hover:bg-white/5 border border-white/5 transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-5 h-5 text-accentAmber" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            <a
              href={siteData.personal.resumeUrl}
              download="Rahul_Nandan_Reddy_Resume.pdf"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-accentAmber text-gray-950 font-semibold text-sm hover:bg-amber-400 hover:shadow-glowAmber transition-all active:scale-95 shadow-md"
              aria-label="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-darkMuted hover:text-white"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-accentAmber" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-darkMuted hover:text-white focus:outline-none"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 glass-panel border border-white/10 shadow-xl rounded-2xl flex flex-col space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-accentIndigo/20 text-accentIndigo border border-accentIndigo/30 font-semibold'
                    : 'text-darkMuted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                href={siteData.personal.resumeUrl}
                download="Rahul_Nandan_Reddy_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-accentAmber text-gray-950 font-semibold text-sm hover:bg-amber-400 transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
