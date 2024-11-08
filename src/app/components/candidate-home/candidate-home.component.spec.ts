import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateHomeComponent } from './candidate-home.component';

describe('CandidateHomeComponent', () => {
  let component: CandidateHomeComponent;
  let fixture: ComponentFixture<CandidateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
