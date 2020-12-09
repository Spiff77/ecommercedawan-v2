import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private productservice: ProductService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [],
      name: [, Validators.required],
      category: [, Validators.compose([Validators.required, this.checkCategoryLength])],
      description: [, Validators.required],
      price: [, Validators.compose([Validators.required, this.checkPriceConform])], // price % 5 == 0
      promo: [, Validators.compose([Validators.required, Validators.max(100)])],
    }, {
      validators: this.checkReducedpriceNotBelow20
    });
  }

  add(): void {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.productservice.add(this.form.value);
      console.log(this.form.value);
    }
  }

  checkCategoryLength(control: AbstractControl): ValidationErrors | null{
    if (control.value && control.value.length < 3) {
      return {notValidCategoryLength: true};
    }else{
      return null;
    }
  }
  checkPriceConform(control: AbstractControl): ValidationErrors | null{
    if (control.value && control.value % 5 !== 0) {
      return {priceNotConform: true};
    }else{
      return null;
    }
  }

  checkReducedpriceNotBelow20(controls: AbstractControl): ValidationErrors | null {
    const priceField = controls.get('price');
    const promoField = controls.get('promo');

    if (promoField.errors && !promoField.errors.priceToLow){
      return;
    }

    if ( priceField.value - (priceField.value * promoField.value) < 20) {
      promoField.setErrors({priceToLow: true});
      return ({priceToLow: true});
    } else {
      promoField.setErrors(null);
    }
    return null;
  }
}
