import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc4FeaturedProjectsComponent } from './sc4-featured-projects.component';

describe('Sc4FeaturedProjectsComponent', () => {
  let component: Sc4FeaturedProjectsComponent;
  let fixture: ComponentFixture<Sc4FeaturedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sc4FeaturedProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sc4FeaturedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
