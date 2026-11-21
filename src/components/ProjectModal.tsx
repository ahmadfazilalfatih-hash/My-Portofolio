import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';
import { PROJECTS, ProjectKey } from '../data/portfolioData';

interface ProjectModalProps {
  projectKey: ProjectKey | null;
  onClose: () => void;
  onChangeProject: (key: ProjectKey) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  projectKey,
  onClose,
  onChangeProject,
}) => {
  useEffect(() => {
    if (!projectKey) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const idx = PROJECTS.findIndex((p) => p.key === projectKey);
        const next = PROJECTS[(idx + 1) % PROJECTS.length];
        onChangeProject(next.key);
      } else if (e.key === 'ArrowLeft') {
        const idx = PROJECTS.findIndex((p) => p.key === projectKey);
        const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
        onChangeProject(prev.key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projectKey, onClose, onChangeProject]);

  if (!projectKey) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.key === projectKey);
  const project = PROJECTS[currentIndex];
  if (!project) return null;

  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const renderArtworkBanner = () => {
    if (project.key === 'portfolio') {
      return (
        <div className="h-36 rounded-xl bg-gradient-to-br from-navy-deep to-navy-muted flex items-center justify-between px-6 text-white relative overflow-hidden">
          <div>
            <span className="text-[11px] font-mono text-periwinkle tabular-nums">
              Slide Deck Edition · {project.year}
            </span>
            <p className="font-display font-black text-2xl mt-1 tracking-tight">
              Ice-Blue Editorial Bento
            </p>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-royal-blue flex items-center justify-center bg-white/10 shrink-0">
            <span className="font-display font-black text-lg">AF</span>
          </div>
        </div>
      );
    }

    if (project.key === 'apparel') {
      return (
        <div className="h-36 rounded-xl bg-gradient-to-tr from-sky-200 to-indigo-300 flex items-center justify-between px-6 text-navy-deep relative overflow-hidden">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-royal-blue">
              Komunitas Al-Qur&apos;an Lantabur
            </span>
            <p className="font-display font-black text-2xl mt-1 tracking-tight">
              Apparel &amp; Vector Craft
            </p>
          </div>
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-navy-deep shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 2l-2 3H10L8 2 2 5l2 5 2-1v11h12V9l2 1 2-5-6-3z" />
          </svg>
        </div>
      );
    }

    return (
      <div className="h-36 rounded-xl bg-gradient-to-br from-periwinkle to-royal-blue flex items-center justify-between px-6 text-white relative overflow-hidden">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-ice-mid">
            Orthography &amp; Language Lab
          </span>
          <p className="font-display font-black text-2xl mt-1 tracking-tight">
            Mushaf Editorial &amp; NLP
          </p>
        </div>
        <span className="text-4xl font-bold font-serif shrink-0">المصحف</span>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="bento-card w-full max-w-xl p-6 sm:p-7 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-deep/10 text-navy-deep hover:bg-navy-deep hover:text-white transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-royal-blue"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Project Index Tabs */}
        <div className="flex items-center gap-2 text-xs font-bold text-royal-blue mb-4 pr-10">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{project.year}</span>
        </div>

        {renderArtworkBanner()}

        <div className="mt-5 space-y-4">
          <h3
            id="project-modal-title"
            className="text-2xl font-black text-navy-deep font-display tracking-tight"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-navy-muted leading-relaxed font-medium">
            {project.summary}
          </p>

          <div>
            <h4 className="text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
              Key Highlights
            </h4>
            <ul className="space-y-1.5 text-xs text-navy-muted font-medium">
              {project.highlights.map((hl) => (
                <li key={hl} className="flex items-start gap-2">
                  <span className="text-royal-blue font-black mt-0.5">•</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">
              Technologies &amp; Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-ice-badge text-navy-deep font-bold text-[11px] px-2.5 py-1 rounded-md border border-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="pt-4 mt-2 border-t border-navy-deep/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onChangeProject(prevProject.key)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white text-navy-deep text-xs font-bold border border-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <button
                type="button"
                onClick={() => onChangeProject(nextProject.key)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white text-navy-deep text-xs font-bold border border-white transition-colors cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-bold text-navy-muted hover:text-navy-deep transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy-deep hover:bg-royal-blue text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                <span>{project.linkLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
