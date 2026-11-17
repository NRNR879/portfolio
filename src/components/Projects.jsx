import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Activity, 
  Flame, 
  Clock, 
  CheckCircle2, 
  Bot 
} from 'lucide-react';
import { siteData } from '../data/siteData';
import MiniDinoGame from './MiniDinoGame';
import MiniPhysicsSandbox from './MiniPhysicsSandbox';
import DevPlaceholder from './DevPlaceholder';

export const Projects = () => {
  const { projects } = siteData;

  // 3D tilt calculation on card hover
  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section 
      id="projects" 
      aria-label="Software Projects" 
      className="py-20 relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-accentIndigo/30 bg-accentIndigo/10 text-accentIndigo text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white dark:text-darkText light:text-lightText tracking-tight">
            Projects & Prototypes
          </h2>
          <p className="mt-3 text-base text-darkMuted">
            Interactive software built from fundamentals up, demonstrating algorithmic game loops, physics integration, and next-step AI systems.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isPlanned = project.isPlanned;

            return (
              <article
                key={project.id}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={handleMouseLeave}
                className={`glass-panel rounded-2xl flex flex-col justify-between overflow-hidden shadow-glass transition-all duration-300 relative ${
                  isPlanned
                    ? 'border-2 border-dashed border-accentGreen/40 bg-accentGreen/[0.02]'
                    : 'border border-white/10 hover:border-accentIndigo/40'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Top Interactive Canvas or Planned Visual */}
                <div className="p-4 pb-2 border-b border-white/10">
                  {project.id === 'dino-runner' ? (
                    <MiniDinoGame isCardPreview={true} />
                  ) : project.id === 'matter-physics' ? (
                    <MiniPhysicsSandbox />
                  ) : (
                    <div className="w-full h-[130px] rounded-xl bg-gradient-to-br from-darkSurface to-[#0a1128] border border-accentGreen/20 flex flex-col items-center justify-center p-4 text-center">
                      <div className="p-3 rounded-full bg-accentGreen/10 text-accentGreen mb-2 border border-accentGreen/30 animate-pulse">
                        <Bot className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-accentGreen font-semibold tracking-wide">
                        NEXT ARCHITECTURE IN DEVELOPMENT
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Status & Title */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                          isPlanned
                            ? 'bg-accentGreen/15 text-accentGreen border border-accentGreen/40'
                            : 'bg-accentIndigo/15 text-accentIndigo border border-accentIndigo/30'
                        }`}
                      >
                        {isPlanned ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-accentGreen mr-1.5 animate-pulse" />
                            Planned
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                            Shipped
                          </>
                        )}
                      </span>

                      <span className="text-[11px] font-mono text-darkMuted">
                        {isPlanned ? 'Roadmap v1.0' : 'Playable Demo'}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-white dark:text-darkText light:text-lightText">
                      {project.title}
                    </h3>

                    <p className="text-sm font-medium text-accentAmber mt-1">
                      {project.hook}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Challenge / Build / Result Narrative */}
                  <div className="space-y-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <div>
                      <span className="font-semibold text-accentIndigo font-mono uppercase text-[10px] block">Challenge</span>
                      <p className="mt-0.5 line-clamp-3 leading-relaxed">{project.challenge}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-accentAmber font-mono uppercase text-[10px] block">Build</span>
                      <p className="mt-0.5 line-clamp-3 leading-relaxed">{project.build}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-accentGreen font-mono uppercase text-[10px] block">Result</span>
                      <p className="mt-0.5 leading-relaxed">
                        {project.result}{' '}
                        {project.extensionDetail && (
                          <DevPlaceholder text={project.extensionDetail} className="mt-1 block" />
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-white/10 flex items-center space-x-2">
                    {isPlanned ? (
                      <div className="w-full text-center py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-darkMuted cursor-not-allowed">
                        In Progress (Architecture Stage)
                      </div>
                    ) : (
                      <>
                        {/* GitHub Button */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl glass-panel border border-white/10 hover:border-white/25 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>

                        {/* Live Demo Button */}
                        {typeof project.liveUrl === 'string' && project.liveUrl.includes('[ADD:') ? (
                          <div 
                            title="Live URL to be added in siteData.js" 
                            className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 rounded-xl bg-accentAmber/10 border border-accentAmber/30 text-accentAmber text-xs font-mono cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span><DevPlaceholder text={project.liveUrl} fallback="Live Demo" /></span>
                          </div>
                        ) : (
                          <a
                            href={project.liveUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-accentAmber text-gray-950 font-semibold text-xs hover:bg-amber-400 transition-colors shadow-xs"
                            aria-label={`Open live demo for ${project.title}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
