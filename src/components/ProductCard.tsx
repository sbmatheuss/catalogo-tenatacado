import { motion } from 'framer-motion';
import { X, Check, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';
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
import ImperioBranca from '../assets/imperioBranca.png';
import CoronaLong from '../assets/coronaLong.jpg';
import AmstelUltra from '../assets/amstelUltra.jpg';
import Bud1L from '../assets/bud1L.png';
import BudLata from '../assets/budLata.png';
import BudZeroLata from '../assets/budZeroLata.jpg';
import BudLong from '../assets/budLong.jpg';
import BudLongZero from '../assets/budLongZero.jpg';
import ImperioLong from '../assets/imperioLong.jpg';
import ImperioLongHelles from '../assets/imperioLongHelles.png';
import ItaipavaLata from '../assets/itaipavaLata.jpg';
import Itaipava1L from '../assets/itaipava1L.jpg';
import OriginalLitrinho from '../assets/originalLitrinho.jpg';
import Original600ml from '../assets/original600ml.png';
import Baly from '../assets/Baly.jpg';
import RedBull from '../assets/redbullPct.jpg';
import Monster from '../assets/monster.jpg';
import Bivolt from '../assets/Bivolt2L.png';
import BrusselsUltraLata from '../assets/brusselsUltra-lata.jpg';

const imageMap: Record<string, string> = {
  'Amstel Lata': AmstelLata,
  'Amstel 1L': Amstel1L,
  'Amstel 600ml': Amstel600ml,
  'Amstel Litrinho': AmstelLitrinho,
  'Amstel Ultra Lata': AmstelUltra,
  'Brussels Ultra Lata': BrusselsUltraLata,
  'Budweiser 1L': Bud1L,
  'Budweiser Lata': BudLata,
  'Budweiser Zero Lata': BudZeroLata,
  'Budweiser Long': BudLong,
  'Budweiser Long Zero': BudLongZero,
  'Corona Long': CoronaLong,
  'Heineken Lata': HeinekenLata,
  'Heineken Lata Zero': HeinekenLata0,
  'Heineken Long': HeinekenLong,
  'Heineken Long Zero': HeinekenLong0,
  'Heineken 600ml': Heineken600ml,
  'Heineken Long Shot 250ml': HeinekenLongShot,
  'Império Verde Lata': ImperioVerdeLata,
  'Império Puro Malte': ImperioPuroMalte,
  'Império Branca Lata': ImperioBranca,
  'Império Long Verde': ImperioLong,
  'Império Helles Long': ImperioLongHelles,
  'Itaipava Lata': ItaipavaLata,
  'Itaipava 1L': Itaipava1L,
  'Original Litrinho': OriginalLitrinho,
  'Original 600ml': Original600ml,
  'Baly 2L': Baly,
  'Red Bull Energy Drink': RedBull,
  'Monster Energy': Monster,
  'Bivolt': Bivolt,
};

interface ProductCardProps {
  product: Product;
}

const imgProps = {
  loading: 'lazy' as const,
  decoding: 'async' as const,
  style: { width: '100%', height: '100%', objectFit: 'contain' as const },
  onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  },
};

export function ProductCard({ product }: ProductCardProps) {
  const img = imageMap[product.name];

  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className="card-brand">{product.brand}</div>
      <div className="card-img" style={{ contentVisibility: 'auto' }}>
        {img ? (
          <img src={img} alt={product.name} {...imgProps} />
        ) : (
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
        <div className={clsx('card-stock', 'card-stock--out')}>
          <X size={12} strokeWidth={2.5} /> Sem Estoque
        </div>
      ) : product.inStock ? (
        <div className={clsx('card-stock', 'card-stock--in')}>
          <Check size={12} strokeWidth={2.5} /> Em Estoque
        </div>
      ) : null}
      {product.expiryWarning && (
        <div className={clsx('card-stock', 'card-stock--warning')}>
          <AlertTriangle size={12} strokeWidth={2} /> Validade Próxima
        </div>
      )}
      <div className="card-price-row">
        <span className="card-currency">R$</span>
        <span className="card-price">{product.price}</span>
        <span className="card-unit">{product.unit}</span>
      </div>
    </motion.div>
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
    'Red Bull': ['#E2141B', '#FF0000', '#B00000'],
    'Monster': ['#86E11E', '#ADFF00', '#5C9F00'],
    'Bivolt': ['#000000', '#1a1a1a', '#0d0d0d'],
    'Baly': ['#000000', '#1a1a1a', '#0d0d0d'],
  };
  return colors[brand]?.[index] || '#888888';
}
