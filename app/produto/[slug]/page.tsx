/* eslint-disable @next/next/no-html-link-for-pages -- Vinext runtime uses plain anchors for static navigation. */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "../../lib/catalog";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { absoluteUrl } from "../../lib/site";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return { title: "Perfume não encontrado | Yasali Perfumaria" };

  const title = `${product.name} | Yasali Perfumaria`;
  const description = `${product.description} Família ${product.family}. Consulte disponibilidade, volume e atendimento da Yasali.`;
  return {
    title,
    description,
    alternates: { canonical: `/produto/${product.slug}/` },
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(`/produto/${product.slug}/`),
      siteName: "Yasali Perfumaria",
      locale: "pt_BR",
      images: [{ url: product.image, alt: product.alt }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((candidate) => candidate.slug !== product.slug && (candidate.family === product.family || candidate.gender === product.gender))
    .slice(0, 3);
  const whatsappUrl = createWhatsAppUrl({ productName: product.name, gender: product.gender, usage: product.usage, family: product.family, intent: "Gostaria de consultar este perfume." });
  const numericPrice = product.price.startsWith("R$") ? Number.parseFloat(product.price.replace(/[^\d,]/g, "").replace(",", ".")) : null;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    description: product.description,
    url: absoluteUrl(`/produto/${product.slug}/`),
    image: absoluteUrl(product.image),
    category: product.category,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Família olfativa", value: product.family },
      { "@type": "PropertyValue", name: "Momento", value: product.usage },
      { "@type": "PropertyValue", name: "Volume", value: product.volume },
    ],
    ...(numericPrice ? { offers: { "@type": "Offer", priceCurrency: "BRL", price: numericPrice.toFixed(2) } } : {}),
  };

  return (
    <main className="product-page" id="conteudo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="product-page-header">
        <a className="product-back-link" href="/#destaques">Voltar ao catálogo</a>
          <a className="product-page-brand" href="/" aria-label="Yasali Perfumaria — início"><img src="/media/brand/yasali-logo-wordmark-transparent.png" alt="Yasali Perfumaria" width="1847" height="851" decoding="async" /></a>
        <a className="product-page-instagram" href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer"><span className="instagram-mark" aria-hidden="true"><span /></span> Instagram</a>
      </header>
      <div className="product-page-container">
        <nav className="product-breadcrumbs" aria-label="Navegação estrutural">
          <a href="/">Início</a><span aria-hidden="true">/</span><a href="/#destaques">Catálogo</a><span aria-hidden="true">/</span><span>{product.name}</span>
        </nav>
        <section className="product-detail" aria-labelledby="product-title">
          <div className="product-detail-media">
            <img src={product.image} alt={product.alt} width="1080" height="1440" fetchPriority="high" decoding="async" />
          </div>
          <div className="product-detail-copy">
            <p className="eyebrow">{product.brand} · {product.gender}</p>
            <h1 id="product-title">{product.name}</h1>
            <p className="product-detail-family">{product.family}</p>
            <p className="product-detail-description">{product.description}</p>
            <dl className="product-detail-facts">
              <div><dt>Momento</dt><dd>{product.usage}</dd></div>
              <div><dt>Volume</dt><dd>{product.volume}</dd></div>
              <div><dt>Preço</dt><dd>{product.price}</dd></div>
            </dl>
            <div className="product-detail-notes">
              <p className="eyebrow">Notas em destaque</p>
              <ul>{product.notes.map((note) => <li key={note}>{note}</li>)}</ul>
            </div>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar disponibilidade</a>
            <p className="product-detail-disclaimer">Preço e disponibilidade são confirmados no atendimento.</p>
          </div>
        </section>
        {related.length > 0 && (
          <section className="related-products" aria-labelledby="related-title">
            <p className="eyebrow">Você também pode gostar</p>
            <h2 id="related-title">Outras fragrâncias para comparar</h2>
            <div className="related-products-grid">
              {related.map((candidate) => (
                <a className="related-product-card" href={`/produto/${candidate.slug}/`} key={candidate.slug}>
                  <img src={candidate.image} alt={candidate.alt} width="360" height="440" loading="lazy" decoding="async" />
                  <span><strong>{candidate.name}</strong><small>{candidate.family}</small></span>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
