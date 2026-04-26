import './Novidade.css';
import prayaVideo from '../assets/prayaVideo.mp4';

export function Novidade() {
  return (
    <section id="novidade">
      <div className="novidade-bg"></div>
      <div className="novidade-inner">
        <div className="novidade-content">
          <div className="novidade-badge">Destaque Novidade</div>
          <h2 className="novidade-title">Praya<br /><span>Long</span><br />Neck</h2>
          <p className="novidade-desc">
            A nova sensação chegou no atacado! Praya Long Neck traz leveza, sabor refrescante
            e um estilo único. Perfeita para quem quer oferecer o que há de mais novo no mercado.
          </p>
          <div className="novidade-price-block">
            <div className="novidade-price"><small>R$</small> Consulte</div>
            <div className="novidade-price-tag">Novidade</div>
          </div>
          <a href="tel:+55" className="btn-primary">Consultar Preço</a>
        </div>
        <div className="novidade-video">
          <video 
            src={prayaVideo} 
            controls 
            autoPlay 
            muted 
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}