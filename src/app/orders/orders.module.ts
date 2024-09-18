import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrdersComponent } from './pages/page-add-orders/page-add-orders.component';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';

@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrdersComponent,
    PageEditOrdersComponent,
    FormOrderComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule]
})
export class OrdersModule {}
