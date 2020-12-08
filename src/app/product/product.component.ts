import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product;

  @HostListener('mouseenter', ['$event']) mouseenter(): void {
    console.log('Entering a product', event);
  }

  @HostListener('mouseout') mouseout(): void {
    console.log('Going out of a product');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
