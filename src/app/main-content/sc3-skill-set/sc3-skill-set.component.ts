import { Component } from '@angular/core';

interface SkillIcon {
    path: string;
    name: string;
    alt?: string;
}

@Component({
  selector: 'app-sc3-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './sc3-skill-set.component.html',
  styleUrl: './sc3-skill-set.component.scss',
})
export class Sc3SkillSetComponent {
  icons: SkillIcon[] = [
      { path:'assets/img/skill-set/Angular.svg', name: 'Angular', alt: 'Angular' },
      { path:'assets/img/skill-set/TypeScript.svg', name: 'TypeScript', alt: 'TypeScript' },
      { path:'assets/img/skill-set/Firebase.svg', name: 'Firebase', alt: 'Firebase' },
      { path:'assets/img/skill-set/git.svg', name: 'Git', alt: 'Git' },
      { path:'assets/img/skill-set/JavaScript.svg', name: 'JavaScript', alt: 'JavaScript' },
      { path:'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
      { path:'assets/img/skill-set/Frame.svg', name: 'Material Design', alt: 'Material Design' },
      { path:'assets/img/skill-set/scrum.svg', name: 'Scrum', alt: 'Scrum' },
      { path:'assets/img/skill-set/html.svg', name: 'HTML', alt: 'HTML' },
      { path:'assets/img/skill-set/Css.svg', name: 'CSS', alt: 'CSS' },
      { path:'assets/img/skill-set/Growth.svg', name: 'Growth mindset', alt: 'Growth mindset' }
    ]
  ;
}
