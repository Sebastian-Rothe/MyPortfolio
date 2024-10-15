import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translate.service';


@Component({
  selector: 'app-sc3-skill-set',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sc3-skill-set.component.html',
  styleUrl: './sc3-skill-set.component.scss',
})
export class Sc3SkillSetComponent {

  service = inject(ProjectsService);
  translate = inject(TranslationService);

}
