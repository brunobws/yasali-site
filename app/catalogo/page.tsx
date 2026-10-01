/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element -- Static Vinext navigation and catalog branding. */

import { CatalogExperience } from "../components/CatalogExperience";
import { FloatingSocials } from "../components/FloatingSocials";

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
        <a className="brand" href="/" aria-label="Yasali Perfumaria — início"><span className="brand-image" aria-hidden="true"><img src="/media/brand/yasali-logo-wordmark-transparent.png" alt="" width="1847" height="851" /></span></a>
        <nav className="desktop-nav" aria-label="Navegação principal"><a href="/">Início</a><a href="/catalogo" aria-current="page">Catálogo</a><a href="/decants">Decants</a><a href="/body-splash">Body splash</a><a className="nav-instagram" href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram</a></nav>
        <a className="header-cta" href="https://wa.me/5515981744696" target="_blank" rel="noreferrer">Pedir recomendação</a>
        <details className="mobile-menu"><summary aria-label="Abrir menu"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /></summary><nav aria-label="Navegação mobile"><a href="/">Início</a><a href="/catalogo">Catálogo</a><a href="/decants">Decants</a><a href="/body-splash">Body splash</a><a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram · @yasali.perfumaria</a></nav></details>
      </div></header>
      <CatalogExperience />
      <FloatingSocials />
      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><img className="footer-logo" src="/media/brand/yasali-logo-wordmark-transparent.png" alt="Yasali Perfumaria" width="1847" height="851" /><p>Perfumes árabes, importados e decants escolhidos para fazer sentido para você.</p></div><nav className="footer-nav" aria-label="Links do rodapé"><span className="footer-label">Explore</span><a href="/">Início</a><a href="/catalogo">Ver catálogo</a><a href="/decants">Decants</a><a href="/body-splash">Body splash</a></nav><div className="footer-contact"><span className="footer-label">Fale com a Yasali</span><p>Sorocaba — SP</p><a href="https://www.instagram.com/yasali.perfumaria/" target="_blank" rel="noreferrer">Instagram <span>@yasali.perfumaria</span></a><a className="footer-whatsapp" href="https://wa.me/5515981744696" target="_blank" rel="noreferrer">Chamar no WhatsApp</a></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Yasali Perfumaria.</p><p>Catálogo sujeito à confirmação pelo atendimento.</p></div></footer>
    </main>
  );
}
