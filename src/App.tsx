import { useState } from 'react';
import './styles/style.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Novidade } from './components/Novidade';
import { ProductsSection } from './components/ProductsSection';
import { Footer } from './components/Footer';
import { TotemPage } from './pages/TotemPage';
import { beers, energyDrinks } from './data/products';

type Category = 'cervejas' | 'energeticos';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('cervejas');
  const [showTotem, setShowTotem] = useState(false);

  if (showTotem) {
    return <TotemPage onExit={() => setShowTotem(false)} />;
  }

  return (
    <>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onTotemOpen={() => setShowTotem(true)}
      />
      <Hero />
      <Novidade />
      <div className="divider"></div>

      {activeCategory === 'cervejas' && (
        <ProductsSection
          id="cervejas"
          title="Cervejas"
          subtitle="Catálogo"
          products={beers}
          count={`${beers.length} produto${beers.length !== 1 ? 's' : ''}`}
        />
      )}
      {activeCategory === 'energeticos' && (
        <ProductsSection
          id="energeticos"
          title="Energéticos"
          subtitle="Energia"
          products={energyDrinks}
          count={`${energyDrinks.length} produto${energyDrinks.length !== 1 ? 's' : ''}`}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
