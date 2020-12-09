import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/Supplier';
import {SupplierService} from '../supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  selectedSupplier: Supplier = null;
  filterStr = '';

  suppliers: Supplier[];

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.suppliers = this.supplierService.findAll();
  }

  selectSupplier(supplier): void{
    this.selectedSupplier = supplier;
  }

  triggerFilter(): Supplier[] {
    return this.suppliers.filter(s => s.companyName.indexOf(this.filterStr) !== -1);
  }

}
