import { Component } from '@angular/core';
import { TranslationService } from '../../shared/services/translation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(public translationService: TranslationService) {}

  get content() {
    return this.translationService.content?.footer;
  }
}
