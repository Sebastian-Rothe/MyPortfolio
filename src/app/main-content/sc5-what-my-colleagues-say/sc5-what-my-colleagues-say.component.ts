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
  opinion: OpinionInterface[] = [
    {
      name: 'Batool Zamani',
      text: `Ich habe mit Sebastian an zwei Projekten zusammengearbeitet. Er bringt immer positive Energie mit. Er ist sehr gut darin, seine Zeit zu organisieren und findet auch in schwierigen Situationen stets effektive Lösungen.`,
    },
  ];
}
