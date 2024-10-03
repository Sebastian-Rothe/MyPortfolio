import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-sc1-hero',
  standalone: true,
  imports: [ BannerComponent],
  templateUrl: './sc1-hero.component.html',
  styleUrl: './sc1-hero.component.scss'
})
export class Sc1HeroComponent {

}
