import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { TranslationService } from '../../shared/services/translation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  constructor(public translationService: TranslationService) {}

  get content() {
    return this.translationService.content?.projects;
  }
}