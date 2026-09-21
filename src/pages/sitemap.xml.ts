import type { APIRoute } from 'astro';
import { getPublicSitemapUrls } from '../lib/site-metadata';

const xmlEscape = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  "'": '&apos;',
  '"': '&quot;',
})[character] ?? character);

export const GET = (() => {
  const urls = getPublicSitemapUrls();
  const entries = urls.map((url) => `  <url><loc>${xmlEscape(url)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}) satisfies APIRoute;
