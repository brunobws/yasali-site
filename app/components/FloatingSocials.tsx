import { createWhatsAppUrl } from "../lib/whatsapp";

const instagramUrl = "https://www.instagram.com/yasali.perfumaria/";
const whatsappUrl = createWhatsAppUrl({ intent: "Olá, vim pelo site da Yasali e gostaria de uma indicação de perfume." });

export function FloatingSocials({ showWhatsappOnMobile = false }: { showWhatsappOnMobile?: boolean }) {
  return (
    <nav className={`floating-socials${showWhatsappOnMobile ? " floating-socials-mobile-whatsapp" : ""}`} aria-label="Canais de atendimento">
      <a className="floating-social floating-social-instagram" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Yasali">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="floating-social-dot" /></svg>
      </a>
      <a className="floating-social floating-social-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Yasali pelo WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.6 1 1.4 1.7 2.5 2.2l.6-.6c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.3.6-.2.8-.9 1.4-1.7 1.4-3.7-.2-7.1-3.5-7.3-7.1-.1-.8.4-1.6 1.2-1.9Z" /></svg>
      </a>
    </nav>
  );
}
