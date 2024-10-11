import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translate.service';

@Component({
  selector: 'app-sc2-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sc2-about-me.component.html',
  styleUrl: './sc2-about-me.component.scss'
})
export class Sc2AboutMeComponent {
  translate = inject(TranslationService);
}
