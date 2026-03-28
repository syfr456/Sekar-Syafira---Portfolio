import { Component, signal } from '@angular/core';
import { Footer } from './core/footer/footer';
import { Navbar } from './core/navbar/navbar';
import { Experience } from './features/experience/experience';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { TechStack } from './features/tech-stack/tech-stack';
import { Contac } from './features/contac/contac';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    TechStack,
    Projects,
    Experience,
    Contac,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Sekar Syafira - Portfolio');
}
