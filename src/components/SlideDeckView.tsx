import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { ProjectKey, ServiceItem } from '../data/portfolioData';
import { AboutCard } from './AboutCard';
import { ContactCard } from './ContactCard';
import { ExperienceCard } from './ExperienceCard';
import { HeroCard } from './HeroCard';
import { ProjectsCard } from './ProjectsCard';
import { ServicesCard } from './ServicesCard';
import { SkillsCard } from './SkillsCard';

interface SlideDeckViewProps {
  portraitSrc: string;
  isCustomPortrait: boolean;
  onUploadPortrait: (dataUrl: string) => void;
  onResetPortrait: () => void;
  onCopyEmail: (email: string) => void;
  onSelectProject: (key: ProjectKey) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenInquiry: () => void;
  onExitSlideMode: () => void;
}

const SLIDE_LABELS = [
  '01. Cover',
  '02. About Me',
  '03. Skills',
  '04. Projects',
  '05. Experience',
  '06. Services',
  '07. Contact',
];

export const SlideDeckView: React.FC<SlideDeckViewProps> = ({
  portraitSrc,
  isCustomPortrait,
  onUploadPortrait,
  onResetPortrait,
  onCopyEmail,
  onSelectProject,
  onSelectService,
  onOpenInquiry,
  onExitSlideMode,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const goPrev = () =>
    setSlideIndex((i) => (i - 1 + SLIDE_LABELS.length) % SLIDE_LABELS.length);
  const goNext = () => setSlideIndex((i) => (i + 1) % SLIDE_LABELS.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setSlideIndex((i) => (i + 1) % SLIDE_LABELS.length);
      } else if (e.key === 'ArrowLeft') {
        setSlideIndex((i) => (i - 1 + SLIDE_LABELS.length) % SLIDE_LABELS.length);
      } else if (e.key === 'Escape') {
        onExitSlideMode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onExitSlideMode]);

  const renderActiveSlide = () => {
    switch (slideIndex) {
      case 0:
        return <HeroCard onCopyEmail={onCopyEmail} isSlideMode />;
      case 1:
        return (
          <AboutCard
            portraitSrc={portraitSrc}
            isCustomPortrait={isCustomPortrait}
            onUploadPortrait={onUploadPortrait}
            onResetPortrait={onResetPortrait}
          />
        );
      case 2:
        return <SkillsCard />;
      case 3:
        return <ProjectsCard onSelectProject={onSelectProject} />;
      case 4:
        return <ExperienceCard />;
      case 5:
        return <ServicesCard onSelectService={onSelectService} />;
      case 6:
        return (
          <ContactCard
            onCopyEmail={onCopyEmail}
            onOpenInquiry={onOpenInquiry}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[960px] mx-auto space-y-5">
      {/* Compact Deck Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/85 backdrop-blur-sm border border-white rounded-xl px-4 py-2.5 shadow-md">
        <div className="flex items-center gap-2 overflow-x-auto">
          {SLIDE_LABELS.map((label, idx) => {
            const active = idx === slideIndex;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setSlideIndex(idx)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-navy-deep text-white'
                    : 'text-navy-deep hover:bg-ice-mid'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onExitSlideMode}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ice-badge hover:bg-royal-blue hover:text-white text-navy-deep text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Bento Grid</span>
        </button>
      </div>

      {/* Focused Slide Stage */}
      <div className="min-h-[420px] flex flex-col justify-center">
        {renderActiveSlide()}
      </div>

      {/* Bottom Slide Controls */}
      <div className="flex items-center justify-between bg-white/85 backdrop-blur-sm border border-white rounded-xl px-4 py-2.5 shadow-md">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ice-light hover:bg-ice-mid text-navy-deep text-xs font-bold transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        <span className="text-xs font-bold text-navy-deep tabular-nums">
          Slide {slideIndex + 1} / {SLIDE_LABELS.length}
        </span>

        <button
          type="button"
          onClick={goNext}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-deep hover:bg-royal-blue text-white text-xs font-bold transition-colors cursor-pointer"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
