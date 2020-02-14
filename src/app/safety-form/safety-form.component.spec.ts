import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyFormComponent } from './safety-form.component';

describe('SafetyFormComponent', () => {
  let component: SafetyFormComponent;
  let fixture: ComponentFixture<SafetyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
