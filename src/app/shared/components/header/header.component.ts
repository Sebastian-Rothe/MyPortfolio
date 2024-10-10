import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translate.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
translate = inject(TranslationService);

public onToggleChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  const language = input.checked ? 'de' : 'en'; // Sprache basierend auf dem Status des Toggles wechseln
  this.translate.switchLanguage(language);
}
}