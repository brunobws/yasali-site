/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element -- Static Vinext navigation and curated gallery. */

import { FloatingSocials } from "../components/FloatingSocials";
import { createWhatsAppUrl } from "../lib/whatsapp";

const bodySplashes = [
  ["Yara", "Lattafa", "/media/body-splash/yara/yara-body-splash-front-01.jpg"],
  ["Mayar", "Lattafa", "/media/body-splash/mayar/mayar-front-01.jpg"],
  ["Haya", "Lattafa", "/media/body-splash/haya/haya-front-01.jpg"],
  ["Teriaq", "Lattafa", "/media/body-splash/teriaq/teriaq-front-01.jpg"],
  ["Fakhar Rose", "Lattafa", "/media/body-splash/fakhar-rose/fakhar-rose-front-01.jpg"],
  ["Angham", "Lattafa", "/media/body-splash/angham/angham-front-01.jpg"],
] as const;

const whatsappUrl = createWhatsAppUrl({ intent: "Olá, vim pela página de body splash e gostaria de saber quais opções estão disponíveis." });

export const metadata = {
  title: "Body splash | Yasali Perfumaria",
  description: "Conheça a seleção de body splashes da Yasali e consulte as opções disponíveis.",
  alternates: { canonical: "/body-splash" },
};

export default function BodySplashPage() {
  return (
    <main id="conteudo">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div className="announcement-bar"><div className="container announcement-inner"><p>Perfumes árabes, importados e decants em Sorocaba</p></div></div>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="/" aria-label="Yasali Perfumaria — início"><span className="brand-image" aria-hidden="true"><img src="/media/brand/yasali-logo-wordmark-transparent.png" alt="" width="1847" height="851" /></span></a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="/decants">Decants</a><a href="/body-splash" aria-current="page">Body splash</a></nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir recomendação</a>
        <details className="mobile-menu"><summary aria-label="Abrir menu"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /></summary><nav aria-label="Navegação mobile"><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="/decants">Decants</a><a href="/body-splash">Body splash</a><a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram · @yasali.perfumaria</a></nav></details>
      </div></header>

      <section className="selection-hero selection-hero-splash">
        <div className="container selection-hero-inner">
          <div className="selection-hero-copy"><p className="eyebrow">Leveza para o dia</p><h1>Body splash para acompanhar a sua rotina.</h1><p>Uma seleção fresca e confortável para perfumar a pele, reaplicar ao longo do dia e descobrir novos jeitos de usar suas fragrâncias favoritas.</p><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar opções</a></div>
          <div className="selection-hero-art"><img src="/media/body-splash/sets/body-splash-collection-01-angham-teriaq-eclaire-yara-fakhar-rose-mayar.jpg" alt="Coleção de body splashes da Yasali" width="1080" height="1440" /></div>
        </div>
      </section>

      <section className="selection-section" aria-labelledby="body-splash-list-title">
        <div className="container"><div className="selection-heading"><div><p className="eyebrow">Seleção Yasali</p><h2 id="body-splash-list-title">Opções para consultar</h2></div><p>As fotos foram recebidas da cliente. Confirme estoque, volume e condições diretamente com a Yasali.</p></div><div className="selection-grid selection-grid-splash">
          {bodySplashes.map(([name, brand, image]) => <article className="selection-card" key={name}><div className="selection-card-image"><img src={image} alt={`Body splash ${name}`} width="1080" height="1440" loading="lazy" /></div><div className="selection-card-body"><span className="selection-number">{brand}</span><h3>{name}</h3><a className="text-link" href={createWhatsAppUrl({ productName: `Body splash ${name}`, intent: `Olá, gostaria de consultar o body splash ${name}.` })} target="_blank" rel="noreferrer">Consultar disponibilidade →</a></div></article>)}
        </div></div>
      </section>

      <section className="selection-gallery-strip"><div className="container selection-strip-grid"><img src="/media/body-splash/sets/body-splash-collection-02-angham-mayar-teriaq.jpg" alt="Body splashes Angham, Mayar e Teriaq" width="1080" height="1440" loading="lazy" /><div><p className="eyebrow">Uma fragrância mais leve</p><h2>Escolha pelo seu jeito de usar.</h2><p>Quer algo para o dia, para reaplicar ou para presentear? Fale com a Yasali e encontre a opção mais adequada.</p><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Pedir uma indicação →</a></div></div></section>

      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><img className="footer-logo" src="/media/brand/yasali-logo-wordmark-transparent.png" alt="Yasali Perfumaria" width="1847" height="851" /><p>Perfumes árabes, importados e decants escolhidos para fazer sentido para você.</p></div><nav className="footer-nav" aria-label="Links do rodapé"><span className="footer-label">Explore</span><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="/decants">Decants</a><a href="/body-splash">Body splash</a></nav><div className="footer-contact"><span className="footer-label">Fale com a Yasali</span><p>Sorocaba — SP</p><a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram <span>@yasali.perfumaria</span></a><a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp</a></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Yasali Perfumaria.</p><p>Catálogo sujeito à confirmação pelo atendimento.</p></div></footer>
      <FloatingSocials />
    </main>
  );
}
