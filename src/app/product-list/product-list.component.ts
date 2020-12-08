import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product = null;

  prod1 = new Product('The beattles - Abbey road', 'A good album', 'Music', 20, .2);
  prod2 = new Product('1984', 'A good book', 'Book', 20, .2);

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product): void{
    this.selectedProduct = product;
  }

}
