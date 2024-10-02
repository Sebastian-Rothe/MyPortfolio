import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interface/project.interface';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() { }

  projects: ProjectInterface[] = [
    {
      name: 'EL Pollo Loco',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/featured-projects/Pepe.png'
    },
    {
      name: 'EL Pollo Loco',
      link: 'link-to-my-Pollo',
      languages: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/img/featured-projects/Pepe.png'
    },
  ];
}
