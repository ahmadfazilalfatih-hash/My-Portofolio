import React from 'react';
import { MessageSquare, Monitor, PenTool, Video } from 'lucide-react';
import { SERVICES, ServiceItem, ServiceKey } from '../data/portfolioData';
import { SplashMotif } from './DeckMotifs';

interface ServicesCardProps {
  onSelectService: (service: ServiceItem) => void;
}

const SERVICE_ICONS: Record<ServiceKey, React.ReactNode> = {
  'ai-tech': <Monitor className="w-4 h-4" />,
  'graphic-apparel': <PenTool className="w-4 h-4" />,
  'video-motion': <Video className="w-4 h-4" />,
  'arabic-editorial': <MessageSquare className="w-4 h-4" />,
};

export const ServicesCard: React.FC<ServicesCardProps> = ({ onSelectService }) => {
  return (
    <article
      id="services-card"
      className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full"
    >
      <div>
        {/* Title */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-black text-navy-deep font-display tracking-tight whitespace-nowrap">
              Services
            </h2>
            <div className="w-8 h-0.5 bg-navy-deep shrink-0" />
          </div>
          <SplashMotif className="text-xs shrink-0" />
        </div>

        {/* 4 Pastel Blue Rounded Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
          {SERVICES.map((service) => (
            <button
              key={service.key}
              type="button"
              onClick={() => onSelectService(service)}
              className="bg-ice-badge/80 hover:bg-ice-badge border border-white/85 p-3 rounded-xl flex flex-col items-center text-center transition-all duration-150 hover:scale-[1.03] shadow-xs cursor-pointer group focus-visible:outline-2 focus-visible:outline-royal-blue"
            >
              <div
                className={`w-9 h-9 rounded-lg text-white flex items-center justify-center mb-2 transition-colors ${
                  service.accentVariant === 'navy'
                    ? 'bg-navy-deep group-hover:bg-royal-blue'
                    : 'bg-royal-blue group-hover:bg-navy-deep'
                }`}
              >
                {SERVICE_ICONS[service.key]}
              </div>
              <span className="text-[11px] font-bold text-navy-deep leading-tight">
                {service.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-navy-deep/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-navy-deep/75 font-semibold">
        <span>Available for Freelance &amp; Tech Collaborations</span>
        <span className="text-royal-blue font-bold whitespace-nowrap">★ Ready 2026</span>
      </div>
    </article>
  );
};
