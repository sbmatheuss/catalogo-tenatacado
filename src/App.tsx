import './styles/style.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Novidade } from './components/Novidade';
import { ProductsSection } from './components/ProductsSection';
import { Footer } from './components/Footer';
import { beers, energyDrinks, softDrinks } from './data/products';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Novidade />
      <div className="divider"></div>
      <ProductsSection
        id="cervejas"
        title="Cervejas"
        subtitle="Catálogo"
        products={beers}
        background="#F0EDE8"
        count="13 produtos"
      />
      <ProductsSection
        id="energeticos"
        title="Energéticos"
        subtitle="Energia"
        products={energyDrinks}
        background="var(--dark2)"
        count="3 produtos"
      />
      <ProductsSection
        id="refrigerantes"
        title="Refrigerantes"
        subtitle="Refrescos"
        products={softDrinks}
        background="var(--black)"
        count="4 produtos"
      />
      <Footer />
    </>
  );
}

export default App;