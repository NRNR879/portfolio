import React from 'react';
import { Cpu, CheckCircle2, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import DevPlaceholder from './DevPlaceholder';

export const Skills = () => {
  const { skills } = siteData;

  // Helper for 3-dot proficiency indicator
  const renderProficiencyDots = (item) => {
    if (item.isPlanned) {
      return (
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-accentAmber/10 border border-accentAmber/30 text-[11px] font-mono text-accentAmber">
          <span className="w-1.5 h-1.5 rounded-full bg-accentAmber animate-pulse" />
          <span>Planned</span>
        </span>
      );
    }

    if (item.isLearning) {
      return (
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-accentIndigo/10 border border-accentIndigo/30 text-[11px] font-mono text-accentIndigo">
          <span className="w-1.5 h-1.5 rounded-full bg-accentIndigo animate-ping" />
          <span>Learning</span>
        </span>
      );
    }

    const totalDots = 3;
    const filledCount = item.dots || (item.level === 'Advanced' ? 3 : item.level === 'Intermediate' ? 2 : 1);
    const levelLabel = item.level || 'Intermediate';

    return (
      <div className="flex items-center space-x-2" title={`Proficiency: ${levelLabel}`}>
        <div className="flex space-x-1" aria-label={`Proficiency: ${levelLabel} (3 dots indicator)`}>
          {[...Array(totalDots)].map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i < filledCount
                  ? 'bg-accentIndigo shadow-xs shadow-accentIndigo/50'
                  : 'bg-white/10 border border-white/20'
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] font-mono text-darkMuted hidden sm:inline">
          {levelLabel}
        </span>
      </div>
    );
  };

  return (
    <section 
      id="skills" 
      aria-label="Technical Skills & Competencies" 
      className="py-20 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-accentIndigo/30 bg-accentIndigo/10 text-accentIndigo text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white dark:text-darkText light:text-lightText tracking-tight">
            Skills & Tooling
          </h2>
          <p className="mt-3 text-base text-darkMuted">
            A transparent inventory of programming languages, libraries, tools, and algorithms I work with daily.
          </p>
        </div>

        {/* 4 Glass Card Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.categories.map((category, idx) => (
            <div 
              key={category.title}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 shadow-glass glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <h3 className="font-heading font-semibold text-lg text-white dark:text-darkText light:text-lightText flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accentIndigo" />
                    <span>{category.title}</span>
                  </h3>
                  <span className="text-xs font-mono text-darkMuted">
                    {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="space-y-3.5">
                  {category.items.map((item) => (
                    <div 
                      key={item.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className="text-sm sm:text-base font-medium text-slate-200">
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="text-[11px] font-mono text-darkMuted/80 italic">
                            ({item.note})
                          </span>
                        )}
                      </div>
                      <div>
                        {renderProficiencyDots(item)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Legend / Note */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-darkMuted">
                <span>3-dot indicator: Beg / Int / Adv</span>
                <span className="text-accentAmber">Adjustable via siteData.js</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core CS Strengths Tag Row */}
        <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 shadow-glass">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-semibold text-lg text-white dark:text-darkText light:text-lightText flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-accentAmber" />
                <span>Core Computer Science Strengths</span>
              </h3>
              <p className="text-xs sm:text-sm text-darkMuted mt-1">
                Foundational computer science principles applied across all projects and algorithmic problem solving.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.coreStrengths.map((strength) => (
                <span
                  key={strength}
                  className="px-3.5 py-1.5 rounded-xl bg-accentIndigo/10 text-accentIndigo border border-accentIndigo/30 text-xs sm:text-sm font-medium font-mono shadow-xs hover:bg-accentIndigo/20 transition-colors"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
