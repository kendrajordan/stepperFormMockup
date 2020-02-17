import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyRemediationsDetailsComponent } from './safety-remediations-details.component';

describe('SafetyRemediationsDetailsComponent', () => {
  let component: SafetyRemediationsDetailsComponent;
  let fixture: ComponentFixture<SafetyRemediationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyRemediationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyRemediationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
