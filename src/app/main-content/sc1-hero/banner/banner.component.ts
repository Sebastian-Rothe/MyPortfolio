import { Component, Input} from '@angular/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgxFastMarqueeModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
@Input() banner: string[] = [
  'Available for remote work',
  'Frontend Developer',
  'Based in Frankfurt (FFM)',
  'Open to work',
]
}
