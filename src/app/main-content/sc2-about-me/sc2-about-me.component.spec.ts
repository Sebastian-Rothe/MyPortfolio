import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc2AboutMeComponent } from './sc2-about-me.component';

describe('Sc2AboutMeComponent', () => {
  let component: Sc2AboutMeComponent;
  let fixture: ComponentFixture<Sc2AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sc2AboutMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sc2AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
