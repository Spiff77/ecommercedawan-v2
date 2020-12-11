import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDashboardComponent} from './components/product-dashboard/product-dashboard.component';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductListComponent} from './components/product-list/product-list.component';

const routes: Routes = [  {path : 'products', component: ProductDashboardComponent, children: [
    {path: 'add', component: ProductAddComponent},
    {path: ':id', component: ProductDetailComponent},
    {path: '', component: ProductListComponent},
  ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
