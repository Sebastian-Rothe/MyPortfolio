import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { ProjectInterface } from '../../../interface/project.interface';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-project-pop-up',
  standalone: true,
  templateUrl: './project-pop-up.component.html',
  styleUrls: ['./project-pop-up.component.scss'],
})
export class ProjectPopUpComponent {
  @Input() project!: ProjectInterface;
  @Output() close = new EventEmitter<void>();

  service = inject(ProjectsService);
  projectIndex: number = 0;

  ngOnInit() {
    this.projectIndex = this.service.projects.findIndex(
      (p) => p === this.project
    );
  }

  closePopup() {
    this.close.emit();
  }

  nextProject() {
    const currentIndex = this.service.projects.findIndex(
      (p) => p === this.project
    );
    const nextIndex = (currentIndex + 1) % this.service.projects.length;
    this.project = this.service.projects[nextIndex];
    this.projectIndex = nextIndex;
  }
}
