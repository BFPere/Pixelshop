import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChanges, DoCheck } from '@angular/core';
import { Product } from '../interface/product';


@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})

export class StatusCartComponent implements OnInit {


  @Input() price!: number;
  @Input() shopModel!: Array<Product>;
  @Output() add: EventEmitter<null> = new EventEmitter();

  constructor () {}

  ngOnInit (): void {
  }

  // ngDoCheck() {
  //   console.log('Interacción con el DOM');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnchanges');
  //   console.log(changes);
  // }

  confirm() {
    this.add.emit();
  }
}


