import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc1HeroComponent } from './sc1-hero.component';

describe('Sc1HeroComponent', () => {
  let component: Sc1HeroComponent;
  let fixture: ComponentFixture<Sc1HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sc1HeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sc1HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
