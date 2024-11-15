import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../shared/services/order.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
    selector: 'app-order-form',
    templateUrl: './order-form.component.html',
    standalone: true,  
    imports: [FormsModule, CommonModule],  
    
  })
export class OrderFormComponent implements OnInit {

  street: string = '';
  number: string = '';
  city: string = '';
  reference: string = '';
  paymentMethod: string = 'cash';
  cardNumber: string = '';
  cardHolder: string = '';
  expiryDate: string = '';
  cvc: string = '';
  deliveryTime: string = 'ASAP';
  cities: string[] = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3'];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const orderData = {
      street: this.street,
      number: this.number,
      city: this.city,
      reference: this.reference,
      paymentMethod: this.paymentMethod,
      cardNumber: this.cardNumber,
      cardHolder: this.cardHolder,
      expiryDate: this.expiryDate,
      cvc: this.cvc,
      deliveryTime: this.deliveryTime
    };

    this.orderService.createOrder(orderData).subscribe(
      (response) => {
        console.log('Pedido realizado', response);
        // Maneja la respuesta (ej. mostrar mensaje de éxito)
      },
      (error) => {
        console.error('Error al realizar el pedido', error);
        // Maneja el error (ej. mostrar mensaje de error)
      }
    );
  }
}
