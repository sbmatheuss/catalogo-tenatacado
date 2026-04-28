import { QRCodeSVG } from 'qrcode.react';
import './Footer.css';

const SITE_URL = 'https://sbmatheuss.github.io/catalogo-tenatacado';

export function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <div className="footer-logo">TEN<span>.</span>atacado</div>
        <p className="footer-tagline">
          Os melhores rótulos do mercado com preços de atacado imbatíveis.
          Qualidade e variedade para o seu negócio.
        </p>
        <div className="footer-qrcode">
          <QRCodeSVG value={SITE_URL} size={100} level="M" />
          <p className="qrcode-label">Escaneie para acessar</p>
        </div>
      </div>

      <div className="footer-column">
        <div className="footer-col-title">Produtos</div>
        <div className="footer-links">
          <a href="#cervejas">Cervejas</a>
          <a href="#energeticos">Energéticos</a>
          <a href="#refrigerantes">Refrigerantes</a>
          <a href="#novidade">Novidades</a>
        </div>
      </div>

      <div className="footer-column">
        <div className="footer-col-title">Contato</div>
        <div className="footer-links">
          <a href="tel:+55">Telefone</a>
          <a href="#">WhatsApp</a>
          <a href="#">E-mail</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 <strong>TEN Atacado</strong>. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}