import { Component, inject } from '@angular/core';
import { SingleOpinionComponent } from './single-opinion/single-opinion.component';
import { OpinionInterface } from '../../interface/opinion.interface';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translate.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-sc5-what-my-colleagues-say',
  standalone: true,
  imports: [TranslateModule, SingleOpinionComponent],
  templateUrl: './sc5-what-my-colleagues-say.component.html',
  styleUrl: './sc5-what-my-colleagues-say.component.scss',
})
export class Sc5WhatMyColleaguesSayComponent {
  translate = inject(TranslationService);
  service = inject(ProjectsService);
  opinions = this.service.opinions;

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.opinions.length;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.opinions.length) % this.opinions.length;
  }
  goToSlide(index: number) {
    this.currentSlide = index;
  }
  getTransform() {
    return `translateX(-${this.currentSlide * (100 / this.opinions.length)}%)`;
  }
  
}
