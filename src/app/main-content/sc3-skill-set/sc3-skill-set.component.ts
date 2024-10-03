import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-sc3-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './sc3-skill-set.component.html',
  styleUrl: './sc3-skill-set.component.scss',
})
export class Sc3SkillSetComponent {

  service = inject(ProjectsService);
}
