import { Component, inject } from '@angular/core';
import { SingleOpinionComponent } from './single-opinion/single-opinion.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translate.service';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sc5-what-my-colleagues-say',
  standalone: true,
  imports: [TranslateModule, SingleOpinionComponent, CommonModule],
  templateUrl: './sc5-what-my-colleagues-say.component.html',
  styleUrl: './sc5-what-my-colleagues-say.component.scss',
})
export class Sc5WhatMyColleaguesSayComponent {
  translate = inject(TranslationService);
  service = inject(ProjectsService);
  opinions = this.service.opinions;

  currentSlide = 0;

 
  private startX = 0;
  private threshold = 50; 

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.opinions.length; 
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.opinions.length) % this.opinions.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }


  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const deltaX = event.changedTouches[0].clientX - this.startX;
    if (deltaX > this.threshold) {
      this.prevSlide(); 
    } else if (deltaX < -this.threshold) {
      this.nextSlide(); 
    }
  }
}
