"use client";

/* eslint-disable @next/next/no-img-element -- Native images avoid a vinext hydration incompatibility. */

import { products } from "./lib/catalog";
import { FloatingSocials } from "./components/FloatingSocials";

const whatsappUrl =
  "https://wa.me/5515981744696?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Yasali%20e%20gostaria%20de%20conhecer%20os%20perfumes.";

const testimonials = [
  { quote: "Eu não sabia nem por onde começar. Expliquei o que eu gostava e recebi opções que realmente combinavam comigo.", name: "Marina", location: "Sorocaba — SP" },
  { quote: "O decant fez toda a diferença. Consegui testar com calma antes de escolher o frasco maior.", name: "Rafael", location: "Votorantim — SP" },
  { quote: "Fui comprar um presente e o atendimento me ajudou a encontrar uma fragrância muito especial.", name: "Camila", location: "Sorocaba — SP" },
];

function Arrow() {
  return null;
}

function InstagramMark() {
  return (
    <span className="instagram-mark" aria-hidden="true">
      <span />
    </span>
  );
}

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const catalogStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de perfumes Yasali",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `/produto/${product.slug}/`,
    })),
  };

  return (
    <main id="conteudo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogStructuredData) }} />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <div className="announcement-bar">
        <div className="container announcement-inner">
          <p>Perfumes árabes, importados e decants em Sorocaba</p>
          <a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">
            <InstagramMark /> @yasali.perfumaria
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Yasali Perfumaria — início">
            <span className="brand-image" aria-hidden="true">
              <img
                src="/media/brand/yasali-logo-wordmark-transparent.png"
                alt=""
                width="1847"
                height="851"
              />
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="/catalogo">Perfumes</a>
            <a href="/decants">Decants</a>
            <a href="/body-splash">Body splash</a>
            <a className="nav-instagram" href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </nav>

          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Pedir recomendação
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </summary>
            <nav aria-label="Navegação mobile">
              <a href="/catalogo">Perfumes</a>
              <a href="/decants">Decants</a>
              <a href="/body-splash">Body splash</a>
              <a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">
                Instagram · @yasali.perfumaria
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Pedir recomendação
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Sua perfumaria em Sorocaba</p>
            <h1 id="hero-title">Encontre um perfume que combine com você.</h1>
            <p className="hero-text">
              Conte o que você gosta e a Yasali ajuda você a escolher. Perfumes árabes, importados e decants para testar com tranquilidade.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Quero uma indicação
              </a>
              <a className="button button-secondary" href="/catalogo">Ver perfumes</a>
            </div>
            <ul className="hero-benefits" aria-label="Diferenciais Yasali">
              <li>Curadoria personalizada</li>
              <li>Decants para experimentar</li>
              <li>Atendimento direto</li>
            </ul>
          </div>
          <figure className="hero-media">
            <img
              src="/media/generated/hero/homepage-hero-asad-bourbon.webp"
              alt="Asad Bourbon sobre bancada de pedra clara"
              width="1672"
              height="941"
              fetchPriority="high"
            />
            <figcaption>
              <span>Em destaque</span>
              <strong>Asad Bourbon</strong>
            </figcaption>
            <a className="hero-media-card" href={`${whatsappUrl}%20Quero%20uma%20indica%C3%A7%C3%A3o%20de%20perfume.`} target="_blank" rel="noreferrer">
              <span>Não sabe qual escolher?</span>
              <strong>A Yasali ajuda você</strong>
            </a>
          </figure>
        </div>
      </section>

      <section className="section categories" id="categorias" aria-labelledby="categories-title">
        <div className="categories-illustration" aria-hidden="true">
          <img
            src="/media/generated/illustration/fragrance-discovery-line-art-01.png"
            alt=""
            width="1024"
            height="1024"
            loading="lazy"
          />
        </div>
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Comece por aqui</p>
            <h2 id="categories-title">O que você está procurando?</h2>
            </div>
            <p>Escolha um caminho para começar. Se preferir, fale direto com a Yasali e conte o que você tem em mente.</p>
          </div>
          <div className="category-grid">
            <a className="category-card" href={`${whatsappUrl}%20Estou%20procurando%20um%20perfume%20para%20mim.`} target="_blank" rel="noreferrer">
              <span className="category-number">01</span>
              <span className="category-name">Para mim</span>
              <span className="category-description">Uma fragrância para a sua rotina e o seu estilo.</span>
              <span className="category-link">Receber indicações <Arrow /></span>
            </a>
            <a className="category-card" href={`${whatsappUrl}%20Quero%20escolher%20um%20perfume%20para%20presentear.`} target="_blank" rel="noreferrer">
              <span className="category-number">02</span>
              <span className="category-name">Para presentear</span>
              <span className="category-description">Uma sugestão pensada para uma pessoa especial.</span>
              <span className="category-link">Encontrar um presente <Arrow /></span>
            </a>
            <a className="category-card category-card-warm" href="/decants">
              <span className="category-number">03</span>
              <span className="category-name">Para experimentar</span>
              <span className="category-description">Experimente antes de escolher o frasco inteiro.</span>
              <span className="category-link">Descobrir decants <Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="section products catalog-invite" id="destaques" aria-labelledby="products-title">
        <div className="container catalog-invite-grid">
          <div className="section-heading catalog-invite-copy">
            <div>
              <p className="eyebrow">Veja as opções</p>
              <h2 id="products-title">Veja todos os perfumes da Yasali.</h2>
              <p className="catalog-intro">
                Use os filtros para escolher por perfil, momento, família olfativa ou presente.
              </p>
            </div>
            <a className="button button-primary" href="/catalogo">
              Abrir catálogo <Arrow />
            </a>
          </div>
          <div className="catalog-preview-grid" aria-label="Seleção de perfumes em destaque">
            {featuredProducts.map((product) => (
              <a className="catalog-preview-card" href={`/produto/${product.slug}/`} key={product.slug}>
                <div className={`catalog-preview-image product-image-${product.imageFit}`}>
                  <img src={product.image} alt={product.alt} width="1080" height="1440" loading="lazy" />
                </div>
                <div className="catalog-preview-info">
                  <p>{product.brand} · {product.gender}</p>
                  <h3>{product.name}</h3>
                  <span>{product.family} · {product.usage}</span>
                  <strong>{product.price}</strong>
                </div>
              </a>
            ))}
          </div>
          <div className="catalog-preview-action">
            <a className="button button-primary" href="/catalogo">
              Abrir catálogo completo <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="section buying-path" id="como-comprar" aria-labelledby="buying-path-title">
        <div className="container buying-path-grid">
          <div className="buying-path-heading">
            <p className="eyebrow">Do interesse à escolha</p>
            <h2 id="buying-path-title">Seu perfume em três passos simples.</h2>
            <p>Sem formulários longos ou compra impessoal. A conversa acontece diretamente com a Yasali.</p>
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Começar agora
            </a>
          </div>
          <ol className="buying-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Conte o que você gosta</h3>
                <p>Fale sobre ocasião, estilo ou algum perfume que já usa.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Receba opções</h3>
                <p>A Yasali apresenta perfumes e decants alinhados ao que procura.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Escolha com confiança</h3>
                <p>Tire suas dúvidas, consulte a disponibilidade e confirme pelo WhatsApp.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section testimonials" aria-labelledby="testimonials-title">
        <div className="container">
          <div className="section-heading testimonials-heading">
            <div>
              <p className="eyebrow">Uma escolha mais tranquila</p>
              <h2 id="testimonials-title">Perfume bom é aquele que faz sentido para você.</h2>
            </div>
            <p>Experiências de quem encontrou uma fragrância com mais conversa e menos dúvida.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <figure className="testimonial-card" key={testimonial.name}>
                <span className="testimonial-mark" aria-hidden="true">“</span>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption><strong>{testimonial.name}</strong><span>{testimonial.location}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section editorial" id="sobre" aria-labelledby="editorial-title">
        <div className="container editorial-grid">
          <div className="editorial-media">
            <img
              src="/media/generated/lifestyle/attar-al-wesal-lifestyle-01.webp"
              alt="Attar Al Wesal em uma prateleira de pedra clara"
              width="1086"
              height="1448"
              loading="lazy"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">Curadoria Yasali</p>
            <h2 id="editorial-title">Mais do que ver um frasco. Encontrar uma sensação.</h2>
            <p>
              A Yasali reúne perfumes árabes e importados para quem quer encontrar um aroma novo, presentear alguém ou trocar de fragrância.
            </p>
            <p>
              Se precisar, a Yasali explica as diferenças entre as opções e ajuda você a decidir.
            </p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Conversar com a Yasali <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="section decants" id="decants" aria-labelledby="decants-title">
        <div className="container decants-grid">
          <div className="decants-copy">
            <p className="eyebrow">Experimente primeiro</p>
            <h2 id="decants-title">Teste em tamanho menor antes de decidir.</h2>
            <p>
              Os decants permitem testar o perfume na pele e comparar opções antes de comprar o frasco. Consulte os aromas disponíveis.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="/decants">
                Conhecer os decants
              </a>
              <a className="button button-secondary" href="/body-splash">
                Ver body splash
              </a>
            </div>
          </div>
          <div className="decants-media">
            <img
              src="/media/generated/lifestyle/decants-pastel-lifestyle-01.webp"
              alt="Composição editorial com seis frascos pequenos em tons pastel"
              width="1536"
              height="1024"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section instagram-section" id="instagram" aria-labelledby="instagram-title">
        <div className="container instagram-grid">
          <div className="instagram-copy">
            <p className="eyebrow">Yasali no Instagram</p>
            <h2 id="instagram-title">Acompanhe as novidades da Yasali.</h2>
            <p>Veja os perfumes que chegaram, acompanhe os detalhes dos frascos e fale com a gente pelo Instagram.</p>
            <a className="instagram-button" href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">
              <InstagramMark />
              <span>
                Siga no Instagram
                <strong>@yasali.perfumaria</strong>
              </span>
              <Arrow />
            </a>
          </div>
          <div className="instagram-gallery" aria-label="Prévia visual do Instagram da Yasali">
            <a className="instagram-post instagram-post-tall" href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Yasali">
              <img src="/media/products/asad-bourbon/asad-bourbon-in-hand-01.jpg" alt="Asad Bourbon em mãos" width="1080" height="1440" loading="lazy" />
              <span className="instagram-post-label"><InstagramMark /> Ver perfil</span>
            </a>
            <a className="instagram-post" href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Yasali">
              <img src="/media/products/asad-elixir/asad-elixir-in-hand-01.jpg" alt="Asad Elixir em mãos" width="1080" height="1440" loading="lazy" />
            </a>
            <a className="instagram-post" href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Yasali">
              <img src="/media/products/attar-al-wesal/attar-al-wesal-in-hand-01.jpg" alt="Attar Al Wesal em mãos" width="1080" height="1440" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <p className="eyebrow">Fale com a Yasali</p>
            <h2 id="cta-title">Seu próximo perfume pode começar com uma conversa.</h2>
            <p>Conte a ocasião, o estilo ou uma fragrância que você já gosta. A Yasali separa algumas opções para você comparar sem pressa.</p>
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero uma indicação
            </a>
          </div>
          <div className="final-cta-note">
            <span className="final-cta-note-label">Você pode pedir ajuda para</span>
            <ul>
              <li>Encontrar um perfume para você</li>
              <li>Escolher um presente</li>
              <li>Testar um decant antes do frasco</li>
            </ul>
            <span className="final-cta-note-foot">Atendimento direto pelo WhatsApp</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img className="footer-logo" src="/media/brand/yasali-logo-wordmark-transparent.png" alt="Yasali Perfumaria" width="1847" height="851" />
            <p>Perfumes árabes, importados e decants escolhidos para fazer sentido para você.</p>
          </div>
          <nav className="footer-nav" aria-label="Links do rodapé">
            <span className="footer-label">Explore</span>
            <a href="#categorias">Por onde começar</a>
            <a href="/catalogo">Ver catálogo</a>
            <a href="/decants">Decants</a>
            <a href="/body-splash">Body splash</a>
          </nav>
          <div className="footer-contact">
            <span className="footer-label">Fale com a Yasali</span>
            <p>Sorocaba — SP</p>
            <a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram <span>@yasali.perfumaria</span></a>
            <a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Yasali Perfumaria.</p>
          <p>Catálogo sujeito à confirmação pelo atendimento.</p>
        </div>
      </footer>

      <a className="mobile-sticky-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        <span>WhatsApp</span>
        <strong>Peça uma indicação</strong>
        <Arrow />
      </a>
      <FloatingSocials />
    </main>
  );
}
