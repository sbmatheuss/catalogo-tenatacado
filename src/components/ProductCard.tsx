import type { Product } from '../data/types';
import './ProductCard.css';
import AmstelLata from '../assets/amstel-lata.jpg';
import HeinekenLata from '../assets/heineken-lata.jpg';
import ImperioVerdeLata from '../assets/imperioverde-lata.jpg';
import Amstel1L from '../assets/amstel1L.jpg';
import Amstel600ml from '../assets/amstel600ml.jpg';
import AmstelLitrinho from '../assets/amstelLitrinho.jpg';
import HeinekenLata0 from '../assets/heineken-lata0.jpg';
import HeinekenLong from '../assets/heineken-long.jpg';
import HeinekenLong0 from '../assets/heineken-long0.jpg';
import Heineken600ml from '../assets/heineken-600ml.jpg';
import ImperioPuroMalte from '../assets/imperioPuroMalte.jpg';
import HeinekenLongShot from '../assets/heinekenlong-shot.jpg';
import BrahmaLata from '../assets/brahmaLata.jpg';
import CoronaLong from '../assets/coronaLong.jpg';
import AmstelUltra from '../assets/amstelUltra.jpg';
import Bud1L from '../assets/bud1L.png';
import BudLata from '../assets/budLata.png';
import BudZeroLata from '../assets/budZeroLata.jpg';
import BrusselsUltraLata from '../assets/brusselsUltra-lata.jpg';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="card-brand">{product.brand}</div>
      <div className="card-img" style={{ contentVisibility: 'auto' }}>
        {product.name === 'Amstel Lata' && (
          <img 
          src={AmstelLata} 
          alt="Amstel Lata" 
          loading="lazy" 
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        />
        )}
        {product.name === 'Heineken Lata' && (
          <img src={HeinekenLata} alt="Heineken Lata" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Império Verde Lata' && (
          <img src={ImperioVerdeLata} alt="Império Verde Lata" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Amstel 1L' && (
          <img src={Amstel1L} alt="Amstel 1L" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Amstel 600ml' && (
          <img src={Amstel600ml} alt="Amstel 600ml" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Amstel Litrinho' && (
          <img src={AmstelLitrinho} alt="Amstel Litrinho" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Heineken Lata Zero' && (
          <img src={HeinekenLata0} alt="Heineken Lata Zero" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Heineken Long Zero' && (
          <img src={HeinekenLong0} alt="Heineken Long Zero" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Heineken Long' && (
          <img src={HeinekenLong} alt="Heineken Long" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Heineken 600ml' && (
          <img src={Heineken600ml} alt="Heineken 600ml" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Império Puro Malte' && (
          <img src={ImperioPuroMalte} alt="Império Puro Malte" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Heineken Long Shot 250ml' && (
          <img src={HeinekenLongShot} alt="Heineken Long Shot 250ml" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Brahma Lata' && (
          <img src={BrahmaLata} alt="Brahma Lata" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Corona Long' && (
          <img src={CoronaLong} alt="Corona Long" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Amstel Ultra Lata' && (
          <img src={AmstelUltra} alt="Amstel Ultra Lata" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Budweiser 1L' && (
          <img src={Bud1L} alt="Budweiser 1L" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Budweiser Lata' && (
          <img src={BudLata} alt="Budweiser Lata" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Budweiser Zero Lata' && (
          <img src={BudZeroLata} alt="Budweiser Zero Lata" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {product.name === 'Brussels Ultra Lata' && (
          <img src={BrusselsUltraLata} alt="Brussels Ultra Lata" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
        {!['Amstel Lata', 'Heineken Lata', 'Império Verde Lata', 'Amstel 1L', 'Amstel 600ml', 'Amstel Litrinho', 'Heineken Lata Zero', 'Heineken Long Zero', 'Heineken Long', 'Heineken 600ml', 'Império Puro Malte', 'Heineken Long Shot 250ml', 'Brahma Lata', 'Corona Long', 'Amstel Ultra Lata', 'Budweiser 1L', 'Budweiser Lata', 'Budweiser Zero Lata', 'Brussels Ultra Lata'].includes(product.name) && (
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
          <text x="35" y="58" textAnchor="middle" fontFamily="Barlow Condensed,sans-serif" fontWeight="900" fontSize="11" fill="#000000" letterSpacing="1">{product.brand.toUpperCase()}</text>
          <ellipse cx="35" cy="106" rx="26" ry="6" fill="#888" />
          <rect x="20" y="4" width="30" height="8" rx="3" fill="#ccc" />
          </svg>
        )}
      </div>
      <div className="card-name">{product.name}</div>
      <div className="card-volume">{product.volume}</div>
      {product.inStock === false ? (
        <div className="card-stock" style={{ fontSize: '0.7rem', color: '#E53935', fontWeight: 600, marginBottom: '8px' }}>✕ Sem Estoque</div>
      ) : product.inStock ? (
        <div className="card-stock" style={{ fontSize: '0.7rem', color: '#00A650', fontWeight: 600, marginBottom: '8px' }}>✓ Em Estoque</div>
      ) : null}
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
    'Brahma': ['#F5B20D', '#FFD700', '#C89600'],
    'Brussels': ['#000000', '#1a1a1a', '#0d0d0d'],
    'Budweiser': ['#E31837', '#FF0000', '#B00000'],
    'Corona': ['#2E7D32', '#4CAF50', '#1B5E20'],
    'Heineken': ['#00A650', '#2EB855', '#008A3F'],
    'Império': ['#1a4d1a', '#2a7a2a', '#0d300d'],
    'Itaipava': ['#C62828', '#E53935', '#8E0000'],
    'Original': ['#1565C0', '#1976D2', '#0D47A1'],
    'Coca-Cola': ['#c00000', '#e00000', '#900000'],
    'Guaraná': ['#e8b800', '#ffcc00', '#c9a800'],
    'Pepsi': ['#004B93', '#0066cc', '#003366'],
    'Fanta': ['#ff6600', '#ff8533', '#cc5200'],
  };
  return colors[brand]?.[index] || '#888888';
}