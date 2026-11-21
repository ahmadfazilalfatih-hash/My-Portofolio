import React from 'react';
import { Github, Instagram, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { BrushUnderline, SparkleStar } from './DeckMotifs';

interface ContactCardProps {
  onCopyEmail: (email: string) => void;
  onOpenInquiry?: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  onCopyEmail,
  onOpenInquiry,
}) => {
  return (
    <article
      id="contact"
      className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full"
    >
      {/* Floating Corner Wave */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 text-royal-blue/20"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M0,100 C40,90 70,70 100,0 L100,100 Z" />
      </svg>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto">
        {/* Stacked Callout */}
        <div className="sm:col-span-6 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-navy-deep font-display leading-[1.08] tracking-tight">
            Let&apos;s Work
            <br />
            <span className="text-royal-blue">Together!</span>
          </h2>
          <div className="flex items-center gap-2">
            <SparkleStar className="w-3.5 h-3.5 text-royal-blue" />
            {onOpenInquiry && (
              <button
                type="button"
                onClick={onOpenInquiry}
                className="text-xs font-bold text-royal-blue hover:text-navy-deep underline underline-offset-4 cursor-pointer transition-colors"
              >
                Send a project brief
              </button>
            )}
          </div>
        </div>

        {/* Contact Items */}
        <div className="sm:col-span-6 space-y-2 text-xs font-semibold text-navy-deep">
          <button
            type="button"
            onClick={() => onCopyEmail(PROFILE.email)}
            className="w-full flex items-center gap-2.5 p-2 rounded-lg bg-white/75 hover:bg-white transition-colors border border-white shadow-xs group text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-royal-blue"
            title="Copy email address"
          >
            <span className="w-6 h-6 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0 group-hover:bg-royal-blue transition-colors">
              <Mail className="w-3 h-3" />
            </span>
            <span className="truncate">{PROFILE.email}</span>
          </button>

          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-lg bg-white/75 hover:bg-white transition-colors border border-white shadow-xs group focus-visible:outline-2 focus-visible:outline-royal-blue"
          >
            <span className="w-6 h-6 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0 group-hover:bg-royal-blue transition-colors">
              <Github className="w-3 h-3" />
            </span>
            <span className="truncate">github.com/{PROFILE.githubHandle}</span>
          </a>

          <a
            href={PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-lg bg-white/75 hover:bg-white transition-colors border border-white shadow-xs group focus-visible:outline-2 focus-visible:outline-royal-blue"
          >
            <span className="w-6 h-6 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0 group-hover:bg-royal-blue transition-colors">
              <Instagram className="w-3 h-3" />
            </span>
            <span className="truncate">{PROFILE.instagramHandle}</span>
          </a>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="relative z-10 mt-4 pt-3 border-t border-navy-deep/15 flex items-center justify-between text-[11px] font-bold text-navy-deep tracking-wider uppercase">
        <span>Thank you for watching</span>
        <div className="flex items-center gap-1.5 text-royal-blue">
          <span aria-hidden="true">♥</span>
          <BrushUnderline className="w-12 h-2.5" />
        </div>
      </div>
    </article>
  );
};
