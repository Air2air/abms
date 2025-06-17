import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// Define your site’s base URL
const hostname = 'https://allbritishmotorshow.com';

// List static routes from App.tsx
const staticRoutes = [
  { url: '/#/home', changefreq: 'weekly', priority: 1.0 },
  { url: '/#/schedule', changefreq: 'monthly', priority: 0.8 },
  { url: '/#/location', changefreq: 'monthly', priority: 0.8 },
  { url: '/#/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/#/marques', changefreq: 'weekly', priority: 0.9 },
  { url: '/#/register', changefreq: 'monthly', priority: 0.8 },
  { url: '/#/restoration', changefreq: 'monthly', priority: 0.8 },
];

// List marque routes from App.tsx (keys from marqueComponents)
const marques = [
  'ac-cars', 'ajs', 'allard', 'alvis', 'aston-martin', 'austin-healey', 'austin',
  'bentley', 'british-motor-corporation', 'bsa', 'excelsior', 'ford-england',
  'francis-barnett', 'ginetta', 'greeves', 'hrd', 'jaguar', 'jensen', 'jensen-healey',
  'land-rover', 'lotus', 'marcos', 'matchless', 'mclaren', 'mg', 'mini', 'morgan',
  'morris', 'norton', 'ogle', 'panther', 'peel', 'rickman', 'riley', 'rolls-royce',
  'rover', 'royal-enfield', 'rudge', 'singer', 'sunbeam', 'triumph-automobiles',
  'triumph-motorcycles', 'tvr', 'velocette', 'vincent',
];

const marqueRoutes = marques.map((marque) => ({
  url: `/#/marques/${marque}`,
  changefreq: 'weekly',
  priority: 0.7,
}));

// Combine all routes
const routes = [...staticRoutes, ...marqueRoutes];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(resolve('dist/sitemap.xml'));

  routes.forEach((route) => sitemap.write(route));
  sitemap.end();

  const xml = await streamToPromise(sitemap);
  writeStream.write(xml);
  writeStream.end();
}

generateSitemap().then(() => console.log('Sitemap generated at dist/sitemap.xml'));