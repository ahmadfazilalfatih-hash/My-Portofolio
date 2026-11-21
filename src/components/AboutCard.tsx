import React, { useState } from 'react';
import { Camera, RotateCcw } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { BrushUnderline } from './DeckMotifs';

interface AboutCardProps {
  portraitSrc: string;
  isCustomPortrait: boolean;
  onUploadPortrait: (dataUrl: string) => void;
  onResetPortrait: () => void;
}

export const AboutCard: React.FC<AboutCardProps> = ({
  portraitSrc,
  isCustomPortrait,
  onUploadPortrait,
  onResetPortrait,
}) => {
  const [imgError, setImgError] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        setImgError(false);
        onUploadPortrait(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <article
      id="about-card"
      className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full"
    >
      {/* Top Wave Accent */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-44 w-44 text-royal-blue/15"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="85" cy="15" r="50" />
      </svg>

      <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-center my-auto">
        {/* Text Content */}
        <div className="flex-1 space-y-3 min-w-0">
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-black text-navy-deep font-display tracking-tight whitespace-nowrap">
              About Me
            </h2>
            <div className="w-8 h-0.5 bg-navy-deep shrink-0" />
          </div>

          <p className="text-xs sm:text-sm text-navy-muted leading-relaxed font-medium">
            Hi, I&apos;m <strong className="text-navy-deep font-bold">{PROFILE.fullName} ({PROFILE.nickname})</strong>, an Informatics Engineering student at{' '}
            <strong className="text-navy-deep font-bold">{PROFILE.university}</strong> hailing from {PROFILE.origin}.
          </p>

          <p className="text-xs sm:text-sm text-navy-muted leading-relaxed font-medium">
            With a keen eye for detail and a passion for{' '}
            <strong className="text-navy-deep font-semibold">Artificial Intelligence, Cloud communities</strong>, and graphic design, I enjoy turning ideas into clean, functional, and impactful digital works.
          </p>

          <div className="pt-2">
            <span className="font-hand text-2xl sm:text-3xl text-royal-blue font-bold tracking-wide block -rotate-1">
              Let&apos;s create something amazing!
            </span>
            <BrushUnderline className="w-40 h-2.5 text-royal-blue mt-0.5" />
          </div>
        </div>

        {/* Arched Portrait Container */}
        <div className="w-40 sm:w-44 shrink-0 flex flex-col items-center">
          <div className="relative w-36 h-48 sm:w-40 sm:h-52 arched-portrait overflow-hidden border-4 border-white bg-gradient-to-t from-periwinkle to-ice-badge flex items-center justify-center group shadow-md">
            {!imgError ? (
              <img
                src={portraitSrc}
                alt={`Portrait of ${PROFILE.fullName}`}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-deep to-royal-blue text-white p-4 text-center">
                <span className="font-display font-black text-3xl tracking-tight">AF</span>
                <span className="text-[11px] font-semibold text-ice-mid mt-1">
                  {PROFILE.shortSignature}
                </span>
              </div>
            )}

            <label
              htmlFor="portrait-upload"
              className="absolute inset-0 bg-navy-deep/65 opacity-0 group-hover:opacity-100 focus-within:opacity-100 flex flex-col items-center justify-center text-white text-xs font-bold cursor-pointer transition-opacity p-2 text-center"
            >
              <Camera className="w-6 h-6 mb-1" />
              <span>Change Photo</span>
              <input
                id="portrait-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
          </div>

          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[11px] text-navy-deep/70 font-semibold">
              {PROFILE.campusLocation}
            </span>
            {isCustomPortrait && (
              <button
                type="button"
                onClick={() => {
                  setImgError(false);
                  onResetPortrait();
                }}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-royal-blue hover:text-navy-deep transition-colors cursor-pointer"
                title="Reset to default portrait"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
