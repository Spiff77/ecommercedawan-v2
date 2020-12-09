import { Injectable } from '@angular/core';
import {Supplier} from './model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliers = [
    new Supplier(1,  'AwesomeCompany', 1234123412341234),
    new Supplier(2,  'AnotherCompany', 12341234123412349),
    new Supplier(3,  'SomeCompany', 12341234123412343),
  ]

  constructor() { }

  add(supplier: Supplier): void{
    this.suppliers.push(supplier);
  }

  delete(supplierId: number): void{
    this.suppliers = this.suppliers.filter(s => s.id !== supplierId);
  }

  update(supplier: Supplier): void{
    const supplierArr = this.suppliers.find(s => s.id === supplier.id)[0]
    if (!supplierArr) { return null; }

    const index = this.suppliers.indexOf(supplierArr);
    this.suppliers[index] = supplier;
  }

  findAll(): Supplier[] {
    return this.suppliers;
  }

  findOne(id: number): Supplier {
    return this.suppliers.filter( s => s.id === id)[0];
  }
}
