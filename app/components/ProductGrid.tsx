import type { Product } from "../types";
import type { WhatsAppContext } from "../lib/whatsapp";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  whatsappContext?: WhatsAppContext;
}

const catalogCategories = ["Masculinos", "Femininos e unissex"];

export function ProductGrid({ products, whatsappContext }: ProductGridProps) {
  return (
    <>
      {catalogCategories.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category);
        if (categoryProducts.length === 0) return null;

        return (
          <section className="catalog-group" key={category} aria-labelledby={`catalog-${category}`}>
            <div className="catalog-group-heading">
              <div>
                <p className="eyebrow">Seleção por estilo</p>
                <h3 id={`catalog-${category}`}>{category}</h3>
              </div>
              <span>{categoryProducts.length} opções</span>
            </div>
            <div className="product-grid">
              {categoryProducts.map((product) => <ProductCard key={product.slug} product={product} whatsappContext={whatsappContext} />)}
            </div>
          </section>
        );
      })}
    </>
  );
}
