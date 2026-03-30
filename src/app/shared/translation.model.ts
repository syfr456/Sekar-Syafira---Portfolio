
export interface TranslationModel {
  nav: {
    stack: string;
    projects: string;
    experience: string;
    contact: string;
    theme: string;
    dark: string;
    light: string;
    language: string;
  };
    contact?: {
    title: string;
    emailLabel: string;
    whatsappLabel: string;
    linkedinLabel: string;
    };
  footer: {
    builtWith: string;
  };
  experience: {
    title: string;
    items: {
      role: string;
      company: string;
      period: string;
      desc: string;
    }[];
  };
  projects: {
    title: string;
    desc: string;
    demoLabel: string;
    codeLabel: string;
    privateLabel: string;
    items: {
      name: string;
      desc: string;
      tech: string[];
      link: string;
      github: string | null;
    }[];
  };
  stack: {
    title: string;
    items: string[];
  };
  hero: {
    greeting: string;
    role: string;
    highlight: string;
    with: string;
    cta: string;
    resumeLabel: string;
  };
}