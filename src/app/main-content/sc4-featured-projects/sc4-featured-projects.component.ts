import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
// import { ProjectInterface } from '../../interface/project.interface';
import { ProjectPopUpComponent } from './project-pop-up/project-pop-up.component';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sc4-featured-projects',
  standalone: true,
  imports: [SingleProjectComponent, ProjectPopUpComponent, CommonModule],
  templateUrl: './sc4-featured-projects.component.html',
  styleUrl: './sc4-featured-projects.component.scss',
})
export class Sc4FeaturedProjectsComponent {

  service = inject(ProjectsService);

  selectedProject: any = null;
  popupVisible: boolean = false;

  openProject(index: number) {
    this.selectedProject = this.service.projects[index];
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
    this.selectedProject = null;
  }
}
