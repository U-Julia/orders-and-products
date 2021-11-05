import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface';
import { OrdersAndProductsService } from '../../orders-and-products.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemDialogComponent } from '../../shared/delete-item-dialog/delete-item-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  private productList: Product[] = [];
  private filteredType = 'default';
  copyProductList: Product[] = [];
  filterTypeSet: Set<string> = new Set();
  product: Product;

  constructor(private productService: OrdersAndProductsService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  selectType(type: string): void {
    this.filteredType = type;
    this.updateList();
  }

  deleteProduct(product: Product): void {
    const dialogRef = this.dialog.open(DeleteItemDialogComponent, {
        minWidth: '500px',
        panelClass: 'new-styles',
        data: {
          title: 'Вы уверены, что хотите удалить этот товар?',
          product: product
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productList = this.productList.filter((productItem: Product) => productItem.id !== product.id);
        this.updateList();
      }
    });
  }

  private updateList(): void {
    this.copyProductList = this.productList.filter((el: Product) =>
      this.filteredType === 'default' || el.type === this.filteredType);
  }

  private loadData(): void {
    this.productList = this.productService.getProducts();
    this.copyProductList = this.productList.map((product: Product) => product);
    this.productList.forEach((product: Product) => this.filterTypeSet.add(product.type));
  }
}
