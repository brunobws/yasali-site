const whatsappNumber = "5515981744696";

export interface WhatsAppContext {
  productName?: string;
  gender?: string;
  usage?: string;
  family?: string;
  gift?: boolean;
  intent?: string;
}

export function createWhatsAppUrl(context: WhatsAppContext = {}) {
  const lines = ["Olá, vim pelo site da Yasali e gostaria de uma ajuda com perfumes."];
  if (context.productName) lines.push(`Perfume: ${context.productName}.`);
  if (context.gender) lines.push(`Perfil: ${context.gender}.`);
  if (context.usage) lines.push(`Momento: ${context.usage}.`);
  if (context.family) lines.push(`Família olfativa: ${context.family}.`);
  if (context.gift) lines.push("Estou procurando uma opção para presentear.");
  if (context.intent) lines.push(context.intent);
  lines.push("Pode me confirmar a disponibilidade e me orientar?");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
