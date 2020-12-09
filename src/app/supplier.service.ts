import { Injectable } from '@angular/core';
import {Supplier} from './model/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliers = [
    new Supplier('Amazon', '123412341234'),
    new Supplier('Swisscom', '1231231230')
  ]

  findAll(): Supplier[] {
    return this.suppliers;
  }

  findOne(companyName: string): Supplier {
    return this.suppliers.find(s => s.companyName);
  }

  delete(companyName: string): void {
    const supplierArr = this.suppliers.find(s => s.companyName);
    const index = this.suppliers.indexOf(supplierArr);

    this.suppliers.splice(index, 1);
  }

  add(supplier: Supplier): void {
    this.suppliers.push(supplier);
  }

  constructor() { }
}
