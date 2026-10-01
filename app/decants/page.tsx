/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element -- Static Vinext navigation and curated gallery. */

import { FloatingSocials } from "../components/FloatingSocials";
import { createWhatsAppUrl } from "../lib/whatsapp";

const decantSets = [
  ["01", "Sabah Al Ward, Fakhar Rose e Musamam", "/media/decants/sets/decants-set-01-sabah-al-ward-fakhar-rose-musamam.jpg"],
  ["02", "Asad, Fakhar Black e Ferrari Black", "/media/decants/sets/decants-set-02-asad-fakhar-black-ferrari-black.jpg"],
  ["03", "Musamam e Royal Amber", "/media/decants/sets/decants-set-03-musamam-royal-amber.jpg"],
  ["04", "Asad, Vulcan Feu e Club de Nuit Intense", "/media/decants/sets/decants-set-04-asad-vulcan-feu-club-de-nuit-intense.jpg"],
  ["05", "Musamam, Atheeri e Asad", "/media/decants/sets/decants-set-05-musamam-atheeri-asad.jpg"],
  ["06", "Ameerati, Delilah e Yara", "/media/decants/sets/decants-set-06-ameerati-delilah-yara.jpg"],
  ["07", "Musamam, Yara, Asad Elixir e Vulcan Feu", "/media/decants/sets/decants-set-07-musamam-yara-asad-elixir-vulcan-feu.jpg"],
  ["08", "Ameerati, Afeef e Durrat Al Aroos", "/media/decants/sets/decants-set-08-ameerati-afeef-durrat-al-aroos.jpg"],
  ["09", "Dalal, Yara e Club de Nuit Woman", "/media/decants/sets/decants-set-09-dalal-yara-club-de-nuit-woman.jpg"],
] as const;

const individualDecants = [
  ["Sabah Al Ward", "/media/products/sabah-al-ward/sabah-al-ward-front-01.jpg"],
  ["Fakhar Rose", "/media/products/fakhar-rose/fakhar-rose-front-01.jpg"],
  ["Musamam", "/media/products/musamam/musamam-front-01.jpg"],
  ["Asad", "/media/products/asad/asad-front-clean.jpg"],
  ["Fakhar Black", "/media/products/fakhar-black/fakhar-black-front-01.jpg"],
  ["Ferrari Black", "/media/products/ferrari-black/ferrari-black-front-01.jpg"],
  ["Royal Amber", "/media/products/royal-amber/royal-amber-front-01.jpg"],
  ["Vulcan Feu", "/media/products/vulcan-feu/vulcan-feu-front-01.jpg"],
  ["Club de Nuit Intense", "/media/products/club-de-nuit-intense/club-de-nuit-intense-front-01.jpg"],
  ["Atheeri", "/media/products/atheeri/atheeri-front-01.jpg"],
  ["Ameerati", "/media/products/ameerati/ameerati-front-01.jpg"],
  ["Delilah", "/media/products/delilah/delilah-front-01.jpg"],
  ["Yara", "/media/products/yara/yara-front-01.jpg"],
  ["Asad Elixir", "/media/products/asad-elixir/asad-elixir-front-01.jpg"],
  ["Durrat Al Aroos", "/media/products/durrat-al-aroos/durrat-al-aroos-front-01.jpg"],
  ["Afeef", "/media/products/afeef/afeef-front-01.jpg"],
  ["Dalal", "/media/products/dalal/dalal-front-01.jpg"],
  ["Club de Nuit Woman", "/media/products/club-de-nuit-woman/club-de-nuit-woman-front-01.jpg"],
] as const;

const whatsappUrl = createWhatsAppUrl({ intent: "Olá, vim pela página de decants e gostaria de saber quais opções estão disponíveis." });

export const metadata = {
  title: "Decants | Yasali Perfumaria",
  description: "Conheça os conjuntos de decants da Yasali e teste perfumes antes de escolher o frasco.",
  alternates: { canonical: "/decants" },
};

export default function DecantsPage() {
  return (
    <main id="conteudo">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div className="announcement-bar"><div className="container announcement-inner"><p>Perfumes árabes, importados e decants em Sorocaba</p></div></div>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="/" aria-label="Yasali Perfumaria — início"><span className="brand-image" aria-hidden="true"><img src="/media/brand/yasali-logo-wordmark-transparent.png" alt="" width="1847" height="851" /></span></a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="/decants" aria-current="page">Decants</a><a href="/body-splash">Body splash</a></nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir recomendação</a>
        <details className="mobile-menu"><summary aria-label="Abrir menu"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /></summary><nav aria-label="Navegação mobile"><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="/decants">Decants</a><a href="/body-splash">Body splash</a><a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram · @yasali.perfumaria</a></nav></details>
      </div></header>

      <section className="selection-hero">
        <div className="container selection-hero-inner">
          <div className="selection-hero-copy">
            <p className="eyebrow">Experimente primeiro</p>
            <h1>Decants para escolher sem pressa.</h1>
            <p>Teste na pele, compare as possibilidades e descubra qual perfume combina com o seu momento antes de investir no frasco inteiro.</p>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar disponibilidade</a>
          </div>
          <div className="selection-hero-note"><span>Venda individual</span><strong>R$ 50</strong><small>Por decant. Consulte os aromas disponíveis pelo WhatsApp.</small></div>
        </div>
      </section>

      <section className="selection-section" aria-labelledby="decants-list-title">
        <div className="container">
          <div className="selection-heading"><div><p className="eyebrow">R$ 50 por unidade</p><h2 id="decants-list-title">Escolha o seu decant</h2></div><p>Cada decant é vendido separadamente pelo mesmo valor. As imagens mostram o perfume de referência; confirme disponibilidade e volume pelo WhatsApp.</p></div>
          <div className="selection-grid">
            {individualDecants.map(([name, image], index) => <article className="selection-card" key={name}>
              <div className="selection-card-image"><img src={image} alt={`Perfume ${name}, referência do decant`} width="1080" height="1440" loading="lazy" /></div>
              <div className="selection-card-body"><span className="selection-number">Decant {String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p className="selection-price">R$ 50,00 <span>por unidade</span></p><a className="text-link" href={createWhatsAppUrl({ productName: `decant de ${name}`, intent: `Olá, gostaria de consultar o decant de ${name}.` })} target="_blank" rel="noreferrer">Consultar disponibilidade →</a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="selection-gallery-strip"><div className="container selection-strip-grid"><div><p className="eyebrow">Fotos recebidas da cliente</p><h2>Você pode escolher cada um separadamente.</h2><p>As fotos agrupadas abaixo foram uma forma prática de mostrar os aromas disponíveis. O pedido é individual: R$ 50,00 por decant.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Montar minha seleção →</a></div><div className="decant-reference-grid">{decantSets.slice(0, 3).map(([number, name, image]) => <figure key={image}><img src={image} alt={`Foto de referência dos decants ${name}`} width="1080" height="1440" loading="lazy" /><figcaption>Foto de referência · {number}</figcaption></figure>)}</div></div></section>

      <section className="selection-cta"><div className="container selection-cta-inner"><div><p className="eyebrow">Atendimento próximo</p><h2>Quer montar uma seleção para experimentar?</h2><p>Conte quais perfumes você gosta ou qual ocasião quer explorar. A Yasali ajuda a separar opções.</p></div><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></div></section>

      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><img className="footer-logo" src="/media/brand/yasali-logo-wordmark-transparent.png" alt="Yasali Perfumaria" width="1847" height="851" /><p>Perfumes árabes, importados e decants escolhidos para fazer sentido para você.</p></div><nav className="footer-nav" aria-label="Links do rodapé"><span className="footer-label">Explore</span><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="/decants">Decants</a><a href="/body-splash">Body splash</a></nav><div className="footer-contact"><span className="footer-label">Fale com a Yasali</span><p>Sorocaba — SP</p><a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram <span>@yasali.perfumaria</span></a><a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp</a></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Yasali Perfumaria.</p><p>Catálogo sujeito à confirmação pelo atendimento.</p></div></footer>
      <FloatingSocials />
    </main>
  );
}
