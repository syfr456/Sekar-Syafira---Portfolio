import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  imports: [],
  templateUrl: './tech-card.html',
  styleUrl: './tech-card.scss',
})
export class TechCard {
   @Input() name!: string;

}
