import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectInterface } from '../../../interface/project.interface';

@Component({
  selector: 'app-project-pop-up',
  standalone: true,
  templateUrl: './project-pop-up.component.html',
  styleUrls: ['./project-pop-up.component.scss']
})
export class ProjectPopUpComponent {
  @Input() project!: ProjectInterface;
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}