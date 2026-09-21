const MIN_PHONE_DIGITS = 8;
const MAX_PHONE_DIGITS = 15;

export function createWhatsAppHref(phone: string, message = ''): string {
  const digits = phone.replace(/\D/g, '');

  if (digits.length < MIN_PHONE_DIGITS || digits.length > MAX_PHONE_DIGITS) {
    throw new Error('FloatingWhatsApp exige telefone confirmado entre 8 e 15 dígitos.');
  }

  const url = new URL(`https://wa.me/${digits}`);
  if (message.trim()) url.searchParams.set('text', message);
  return url.toString();
}
