import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './components/order-form/order-form.component';

const routes: Routes = [
  { path: '', component: OrderFormComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    OrderFormComponent  // Importar el componente autónomo aquí
  ],
})
export class OrderModule {}
