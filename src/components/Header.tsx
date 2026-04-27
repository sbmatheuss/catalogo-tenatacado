import './Header.css';

export function Header() {
  return (
    <header>
      <div className="logo">TEN<span>.</span>atacado</div>
      <nav>
        <a href="#novidade">Novidade<span className="nav-badge">New</span></a>
      </nav>
    </header>
  );
}