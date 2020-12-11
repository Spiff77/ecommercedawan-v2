import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {ProductComponent} from './product/components/product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { AccountNumberPipe } from './account-number.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductListComponent} from './product/components/product-list/product-list.component';
import {ProductAddComponent} from './product/components/product-add/product-add.component';
import { RegisterComponent } from './register/register.component';
import { ProdutAddTemplateComponent } from './product/components/produt-add-template/produt-add-template.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import {ConfirmGuard} from './confirm.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptInterceptor} from './intercept.interceptor';
import { ProductDashboardComponent } from './product/components/product-dashboard/product-dashboard.component';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import {ProductModule} from './product/product.module';
import {AppRoutingModule} from './app-routing.module';



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
    ProductDetailComponent,
    ProductDashboardComponent,
    SupplierDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
