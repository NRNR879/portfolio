import React from 'react';
import { Terminal, ExternalLink, Zap, Award, CheckCircle, TrendingUp, Cpu } from 'lucide-react';
import { siteData } from '../data/siteData';
import DevPlaceholder from './DevPlaceholder';

export const ProblemSolving = () => {
  const { problemSolving } = siteData;
  const { platforms, philosophy } = problemSolving;

  return (
    <section 
      id="problem-solving" 
      aria-label="Algorithmic Problem Solving and DSA" 
      className="py-20 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-accentAmber/30 bg-accentAmber/10 text-accentAmber text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Algorithmic Rigor</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white dark:text-darkText light:text-lightText tracking-tight">
            Problem Solving & DSA
          </h2>
          <p className="mt-3 text-base text-darkMuted">
            Disciplined daily practice in data structures and algorithmic complexity.
          </p>
        </div>

        {/* Philosophy Glass Banner */}
        <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 shadow-glass mb-10 max-w-4xl mx-auto bg-gradient-to-r from-accentIndigo/[0.04] to-accentAmber/[0.04]">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-accentIndigo/20 text-accentIndigo shrink-0 mt-1">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-white dark:text-darkText light:text-lightText mb-1">
                Engineering Approach
              </h3>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                "{philosophy}"
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono text-darkMuted">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">1. Constrain inputs</span>
                <span className="text-accentIndigo">→</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">2. Brute-force baseline</span>
                <span className="text-accentIndigo">→</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">3. Optimize space & time</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Platform Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: LeetCode */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFA116]/20 border border-[#FFA116]/40 flex items-center justify-center text-[#FFA116] font-mono font-bold">
                    LC
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">LeetCode</h3>
                    <span className="text-xs font-mono text-darkMuted">@{platforms[0].handle}</span>
                  </div>
                </div>

                <a
                  href={platforms[0].profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl glass-panel text-darkMuted hover:text-white hover:border-accentAmber/40 transition-colors"
                  aria-label="View LeetCode Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-darkMuted block">Problems Solved</span>
                  <div className="text-lg font-mono font-bold text-white mt-1">
                    <DevPlaceholder text={platforms[0].solved} fallback="45+ Solved" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-darkMuted block">Active Streak</span>
                  <div className="text-lg font-mono font-bold text-accentAmber mt-1">
                    <DevPlaceholder text={platforms[0].streak} fallback="Daily Practice" />
                  </div>
                </div>
              </div>

              {/* Breakdown split */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-darkMuted block mb-1">
                  Difficulty Split
                </span>
                <div className="text-xs font-mono text-slate-300">
                  <DevPlaceholder text={platforms[0].split} fallback="Easy: 30 · Medium: 15 · Hard: 0" />
                </div>
              </div>

              <div className="text-xs text-darkMuted">
                <span className="font-semibold text-slate-200">Active Topic Focus:</span> {platforms[0].focus}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-accentGreen flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accentGreen mr-1.5" />
                {platforms[0].status}
              </span>
              <a 
                href={platforms[0].profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accentAmber hover:underline flex items-center space-x-1"
              >
                <span>Profile Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: HackerRank */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-glass glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00EA64]/20 border border-[#00EA64]/40 flex items-center justify-center text-[#00EA64] font-mono font-bold">
                    HR
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">HackerRank</h3>
                    <span className="text-xs font-mono text-darkMuted">@{platforms[1].handle}</span>
                  </div>
                </div>

                <a
                  href={platforms[1].profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl glass-panel text-darkMuted hover:text-white hover:border-accentGreen/40 transition-colors"
                  aria-label="View HackerRank Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-darkMuted block">Badges Earned</span>
                  <div className="text-lg font-mono font-bold text-white mt-1">
                    <DevPlaceholder text={platforms[1].badges} fallback="Problem Solving Badges" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-darkMuted block">Certifications</span>
                  <div className="text-lg font-mono font-bold text-accentGreen mt-1">
                    <DevPlaceholder text={platforms[1].certificates} fallback="Problem Solving (Basic)" />
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-darkMuted block mb-1">
                  Core Practice Domains
                </span>
                <div className="text-xs font-mono text-slate-300">
                  {platforms[1].focus}
                </div>
              </div>

              <div className="text-xs text-darkMuted">
                Verified skill badges confirming algorithmic problem-solving accuracy.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-accentGreen flex items-center">
                <Award className="w-3.5 h-3.5 mr-1.5" />
                {platforms[1].status}
              </span>
              <a 
                href={platforms[1].profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accentAmber hover:underline flex items-center space-x-1"
              >
                <span>Profile Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolving;
