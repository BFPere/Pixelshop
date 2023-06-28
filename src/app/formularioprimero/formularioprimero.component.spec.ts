import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioprimeroComponent } from './formularioprimero.component';

describe('FormularioprimeroComponent', () => {
  let component: FormularioprimeroComponent;
  let fixture: ComponentFixture<FormularioprimeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioprimeroComponent]
    });
    fixture = TestBed.createComponent(FormularioprimeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
