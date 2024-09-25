import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc6ContactMeComponent } from './sc6-contact-me.component';

describe('Sc6ContactMeComponent', () => {
  let component: Sc6ContactMeComponent;
  let fixture: ComponentFixture<Sc6ContactMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sc6ContactMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sc6ContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
