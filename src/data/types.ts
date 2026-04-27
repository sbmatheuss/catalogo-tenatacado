export interface Product {
  id: number;
  brand: string;
  name: string;
  volume: string;
  price: number;
  unit: string;
  image?: string;
  inStock?: boolean;
}

export interface EnergyDrink extends Product {
  brand: 'Red Bull' | 'Monster' | 'Vibran';
}