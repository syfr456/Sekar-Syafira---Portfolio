import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { ProjectCard } from '../../shared/project-card/project-card';
import { TranslationService } from '../../shared/services/translation';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  @ViewChild('swiperRef') swiperRef!: ElementRef;

  constructor(public translationService: TranslationService) {}

  get content() {
    return this.translationService.content?.projects;
  }

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');

    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      navigation: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 2.5, spaceBetween: 40 },
      },
    };

    Object.assign(swiperEl!, params);
    (swiperEl as any).initialize();
  }
}
