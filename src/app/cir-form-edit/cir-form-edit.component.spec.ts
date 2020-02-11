import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCirFormComponent } from './cir-form-edit.component';

describe('EditCirFormComponent', () => {
  let component: EditCirFormComponent;
  let fixture: ComponentFixture<EditCirFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCirFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
