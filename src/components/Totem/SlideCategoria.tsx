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
  'Amstel Lata': AmstelLata, 'Amstel 1L': Amstel1L, 'Amstel 600ml': Amstel600ml,
  'Amstel Litrinho': AmstelLitrinho, 'Amstel Ultra Lata': AmstelUltra,
  'Brussels Ultra Lata': BrusselsUltraLata, 'Budweiser 1L': Bud1L,
  'Budweiser Lata': BudLata, 'Budweiser Zero Lata': BudZeroLata,
  'Budweiser Long': BudLong, 'Budweiser Long Zero': BudLongZero,
  'Corona Long': CoronaLong, 'Heineken Lata': HeinekenLata,
  'Heineken Lata Zero': HeinekenLata0, 'Heineken Long': HeinekenLong,
  'Heineken Long Zero': HeinekenLong0, 'Heineken 600ml': Heineken600ml,
  'Heineken Long Shot 250ml': HeinekenLongShot, 'Império Verde Lata': ImperioVerdeLata,
  'Império Puro Malte': ImperioPuroMalte, 'Império Branca Lata': ImperioBranca,
  'Império Long Verde': ImperioLong, 'Império Helles Long': ImperioLongHelles,
  'Itaipava Lata': ItaipavaLata, 'Itaipava 1L': Itaipava1L,
  'Original Litrinho': OriginalLitrinho, 'Original 600ml': Original600ml,
  'Baly 2L': Baly, 'Red Bull Energy Drink': RedBull,
  'Monster Energy': Monster, 'Bivolt': Bivolt,
};

function getBrandColor(brand: string): string {
  const colors: Record<string, string> = {
    Amstel: '#CC0000', Brussels: '#444', Budweiser: '#E31837',
    Corona: '#4CAF50', Heineken: '#00A650', Império: '#2a7a2a',
    Itaipava: '#E53935', Original: '#1976D2', 'Red Bull': '#E2141B',
    Monster: '#86E11E', Bivolt: '#444', Baly: '#555',
  };
  return colors[brand] ?? '#888';
}

function PlaceholderSVG({ brand, productId }: { brand: string; productId: number }) {
  const color = getBrandColor(brand);
  return (
    <svg viewBox="0 0 70 120" width="56" height="96" aria-hidden="true">
      <defs>
        <linearGradient id={`sc-g-${productId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <ellipse cx="35" cy="10" rx="26" ry="6" fill="#aaa" />
      <rect x="9" y="10" width="52" height="96" rx="2" fill={`url(#sc-g-${productId})`} />
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
  const visible = products.slice(0, 6);

  return (
    <div className="sc" style={{ background }}>
      {/* Header editorial — mesmo DNA da section-header da página principal */}
      <header className="sc__header">
        <div className="sc__header-left">
          <div className="sc__eyebrow" style={{ color: accent }}>
            <span className="sc__eyebrow-line" style={{ background: accent }} />
            {subtitle ?? 'Catálogo Oficial · TEN Atacado'}
          </div>
          <h2 className="sc__title">{label.toUpperCase()}</h2>
        </div>
        <div className="sc__count">
          <span className="sc__count-num" style={{ color: accent }}>{products.length}</span>
          <span className="sc__count-label">PRODUTOS</span>
        </div>
      </header>

      {/* Divider igual ao da main page */}
      <div className="sc__rule" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      {/* Grid de cards — estilo seção de energéticos da main page */}
      <div className="sc__grid">
        {visible.map((product) => {
          const imgSrc = IMAGE_MAP[product.name];
          const unavailable = product.inStock === false;

          return (
            <div
              key={product.id}
              className={`sc__card${unavailable ? ' sc__card--out' : ''}`}
              style={{ '--accent': accent } as React.CSSProperties}
            >
              {/* barra esquerda colorida — mesmo padrão do energy-card::after */}
              <div className="sc__card-bar" style={{ background: accent }} />

              <div className="sc__img-wrap">
                {imgSrc
                  ? <img src={imgSrc} alt={product.name} loading="lazy" decoding="async" className="sc__img" />
                  : <PlaceholderSVG brand={product.brand} productId={product.id} />}
              </div>

              <div className="sc__info">
                <div className="sc__brand" style={{ color: accent }}>{product.brand.toUpperCase()}</div>
                <div className="sc__name">{product.name}</div>
                <div className="sc__volume">{product.volume}{product.unit ? ` · ${product.unit}` : ''}</div>
                <div className="sc__price-row" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  <span className="sc__currency">R$</span>
                  <span className="sc__price" style={{ color: accent }}>{product.price}</span>
                </div>
              </div>

              {unavailable && (
                <div className="sc__badge-out">INDISPONÍVEL</div>
              )}
              {product.expiryWarning && (
                <div className="sc__badge-exp">VAL. PRÓXIMA</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
