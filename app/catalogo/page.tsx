/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element -- Static Vinext navigation and catalog branding. */

import { CatalogExperience } from "../components/CatalogExperience";

export const metadata = {
  title: "Catálogo de perfumes | Yasali Perfumaria",
  description: "Explore o catálogo de perfumes árabes e importados da Yasali e encontre opções por perfil, momento e família olfativa.",
  alternates: { canonical: "/catalogo" },
};

export default function CatalogoPage() {
  return (
    <main id="conteudo">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div className="announcement-bar"><div className="container announcement-inner"><p>Perfumes árabes, importados e decants em Sorocaba</p></div></div>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="/" aria-label="Yasali Perfumaria — início"><span className="brand-image" aria-hidden="true"><img src="/media/brand/yasali-icon.svg" alt="" width="512" height="512" /></span><span className="brand-wordmark">Yasali <small>Perfumaria</small></span></a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="/">Início</a><a href="/catalogo" aria-current="page">Catálogo</a><a className="nav-instagram" href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram</a></nav>
        <a className="header-cta" href="https://wa.me/5515981744696" target="_blank" rel="noreferrer">Pedir recomendação</a>
        <details className="mobile-menu"><summary aria-label="Abrir menu"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /></summary><nav aria-label="Navegação mobile"><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram · @yasali.perfumaria</a></nav></details>
      </div></header>
      <CatalogExperience />
      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><strong>Yasali Perfumaria</strong><p>Perfumes árabes, importados e decants.</p></div><nav aria-label="Links do rodapé"><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram</a></nav><div className="footer-contact"><p>Sorocaba — SP</p><a href="https://wa.me/5515981744696" target="_blank" rel="noreferrer">WhatsApp</a></div></div></footer>
    </main>
  );
}
