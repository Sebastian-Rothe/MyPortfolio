import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectInterface } from '../../interface/project.interface';
import { ProjectPopUpComponent } from './project-pop-up/project-pop-up.component';

@Component({
  selector: 'app-sc4-featured-projects',
  standalone: true,
  imports: [SingleProjectComponent, ProjectPopUpComponent],
  templateUrl: './sc4-featured-projects.component.html',
  styleUrl: './sc4-featured-projects.component.scss',
})
export class Sc4FeaturedProjectsComponent {
  projects: ProjectInterface[] = [
    {
      name: 'EL Pollo Loco',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
    },
  ];
}
