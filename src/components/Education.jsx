import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import DevPlaceholder from './DevPlaceholder';

export const Education = () => {
  const { education } = siteData;

  return (
    <section 
      id="education" 
      aria-label="Education and Academic Timeline" 
      className="py-20 relative scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-accentIndigo/30 bg-accentIndigo/10 text-accentIndigo text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundation</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white dark:text-darkText light:text-lightText tracking-tight">
            Education Timeline
          </h2>
          <p className="mt-3 text-base text-darkMuted">
            Undergraduate Computer Science studies, coursework, and foundational milestones.
          </p>
        </div>

        {/* Vertical Glass Timeline */}
        <div className="relative border-l-2 border-accentIndigo/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {/* Milestone 1: Undergraduate Degree (GRIET) */}
          <div className="relative group">
            {/* Timeline node circle */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-darkBg border-2 border-accentIndigo flex items-center justify-center text-accentIndigo group-hover:border-accentAmber group-hover:scale-110 transition-all shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-accentIndigo group-hover:bg-accentAmber transition-colors" />
            </div>

            {/* Timeline Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass glass-panel-hover">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-accentIndigo/15 border border-accentIndigo/30 text-accentIndigo text-xs font-mono font-semibold w-fit">
                  {education.period}
                </span>

                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-darkMuted">Cumulative CGPA:</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-accentGreen/15 border border-accentGreen/30 text-accentGreen font-bold">
                    {education.cgpa} / 10.0
                  </span>
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white dark:text-darkText light:text-lightText mb-1">
                {education.degree}
              </h3>

              <div className="text-sm sm:text-base font-medium text-accentAmber mb-1">
                {education.institution}
              </div>

              <div className="text-xs text-darkMuted font-mono mb-4 flex items-center space-x-2">
                <span>{education.affiliation}</span>
                <span>•</span>
                <span>Hyderabad, Telangana</span>
              </div>

              {/* Milestones list */}
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-darkMuted block">
                  Key Academic Milestones
                </span>
                <ul className="space-y-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {education.milestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle className="w-4 h-4 text-accentGreen shrink-0 mt-0.5" />
                      <span>
                        <DevPlaceholder 
                          text={milestone} 
                          fallback="First year academic performance and engineering problem solving coursework." 
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Earlier Schooling Block */}
          <div className="relative group">
            {/* Timeline node circle */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-darkBg border-2 border-white/20 flex items-center justify-center text-darkMuted group-hover:border-accentIndigo transition-all shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            </div>

            {/* Schooling Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 shadow-glass">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-darkMuted">
                  Secondary & Higher Secondary
                </span>
                <span className="text-xs font-mono text-darkMuted">Foundational Studies</span>
              </div>

              <h4 className="font-heading font-semibold text-base sm:text-lg text-white">
                Pre-University & High School Education
              </h4>

              <div className="mt-2 text-xs sm:text-sm text-slate-300">
                <DevPlaceholder 
                  text={education.earlierSchooling} 
                  fallback="Completed Mathematics, Physics, and Chemistry (MPC) higher secondary education with strong analytical foundations." 
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
