import { useCallback, useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { AboutCard } from './components/AboutCard';
import { CollaborationModal } from './components/CollaborationModal';
import { ContactCard } from './components/ContactCard';
import { ExperienceCard } from './components/ExperienceCard';
import { HeroCard } from './components/HeroCard';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsCard } from './components/ProjectsCard';
import { ServicesCard } from './components/ServicesCard';
import { SkillsCard } from './components/SkillsCard';
import { SlideDeckView } from './components/SlideDeckView';
import { PROFILE, ProjectKey, ServiceItem } from './data/portfolioData';

export default function App() {
  const [viewMode, setViewMode] = useState<'bento' | 'slides'>('bento');
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);
  const [collabOpen, setCollabOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [portraitSrc, setPortraitSrc] = useState<string>(PROFILE.portraitPath);
  const [isCustomPortrait, setIsCustomPortrait] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = useCallback(
    async (email: string) => {
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard!');
      } catch {
        showToast(`Email: ${email}`);
      }
    },
    [showToast]
  );

  const handleUploadPortrait = useCallback(
    (dataUrl: string) => {
      setPortraitSrc(dataUrl);
      setIsCustomPortrait(true);
      showToast('Portrait preview updated!');
    },
    [showToast]
  );

  const handleResetPortrait = useCallback(() => {
    setPortraitSrc(PROFILE.portraitPath);
    setIsCustomPortrait(false);
    showToast('Portrait reset to default.');
  }, [showToast]);

  const handleSelectService = useCallback((service: ServiceItem) => {
    setSelectedService(service);
    setCollabOpen(true);
  }, []);

  const handleOpenInquiry = useCallback(() => {
    setSelectedService(null);
    setCollabOpen(true);
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 selection:bg-royal-blue selection:text-white">
      {viewMode === 'bento' ? (
        <main className="max-w-[1120px] mx-auto space-y-6">
          <HeroCard
            onCopyEmail={handleCopyEmail}
            onEnterSlideMode={() => setViewMode('slides')}
          />

          <section
            aria-label="Profile and skills"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            <AboutCard
              portraitSrc={portraitSrc}
              isCustomPortrait={isCustomPortrait}
              onUploadPortrait={handleUploadPortrait}
              onResetPortrait={handleResetPortrait}
            />
            <SkillsCard />
          </section>

          <section
            aria-label="Projects and experience"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            <ProjectsCard onSelectProject={(key) => setActiveProject(key)} />
            <ExperienceCard />
          </section>

          <section
            aria-label="Services and contact"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            <ServicesCard onSelectService={handleSelectService} />
            <ContactCard
              onCopyEmail={handleCopyEmail}
              onOpenInquiry={handleOpenInquiry}
            />
          </section>
        </main>
      ) : (
        <main>
          <SlideDeckView
            portraitSrc={portraitSrc}
            isCustomPortrait={isCustomPortrait}
            onUploadPortrait={handleUploadPortrait}
            onResetPortrait={handleResetPortrait}
            onCopyEmail={handleCopyEmail}
            onSelectProject={(key) => setActiveProject(key)}
            onSelectService={handleSelectService}
            onOpenInquiry={handleOpenInquiry}
            onExitSlideMode={() => setViewMode('bento')}
          />
        </main>
      )}

      <ProjectModal
        projectKey={activeProject}
        onClose={() => setActiveProject(null)}
        onChangeProject={(key) => setActiveProject(key)}
      />

      <CollaborationModal
        initialService={selectedService}
        isOpen={collabOpen}
        onClose={() => setCollabOpen(false)}
        onNotify={showToast}
      />

      {/* Toast Notification */}
      <aside
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-6 bg-navy-deep text-white text-xs font-bold px-4 py-3 rounded-xl shadow-xl transition-all duration-200 pointer-events-none z-50 flex items-center gap-2 ${
          toastMessage
            ? 'translate-y-0 opacity-100'
            : 'translate-y-6 opacity-0'
        }`}
      >
        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>{toastMessage ?? ''}</span>
      </aside>
    </div>
  );
}
