import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-sc1-hero',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './sc1-hero.component.html',
  styleUrl: './sc1-hero.component.scss'
})
export class Sc1HeroComponent {

}
