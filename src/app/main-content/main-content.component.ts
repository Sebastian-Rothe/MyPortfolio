import { Component, HostListener } from '@angular/core';
import { Sc1HeroComponent } from './sc1-hero/sc1-hero.component';
import { Sc2AboutMeComponent } from './sc2-about-me/sc2-about-me.component';
import { Sc3SkillSetComponent } from './sc3-skill-set/sc3-skill-set.component';
import { Sc4FeaturedProjectsComponent } from './sc4-featured-projects/sc4-featured-projects.component';
import { Sc5WhatMyColleaguesSayComponent } from './sc5-what-my-colleagues-say/sc5-what-my-colleagues-say.component';
import { Sc6ContactMeComponent } from './sc6-contact-me/sc6-contact-me.component';
 
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [Sc1HeroComponent, Sc2AboutMeComponent, Sc3SkillSetComponent, Sc4FeaturedProjectsComponent, Sc5WhatMyColleaguesSayComponent, Sc6ContactMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 800;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
