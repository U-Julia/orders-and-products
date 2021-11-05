import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Product } from './interface';
import { orders, products } from './data-products';

@Injectable({
  providedIn: 'root'
})
export class OrdersAndProductsService {

  getOrders(): Order[] {
    return orders;
  }

  getProducts(): Product[] {
    return products;
  }

}
