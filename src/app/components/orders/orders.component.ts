import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Order, Product } from '../../interface';
import { OrdersAndProductsService } from '../../orders-and-products.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemDialogComponent } from '../../shared/delete-item-dialog/delete-item-dialog.component';
import { Currencies } from '../../shared/enum';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {
  @ViewChild('exampleModal', {static: true}) modalRef: ElementRef;
  ordersList: Order[] = [];
  Currencies = Currencies;

  constructor(private ordersService: OrdersAndProductsService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.setOrderList();
  }

  deleteOrder(order: Order) {
    const dialogRef = this.dialog.open(DeleteItemDialogComponent, {
        minWidth: '500px',
        panelClass: 'new-styles',
        data: {
          title: 'Вы уверены, что хотите удалить этот приход?',
          order: order.title
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ordersList = this.ordersList.filter(orderItem => orderItem.id !== order.id);
      }
    });
  }

  private setOrderList(): void {
    this.ordersList = this.ordersService.getOrders()
      .map((order: Order) => {
        let sumUsd: number = 0;
        let sumUah: number = 0;

        order.products.forEach((currentItemProduct: Product) => {
          currentItemProduct.price.forEach((priceItem) => {
            if (priceItem.symbol === Currencies.USD) {
              sumUsd += priceItem.value;
            }
            if (priceItem.symbol === Currencies.UAH) {
              sumUah += priceItem.value;
            }
          });
        });

        order.sum = [
          {symbol: Currencies.USD, value: sumUsd},
          {symbol: Currencies.UAH, value: sumUah}
        ];

        return order;
      });
  }

}
