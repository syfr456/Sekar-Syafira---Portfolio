import { TranslationModel } from './translation.model';

export const ID: TranslationModel = {
  nav: {
    stack: 'Keahlian',
    projects: 'Proyek',
    experience: 'Pengalaman',
    contact: 'Kontak',
    theme: 'Tema',
    dark: 'Gelap',
    light: 'Terang',
    language: 'Bahasa',
  },
  hero: {
    greeting: 'HALO, SAYA',
    role: 'Saya seorang Front-End Developer yang fokus membangun aplikasi web',
    highlight: 'interaktif & efisien',
    with: 'menggunakan Angular dan TypeScript.',
    cta: 'LIHAT PROYEK SAYA',
    resumeLabel: 'RESUME',
  },
  stack: {
    title: 'KEAHLIAN TEKNIS',
    items: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'Tailwind',
      'HTML/CSS',
      'Bootstrap',
      'DevExtreme',
      'Ionic',
      'Git',
      'Docker',
      'Chart.js',
      'Figma',
    ],
  },
  projects: {
  title: 'PROYEK PILIHAN',
  demoLabel: 'Demo Langsung',
  codeLabel: 'Lihat Kode',
  privateLabel: 'Kode Privat',
  items: [
    { 
      name: 'BSKB Mobile (Bank Sampah)', 
      desc: 'Aplikasi pengelolaan sampah berbasis mobile dan web yang membantu operasional Bank Sampah Kuantan Bersih.', 
      tech: ['Ionic', 'Angular', 'Firebase'],
      link: 'https://bskbmobile.web.app',
      github: 'https://github.com/syfr456/bskb-mobile'
    },
    { 
      name: 'Mochi - Camilan Nikmat dan Lembut', 
      desc: 'Landing page responsif untuk produk camilan mochi dengan fokus pada antarmuka pengguna yang menarik.', 
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://landingpage-mochi.vercel.app/',
      github: 'https://github.com/syfr456/Landingpage-Mochi'
    },
    { 
      name: 'Opsi Consulting', 
      desc: 'Landing page profesional untuk jasa konsultan pajak UMKM dan perorangan dengan fitur kalkulator simulasi pajak.', 
      tech: ['Angular', 'Tailwind CSS', 'TypeScript'],
      link: 'https://www.opsiconsulting.id/',
      github: null 
    },
    { 
      name: 'Sinkronik ID', 
      desc: 'Platform solusi digital marketing dan branding untuk membantu bisnis meningkatkan skalabilitas melalui strategi digital.', 
      tech: ['Angular', 'TypeScript', 'SCSS'],
      link: 'https://sinkronik.id',
      github: null
    },
    { 
      name: 'Film Archivement Management', 
      desc: 'Sistem manajemen arsip film untuk Kementerian Kebudayaan Republik Indonesia guna pengarsipan data yang terstruktur.', 
      tech: ['Angular', 'PrimeNG', 'RxJS'],
      link: 'https://arsipfilm.co.id',
      github: null
    }
  ]
},
  experience: {
    title: 'PENGALAMAN KERJA',
    items: [
      {
        role: 'Front-End Developer',
        company: 'PT. VADS Indonesia',
        period: 'Mei 2025 - Sekarang',
        desc: 'Membangun tampilan aplikasi web sesuai kebutuhan klien dan menangani bug untuk memastikan performa aplikasi yang lancar.',
      },
      {
        role: 'Front-End Developer',
        company: 'PT Intercome Digital Indonesia (Avrist Assurance)',
        period: 'Mei 2023 - April 2025',
        desc: 'Mengembangkan front-end aplikasi internal dan melakukan debugging efektif untuk meningkatkan kualitas aplikasi.',
      },
      {
        role: 'Mobile & Cloud Development (Intern)',
        company: 'Nongsa Digital Park',
        period: 'Sep 2021 - Jan 2022',
        desc: 'Berkolaborasi dalam tim Agile/Scrum untuk membangun 3 aplikasi Android yang berbeda.',
      },
      {
        role: 'Front-End Developer (Intern)',
        company: 'PT Inforsys Indonesia',
        period: 'Mar 2021 - Agst 2021',
        desc: 'Berkontribusi dalam pengembangan website model ERP dan optimasi UI/UX untuk meningkatkan fungsionalitas aplikasi.',
      },
    ],
  },
  contact: {
    title: 'HUBUNGI SAYA',
    emailLabel: 'Email Resmi',
    whatsappLabel: 'WhatsApp',
    linkedinLabel: 'LinkedIn',
  },
  footer: { builtWith: 'Dibuat dengan' },
};
