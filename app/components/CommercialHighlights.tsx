import type { Product } from "../types";
import { createWhatsAppUrl } from "../lib/whatsapp";
import { GiftHighlights } from "./GiftHighlights";

interface CommercialHighlightsProps {
  products: Product[];
}

interface HighlightSection {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
}

function HighlightRow({ section }: { section: HighlightSection }) {
  if (section.products.length === 0) return null;
  return (
    <section className="commercial-highlight" aria-labelledby={`highlight-${section.title.toLocaleLowerCase("pt-BR").replaceAll(" ", "-")}`}>
      <div className="commercial-highlight-heading">
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h3 id={`highlight-${section.title.toLocaleLowerCase("pt-BR").replaceAll(" ", "-")}`}>{section.title}</h3>
          <p>{section.description}</p>
        </div>
      </div>
      <div className="commercial-highlight-grid">
        {section.products.slice(0, 4).map((product) => (
          <a className="commercial-highlight-card" href={createWhatsAppUrl({ productName: product.name, gender: product.gender, usage: product.usage, family: product.family, intent: "Gostaria de saber mais sobre esta seleção." })} target="_blank" rel="noreferrer" key={product.slug}>
            <img src={product.image} alt={product.alt} width="360" height="440" loading="lazy" />
            <span>
              <small>{product.brand} · {product.gender}</small>
              <strong>{product.name}</strong>
              <em>{product.family}</em>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function CommercialHighlights({ products }: CommercialHighlightsProps) {
  const sections: HighlightSection[] = [
    {
      eyebrow: "Curadoria Yasali",
      title: "Destaques da curadoria",
      description: "Uma seleção editorial para começar a descobrir o catálogo.",
      products: products.filter((product) => product.featured),
    },
    {
      eyebrow: "Para o dia",
      title: "Perfumes para o dia",
      description: "Opções marcadas para acompanhar rotinas e momentos leves.",
      products: products.filter((product) => product.usage === "Dia"),
    },
    {
      eyebrow: "Para a noite",
      title: "Perfumes para a noite",
      description: "Perfis indicados no catálogo para ocasiões noturnas.",
      products: products.filter((product) => product.usage === "Noite"),
    },
    {
      eyebrow: "Sem rótulos",
      title: "Seleção unissex",
      description: "Fragrâncias que podem ser exploradas por diferentes estilos.",
      products: products.filter((product) => product.gender === "Unissex"),
    },
  ];

  return (
    <div className="commercial-highlights" aria-label="Seleções da Yasali">
      <GiftHighlights products={products.filter((product) => product.giftable)} />
      {sections.map((section) => <HighlightRow key={section.title} section={section} />)}
    </div>
  );
}
