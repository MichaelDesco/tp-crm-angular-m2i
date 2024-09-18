import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from '../orders/pages/page-list-orders/page-list-orders.component';
import { PageAddOrdersComponent } from './pages/page-add-orders/page-add-orders.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';

const routes: Routes = [
  // orders/
  { path: '', component: PageListOrdersComponent },

  // orders/add
  { path: 'add', component: PageAddOrdersComponent },

  // orders/edit/:id
  { path: 'edit/:id', component: PageEditOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
