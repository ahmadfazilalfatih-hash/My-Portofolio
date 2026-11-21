import React from 'react';
import { ArrowRight, Github, Instagram, Layers, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import {
  HeroBottomLeftWave,
  HeroTopRightWave,
  SparkleStar,
} from './DeckMotifs';

interface HeroCardProps {
  onCopyEmail: (email: string) => void;
  onEnterSlideMode?: () => void;
  isSlideMode?: boolean;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  onCopyEmail,
  onEnterSlideMode,
  isSlideMode = false,
}) => {
  return (
    <section
      id="hero-card"
      className="bento-card p-6 sm:p-9"
      aria-label="Hero presentation slide"
    >
      <HeroTopRightWave />
      <HeroBottomLeftWave />

      {/* Sparkle stars */}
      <SparkleStar className="absolute top-12 right-36 h-4 w-4 text-navy-deep/70 hidden sm:block" />
      <SparkleStar className="absolute top-28 left-14 h-3.5 w-3.5 text-navy-deep/60" />
      <SparkleStar className="absolute bottom-24 right-20 h-4 w-4 text-royal-blue" />

      <div className="relative z-10">
        {/* Top Row Metadata */}
        <header className="flex flex-wrap items-center justify-between gap-4 pb-4">
          <div className="flex items-center gap-3.5">
            <span className="font-bold text-xs sm:text-sm tracking-wider uppercase text-navy-deep leading-tight">
              {PROFILE.rolePrimary}
              <br />
              <span className="text-royal-blue">{PROFILE.roleSecondary}</span>
            </span>
            <div className="hidden sm:block w-12 h-0.5 bg-navy-deep" />
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {onEnterSlideMode && !isSlideMode && (
              <button
                type="button"
                onClick={onEnterSlideMode}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-deep bg-white/80 hover:bg-white px-3.5 py-2 rounded-full border border-white transition-colors shadow-xs cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-blue"
              >
                <Layers className="w-3.5 h-3.5 text-royal-blue" />
                <span>Slide Deck</span>
              </button>
            )}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-navy-deep px-4 py-2 rounded-full hover:bg-royal-blue transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-blue"
            >
              <span>2026 Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* Center Wordmark with Single-Line Script Signature Overlay */}
        <div className="relative py-10 sm:py-16 text-center select-none">
          <h1
            className="text-6xl sm:text-8xl md:text-[116px] lg:text-[132px] font-black text-navy-deep leading-none font-display lowercase"
            style={{ letterSpacing: '-0.04em' }}
          >
            portfolio
          </h1>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex items-center -rotate-3 translate-y-2 sm:translate-y-3 whitespace-nowrap">
              <span className="font-script text-white text-5xl sm:text-7xl md:text-8xl lg:text-[102px] font-normal leading-none hero-script-shadow px-2 tracking-wide">
                {PROFILE.shortSignature}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Contact Strip (4 Columns) */}
        <nav
          aria-label="Social and contact links"
          className="mt-4 pt-5 border-t border-navy-deep/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-semibold text-navy-deep"
        >
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/55 transition-colors group focus-visible:outline-2 focus-visible:outline-royal-blue"
          >
            <span className="w-7 h-7 rounded-full bg-navy-deep text-white flex items-center justify-center font-bold text-[11px] shrink-0 group-hover:bg-royal-blue transition-colors">
              in
            </span>
            <span className="truncate">{PROFILE.linkedinLabel}</span>
          </a>

          <button
            type="button"
            onClick={() => onCopyEmail(PROFILE.email)}
            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/55 transition-colors text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-royal-blue"
            title="Copy email address"
          >
            <span className="w-7 h-7 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0 group-hover:bg-royal-blue transition-colors">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <span className="truncate">{PROFILE.email}</span>
          </button>

          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/55 transition-colors group focus-visible:outline-2 focus-visible:outline-royal-blue"
          >
            <span className="w-7 h-7 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0 group-hover:bg-royal-blue transition-colors">
              <Github className="w-3.5 h-3.5" />
            </span>
            <span className="truncate">{PROFILE.githubHandle}</span>
          </a>

          <a
            href={PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/55 transition-colors group focus-visible:outline-2 focus-visible:outline-royal-blue"
          >
            <span className="w-7 h-7 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0 group-hover:bg-royal-blue transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </span>
            <span className="truncate">{PROFILE.instagramHandle}</span>
          </a>
        </nav>
      </div>
    </section>
  );
};
