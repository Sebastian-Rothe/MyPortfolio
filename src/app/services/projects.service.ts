import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interface/project.interface';
import { SkillIcon } from '../interface/icons.interface';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  projects: ProjectInterface[] = [
    {
      name: 'EL Pollo Loco',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/featured-projects/Pepe.png',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    },
    {
      name: 'Another P',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/about-me/location_on.svg',
    },
    {
      name: 'Another a',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/about-me/cognition.svg',
    },
  ];

  icons: SkillIcon[] = [
    {
      path: 'assets/img/skill-set/Angular.svg',
      name: 'Angular',
      alt: 'Angular',
    },
    {
      path: 'assets/img/skill-set/TypeScript.svg',
      name: 'TypeScript',
      alt: 'TypeScript',
    },
    {
      path: 'assets/img/skill-set/Firebase.svg',
      name: 'Firebase',
      alt: 'Firebase',
    },
    { path: 'assets/img/skill-set/git.svg', name: 'Git', alt: 'Git' },
    {
      path: 'assets/img/skill-set/JavaScript.svg',
      name: 'JavaScript',
      alt: 'JavaScript',
    },
    { path: 'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
    {
      path: 'assets/img/skill-set/Frame.svg',
      name: 'Material Design',
      alt: 'Material Design',
    },
    { path: 'assets/img/skill-set/scrum.svg', name: 'Scrum', alt: 'Scrum' },
    { path: 'assets/img/skill-set/html.svg', name: 'HTML', alt: 'HTML' },
    { path: 'assets/img/skill-set/Css.svg', name: 'CSS', alt: 'CSS' },
    {
      path: 'assets/img/skill-set/Growth.svg',
      name: 'Growth mindset',
      alt: 'Growth mindset',
    },
  ];
}
