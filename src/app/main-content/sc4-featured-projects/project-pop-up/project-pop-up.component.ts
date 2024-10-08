import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { ProjectInterface } from '../../../interface/project.interface';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-project-pop-up',
  standalone: true,
  templateUrl: './project-pop-up.component.html',
  styleUrls: ['./project-pop-up.component.scss']
})
export class ProjectPopUpComponent {
  @Input() project!: ProjectInterface;
  @Output() close = new EventEmitter<void>();

  service = inject(ProjectsService); // Inject the ProjectsService
  closePopup() {
    this.close.emit();
  }

  nextProject() {
    // Get the current index of the displayed project
    const currentIndex = this.service.projects.findIndex(p => p === this.project);
    
    // Calculate the next project's index
    const nextIndex = (currentIndex + 1) % this.service.projects.length;
    
    // Update the project to the next one
    this.project = this.service.projects[nextIndex];
  }
}