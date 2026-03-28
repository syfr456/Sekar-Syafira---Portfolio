import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../shared/services/translation';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  constructor(public translationService: TranslationService) {}

  get content() {
    return this.translationService.content.experience;
  }
}