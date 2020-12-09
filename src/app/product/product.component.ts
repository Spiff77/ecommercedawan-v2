import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product;
  @Output('prodOut') output = new EventEmitter<Product>();

  @HostListener('click')
  clickproduct(): void {
    this.output.emit(this.product);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
