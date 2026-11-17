import React from 'react';
import { 
  Briefcase, 
  Award, 
  Users, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  Milestone, 
  CheckCircle2, 
  Clock, 
  CircleDot,
  Wrench
} from 'lucide-react';
import { siteData } from '../data/siteData';
import DevPlaceholder from './DevPlaceholder';

export const Experience = () => {
  const { experience } = siteData;
  const { leadership, certifications, workshops, achievements, roadmap } = experience;

  return (
    <section 
      id="experience" 
      aria-label="Experience, Leadership and Certifications" 
      className="py-20 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-accentGreen/30 bg-accentGreen/10 text-accentGreen text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Growth & Leadership</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white dark:text-darkText light:text-lightText tracking-tight">
            Leadership & Certifications
          </h2>
          <p className="mt-3 text-base text-darkMuted">
            Co-curricular leadership, structured software certifications, and an honest learning roadmap.
          </p>
        </div>

        {/* 2-Column Grid: Leadership & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Leadership Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-accentIndigo/20 text-accentIndigo">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">Campus Leadership</h3>
                <span className="text-xs font-mono text-darkMuted">Student initiatives & community engagement</span>
              </div>
            </div>

            {leadership.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="font-heading font-semibold text-base text-white">
                    {item.role}
                  </h4>
                  <span className="text-xs font-mono text-accentAmber">
                    {item.period}
                  </span>
                </div>
                <div className="text-sm font-medium text-accentIndigo">
                  {item.organization}
                </div>

                <ul className="space-y-2 mt-3">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-start space-x-2">
                      <span className="text-accentAmber mt-1">•</span>
                      <span>
                        <DevPlaceholder 
                          text={bullet} 
                          fallback="Represented first-year CSE cohort and organized technical sessions for club members." 
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Workshops Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-accentAmber/20 text-accentAmber">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">Certifications & Training</h3>
                <span className="text-xs font-mono text-darkMuted">Formal programs and practical code completion</span>
              </div>
            </div>

            {/* Certifications List */}
            <div className="space-y-4">
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-heading font-semibold text-sm sm:text-base text-white">
                      {cert.title}
                    </span>
                    <span className="text-xs font-mono text-accentGreen">
                      {cert.duration}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-darkMuted">
                    Issuer: <span className="text-slate-200">{cert.issuer}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {cert.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Workshops / Achievements Highlights */}
            <div className="pt-2 border-t border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-darkMuted block mb-2">
                Workshops & Academic Recognition
              </span>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 space-y-1.5">
                <div>
                  <span className="font-semibold text-slate-200">Workshops: </span>
                  <DevPlaceholder text={workshops[0].title} fallback="Technical workshops attended (update via siteData.js)" />
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Achievements: </span>
                  <DevPlaceholder text={achievements[0].title} fallback="Competitive programming badges and academic recognition" />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Roadmap Strip (Done / In progress / Planned) */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-white/10 gap-2">
            <div>
              <h3 className="font-heading font-bold text-xl text-white flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-accentAmber" />
                <span>Learning & Evolution Roadmap</span>
              </h3>
              <p className="text-xs sm:text-sm text-darkMuted mt-0.5">
                Transparent milestones tracking what is mastered, what is currently underway, and what is next.
              </p>
            </div>

            {/* Legend Chips */}
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-accentGreen/10 text-accentGreen border border-accentGreen/30">
                <CheckCircle2 className="w-3 h-3 mr-1" /> Done
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-accentAmber/10 text-accentAmber border border-accentAmber/30">
                <Clock className="w-3 h-3 mr-1" /> In progress
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-accentIndigo/10 text-accentIndigo border border-accentIndigo/30">
                <CircleDot className="w-3 h-3 mr-1" /> Planned
              </span>
            </div>
          </div>

          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {roadmap.map((item, rIdx) => {
              const isDone = item.status === 'Done';
              const isInProgress = item.status === 'In progress';
              const isPlanned = item.status === 'Planned';

              return (
                <div
                  key={rIdx}
                  className={`p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                    isDone
                      ? 'bg-accentGreen/[0.04] border-accentGreen/20 text-slate-200'
                      : isInProgress
                      ? 'bg-accentAmber/[0.05] border-accentAmber/30 text-white shadow-xs'
                      : 'bg-white/[0.02] border-white/10 text-darkMuted'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                      {item.category}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-medium flex items-center ${
                        isDone
                          ? 'text-accentGreen'
                          : isInProgress
                          ? 'text-accentAmber'
                          : 'text-darkMuted'
                      }`}
                    >
                      {isDone && <CheckCircle2 className="w-3 h-3 mr-1" />}
                      {isInProgress && <Clock className="w-3 h-3 mr-1 animate-spin" />}
                      {isPlanned && <CircleDot className="w-3 h-3 mr-1" />}
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium leading-snug">
                    <DevPlaceholder text={item.title} />
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
