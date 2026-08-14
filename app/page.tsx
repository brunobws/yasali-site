import Image from "next/image";

const whatsappUrl =
  "https://wa.me/5515981744696?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Yasali%20e%20gostaria%20de%20conhecer%20os%20perfumes.";

const products = [
  {
    name: "Asad Bourbon",
    image: "/media/products/asad-bourbon/asad-bourbon-front-01.jpg",
    alt: "Frasco e caixa do perfume Asad Bourbon",
  },
  {
    name: "Asad",
    image: "/media/products/asad/asad-front-01.jpg",
    alt: "Frasco e caixa do perfume Asad",
  },
  {
    name: "Asad Elixir",
    image: "/media/products/asad-elixir/asad-elixir-front-01.jpg",
    alt: "Frasco e caixa do perfume Asad Elixir",
  },
  {
    name: "Attar Al Wesal",
    image: "/media/products/attar-al-wesal/attar-al-wesal-front-01.jpg",
    alt: "Frasco e caixa do perfume Attar Al Wesal",
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <main id="conteudo">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Yasali Perfumaria — início">
            <span className="brand-image" aria-hidden="true">
              <Image
                src="/media/brand/yasali-logo-primary.png"
                alt=""
                width="796"
                height="802"
                sizes="118px"
              />
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#categorias">Categorias</a>
            <a href="#destaques">Em destaque</a>
            <a href="#decants">Decants</a>
            <a href="#sobre">Sobre</a>
          </nav>

          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </summary>
            <nav aria-label="Navegação mobile">
              <a href="#categorias">Categorias</a>
              <a href="#destaques">Em destaque</a>
              <a href="#decants">Decants</a>
              <a href="#sobre">Sobre</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Perfumaria em Sorocaba</p>
            <h1 id="hero-title">Perfumes para descobrir no seu ritmo.</h1>
            <p className="hero-text">
              Uma seleção de perfumes árabes, importados e decants com atendimento próximo para ajudar na sua escolha.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#destaques">
                Explorar perfumes
              </a>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <figure className="hero-media">
            <Image
              src="/media/generated/hero/homepage-hero-asad-bourbon.webp"
              alt="Asad Bourbon sobre bancada de pedra clara"
              width="1672"
              height="941"
              fetchPriority="high"
              sizes="(max-width: 899px) calc(100vw - 40px), 60vw"
            />
            <figcaption>Asad Bourbon</figcaption>
          </figure>
        </div>
      </section>

      <section className="section categories" id="categorias" aria-labelledby="categories-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Encontre seu caminho</p>
              <h2 id="categories-title">Explore por categoria</h2>
            </div>
            <p>Comece pelo tipo de perfume que você procura e converse com a Yasali para conhecer as opções disponíveis.</p>
          </div>
          <div className="category-grid">
            <a className="category-card" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="category-number">01</span>
              <span className="category-name">Femininos</span>
              <span className="category-link">Consultar opções <Arrow /></span>
            </a>
            <a className="category-card" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="category-number">02</span>
              <span className="category-name">Masculinos</span>
              <span className="category-link">Consultar opções <Arrow /></span>
            </a>
            <a className="category-card category-card-warm" href="#decants">
              <span className="category-number">03</span>
              <span className="category-name">Decants</span>
              <span className="category-link">Conhecer <Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="section products" id="destaques" aria-labelledby="products-title">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Seleção Yasali</p>
              <h2 id="products-title">Em destaque</h2>
            </div>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Consultar catálogo <Arrow />
            </a>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width="1080"
                    height="1440"
                    loading="lazy"
                    sizes="(max-width: 899px) 50vw, 25vw"
                  />
                </div>
                <div className="product-info">
                  <div>
                    <p className="product-label">Perfume</p>
                    <h3>{product.name}</h3>
                  </div>
                  <a href={`${whatsappUrl}%20Tenho%20interesse%20no%20${encodeURIComponent(product.name)}.`} target="_blank" rel="noreferrer" aria-label={`Perguntar sobre ${product.name} no WhatsApp`}>
                    Perguntar <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section editorial" id="sobre" aria-labelledby="editorial-title">
        <div className="container editorial-grid">
          <div className="editorial-media">
            <Image
              src="/media/generated/lifestyle/attar-al-wesal-lifestyle-01.webp"
              alt="Attar Al Wesal em uma prateleira de pedra clara"
              width="1086"
              height="1448"
              loading="lazy"
              sizes="(max-width: 899px) calc(100vw - 40px), 42vw"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">Escolha com calma</p>
            <h2 id="editorial-title">Uma curadoria que aproxima você de novos perfumes.</h2>
            <p>
              A Yasali reúne perfumes árabes e importados em uma seleção feita para ser explorada com atenção — seja para você, para presentear ou para conhecer algo novo.
            </p>
            <p>
              Pelo WhatsApp, você pode consultar os itens disponíveis e receber um atendimento direto antes de decidir.
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
            <p className="eyebrow">Frascos menores</p>
            <h2 id="decants-title">Decants para ampliar suas descobertas.</h2>
            <p>
              Uma forma prática de conhecer perfumes em frascos menores. Consulte pelo atendimento quais opções e volumes estão disponíveis no momento.
            </p>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Conhecer os decants
            </a>
          </div>
          <div className="decants-media">
            <Image
              src="/media/generated/lifestyle/decants-pastel-lifestyle-01.webp"
              alt="Composição editorial com seis frascos pequenos em tons pastel"
              width="1536"
              height="1024"
              loading="lazy"
              sizes="(max-width: 899px) calc(100vw - 40px), 55vw"
            />
            <p>Imagem editorial. Consulte os frascos disponíveis.</p>
          </div>
        </div>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="container trust-grid">
          <div>
            <p className="eyebrow">Perto de você</p>
            <h2 id="trust-title">Yasali Perfumaria, em Sorocaba.</h2>
          </div>
          <div className="trust-copy">
            <p>
              Acompanhe novidades pelo Instagram e fale diretamente com a Yasali para consultar perfumes e decants.
            </p>
            <div className="trust-links">
              <a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">
                Instagram <Arrow />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="container final-cta-inner">
          <p className="eyebrow">Atendimento direto</p>
          <h2 id="cta-title">Encontrou um perfume que despertou sua curiosidade?</h2>
          <p>Converse com a Yasali para consultar disponibilidade e tirar suas dúvidas.</p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div>
              <strong>Yasali Perfumaria</strong>
              <p>Perfumes árabes, importados e decants.</p>
            </div>
          </div>
          <nav aria-label="Links do rodapé">
            <a href="#categorias">Categorias</a>
            <a href="#destaques">Em destaque</a>
            <a href="#decants">Decants</a>
          </nav>
          <div className="footer-contact">
            <p>Sorocaba — SP</p>
            <a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Yasali Perfumaria.</p>
          <p>Catálogo sujeito à confirmação pelo atendimento.</p>
        </div>
      </footer>
    </main>
  );
}
