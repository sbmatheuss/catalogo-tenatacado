import type { Product } from '../../data/types';
import './SlideCategoria.css';

import AmstelLata from '../../assets/amstel-lata.jpg';
import HeinekenLata from '../../assets/heineken-lata.jpg';
import ImperioVerdeLata from '../../assets/imperioverde-lata.jpg';
import Amstel1L from '../../assets/amstel1L.jpg';
import Amstel600ml from '../../assets/amstel600ml.jpg';
import AmstelLitrinho from '../../assets/amstelLitrinho.jpg';
import HeinekenLata0 from '../../assets/heineken-lata0.jpg';
import HeinekenLong from '../../assets/heineken-long.jpg';
import HeinekenLong0 from '../../assets/heineken-long0.jpg';
import Heineken600ml from '../../assets/heineken-600ml.jpg';
import ImperioPuroMalte from '../../assets/imperioPuroMalte.jpg';
import HeinekenLongShot from '../../assets/heinekenlong-shot.jpg';
import ImperioBranca from '../../assets/imperioBranca.png';
import CoronaLong from '../../assets/coronaLong.jpg';
import AmstelUltra from '../../assets/amstelUltra.jpg';
import Bud1L from '../../assets/bud1L.png';
import BudLata from '../../assets/budLata.png';
import BudZeroLata from '../../assets/budZeroLata.jpg';
import BudLong from '../../assets/budLong.jpg';
import BudLongZero from '../../assets/budLongZero.jpg';
import ImperioLong from '../../assets/imperioLong.jpg';
import ImperioLongHelles from '../../assets/imperioLongHelles.png';
import ItaipavaLata from '../../assets/itaipavaLata.jpg';
import Itaipava1L from '../../assets/itaipava1L.jpg';
import OriginalLitrinho from '../../assets/originalLitrinho.jpg';
import Original600ml from '../../assets/original600ml.png';
import Baly from '../../assets/Baly.jpg';
import RedBull from '../../assets/redbullPct.jpg';
import Monster from '../../assets/monster.jpg';
import Bivolt from '../../assets/Bivolt2L.png';
import BrusselsUltraLata from '../../assets/brusselsUltra-lata.jpg';

const IMAGE_MAP: Record<string, string> = {
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

function getBrandColor(brand: string): string {
  const colors: Record<string, string> = {
    Amstel: '#CC0000', Brussels: '#444444', Budweiser: '#E31837',
    Corona: '#4CAF50', Heineken: '#00A650', Império: '#2a7a2a',
    Itaipava: '#E53935', Original: '#1976D2', 'Red Bull': '#E2141B',
    Monster: '#86E11E', Bivolt: '#444444', Baly: '#555555',
  };
  return colors[brand] ?? '#888888';
}

function PlaceholderSVG({ brand, productId }: { brand: string; productId: number }) {
  const color = getBrandColor(brand);
  return (
    <svg viewBox="0 0 70 120" width="60" height="100" aria-hidden="true">
      <defs>
        <linearGradient id={`tc-grad-${productId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <ellipse cx="35" cy="10" rx="26" ry="6" fill="#aaa" />
      <rect x="9" y="10" width="52" height="96" rx="2" fill={`url(#tc-grad-${productId})`} />
      <rect x="9" y="10" width="16" height="96" fill="rgba(255,255,255,0.08)" />
      <text x="35" y="60" textAnchor="middle" fontFamily="Barlow Condensed,sans-serif" fontWeight="900" fontSize="10" fill="#fff" letterSpacing="1">
        {brand.toUpperCase().slice(0, 8)}
      </text>
      <ellipse cx="35" cy="106" rx="26" ry="6" fill="#888" />
      <rect x="20" y="4" width="30" height="8" rx="3" fill="#ccc" />
    </svg>
  );
}

interface SlideCategoriaProps {
  label: string;
  subtitle?: string;
  products: Product[];
  accent: string;
  background: string;
}

export function SlideCategoria({ label, subtitle, products, accent, background }: SlideCategoriaProps) {
  const visible = products.slice(0, 8);

  return (
    <div className="slide-cat" style={{ background }}>
      <header className="slide-cat__header">
        <div className="slide-cat__label" style={{ color: accent }}>{label.toUpperCase()}</div>
        {subtitle && <div className="slide-cat__subtitle">{subtitle}</div>}
        <div className="slide-cat__count" style={{ background: `${accent}22`, borderColor: `${accent}44`, color: accent }}>
          {products.length} {products.length === 1 ? 'produto' : 'produtos'}
        </div>
      </header>

      <div className="slide-cat__divider" style={{ background: accent }} />

      <div className="slide-cat__grid">
        {visible.map((product) => {
          const imgSrc = IMAGE_MAP[product.name];
          const outOfStock = product.inStock === false;

          return (
            <div key={`${product.id}-${product.name}`} className={`slide-cat__card${outOfStock ? ' slide-cat__card--unavailable' : ''}`}>
              {outOfStock && <div className="slide-cat__badge slide-cat__badge--out">Indisponível</div>}
              {product.expiryWarning && <div className="slide-cat__badge slide-cat__badge--expiry">Val. Próxima</div>}

              <div className="slide-cat__img-wrap">
                {imgSrc
                  ? <img src={imgSrc} alt={product.name} loading="lazy" decoding="async" className="slide-cat__img" />
                  : <PlaceholderSVG brand={product.brand} productId={product.id} />
                }
              </div>

              <div className="slide-cat__info">
                <div className="slide-cat__brand">{product.brand}</div>
                <div className="slide-cat__name">{product.name}</div>
                <div className="slide-cat__volume">{product.volume}</div>
                <div className="slide-cat__price-row">
                  <span className="slide-cat__currency">R$</span>
                  <span className="slide-cat__price" style={{ color: accent }}>{product.price}</span>
                  <span className="slide-cat__unit">{product.unit}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
