import { expect, test } from '@playwright/test';
import { siteConfig } from '../src/config/site';
import { getPageMetadata, getPublicSitemapUrls, getRobotsTxt } from '../src/lib/site-metadata';

const restoreConfig = (snapshot: typeof siteConfig) => {
  Object.assign(siteConfig, snapshot);
};

test('starter bloqueia indexação e não publica URLs', () => {
  expect(getRobotsTxt()).toContain('Disallow: /');
  expect(getPublicSitemapUrls()).toEqual([]);
  expect(getPageMetadata({ pathname: '/' }).noindex).toBe(true);
});

test('configuração pública exige e deriva URLs HTTPS', () => {
  const snapshot = structuredClone(siteConfig);

  try {
    Object.assign(siteConfig, {
      publicationStatus: 'ready',
      siteUrl: 'https://example.test',
      defaultOpenGraphImage: '/og.jpg',
      defaultOpenGraphImageAlt: 'Imagem de teste',
      publicPaths: ['/', '/contato/'],
      organization: { type: 'Organization', name: 'Organização de teste' },
    });

    expect(getPublicSitemapUrls()).toEqual(['https://example.test/', 'https://example.test/contato/']);
    expect(getRobotsTxt()).toContain('Sitemap: https://example.test/sitemap.xml');
    expect(getPageMetadata({ pathname: '/contato/' })).toMatchObject({
      noindex: false,
      canonical: 'https://example.test/contato/',
      image: 'https://example.test/og.jpg',
    });
  } finally {
    restoreConfig(snapshot);
  }
});
