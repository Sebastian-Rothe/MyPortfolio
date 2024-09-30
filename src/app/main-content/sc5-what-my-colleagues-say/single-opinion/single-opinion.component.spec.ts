import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOpinionComponent } from './single-opinion.component';

describe('SingleOpinionComponent', () => {
  let component: SingleOpinionComponent;
  let fixture: ComponentFixture<SingleOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleOpinionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
