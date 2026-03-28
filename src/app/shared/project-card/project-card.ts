import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/services/translation';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input() project: any;

  constructor(public translationService: TranslationService) {}

  get labels() {
    return this.translationService.content?.projects;
  }
}