import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { BaseComponent } from './components/base/base.component';
import { GroupsComponent } from './components/groups/groups.component';

const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      {path: 'orders', component: OrdersComponent},
      {path: 'groups', component: GroupsComponent},
      {path: 'products', component: ProductsComponent},
    ]
  },
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
