// app-routing.module.ts
import { Routes } from '@angular/router';
import { OrderFormComponent } from './features/order/components/order-form/order-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  { path: 'order', component: OrderFormComponent }
];
