import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc3SkillSetComponent } from './sc3-skill-set.component';

describe('Sc3SkillSetComponent', () => {
  let component: Sc3SkillSetComponent;
  let fixture: ComponentFixture<Sc3SkillSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sc3SkillSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sc3SkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
