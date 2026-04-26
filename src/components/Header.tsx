import './Header.css';

export function Header() {
  return (
    <header>
      <div className="logo">TEN<span>.</span>atacado</div>
      <nav>
        <a href="#cervejas">Cervejas</a>
        <a href="#novidade">Novidade<span className="nav-badge">New</span></a>
        <a href="#energeticos">Energéticos</a>
        <a href="#refrigerantes">Refrigerantes</a>
      </nav>
    </header>
  );
}