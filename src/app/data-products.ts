import { Product } from './interface';
import { Currencies } from './shared/enum';

export const products:Product[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 'Новый',
    photo: '../assets/monitor.jpg',
    title: 'Товар 1',
    type: 'Монитор',
    specification: 'Specification 1',
    guarantee: {
      start: '2021-09-30 12:09',
      end: '2025-09-30 12:09'
    },
    price: [
      {value: 200, symbol: Currencies.USD, isDefault: false},
      {value: 5200, symbol: Currencies.UAH, isDefault: true},
    ],
    order: 1,
    date: '2021-10-15 12:09'
  },
  {
    id: 2,
    serialNumber: 1235,
    isNew: 'Новый',
    photo: '../assets/TV.jpg',
    title: 'Товар 1',
    type: 'Телевизор',
    specification: 'Specification 5',
    guarantee: {
      start: '2021-10-20 15:55',
      end: '2024-10-20 15:55'
    },
    price: [
      {value: 500, symbol: Currencies.USD, isDefault: false},
      {value: 13000, symbol: Currencies.UAH, isDefault: true}
    ],
    order: 2,
    date: '2021-10-26 15:17'
  },
  {
    id: 3,
    serialNumber: 1236,
    isNew: 'Новый',
    photo: '../assets/TV.jpg',
    title: 'Товар 1',
    type: 'Телевизор',
    specification: 'Specification 7',
    guarantee: {
      start: '2021-10-25 15:55',
      end: '2024-10-25 15:55'
    },
    price: [
      {value: 600, symbol: Currencies.USD, isDefault: false},
      {value: 16000,symbol: Currencies.UAH, isDefault: true}
    ],
    order: 2,
    date: '2021-10-26 15:17'
  }
]

export const orders = [
  {
    id: 1,
    title: 'Приход 1',
    date: '2021-05-07 10:25',
    description: 'desc',
    products: products.filter(el => el.order === 1)
  },
  {
    id: 2,
    title: 'Приход 2',
    date: '2021-08-12 14:23',
    description: 'desc',
    products:  products.filter(el => el.order === 2),
  },
  {
    id: 3,
    title: 'Приход 3',
    date: '2021-09-29 16:40',
    description: 'desc',
    products:  products.filter(el => el.order === 3)
  }
]


