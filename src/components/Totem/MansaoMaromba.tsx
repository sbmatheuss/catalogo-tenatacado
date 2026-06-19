import './MansaoMaromba.css';

const mansaoProducts = [
  { id: 1, icon: '🥃', name: 'Whisky Tradicional', desc: "Jack Daniel's 1L — Cx c/6", price: 'R$ 390', tag: 'Mais Vendido' },
  { id: 2, icon: '🍸', name: 'Vodka', desc: 'Smirnoff 1L — Cx c/12', price: 'R$ 480', tag: 'Mais Vendido' },
  { id: 3, icon: '🌿', name: 'Gin Melancia', desc: 'Beefeater Pink 750ml — Cx c/6', price: 'R$ 330', tag: 'Mais Vendido' },
  { id: 4, icon: '🐯', name: 'Gin Tigrinho', desc: "Tiger's Den Gin 750ml — Cx c/6", price: 'R$ 360', tag: 'Mais Vendido' },
  { id: 5, icon: '🍏', name: 'Whisky Maçã Verde', desc: 'Apple Valley Whisky 1L — Cx c/6', price: 'R$ 420', tag: 'Mais Vendido' },
];

const OrnamentTop = () => (
  <svg className="mm-ornament-top" viewBox="0 0 640 24" fill="none" aria-hidden="true">
    <line x1="0" y1="12" x2="270" y2="12" stroke="#C9A962" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="370" y1="12" x2="640" y2="12" stroke="#C9A962" strokeWidth="0.8" strokeOpacity="0.6" />
    <polygon points="300,4 320,12 300,20" fill="none" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.8" />
    <polygon points="340,4 320,12 340,20" fill="none" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.8" />
    <circle cx="285" cy="12" r="2.5" fill="#C9A962" fillOpacity="0.7" />
    <circle cx="355" cy="12" r="2.5" fill="#C9A962" fillOpacity="0.7" />
  </svg>
);

const OrnamentDivider = () => (
  <svg className="mm-divider" viewBox="0 0 520 18" fill="none" aria-hidden="true">
    <line x1="0" y1="9" x2="210" y2="9" stroke="#C9A962" strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="310" y1="9" x2="520" y2="9" stroke="#C9A962" strokeWidth="0.6" strokeOpacity="0.5" />
    <rect x="228" y="4" width="10" height="10" transform="rotate(45 233 9)" fill="none" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.9" />
    <rect x="244" y="6" width="6" height="6" transform="rotate(45 247 9)" fill="none" stroke="#C9A962" strokeWidth="0.8" strokeOpacity="0.6" />
    <circle cx="265" cy="9" r="1" fill="#C9A962" fillOpacity="0.6" />
  </svg>
);

const CornerOrn = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M2 2 L2 10" stroke="#C9A962" strokeWidth="1.2" strokeOpacity="0.7" />
    <path d="M2 2 L10 2" stroke="#C9A962" strokeWidth="1.2" strokeOpacity="0.7" />
    <circle cx="2" cy="2" r="1.5" fill="#FFD700" fillOpacity="0.8" />
  </svg>
);

export function MansaoMaromba() {
  return (
    <section className="mansao-maromba">
      <header className="mm-header">
        <OrnamentTop />
        <div className="mm-crown" aria-hidden="true">♛</div>
        <p className="mm-brand-mark">Catálogo Exclusivo</p>
        <h1 className="mm-title">Mansão Maromba</h1>
        <p className="mm-subtitle">Os Mais Vendidos</p>
        <OrnamentDivider />
      </header>

      <div className="mm-grid" role="list" aria-label="Produtos Mansão Maromba">
        {mansaoProducts.map((product) => (
          <article className="mm-card" key={product.id} role="listitem">
            <span className="mm-card-corner mm-card-corner--tl"><CornerOrn /></span>
            <span className="mm-card-corner mm-card-corner--tr"><CornerOrn /></span>
            <span className="mm-card-corner mm-card-corner--bl"><CornerOrn /></span>
            <span className="mm-card-corner mm-card-corner--br"><CornerOrn /></span>

            <div className="mm-badge" aria-label="Mais Vendido">{product.tag}</div>
            <div className="mm-card-icon" role="img" aria-label={product.name}>{product.icon}</div>
            <h2 className="mm-card-name">{product.name}</h2>
            <p className="mm-card-desc">{product.desc}</p>
            <div className="mm-card-sep" aria-hidden="true" />
            <div className="mm-card-price" aria-label={`Preço: ${product.price}`}>{product.price}</div>
          </article>
        ))}
      </div>

      <footer className="mm-footer">
        <p className="mm-footer-disclaimer">Consumo responsável · +18</p>
      </footer>
    </section>
  );
}
