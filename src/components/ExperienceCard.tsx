import React, { useState } from 'react';
import { EXPERIENCE_ITEMS, ExperienceCategory } from '../data/portfolioData';
import { LoopDoodle } from './DeckMotifs';

const FILTER_OPTIONS: { key: ExperienceCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'org', label: 'Community' },
  { key: 'edu', label: 'Edu & Awards' },
];

export const ExperienceCard: React.FC = () => {
  const [filter, setFilter] = useState<ExperienceCategory>('all');

  const visibleItems = EXPERIENCE_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <article
      id="experience-card"
      className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full"
    >
      <div>
        {/* Header and Single-Line Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-black text-navy-deep font-display tracking-tight whitespace-nowrap">
              Experience
            </h2>
            <div className="w-6 h-0.5 bg-navy-deep shrink-0" />
          </div>

          <div
            role="tablist"
            aria-label="Filter experience entries"
            className="inline-flex items-center gap-1 bg-white/75 p-1 rounded-lg border border-white text-[11px] font-bold shrink-0"
          >
            {FILTER_OPTIONS.map((opt) => {
              const active = filter === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(opt.key)}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-royal-blue ${
                    active
                      ? 'bg-navy-deep text-white shadow-xs'
                      : 'text-navy-deep hover:text-royal-blue'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 ml-1.5 space-y-4">
          <div
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-royal-blue/30 rounded-full"
          />

          {visibleItems.map((item) => (
            <div key={item.id} className="relative">
              <div
                aria-hidden="true"
                className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-white shadow-xs ${
                  item.category === 'edu' ? 'bg-navy-deep' : 'bg-royal-blue'
                }`}
              />
              <h3 className="text-xs font-black text-navy-deep leading-tight">
                {item.title}
              </h3>
              <p className="text-[11px] text-royal-blue font-bold mt-0.5">
                {item.organization}
              </p>
              <p className="text-[11px] text-navy-muted mt-0.5 leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Loop Footer */}
      <div className="pt-3 flex justify-end">
        <LoopDoodle className="w-16 h-5 text-royal-blue/70" />
      </div>
    </article>
  );
};
