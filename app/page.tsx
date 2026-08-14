/* eslint-disable @next/next/no-img-element -- Native images avoid a vinext hydration incompatibility. */

const whatsappUrl =
  "https://wa.me/5515981744696?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Yasali%20e%20gostaria%20de%20conhecer%20os%20perfumes.";

const products = [
  {
    name: "Asad Bourbon",
    brand: "Lattafa",
    gender: "Unissex",
    family: "Ambarado · Especiado",
    description:
      "Especiarias luminosas encontram cacau e baunilha bourbon em uma assinatura quente e sofisticada.",
    notes: ["Pimenta-rosa", "Cacau", "Baunilha bourbon"],
    image: "/media/products/asad-bourbon/asad-bourbon-front-01.jpg",
    alt: "Frasco e caixa do perfume Asad Bourbon",
    imageFit: "cover",
  },
  {
    name: "Asad",
    brand: "Lattafa",
    gender: "Masculino",
    family: "Ambarado · Especiado",
    description:
      "Uma abertura especiada com abacaxi e tabaco evolui para café, íris e madeiras quentes.",
    notes: ["Pimenta-preta", "Café", "Baunilha"],
    image: "/media/products/asad/asad-front-01.jpg",
    alt: "Frasco e caixa do perfume Asad",
    imageFit: "cover",
  },
  {
    name: "Asad Elixir",
    brand: "Lattafa",
    gender: "Masculino",
    family: "Amadeirado · Especiado",
    description:
      "Açafrão e grapefruit abrem caminho para tabaco, cedro e uma base seca e envolvente.",
    notes: ["Açafrão", "Tabaco", "Âmbar seco"],
    image: "/media/products/asad-elixir/asad-elixir-front-01.jpg",
    alt: "Frasco e caixa do perfume Asad Elixir",
    imageFit: "cover",
  },
  {
    name: "Attar Al Wesal",
    brand: "Al Wataniah",
    gender: "Unissex",
    family: "Oriental · Especiado",
    description:
      "Fresco e aromático na saída, ganha calor com canela, baunilha escura, âmbar e cedro.",
    notes: ["Lavanda", "Canela", "Baunilha"],
    image: "/media/products/attar-al-wesal/attar-al-wesal-front-01.jpg",
    alt: "Frasco e caixa do perfume Attar Al Wesal",
    imageFit: "cover",
  },
  {
    name: "Khamrah",
    brand: "Lattafa",
    gender: "Unissex",
    family: "Aromático · Especiado",
    description:
      "Canela e noz-moscada envolvem um coração gourmand de tâmaras e praliné, sobre baunilha e âmbar.",
    notes: ["Canela", "Tâmaras", "Baunilha"],
    image: "/media/products/khamrah/khamrah-official-01.jpg",
    alt: "Frasco e caixa do perfume Khamrah",
    imageFit: "contain",
  },
  {
    name: "Khamrah Qahwa",
    brand: "Lattafa",
    gender: "Unissex",
    family: "Gourmand · Especiado",
    description:
      "Especiarias quentes, praliné e frutas cristalizadas terminam em café arábica e baunilha.",
    notes: ["Cardamomo", "Praliné", "Café"],
    image: "/media/products/khamrah-qahwa/khamrah-qahwa-official-01.jpg",
    alt: "Frasco e caixa do perfume Khamrah Qahwa",
    imageFit: "contain",
  },
  {
    name: "Yara",
    brand: "Lattafa",
    gender: "Feminino",
    family: "Âmbar · Baunilha",
    description:
      "Uma fragrância cremosa e delicada, com frutas tropicais, flores macias e fundo de baunilha.",
    notes: ["Orquídea", "Notas tropicais", "Baunilha"],
    image: "/media/products/yara/yara-official-01.jpg",
    alt: "Frasco e caixa do perfume Yara",
    imageFit: "contain",
  },
  {
    name: "Yara Tous",
    brand: "Lattafa",
    gender: "Feminino",
    family: "Floral · Tropical",
    description:
      "Manga, coco e maracujá encontram flores luminosas e uma base macia de baunilha e musk.",
    notes: ["Manga", "Coco", "Baunilha"],
    image: "/media/products/yara-tous/yara-tous-official-01.jpg",
    alt: "Frasco e caixa do perfume Yara Tous",
    imageFit: "contain",
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function InstagramMark() {
  return (
    <span className="instagram-mark" aria-hidden="true">
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <main id="conteudo">
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
                src="/media/brand/yasali-logo-primary.png"
                alt=""
                width="796"
                height="802"
              />
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#destaques">Perfumes</a>
            <a href="#decants">Decants</a>
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
              <a href="#destaques">Perfumes</a>
              <a href="#decants">Decants</a>
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
            <h1 id="hero-title">Encontre um perfume com a sua presença.</h1>
            <p className="hero-text">
              Conte o que você gosta e receba uma indicação da Yasali. Perfumes árabes, importados e decants para descobrir sem pressa — e sem escolher no escuro.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Quero uma indicação
              </a>
              <a className="button button-secondary" href="#destaques">Ver perfumes</a>
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
              <strong>A Yasali te ajuda ↗</strong>
            </a>
          </figure>
        </div>
      </section>

      <section className="section categories" id="categorias" aria-labelledby="categories-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Comece por aqui</p>
              <h2 id="categories-title">Qual é o seu momento?</h2>
            </div>
            <p>Escolher fica mais gostoso quando a conversa começa pela ocasião. Conte o que procura e receba opções mais alinhadas com você.</p>
          </div>
          <div className="category-grid">
            <a className="category-card" href={`${whatsappUrl}%20Estou%20procurando%20um%20perfume%20para%20mim.`} target="_blank" rel="noreferrer">
              <span className="category-number">01</span>
              <span className="category-name">Para mim</span>
              <span className="category-description">Uma escolha que combine com seu estilo e sua presença.</span>
              <span className="category-link">Receber indicações <Arrow /></span>
            </a>
            <a className="category-card" href={`${whatsappUrl}%20Quero%20escolher%20um%20perfume%20para%20presentear.`} target="_blank" rel="noreferrer">
              <span className="category-number">02</span>
              <span className="category-name">Para presentear</span>
              <span className="category-description">Conte sobre a pessoa e torne o presente mais especial.</span>
              <span className="category-link">Encontrar um presente <Arrow /></span>
            </a>
            <a className="category-card category-card-warm" href="#decants">
              <span className="category-number">03</span>
              <span className="category-name">Para experimentar</span>
              <span className="category-description">Conheça novas fragrâncias em frascos menores.</span>
              <span className="category-link">Descobrir decants <Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="section products" id="destaques" aria-labelledby="products-title">
        <div className="container">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Seleção Yasali</p>
              <h2 id="products-title">Catálogo para descobrir</h2>
              <p className="catalog-intro">
                Compare estilos, famílias olfativas e notas marcantes. A Yasali ajuda você a transformar interesse em uma escolha segura.
              </p>
            </div>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Ver disponibilidade <Arrow />
            </a>
          </div>
          <div className="catalog-guide" aria-label="Informações disponíveis no catálogo">
            <span>Família olfativa</span>
            <span>Perfil de uso</span>
            <span>Notas em destaque</span>
            <span>Atendimento personalizado</span>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className={`product-image product-image-${product.imageFit}`}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    width="1080"
                    height="1440"
                    loading="lazy"
                  />
                  <span className="product-availability">Sob consulta</span>
                </div>
                <div className="product-info">
                  <div className="product-heading">
                    <p className="product-label">{product.brand} · {product.gender}</p>
                    <h3>{product.name}</h3>
                    <p className="product-family">{product.family}</p>
                  </div>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-notes" aria-label={`Notas em destaque de ${product.name}`}>
                    {product.notes.map((note) => <li key={note}>{note}</li>)}
                  </ul>
                  <a className="product-cta" href={`${whatsappUrl}%20Tenho%20interesse%20no%20${encodeURIComponent(product.name)}%20e%20gostaria%20de%20saber%20a%20disponibilidade.`} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name} no WhatsApp`}>
                    Consultar este perfume <Arrow />
                  </a>
                </div>
              </article>
            ))}
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
              Perfume é memória, presença e descoberta. A Yasali reúne perfumes árabes e importados para quem quer conhecer algo novo, presentear ou renovar sua assinatura.
            </p>
            <p>
              No atendimento, você recebe contexto para comparar as opções e decidir com mais segurança.
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
            <h2 id="decants-title">Descubra mais perfumes, um decant de cada vez.</h2>
            <p>
              Frascos menores ajudam você a sentir a evolução do perfume na pele e comparar opções antes de escolher. Consulte os aromas e volumes disponíveis.
            </p>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Conhecer os decants
            </a>
          </div>
          <div className="decants-media">
            <img
              src="/media/generated/lifestyle/decants-pastel-lifestyle-01.webp"
              alt="Composição editorial com seis frascos pequenos em tons pastel"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <p>Imagem editorial. Consulte os frascos disponíveis.</p>
          </div>
        </div>
      </section>

      <section className="section instagram-section" id="instagram" aria-labelledby="instagram-title">
        <div className="container instagram-grid">
          <div className="instagram-copy">
            <p className="eyebrow">Yasali no Instagram</p>
            <h2 id="instagram-title">Novidades, detalhes e inspirações para a sua próxima descoberta.</h2>
            <p>Acompanhe os perfumes que chegam, veja os frascos de perto e mantenha sua lista de desejos sempre atualizada.</p>
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
          <p className="eyebrow">Sua descoberta pode começar agora</p>
          <h2 id="cta-title">Qual perfume combina com o seu momento?</h2>
          <p>Conte um pouco do que você procura e receba uma indicação da Yasali pelo WhatsApp.</p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero uma indicação
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
            <a href="#categorias">Por onde começar</a>
            <a href="#destaques">Perfumes</a>
            <a href="#decants">Decants</a>
          </nav>
          <div className="footer-contact">
            <p>Sorocaba — SP</p>
            <a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">@yasali.perfumaria</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
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
    </main>
  );
}
