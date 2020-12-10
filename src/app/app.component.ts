import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommerce';

  products: Observable<Product[]>;
  filterStr = '';

  constructor(private ps: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.ps.findAll();
  }

  filter(): Observable<Product[]> {
   return this.products.pipe(
      map(projects => projects
        .filter(proj => proj.name.includes(this.filterStr))
      )
    );
  }
}
//
