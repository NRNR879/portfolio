import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Languages, 
  Sparkles, 
  Target, 
  Compass, 
  Users, 
  Code 
} from 'lucide-react';
import { siteData } from '../data/siteData';

export const About = () => {
  const { about } = siteData;
  const { quickFacts } = about;

  return (
    <section 
      id="about" 
      aria-label="About Rahul Nandan Reddy" 
      className="py-20 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-accentIndigo/30 bg-accentIndigo/10 text-accentIndigo text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white dark:text-darkText light:text-lightText tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base text-darkMuted">
            First-year Computer Science student passionate about data structures, physics-driven simulations, and the future of agentic AI.
          </p>
        </div>

        {/* Two-Column Grid: Narrative on Left, Quick-Facts Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Story & Career Objective */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Narrative Card */}
            <article className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass">
              <h3 className="font-heading font-semibold text-xl text-white dark:text-darkText light:text-lightText mb-4 flex items-center space-x-2">
                <Code className="w-5 h-5 text-accentIndigo" />
                <span>The Story So Far</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-[17px]">
                {about.narrative.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </article>

            {/* Career Objective Glass Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-accentAmber/30 bg-accentAmber/[0.03] shadow-glass relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accentAmber/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-accentAmber/20 text-accentAmber border border-accentAmber/30 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-white dark:text-darkText light:text-lightText mb-1.5">
                    Career Objective
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    "{about.careerObjective}"
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Interests Badges */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10">
              <h3 className="font-heading font-medium text-sm text-darkMuted uppercase tracking-wider mb-3 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-accentIndigo" />
                <span>Technical Interests</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.technicalInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-xl glass-panel text-xs sm:text-sm font-medium text-slate-200 border border-white/10 hover:border-accentIndigo/40 hover:bg-accentIndigo/10 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Quick Facts Glass Card */}
          <div className="lg:col-span-5">
            <aside 
              aria-label="Quick Facts"
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 shadow-glass space-y-6 sticky top-24"
            >
              <div className="border-b border-white/10 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-white dark:text-darkText light:text-lightText flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-accentIndigo" />
                    <span>Quick Facts</span>
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-accentGreen/10 text-accentGreen text-xs font-mono font-medium border border-accentGreen/30">
                    CGPA {quickFacts.cgpa}
                  </span>
                </div>
              </div>

              {/* Education Block */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-darkMuted">Degree & Institution</span>
                <p className="font-semibold text-sm sm:text-base text-white">
                  {quickFacts.degree}
                </p>
                <p className="text-xs text-darkMuted">
                  {quickFacts.institution} · <span className="text-accentAmber">{quickFacts.batch}</span>
                </p>
              </div>

              {/* Core Languages */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-darkMuted">Primary Languages</span>
                <div className="flex flex-wrap gap-1.5">
                  {quickFacts.primaryLanguages.map((lang) => (
                    <span 
                      key={lang} 
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Leadership Role */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-darkMuted">Leadership</span>
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <Users className="w-4 h-4 text-accentAmber shrink-0" />
                  <span>{quickFacts.leadership}</span>
                </div>
              </div>

              {/* Languages Spoken */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-darkMuted">Languages Spoken</span>
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <Languages className="w-4 h-4 text-accentIndigo shrink-0" />
                  <span>{quickFacts.spokenLanguages.join(', ')}</span>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-darkMuted">Current Location</span>
                <div className="flex items-center space-x-2 text-sm text-slate-200">
                  <MapPin className="w-4 h-4 text-accentGreen shrink-0" />
                  <span>{quickFacts.location}</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="pt-2 border-t border-white/10 text-[12px] font-mono text-darkMuted text-center">
                Honest foundations first · Documenting progress publicly
              </div>

            </aside>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
