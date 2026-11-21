export type ProjectKey = 'portfolio' | 'apparel' | 'quran';
export type ExperienceCategory = 'all' | 'org' | 'edu';
export type ServiceKey = 'ai-tech' | 'graphic-apparel' | 'video-motion' | 'arabic-editorial';

export interface ProjectItem {
  key: ProjectKey;
  shortTitle: string;
  shortSubtitle: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  highlights: string[];
  tools: string[];
  linkUrl: string;
  linkLabel: string;
}

export interface SkillItem {
  id: string;
  code: string;
  labelLines: [string, string];
  title: string;
  focus: string;
  badgeClass: string;
}

export interface ExperienceItem {
  id: string;
  category: Exclude<ExperienceCategory, 'all'>;
  title: string;
  organization: string;
  description: string;
}

export interface ServiceItem {
  key: ServiceKey;
  title: string;
  summary: string;
  deliverables: string[];
  accentVariant: 'navy' | 'royal';
}

export const PROFILE = {
  fullName: 'Ahmad Fazil Al Fatih',
  shortSignature: 'Ahmad Fazil',
  nickname: 'Fazil',
  rolePrimary: 'Aspiring AI Engineer',
  roleSecondary: '& Graphic Designer',
  email: 'ahmadfazilalfatih@gmail.com',
  githubHandle: 'ahmadfazilalfatih-hash',
  githubUrl: 'https://github.com/ahmadfazilalfatih-hash',
  instagramHandle: '@quietluxe.__',
  instagramUrl: 'https://instagram.com/quietluxe.__',
  linkedinLabel: 'Ahmad Fazil Al Fatih',
  linkedinUrl: 'https://linkedin.com',
  university: 'Institut Teknologi PLN',
  origin: 'Pagar Alam, Sumatra Selatan',
  campusLocation: 'IT-PLN Jakarta',
  portraitPath: '/assets/fazil-portrait.jpg',
};

export const SKILLS: SkillItem[] = [
  {
    id: 'ai',
    code: 'AI',
    labelLines: ['Artificial', 'Intelligence'],
    title: 'Artificial Intelligence',
    focus: 'Exploring applied machine learning concepts, NLP indexing experiments, and prompt-driven workflows.',
    badgeClass: 'bg-navy-deep text-white',
  },
  {
    id: 'py',
    code: 'Py',
    labelLines: ['Python &', 'Logic'],
    title: 'Python & Algorithmic Logic',
    focus: 'Structured problem solving, data parsing scripts, and foundational computer science coursework at IT-PLN.',
    badgeClass: 'bg-royal-blue text-white',
  },
  {
    id: 'ik',
    code: 'Ik',
    labelLines: ['Inkscape', 'Vector'],
    title: 'Inkscape Vector Illustration',
    focus: 'Precision vector curves, screen-print ready merchandise graphics, and scalable editorial emblems.',
    badgeClass: 'bg-amber-600 text-white',
  },
  {
    id: 'cv',
    code: 'Cv',
    labelLines: ['Canva', 'Design'],
    title: 'Canva Visual Systems',
    focus: 'Rapid presentation slide decks, social campaign visuals, and clean typographic layouts.',
    badgeClass: 'bg-[#00C4CC] text-white',
  },
  {
    id: 'cc',
    code: 'Cc',
    labelLines: ['CapCut', 'Video'],
    title: 'CapCut Video & Motion',
    focus: 'Short-form rhythmic editing, kinetic captions, and community event highlight reels.',
    badgeClass: 'bg-slate-900 text-white',
  },
  {
    id: 'ar',
    code: 'ع',
    labelLines: ['Arabic &', 'Editorial'],
    title: 'Arabic Orthography & Editorial',
    focus: 'Mushaf layout proofing, diacritic accuracy checks, and classical Arabic typographic balance.',
    badgeClass: 'bg-emerald-700 text-white',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    key: 'portfolio',
    shortTitle: 'Personal Portfolio',
    shortSubtitle: 'Tailwind · Editorial React',
    title: 'Portfolio Website 2026',
    category: 'Web Development & Editorial UI',
    year: '2026',
    summary:
      'Single-page presentation portfolio for Ahmad Fazil Al Fatih with an Ice-Blue Editorial Bento aesthetic, responsive slide-deck grid, and tactile micro-interactions reflecting technical and creative work at IT-PLN.',
    highlights: [
      'Clean Ice-Blue & Royal Navy editorial slide hierarchy with organic corner wave motifs.',
      'Dual viewing experience combining a full bento overview and focused presentation slides.',
      'Interactive case study inspector, filterable timeline, and custom portrait preview.',
    ],
    tools: ['React & TypeScript', 'Tailwind CSS', 'Google Fonts', 'Responsive Grid'],
    linkUrl: 'https://github.com/ahmadfazilalfatih-hash',
    linkLabel: 'View on GitHub',
  },
  {
    key: 'apparel',
    shortTitle: 'Apparel & Kaos',
    shortSubtitle: 'Merchandise Vector',
    title: 'Desain Grafis Kaos — Lan Tabur',
    category: 'Merchandise & Vector Art',
    year: '2025',
    summary:
      'Custom Arabic typographic and vector apparel composition created for Komunitas Al-Qur\'an Lantabur merchandise. Crafted with clean path geometry in Inkscape and staged for screen printing production.',
    highlights: [
      'Balanced Arabic calligraphy lockup paired with crisp modern geometric framing.',
      'Print-ready color separations optimized for dark and ice-blue fabric variants.',
      'Delivered cohesive community identity across shirts, tags, and promotional posts.',
    ],
    tools: ['Inkscape Vector', 'Canva Pro', 'Print Production', 'Typography'],
    linkUrl: 'https://instagram.com/quietluxe.__',
    linkLabel: 'View Showcase',
  },
  {
    key: 'quran',
    shortTitle: "Qur'an Editorial",
    shortSubtitle: 'Typography & Proofing',
    title: "Qur'an Editorial & AI Research Lab",
    category: 'Digital Editorial & Language Processing',
    year: '2026',
    summary:
      'Editorial inspection of Mushaf page layouts, Arabic orthography standards, and ongoing experiments combining Python logic and NLP techniques for verse segmentation and recitation indexing.',
    highlights: [
      'Two years leading Mushaf layout proofing and diacritic consistency checks.',
      'Structured checklist workflows reducing typographic discrepancies before publication.',
      'Early Python & NLP prototypes exploring automated Arabic text indexing.',
    ],
    tools: ['Editorial Arabic', 'Python Basics', 'NLP Research', 'IT-PLN Lab'],
    linkUrl: 'https://github.com/ahmadfazilalfatih-hash',
    linkLabel: 'Explore Lab Notes',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'aws-2026',
    category: 'org',
    title: 'Volunteer — AWS Community Day 2026',
    organization: 'AWS User Group Indonesia · 2026',
    description:
      'Active contributor in event logistics and technical session coordination for cloud learners.',
  },
  {
    id: 'quran-editors',
    category: 'org',
    title: "Head of Qur'an Editors",
    organization: "Al-Qur'an Lantabur Community · 2 Years",
    description:
      'Led mushaf layout inspection, Arabic typography standards, and editorial consistency.',
  },
  {
    id: 'hadroh',
    category: 'org',
    title: 'Member & Performer (4 Years)',
    organization: 'Hadroh Group Rijalul Musthofa',
    description:
      'Hadroh ensemble from Pondok Pesantren Lantabur.',
  },
  {
    id: 'it-pln',
    category: 'edu',
    title: 'S1 Teknik Informatika',
    organization: 'Institut Teknologi PLN · Jakarta',
    description:
      'Focusing on Artificial Intelligence, algorithms, and applied software engineering systems.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    key: 'ai-tech',
    title: 'AI & Tech Enthusiast',
    summary: 'Exploratory AI prototypes, Python scripting, and clean frontend web builds for student and community initiatives.',
    deliverables: ['Python & Logic Prototypes', 'Responsive Portfolio & Web UI', 'Cloud Community Support'],
    accentVariant: 'navy',
  },
  {
    key: 'graphic-apparel',
    title: 'Graphic & Apparel',
    summary: 'Distinctive vector merchandise, community event posters, and brand identity assets built for print and social.',
    deliverables: ['Apparel & Merch Vector Art', 'Event Posters & Slide Decks', 'Social Media Visual Kits'],
    accentVariant: 'royal',
  },
  {
    key: 'video-motion',
    title: 'Video & Motion',
    summary: 'Crisp short-form edits, event recaps, and rhythmic motion storytelling tailored for Instagram and community channels.',
    deliverables: ['Event Highlight Reels', 'Kinetic Typographic Edits', 'Short-Form Social Cuts'],
    accentVariant: 'navy',
  },
  {
    key: 'arabic-editorial',
    title: 'Arabic & Editorial',
    summary: 'Careful Arabic script proofreading, mushaf layout checking, and balanced bilingual typographic composition.',
    deliverables: ['Mushaf & Layout Proofing', 'Arabic Calligraphic Lockups', 'Editorial Document Review'],
    accentVariant: 'royal',
  },
];
