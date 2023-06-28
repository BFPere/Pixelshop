import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Validatemail } from '../validators/email.validator';

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
export class FormulariosegundoComponent {

  formulario!: FormGroup;
  mipattern = '[a-z]*'; //Validators a angular.io, probar-los a regex101.com

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validatemail]]
    });
  }
  onSubmit(_datosForm: any) {
    console.log(_datosForm.value);
  }

}
