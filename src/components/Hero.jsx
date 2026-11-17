import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ArrowRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import HeroPhysics from './HeroPhysics';
import CountUp from './CountUp';
import DevPlaceholder from './DevPlaceholder';

export const Hero = () => {
  const { personal, heroStats } = siteData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const roles = personal.typewriterRoles;
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText === currentRole) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 45 : 85;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting ? currentRole.substring(0, prev.length - 1) : currentRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, personal.typewriterRoles]);

  return (
    <section 
      id="hero" 
      aria-label="Introduction & Overview"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-32 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Gradient Orbs for Glass Blur visibility */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentIndigo/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accentAmber/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />

      {/* Interactive Matter.js Physics Ball Pit */}
      <HeroPhysics />

      {/* Foreground Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Availability Badge & Eyebrow Row */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-accentGreen/30 bg-accentGreen/10 text-accentGreen text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accentGreen animate-ping" />
            <span className="w-2 h-2 rounded-full bg-accentGreen -ml-4" />
            <span>{personal.statusBadge}</span>
          </div>

          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full glass-panel border border-white/10 text-darkMuted text-xs sm:text-sm font-mono">
            <span>{personal.eyebrow}</span>
          </div>
        </div>

        {/* H1 Heading */}
        <h1 className="font-heading font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] tracking-tight leading-[1.08] text-white dark:text-darkText light:text-lightText mb-4">
          {personal.name}
        </h1>

        {/* Dynamic Typewriter Line */}
        <div className="flex items-center justify-center space-x-2 text-lg sm:text-2xl font-mono text-accentAmber mb-4 min-h-[36px]">
          <span className="text-accentIndigo">&gt;</span>
          <span className="font-semibold text-accentAmber">{displayedText}</span>
          <span className="w-2 h-6 bg-accentAmber animate-pulse inline-block align-middle" />
        </div>

        {/* Role Positioning Subtitle */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg font-medium text-darkMuted dark:text-darkMuted light:text-slate-600 mb-4 px-2">
          {personal.roleLine}
        </p>

        {/* Tagline */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-8">
          {personal.tagline}
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto">
          {/* Download Resume Button */}
          <a
            href={personal.resumeUrl}
            download="Rahul_Nandan_Reddy_Resume.pdf"
            className="flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-accentAmber text-gray-950 font-heading font-semibold text-base hover:bg-amber-400 hover:shadow-glowAmber transition-all active:scale-95 shadow-lg w-full sm:w-auto"
            aria-label="Download Rahul Nandan Reddy's Resume PDF"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl glass-panel border border-white/20 hover:border-accentIndigo/60 text-white dark:text-darkText light:text-lightText font-heading font-medium text-base hover:bg-white/10 transition-all active:scale-95 shadow-md w-full sm:w-auto"
          >
            <Mail className="w-5 h-5 text-accentIndigo" />
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
          </a>

          {/* Social Profiles Quick Icons */}
          <div className="flex items-center space-x-2 p-1.5 rounded-xl glass-panel border border-white/10">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-darkMuted hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-darkMuted hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg text-darkMuted hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Email Rahul"
              title="Send Direct Email"
            >
              <Mail className="w-5 h-5 text-accentAmber" />
            </a>
          </div>
        </div>

        {/* Key Metrics / Stat Strip with Count-Up */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-2">
          {heroStats.map((stat) => {
            const isAdd = typeof stat.value === 'string' && stat.value.includes('[ADD:');
            return (
              <div 
                key={stat.id}
                className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 text-center glass-panel-hover"
              >
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white dark:text-darkText light:text-lightText mb-1 flex items-center justify-center">
                  {isAdd ? (
                    <DevPlaceholder text={stat.value} fallback={`${stat.numericValue}+`} />
                  ) : (
                    <CountUp 
                      target={stat.numericValue} 
                      decimals={stat.id === 'cgpa' ? 1 : 0} 
                      suffix={stat.displaySuffix}
                    />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-medium text-darkMuted">
                  {stat.label}
                </div>
                <div className="text-[11px] text-darkMuted/60 mt-0.5 font-mono">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Hero;
