import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {ProductComponent} from './modules/product/components/product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { AccountNumberPipe } from './account-number.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductListComponent} from './modules/product/components/product-list/product-list.component';
import {ProductAddComponent} from './modules/product/components/product-add/product-add.component';
import { RegisterComponent } from './register/register.component';
import { ProdutAddTemplateComponent } from './modules/product/components/produt-add-template/produt-add-template.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './modules/product/components/product-detail/product-detail.component';
import {ConfirmGuard} from './confirm.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptInterceptor} from './intercept.interceptor';
import { ProductDashboardComponent } from './modules/product/components/product-dashboard/product-dashboard.component';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import {ProductModule} from './modules/product/product.module';
import {AppRoutingModule} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



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
    AppRoutingModule,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
