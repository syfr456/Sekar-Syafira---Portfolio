import { Component } from '@angular/core';
import { TranslationService } from '../../shared/services/translation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contac',
  imports: [CommonModule],
  templateUrl: './contac.html',
  styleUrl: './contac.scss',
})

export class Contac {
  constructor(public translationService: TranslationService) {}
  
  get content() {return this.translationService.content?.contact;
  }
}
