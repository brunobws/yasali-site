import type { Product } from "../types";
import { createWhatsAppUrl, type WhatsAppContext } from "../lib/whatsapp";

interface ProductCardProps {
  product: Product;
  whatsappContext?: WhatsAppContext;
}

export function ProductCard({ product, whatsappContext }: ProductCardProps) {
  const whatsappUrl = createWhatsAppUrl({ productName: product.name, gender: product.gender, usage: product.usage, family: product.family, ...whatsappContext, intent: "Gostaria de consultar este perfume." });
  return (
    <article className="product-card">
      <div className={`product-image product-image-${product.imageFit}`}>
        <img src={product.image} alt={product.alt} width="1080" height="1440" loading="lazy" />
      </div>
      <div className="product-info">
        <div className="product-heading">
          <p className="product-label">{product.brand} · {product.gender}</p>
          <h3><a className="product-name-link" href={`/produto/${product.slug}/`}>{product.name}</a></h3>
          <p className="product-family">{product.family}</p>
          <span className="product-time-tag">{product.usage}</span>
          <p className="product-volume">{product.volume}</p>
          <p className="product-price">{product.price}</p>
        </div>
        <p className="product-description">{product.description}</p>
        <ul className="product-notes" aria-label={`Notas em destaque de ${product.name}`}>
          {product.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
        <a className="product-cta" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name} no WhatsApp`}>
          Consultar este perfume
        </a>
      </div>
    </article>
  );
}
