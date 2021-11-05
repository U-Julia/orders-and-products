import { Component, OnInit } from '@angular/core';
import { Order } from '../../interface';
import { OrdersAndProductsService } from '../../orders-and-products.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass']
})
export class GroupsComponent implements OnInit {

  ordersList: Order[] = [];

  constructor(private ordersService: OrdersAndProductsService) {
  }

  ngOnInit(): void {
    this.ordersList = this.ordersService.getOrders();
  }

}
