import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TechCard } from '../../shared/tech-card/tech-card';
import { TranslationService } from '../../shared/services/translation';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, TechCard],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {
  constructor(public translationService: TranslationService) {}

  get content() {
    return this.translationService.content?.stack;
  }
}