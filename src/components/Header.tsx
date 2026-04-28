import './Header.css';

type Category = 'cervejas' | 'energeticos' | 'refrigerantes' | 'aguas' | 'ice';

interface HeaderProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function Header({ activeCategory, onCategoryChange }: HeaderProps) {
  return (
    <header>
      <div className="logo">TEN<span>.</span>atacado</div>
      <nav>
        <a href="#novidade">Novidade<span className="nav-badge">New</span></a>
      </nav>
      <div className="category-filters">
        <button
          className={`filter-btn ${activeCategory === 'cervejas' ? 'active' : ''}`}
          onClick={() => onCategoryChange('cervejas')}
        >
          Cervejas
        </button>
        <button
          className={`filter-btn ${activeCategory === 'energeticos' ? 'active' : ''}`}
          onClick={() => onCategoryChange('energeticos')}
        >
          Energéticos
        </button>
        <button
          className={`filter-btn ${activeCategory === 'refrigerantes' ? 'active' : ''}`}
          onClick={() => onCategoryChange('refrigerantes')}
        >
          Refrigerantes
        </button>
        <button
          className={`filter-btn ${activeCategory === 'aguas' ? 'active' : ''}`}
          onClick={() => onCategoryChange('aguas')}
        >
          Águas
        </button>
        <button
          className={`filter-btn ${activeCategory === 'ice' ? 'active' : ''}`}
          onClick={() => onCategoryChange('ice')}
        >
          Ice
        </button>
      </div>
    </header>
  );
}