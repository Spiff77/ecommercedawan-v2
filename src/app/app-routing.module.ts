import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SupplierDashboardComponent} from './supplier-dashboard/supplier-dashboard.component';
import {SupplierListComponent} from './supplier-list/supplier-list.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'supplier', component: SupplierDashboardComponent, children: [
      {path: 'add', component: SupplierListComponent},
      {path: '', component: SupplierListComponent},
    ]},
  {path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
