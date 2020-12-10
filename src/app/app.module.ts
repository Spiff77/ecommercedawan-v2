import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {ProductComponent} from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { AccountNumberPipe } from './account-number.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';
import { RegisterComponent } from './register/register.component';
import { ProdutAddTemplateComponent } from './produt-add-template/produt-add-template.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ConfirmGuard} from './confirm.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptInterceptor} from './intercept.interceptor';

const routes: Routes = [
  {path: 'products/add', component: ProductAddComponent, canDeactivate: [ConfirmGuard]},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'suppliers/add', component: SupplierListComponent},
  {path: 'suppliers', component: SupplierListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SupplierComponent,
    SupplierListComponent,
    SupplierListComponent,
    AccountNumberPipe,
    ProductAddComponent,
    ProductListComponent,
    RegisterComponent,
    ProdutAddTemplateComponent,
    ProdutAddTemplateComponent,
    ErrorPageComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
