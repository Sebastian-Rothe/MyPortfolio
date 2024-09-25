import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc5WhatMyColleaguesSayComponent } from './sc5-what-my-colleagues-say.component';

describe('Sc5WhatMyColleaguesSayComponent', () => {
  let component: Sc5WhatMyColleaguesSayComponent;
  let fixture: ComponentFixture<Sc5WhatMyColleaguesSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sc5WhatMyColleaguesSayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sc5WhatMyColleaguesSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
