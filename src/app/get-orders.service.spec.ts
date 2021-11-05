import { TestBed } from '@angular/core/testing';

import { OrdersAndProductsService } from './orders-and-products.service';

describe('GetOrdersService', () => {
  let service: OrdersAndProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersAndProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
