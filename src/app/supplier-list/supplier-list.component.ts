import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/Supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  selectedSupplier: Supplier = null;

  supp1 = new Supplier('The beattles - Abbey road', '123412341234');
  supp2 = new Supplier('1984', '1231231230');

  constructor() { }

  ngOnInit(): void {
  }

  selectSupplier(supplier): void{
    this.selectedSupplier = supplier;
  }

}
