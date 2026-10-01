import type { Product } from "../types";
import { createWhatsAppUrl, type WhatsAppContext } from "../lib/whatsapp";

interface ProductCardProps {
  product: Product;
  whatsappContext?: WhatsAppContext;
}

export function ProductCard({ product, whatsappContext }: ProductCardProps) {
  const whatsappUrl = createWhatsAppUrl({ productName: product.name, gender: product.gender, usage: product.usage, family: product.family, ...whatsappContext, intent: "Gostaria de consultar este perfume." });
  const productUrl = `/produto/${product.slug}/`;
  const familyText = product.family.toLocaleLowerCase("pt-BR");
  const familyTone = familyText.includes("floral") || familyText.includes("frutado")
    ? "floral"
    : familyText.includes("cítrico") || familyText.includes("aquático") || familyText.includes("aromático")
      ? "fresh"
      : familyText.includes("amadeirado") || familyText.includes("especiado") || familyText.includes("oriental")
        ? "woody"
        : "warm";
  const usageTone = product.usage === "Noite" ? "night" : product.usage === "Dia" ? "day" : "all";
  return (
    <article className="product-card">
      <a className="product-image-link" href={productUrl} aria-label={`Ver detalhes de ${product.name}`}>
        <div className={`product-image product-image-${product.imageFit}`}>
          <img src={product.image} alt={product.alt} width="1080" height="1440" loading="lazy" decoding="async" />
        </div>
      </a>
      <div className="product-info">
        <div className="product-heading">
          <p className="product-label">{product.brand} · {product.gender}</p>
          <h3><a className="product-name-link" href={productUrl}>{product.name}</a></h3>
          <p className={`product-family family-tone-${familyTone}`}>{product.family}</p>
          <span className={`product-time-tag usage-tone-${usageTone}`}>{product.usage}</span>
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
