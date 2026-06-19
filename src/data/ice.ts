import type { Product } from './types';

export const iceProducts: Product[] = [
  {
    id: 1,
    brand: 'Gelo',
    name: 'Gelo Barra 5kg',
    volume: '5kg — Caixa c/6',
    price: 54,
    unit: '/cx',
    inStock: true,
  },
  {
    id: 2,
    brand: 'Gelo',
    name: 'Gelo Picado 5kg',
    volume: '5kg — Caixa c/6',
    price: 60,
    unit: '/cx',
    inStock: true,
  },
  {
    id: 3,
    brand: 'Gelo Seco',
    name: 'Gelo Seco 1kg',
    volume: '1kg — Unitário',
    price: 18,
    unit: '/un',
    inStock: false,
  },
  {
    id: 4,
    brand: 'Gelo Dry',
    name: 'Gelo Dry 10kg',
    volume: '10kg — Fardo',
    price: 95,
    unit: '/fardo',
    inStock: true,
  },
];
