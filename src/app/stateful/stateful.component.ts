import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})

export class StatefulComponent implements OnInit, OnDestroy {

  @ViewChild(ConfirmComponent, {static: false}) confirmChild!: ConfirmComponent;

  errorHttp: boolean = false;
  shopModel: any;
  
  //L'array: 1. es declara, 2. s'inicialitza amb constructor, 3. S'omple amb push.
  boughtItems: Array<Product>; //per assegurar la implementació definida a interface product.ts
  boughtItem: any;

  private shopSubscription!: Subscription;

  constructor(private http: HttpClient) { 
    this.boughtItems = [];
    this.shopModel = {shopItems: []};
  }

  clickItem(_curso:any) {
    this.boughtItems.push(_curso); //omple l'array de boughtItems
  }

  cursoMatriculado(_event: Product){
    this.clickItem(_event);
    // this.onConfirm();
    this.confirmChild.isDisabled = false;
  }

  finalPrice() { //reduce és un acumulador de valors d'arrays
    //if (this.boughtItems){
      return this.boughtItems.reduce((prev: number, item: Product) => prev + item.price!, 0); 
    //}
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: any) => {this.shopModel.shopItems = respuesta;},
      (respuesta: Response) => {this.errorHttp = true;}
    );
    //this.onGlobalKeyboard(); // escolta el teclat en qualsevol moment
  }

  ngOnDestroy(): void {
    this.shopSubscription.unsubscribe();
    // document.removeEventListener('keypress', this.onKeyboard);
  }

  // onConfirm() {
  //   alert('Has añadido un nuevo curso');
  // }

  // onKeyboard(_event: any) {
  //   if(_event.key === 'Enter') {
  //     this.onConfirm();
  //   }
  // }

  // onGlobalKeyboard() {
  //   document.addEventListener('keypress', (eventoGlobal) =>{
  //     this.onKeyboard(eventoGlobal);
  //   });
  // }


}


