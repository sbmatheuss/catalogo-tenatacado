import type { Product } from '../data/types';
import { ProductCard } from './ProductCard';
import './ProductsSection.css';

interface ProductsSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  products: Product[];
  background?: string;
  count: string;
}

export function ProductsSection({ id, title, subtitle, products, background, count }: ProductsSectionProps) {
  return (
    <section id={id} style={{ background }}>
      <div className="section-header animate-fade-up">
        <div>
          <div className="section-label">{subtitle || 'Catálogo'}</div>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="section-count">{count}</div>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}