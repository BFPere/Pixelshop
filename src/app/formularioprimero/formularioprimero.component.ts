import { Component } from '@angular/core';

@Component({
  selector: 'app-formularioprimero',
  templateUrl: './formularioprimero.component.html',
  styleUrls: ['./formularioprimero.component.css']
})
export class FormularioprimeroComponent {


  onSubmit(_datosForm: any) {
    console.log(_datosForm.value);
  }
}
