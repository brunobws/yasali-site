import type { Product } from "../types";
import { createWhatsAppUrl } from "../lib/whatsapp";

interface GiftHighlightsProps {
  products: Product[];
}

export function GiftHighlights({ products }: GiftHighlightsProps) {
  const whatsappUrl = createWhatsAppUrl({ gift: true, intent: "Quero uma sugestão de presente." });
  return (
    <div className="gift-section" aria-labelledby="gift-title">
      <div className="gift-heading">
        <div>
          <p className="eyebrow">Escolha sem erro</p>
          <h3 id="gift-title">Ideais para presentear</h3>
          <p>Perfumes versáteis para transformar uma boa intenção em um presente marcante.</p>
        </div>
        <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir ajuda</a>
      </div>
      <div className="gift-grid">
        {products.map((product) => (
          <a className="gift-card" href={createWhatsAppUrl({ productName: product.name, gender: product.gender, usage: product.usage, family: product.family, gift: true, intent: "Tenho interesse neste perfume para presentear." })} target="_blank" rel="noreferrer" key={product.slug}>
            <img src={product.image} alt={product.alt} width="360" height="440" loading="lazy" />
            <span className="gift-card-body">
              <span className="gift-card-label">{product.brand} · {product.gender}</span>
              <strong>{product.name}</strong>
              <span>{product.family}</span>
              <em>{product.price}</em>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
