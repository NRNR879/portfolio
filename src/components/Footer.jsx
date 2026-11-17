import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer = () => {
  const { personal } = siteData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 relative z-10 bg-darkBg/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Status */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <span className="font-heading font-bold text-lg text-white">
              {personal.name}
            </span>
            <span className="hidden sm:inline text-darkMuted">•</span>
            <span className="text-xs font-mono text-darkMuted">
              B.Tech CSE '29 · GRIET Hyderabad
            </span>
            <span className="hidden sm:inline text-darkMuted">•</span>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-accentGreen/10 border border-accentGreen/30 text-accentGreen text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accentGreen animate-pulse" />
              <span>Available for Internships</span>
            </div>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-darkMuted hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-darkMuted hover:text-white hover:bg-white/5 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg text-darkMuted hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Email Rahul"
            >
              <Mail className="w-4 h-4 text-accentAmber" />
            </a>
          </div>

          {/* Right: Back to Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-mono text-darkMuted hover:text-white hover:border-accentIndigo/40 transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom line: Copyright & Honest attribution */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-darkMuted/70 gap-2 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Rahul Nandan Reddy. Built with React, Tailwind CSS & Matter.js.
          </p>
          <p>
            Designed for high performance, accessibility & ATS crawler visibility.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
