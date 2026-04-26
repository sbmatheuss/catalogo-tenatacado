import type { Product } from '../data/types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="card-brand">{product.brand}</div>
      <div className="card-img">
        <svg viewBox="0 0 70 120" width="65" height="110">
          <defs>
            <linearGradient id={`grad-${product.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={getBrandColor(product.brand, 0)} />
              <stop offset="50%" stopColor={getBrandColor(product.brand, 1)} />
              <stop offset="100%" stopColor={getBrandColor(product.brand, 2)} />
            </linearGradient>
          </defs>
          <ellipse cx="35" cy="10" rx="26" ry="6" fill="#aaa" />
          <rect x="9" y="10" width="52" height="96" rx="2" fill={`url(#grad-${product.id})`} />
          <rect x="9" y="10" width="18" height="96" fill="rgba(255,255,255,0.07)" />
          <text x="35" y="58" textAnchor="middle" fontFamily="Barlow Condensed,sans-serif" fontWeight="900" fontSize="11" fill="#FFD700" letterSpacing="1">{product.brand.toUpperCase()}</text>
          <ellipse cx="35" cy="106" rx="26" ry="6" fill="#888" />
          <rect x="20" y="4" width="30" height="8" rx="3" fill="#ccc" />
        </svg>
      </div>
      <div className="card-name">{product.name}</div>
      <div className="card-volume">{product.volume}</div>
      <div className="card-price-row">
        <span className="card-currency">R$</span>
        <span className="card-price">{product.price}</span>
        <span className="card-unit">{product.unit}</span>
      </div>
    </div>
  );
}

function getBrandColor(brand: string, index: number): string {
  const colors: Record<string, string[]> = {
    'Amstel': ['#8B0000', '#CC0000', '#6B0000'],
    'Heineken': ['#1a6b1a', '#2d9a2d', '#0f4d0f'],
    'Império': ['#1a4d1a', '#2a7a2a', '#0d300d'],
    'Coca-Cola': ['#c00000', '#e00000', '#900000'],
    'Guaraná': ['#e8b800', '#ffcc00', '#c9a800'],
    'Pepsi': ['#004B93', '#0066cc', '#003366'],
    'Fanta': ['#ff6600', '#ff8533', '#cc5200'],
  };
  return colors[brand]?.[index] || '#888888';
}