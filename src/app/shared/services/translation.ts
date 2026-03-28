import { Injectable, signal } from '@angular/core';
import { EN } from '../en';
import { ID } from '../id';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Kita pakai WritableSignal agar reaktif di semua komponen
  private langSignal = signal<'ID' | 'EN'>((localStorage.getItem('lang') as 'ID' | 'EN') || 'ID');
  
  translations = { EN, ID };

  // Getter untuk komponen lain agar bisa ambil konten
  get currentLang() {
    return this.langSignal();
  }

  get content() {
    return this.translations[this.langSignal()];
  }

  toggleLanguage() {
    const newLang = this.langSignal() === 'ID' ? 'EN' : 'ID';
    this.langSignal.set(newLang);
    localStorage.setItem('lang', newLang);
  }
}