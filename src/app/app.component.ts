import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  obv: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.obv = this.http.get('http://localhost:8080/training/api/products/')
      .pipe(
        map( v => v['_embedded']),
        map( v => v['products'])
      );
  }
}
// java -jar apiv2.jar
