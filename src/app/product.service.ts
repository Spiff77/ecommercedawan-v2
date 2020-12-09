import { Injectable } from '@angular/core';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    new Product(1,  'Franck Zappa - Joe\'s garage', 'music', 'Zappa at his best', 25, .2),
    new Product(2,  'Pink Floyd - Wish you were here', 'music', 'Pink floyd at his best', 25, .5),
    new Product(3,  '1984', 'book', 'Orwell at his best', 25, 0),

  ]

  constructor() { }

  add(product: Product): void{
    this.products.push(product);
  }

  delete(productId: number): void{
    const productArr = this.products.find(s => s.id === productId)
    this.products.splice(this.products.indexOf(productArr), 1);
  }

  update(product: Product): void{
    const productArr = this.products.find(s => s.id === product.id)
    if (!productArr) { return null; }

    const index = this.products.indexOf(productArr);
    this.products[index] = product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find( s => s.id === id);
  }
}
