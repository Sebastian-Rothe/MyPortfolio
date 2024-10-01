import { Component } from '@angular/core';
import { SingleOpinionComponent } from './single-opinion/single-opinion.component';
import { OpinionInterface } from '../../interface/opinion.interface';
import { getLocaleEraNames } from '@angular/common';

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
      name: 'Max Mustermann',
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
      commodi tempora illo repellendus voluptates error fugiat quisquam
      praesentium totam corrupti dolores atque, necessitatibus hic iste ex
      voluptas architecto corporis qui.`

    },
  ];
}
