const instagramUrl = "https://www.instagram.com/yasali.perfumaria/";

export function FloatingSocials() {
  return (
    <nav className="floating-socials" aria-label="Canais de atendimento">
      <a className="floating-social floating-social-instagram" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Yasali">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="floating-social-dot" /></svg>
      </a>
    </nav>
  );
}
