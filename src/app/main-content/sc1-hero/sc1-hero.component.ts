import { Component, inject} from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translate.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-sc1-hero',
  standalone: true,
  imports: [ BannerComponent, TranslateModule],
  templateUrl: './sc1-hero.component.html',
  styleUrl: './sc1-hero.component.scss'
})
export class Sc1HeroComponent {
  translate = inject(TranslationService);

  constructor(private scrollService: ScrollService) {}

  navigateWithOffset(targetId: string, offset: number = 100) {
    this.scrollService.navigateWithOffset(targetId, offset);
  }
}
