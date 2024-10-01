import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-sc1-hero',
  standalone: true,
  imports: [NavbarComponent, BannerComponent],
  templateUrl: './sc1-hero.component.html',
  styleUrl: './sc1-hero.component.scss'
})
export class Sc1HeroComponent {

}
