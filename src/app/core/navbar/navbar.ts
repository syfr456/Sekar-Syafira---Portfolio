import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EN } from '../../shared/en';
import { ID } from '../../shared/id';
import { TranslationService } from '../../shared/services/translation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isDark = false;
  isMenuOpen = false;
  activeSection = 'tech-stack';
  isManualClick = false;

  get content() {
    return this.translationService.content.nav;
  }

  get currentLang() {
    return this.translationService.currentLang;
  }

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleLanguage() {
    this.translationService.toggleLanguage();
  }

  ngAfterViewInit() {
    // Reset ke tech-stack hanya saat pertama kali load
    if (window.scrollY === 0) {
      this.activeSection = 'tech-stack';
    }

    setTimeout(() => {
      this.onScroll();
    }, 0);
  }

  

  toggleDarkMode() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(section: string) {
    this.isManualClick = true;
    this.activeSection = section;
    this.isMenuOpen = false;

    const el = document.getElementById(section);

    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      this.isManualClick = false;
    }, 600);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.isManualClick) return;
    this.isMenuOpen = false;
    if (window.scrollY === 0) {
      this.activeSection = 'tech-stack';
      return;
    }

    const sections = ['tech-stack', 'projects', 'experience', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight * 0.3;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        if (scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          this.activeSection = section;
        }
      }
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (!target.closest('nav') && !target.closest('.mobile-link')) {
      this.isMenuOpen = false;
    }
  }
}
