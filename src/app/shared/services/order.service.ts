import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // Array
  public OrderDetails;

  constructor(private router: Router) {}

  // Get order items
  public getOrderItems(): Order {
    return this.OrderDetails;
  }

  // Create order
  public createOrder(product: any, details: any, orderId: any, amount: any) {
    const item = {
      shippingDetails: details,
      product: product,
      orderId: orderId,
      totalAmount: amount
    };
    this.OrderDetails = item;
    this.router.navigate(['/home/checkout/success']);
  }
}
