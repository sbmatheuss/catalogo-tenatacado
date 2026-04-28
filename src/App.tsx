import { useState } from 'react';
import './styles/style.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Novidade } from './components/Novidade';
import { ProductsSection } from './components/ProductsSection';
import { Footer } from './components/Footer';
import { beers, energyDrinks, softDrinks } from './data/products';

type Category = 'cervejas' | 'energeticos' | 'refrigerantes';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('cervejas');

  return (
    <>
      <Header activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <Hero />
      <Novidade />
      <div className="divider"></div>

      {activeCategory === 'cervejas' && (
        <ProductsSection
          id="cervejas"
          title="Cervejas"
          subtitle="Catálogo"
          products={beers}
          count="27 produtos"
        />
      )}
      {activeCategory === 'energeticos' && (
        <ProductsSection
          id="energeticos"
          title="Energéticos"
          subtitle="Energia"
          products={energyDrinks}
          count="3 produtos"
        />
      )}
      {activeCategory === 'refrigerantes' && (
        <ProductsSection
          id="refrigerantes"
          title="Refrigerantes"
          subtitle="Refrescos"
          products={softDrinks}
          count="4 produtos"
        />
      )}
      <Footer />
    </>
  );
}

export default App;