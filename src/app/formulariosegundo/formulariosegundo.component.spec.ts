import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosegundoComponent } from './formulariosegundo.component';

describe('FormulariosegundoComponent', () => {
  let component: FormulariosegundoComponent;
  let fixture: ComponentFixture<FormulariosegundoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariosegundoComponent]
    });
    fixture = TestBed.createComponent(FormulariosegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
