import { Component } from '@angular/core';

interface SkillIcon {
  icons: {
    path: string;
    name: string;
    alt?: string;
  }[];
}

@Component({
  selector: 'app-sc3-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './sc3-skill-set.component.html',
  styleUrl: './sc3-skill-set.component.scss',
})
export class Sc3SkillSetComponent {
  skillSetIcons: SkillIcon = {
    icons: [
      { path:'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
      { path:'assets/img/skill-set/Firebase.svg', name: 'Firebase', alt: 'Firebase' },
      { path:'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
      { path:'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
      { path:'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
      { path:'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
      { path:'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
      { path:'assets/img/skill-set/Api.svg', name: 'Rest-Api', alt: 'Rest-Api' },
    
    ],
  };
}
