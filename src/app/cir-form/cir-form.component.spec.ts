import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirFormComponent } from './cir-form.component';

describe('CirFormComponent', () => {
  let component: CirFormComponent;
  let fixture: ComponentFixture<CirFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
