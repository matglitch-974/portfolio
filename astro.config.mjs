// @ts-check
import { defineConfig } from 'astro/config';

// TODO: renseigner `site` avant le premier déploiement GitHub Pages.
// - Sans domaine perso : site: 'https://<user>.github.io', base: '/<repo>'
// - Avec domaine perso (CNAME dans public/) : site: 'https://votre-domaine.tld'
// https://astro.build/config
export default defineConfig({
  // Placeholder — à remplacer avant le premier déploiement (voir commentaire ci-dessus).
  site: 'https://example.github.io',
  base: '/portfolio',
});
