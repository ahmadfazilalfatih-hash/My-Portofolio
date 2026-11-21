import React, { useState } from 'react';
import { SKILLS, SkillItem } from '../data/portfolioData';
import { BrushUnderline, SparkleStar } from './DeckMotifs';

export const SkillsCard: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <article
      id="skills-card"
      className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2.5">
          <h2 className="text-2xl font-black text-navy-deep font-display tracking-tight whitespace-nowrap">
            My Skills
          </h2>
          <div className="w-8 h-0.5 bg-navy-deep shrink-0" />
        </div>
        <span className="text-royal-blue text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap">
          Core Tech &amp; Tools
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto">
        {/* 3x2 Circular App Badges */}
        <div className="sm:col-span-7 grid grid-cols-3 gap-3">
          {SKILLS.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() =>
                  setSelectedSkill((prev) => (prev?.id === skill.id ? null : skill))
                }
                aria-pressed={isSelected}
                className="flex flex-col items-center text-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-royal-blue rounded-xl p-1"
              >
                <div
                  className={`w-12 h-12 rounded-full font-black flex items-center justify-center text-sm border-2 border-white app-badge-shadow transition-transform duration-150 group-hover:scale-110 ${
                    skill.badgeClass
                  } ${isSelected ? 'ring-2 ring-royal-blue ring-offset-2 scale-105' : ''}`}
                >
                  {skill.code}
                </div>
                <span className="text-[11px] font-bold text-navy-deep mt-1.5 leading-tight">
                  {skill.labelLines[0]}
                  <br />
                  {skill.labelLines[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Vertical Divider */}
        <div className="hidden sm:block sm:col-span-1 h-36 border-r border-navy-deep/20 mx-auto" />

        {/* Right Motto Banner */}
        <div className="sm:col-span-4 text-center sm:text-left py-2 relative">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-royal-blue mb-1.5">
            <SparkleStar className="w-2.5 h-2.5" />
            <SparkleStar className="w-2.5 h-2.5" />
            <SparkleStar className="w-2.5 h-2.5" />
          </div>
          <h3 className="text-2xl font-black text-navy-deep font-display leading-tight">
            Design
            <br />
            Create
            <br />
            <span className="text-royal-blue">Inspire</span>
          </h3>
          <BrushUnderline className="w-24 h-3 text-royal-blue mt-1.5 inline-block" />
        </div>
      </div>

      {/* Interactive Spotlight or Footer */}
      {selectedSkill ? (
        <div className="pt-3 border-t border-navy-deep/10 mt-3 flex items-start justify-between gap-3">
          <div className="text-[11px] text-navy-muted leading-snug">
            <strong className="text-navy-deep font-bold">{selectedSkill.title}:</strong>{' '}
            {selectedSkill.focus}
          </div>
          <button
            type="button"
            onClick={() => setSelectedSkill(null)}
            className="text-[11px] font-bold text-royal-blue hover:text-navy-deep whitespace-nowrap shrink-0 cursor-pointer"
          >
            Clear
          </button>
        </div>
      ) : (
        <div className="text-[11px] text-navy-deep/70 font-semibold pt-3 border-t border-navy-deep/10 mt-3 flex flex-wrap justify-between items-center gap-2">
          <span>Continuous Learner · Problem Solver</span>
          <span className="text-royal-blue font-bold whitespace-nowrap">
            Sumatra Selatan → Jakarta
          </span>
        </div>
      )}
    </article>
  );
};
