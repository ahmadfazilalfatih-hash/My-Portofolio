import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectKey } from '../data/portfolioData';
import { SplashMotif } from './DeckMotifs';

interface ProjectsCardProps {
  onSelectProject: (key: ProjectKey) => void;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ onSelectProject }) => {
  const renderThumbnail = (key: ProjectKey) => {
    if (key === 'portfolio') {
      return (
        <div className="h-28 rounded-lg bg-gradient-to-br from-navy-deep to-navy-muted flex flex-col items-center justify-center p-2 text-white relative overflow-hidden">
          <span className="absolute top-1.5 right-2 text-periwinkle text-[11px] font-mono tabular-nums">
            2026
          </span>
          <div className="w-10 h-10 rounded-full border-2 border-royal-blue flex items-center justify-center mb-1 bg-white/10">
            <span className="font-display font-black text-xs text-white">AF</span>
          </div>
          <span className="text-xs font-bold tracking-wider text-center">Fazil Portfolio</span>
        </div>
      );
    }

    if (key === 'apparel') {
      return (
        <div className="h-28 rounded-lg bg-gradient-to-tr from-sky-200 to-indigo-300 flex flex-col items-center justify-center p-2 relative overflow-hidden">
          <svg
            aria-hidden="true"
            className="w-12 h-12 text-navy-deep drop-shadow-sm"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 2l-2 3H10L8 2 2 5l2 5 2-1v11h12V9l2 1 2-5-6-3z" />
          </svg>
          <span className="text-[10px] font-black uppercase text-navy-deep tracking-wider mt-1">
            Lan Tabur
          </span>
        </div>
      );
    }

    return (
      <div className="h-28 rounded-lg bg-gradient-to-br from-periwinkle to-royal-blue flex flex-col items-center justify-center p-2 text-white relative overflow-hidden">
        <div className="text-center">
          <span className="text-xl font-bold font-serif">المصحف</span>
          <p className="text-[9px] uppercase tracking-widest font-bold mt-1 text-ice-mid">
            Editorial Lab
          </p>
        </div>
      </div>
    );
  };

  return (
    <article
      id="projects"
      className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full"
    >
      <div>
        {/* Title & Motifs */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-black text-navy-deep font-display tracking-tight whitespace-nowrap">
              My Projects
            </h2>
            <SplashMotif className="text-sm shrink-0" />
          </div>
          <span className="text-xs font-bold text-royal-blue whitespace-nowrap">
            Click card for details
          </span>
        </div>

        {/* 3 Visual Showcase Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
          {PROJECTS.map((project) => (
            <button
              key={project.key}
              type="button"
              onClick={() => onSelectProject(project.key)}
              className="group cursor-pointer text-left bg-white rounded-xl p-3 border border-white shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-1 flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-royal-blue"
            >
              {renderThumbnail(project.key)}
              <div className="mt-2.5">
                <h3 className="font-bold text-xs text-navy-deep leading-tight group-hover:text-royal-blue transition-colors">
                  {project.shortTitle}
                </h3>
                <p className="text-[10px] text-navy-muted font-medium mt-0.5">
                  {project.shortSubtitle}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-[11px] text-navy-deep/70 font-semibold pt-3 mt-4 border-t border-navy-deep/10 flex items-center justify-between gap-2">
        <span>Creative Direction &amp; Code</span>
        <button
          type="button"
          onClick={() => onSelectProject('portfolio')}
          className="inline-flex items-center gap-1 text-royal-blue hover:text-navy-deep font-bold cursor-pointer whitespace-nowrap transition-colors"
        >
          <span>Full Case Studies</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
