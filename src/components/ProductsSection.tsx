import { motion } from 'framer-motion';
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
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
