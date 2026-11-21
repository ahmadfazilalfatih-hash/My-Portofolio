import React, { useEffect, useState } from 'react';
import { Check, Copy, Mail, X } from 'lucide-react';
import { PROFILE, SERVICES, ServiceItem, ServiceKey } from '../data/portfolioData';

interface CollaborationModalProps {
  initialService: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNotify: (message: string) => void;
}

export const CollaborationModal: React.FC<CollaborationModalProps> = ({
  initialService,
  isOpen,
  onClose,
  onNotify,
}) => {
  const [selectedKey, setSelectedKey] = useState<ServiceKey>(
    initialService?.key ?? 'ai-tech'
  );
  const [senderName, setSenderName] = useState('');
  const [projectNote, setProjectNote] = useState('');
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedKey(initialService.key);
    }
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeService =
    SERVICES.find((s) => s.key === selectedKey) ?? SERVICES[0];

  const buildBriefText = () => {
    const from = senderName.trim() || 'Potential Collaborator';
    const notes =
      projectNote.trim() ||
      `Interested in collaborating on ${activeService.title}.`;
    return `Hi Fazil,\n\nMy name is ${from}.\nFocus Area: ${activeService.title}\n\nProject Brief:\n${notes}\n\nBest regards,\n${from}`;
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildBriefText());
      setCopiedBrief(true);
      onNotify('Collaboration brief copied to clipboard!');
      setTimeout(() => setCopiedBrief(false), 2000);
    } catch {
      onNotify('Could not copy automatically. Please copy manually.');
    }
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `Collaboration Inquiry — ${activeService.title}`
  )}&body=${encodeURIComponent(buildBriefText())}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="collab-modal-title"
      onClick={onClose}
    >
      <div
        className="bento-card w-full max-w-lg p-6 sm:p-7 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close collaboration brief"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-deep/10 text-navy-deep hover:bg-navy-deep hover:text-white transition-colors flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">
              Collaboration Brief
            </span>
            <h3
              id="collab-modal-title"
              className="text-2xl font-black text-navy-deep font-display tracking-tight mt-0.5"
            >
              Start a Project with Fazil
            </h3>
          </div>

          {/* Service Selector */}
          <div className="grid grid-cols-2 gap-2">
            {SERVICES.map((service) => {
              const active = service.key === selectedKey;
              return (
                <button
                  key={service.key}
                  type="button"
                  onClick={() => setSelectedKey(service.key)}
                  className={`px-3 py-2 rounded-lg text-left text-xs font-bold border transition-colors cursor-pointer ${
                    active
                      ? 'bg-navy-deep text-white border-navy-deep shadow-xs'
                      : 'bg-white/75 text-navy-deep border-white hover:bg-white'
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>

          {/* Service Summary & Deliverables */}
          <div className="bg-white/70 border border-white rounded-xl p-3.5 space-y-2">
            <p className="text-xs text-navy-muted font-medium leading-relaxed">
              {activeService.summary}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeService.deliverables.map((item) => (
                <span
                  key={item}
                  className="bg-ice-badge text-navy-deep text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Brief Inputs */}
          <div className="space-y-3">
            <div>
              <label
                htmlFor="brief-name"
                className="block text-[11px] font-bold text-navy-deep uppercase tracking-wider mb-1"
              >
                Your Name or Organization
              </label>
              <input
                id="brief-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Budi — IT-PLN Tech Club"
                className="w-full rounded-lg border border-white bg-white/85 px-3 py-2 text-xs text-navy-deep placeholder:text-navy-muted/50 focus:outline-2 focus:outline-royal-blue"
              />
            </div>

            <div>
              <label
                htmlFor="brief-notes"
                className="block text-[11px] font-bold text-navy-deep uppercase tracking-wider mb-1"
              >
                Project Scope &amp; Timeline
              </label>
              <textarea
                id="brief-notes"
                rows={3}
                value={projectNote}
                onChange={(e) => setProjectNote(e.target.value)}
                placeholder="Share a quick overview of what you would like to build or design..."
                className="w-full rounded-lg border border-white bg-white/85 px-3 py-2 text-xs text-navy-deep placeholder:text-navy-muted/50 focus:outline-2 focus:outline-royal-blue resize-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-navy-deep/10 flex flex-wrap items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={handleCopyBrief}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/85 hover:bg-white text-navy-deep text-xs font-bold border border-white transition-colors cursor-pointer"
            >
              {copiedBrief ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Brief</span>
                </>
              )}
            </button>

            <a
              href={mailtoHref}
              onClick={() => onNotify('Opening email draft...')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-deep hover:bg-royal-blue text-white text-xs font-bold transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send via Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
