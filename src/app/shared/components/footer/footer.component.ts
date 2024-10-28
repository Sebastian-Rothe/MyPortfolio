import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translate.service';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate = inject(TranslationService);
  constructor(private scrollService: ScrollService) {}

  navigateWithOffset(targetId: string, offset: number = 100) {
    this.scrollService.navigateWithOffset(targetId, offset);
  }
}
