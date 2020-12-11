import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {Product} from '../../../../model/product.model';

@Component({
  selector: 'app-produt-add-template',
  templateUrl: './produt-add-template.component.html',
  styleUrls: ['./produt-add-template.component.css']
})
export class ProdutAddTemplateComponent implements OnInit {

  product: Product = new Product();

  constructor(private fb: FormBuilder, private productservice: ProductService) { }

  ngOnInit(): void {

  }

  add(product: Product): void {
    console.log('FORM: ', product, 'Product instance:', this.product);
  }

}
