import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../../interface/project.interface';
@Component({
  selector: 'app-project-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './project-pop-up.component.html',
  styleUrl: './project-pop-up.component.scss'
})
export class ProjectPopUpComponent {
  @Input() project: ProjectInterface = {
    name: 'EL Pollo Loco',
    link: 'link-to-my-Pollo',
    languages: ['JavaScript', 'HTML', 'CSS'],
  };
}
