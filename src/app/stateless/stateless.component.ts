import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // control de canvis per carregar només el que fa falta
})

export class StatelessComponent implements OnInit {

  @Output () cursomatriculado: EventEmitter<Product> = new EventEmitter(); //event per traslladar a stateful
  @Input () product!:  Product; // per importar del stateful
  public matricula!: string;
  private disable: boolean = false;

  constructor() {}
  
  ngOnInit(): void {
    this.matricula = 'Matrícula'; // Valor inicial del botó de matricular-se
  }

  matricularse() {  //accions si fan click al boto matricula
    this.disable = true;
    this.matricula = '¡MATRICULADO!'
    this.cursomatriculado.emit(this.product);
  }

  isDisabled() {
    return !!this.disable;
  }

  mensaje() {
    alert('¿No te vas a descargar la imagen verdad?');
  }
}
