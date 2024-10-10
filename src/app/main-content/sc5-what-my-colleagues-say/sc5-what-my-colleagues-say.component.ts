import { Component } from '@angular/core';
import { SingleOpinionComponent } from './single-opinion/single-opinion.component';
import { OpinionInterface } from '../../interface/opinion.interface';

@Component({
  selector: 'app-sc5-what-my-colleagues-say',
  standalone: true,
  imports: [SingleOpinionComponent],
  templateUrl: './sc5-what-my-colleagues-say.component.html',
  styleUrl: './sc5-what-my-colleagues-say.component.scss',
})
export class Sc5WhatMyColleaguesSayComponent {
  opinions: OpinionInterface[] = [
    {
      name: 'Batool Zamani',
      text: `Ich habe mit Sebastian an zwei Projekten zusammengearbeitet. Er bringt immer positive Energie mit. Er ist sehr gut darin, seine Zeit zu organisieren und findet auch in schwierigen Situationen stets effektive Lösungen.`,
    },
    {
      name: 'Batool Zamani',
      text: `Ich habe mit Sebastian an zwei Projekten zusammengearbeitet. Er bringt immer positive Energie mit. Er ist sehr gut darin, seine Zeit zu organisieren und findet auch in schwierigen Situationen stets effektive Lösungen.`,
    },
    {
      name: 'Batool Zamani',
      text: `Ich habe mit Sebastian an zwei Projekten zusammengearbeitet. Er bringt immer positive Energie mit. Er ist sehr gut darin, seine Zeit zu organisieren und findet auch in schwierigen Situationen stets effektive Lösungen.`,
    },
  ];

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
    // Berechnet den Wert für die CSS-Transform-Eigenschaft
    return `translateX(-${this.currentSlide * (100 / this.opinions.length)}%)`;
  }
  
}
