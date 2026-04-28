import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-grid-lines" aria-hidden="true"></div>
      <div className="hero-circle-1"></div>
      <div className="hero-circle-2"></div>

      <div className="hero-content animate-fade-up">
        <div className="hero-tag">Catálogo Oficial 2026</div>
        <h1 className="hero-title">
          Bebidas<br />
          <em>Premium</em>
          no Atacado
        </h1>
        <p className="hero-sub">
          Os melhores rótulos do mercado com preços de atacado imbatíveis.
          Heineken, Amstel, Budweiser e muito mais.
        </p>
        <div className="hero-ctas">
          <a href="#cervejas" className="btn-primary">Ver Catálogo</a>
          <a href="#novidade" className="btn-secondary">Novidade Praya</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">20+</div>
            <div className="stat-label">Produtos</div>
          </div>
          <div className="stat">
            <div className="stat-num">5</div>
            <div className="stat-label">Marcas Premium</div>
          </div>
          <div className="stat">
            <div className="stat-num">↓</div>
            <div className="stat-label">Preço Atacado</div>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <svg viewBox="0 0 500 500" width="480" height="480" style={{opacity: 0.18, position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)'}}>
          <circle cx="250" cy="250" r="200" fill="none" stroke="#C9A962" strokeWidth="1" />
          <circle cx="250" cy="250" r="150" fill="none" stroke="#C9A962" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="100" fill="none" stroke="#C9A962" strokeWidth="0.3" />
        </svg>
      </div>
    </section>
  );
}