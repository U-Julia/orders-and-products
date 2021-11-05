import { Currencies } from './shared/enum';

export interface Order {
  id: number,
  title: string,
  date: string,
  description: string;
  products: Product[];
  sum?: { value: number, symbol: string }[];
}

export interface Product {
  id: number,
  serialNumber: number,
  isNew: string,
  photo: string,
  title: string,
  type: string,
  specification: string
  guarantee: {
    start: string,
    end: string
  },
  price: { value: number, symbol: Currencies, isDefault: boolean }[],
  order: number,
  date: string
}

