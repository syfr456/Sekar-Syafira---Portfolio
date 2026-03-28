import { TranslationModel } from "./translation.model";

export const EN: TranslationModel = {
  nav: {
    stack: 'Stack',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    language: 'Language'
  },
  hero: {
    greeting: 'HELLO, I AM',
    role: 'I am a Front-End Developer focused on building',
    highlight: 'interactive & efficient',
    with: 'web applications using Angular and TypeScript.',
    cta: 'VIEW MY PROJECTS',
    resumeLabel: 'RESUME'
  },
  stack: {
    title: 'TECH STACK',
    items: ['Angular', 'TypeScript', 'JavaScript', 'Tailwind', 'HTML/CSS', 'Bootstrap', 'DevExtreme', 'Ionic', 'Git', 'Figma']
  },
  projects: {
    title: 'PROJECT SHOWCASE',
    demoLabel: 'Live Demo',
    codeLabel: 'View Code',
    items: [
      { 
        name: 'ERP Model Website', 
        desc: 'Contributed to the development of ERP model websites and UI/UX optimization.', 
        tech: ['HTML', 'CSS', 'JavaScript'] 
      },
      { 
        name: 'Waste Bank Customer App', 
        desc: 'Android-based application for bank waste management using Iterative Incremental method.', 
        tech: ['Android', 'Java/Kotlin'] 
      }
    ]
  },
  experience: {
    title: 'WORK EXPERIENCE',
    items: [
      { 
        role: 'Front-End Developer', 
        company: 'PT. VADS Indonesia', 
        period: 'May 2025 - Present',
        desc: 'Building web application interfaces based on client needs and handling bugs to ensure smooth application performance.'
      },
      { 
        role: 'Front-End Developer', 
        company: 'PT Intercome Digital Indonesia (Avrist Assurance)', 
        period: 'May 2023 - April 2025',
        desc: 'Developing internal application front-ends and performing effective debugging to improve application quality.'
      },
      { 
        role: 'Mobile & Cloud Development (Intern)', 
        company: 'Nongsa Digital Park', 
        period: 'Sep 2021 - Jan 2022',
        desc: 'Collaborating in Agile/Scrum teams to build 3 different Android applications.'
      },
      { 
        role: 'Front-End Developer (Intern)', 
        company: 'PT Inforsys Indonesia',
        period: 'Mar 2021 - Aug 2021',
        desc: 'Contributed to the development of ERP model websites and UI/UX optimization to enhance application functionality.' 
      }

    ]
  },
  contact: {
    title: 'GET IN TOUCH',
    emailLabel: 'Official Email',
    whatsappLabel: 'WhatsApp',
    linkedinLabel: 'LinkedIn'
  },
  footer: { builtWith: 'Built with' },
};