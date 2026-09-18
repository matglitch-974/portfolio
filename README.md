# Portfolio

**→ [Voir le site en ligne](https://matglitch-974.github.io/portfolio/)**

portflio personnel, construit avec [Astro](https://astro.build).

## Structure

```
src/
├── layouts/Layout.astro      # <head>, styles globaux
├── components/                # une section = un composant
│   ├── Hero.astro
│   ├── About.astro
│   ├── AIPipeline.astro       # section veille IA (pipeline d'agents)
│   ├── Projects.astro
│   ├── Stack.astro
│   ├── Interests.astro
│   └── Footer.astro
├── data/projects.ts           # liste des projets (contenu séparé du template)
├── styles/global.css          # tokens de couleur, layout de base
└── pages/index.astro          # assemblage des composants
```

## Commandes

| Commande         | Action                                      |
| ----------------- | -------------------------------------------- |
| `npm install`      | installe les dépendances                     |
| `npm run dev`       | serveur local, `localhost:4321`              |
| `npm run build`     | build statique dans `./dist/`                |
| `npm run preview`   | prévisualise le build avant déploiement      |

## Avant le premier déploiement

1. Dans `astro.config.mjs`, remplacer `site` et `base` par les valeurs réelles :
   - Sans domaine perso : `site: 'https://<user>.github.io'`, `base: '/<repo>'`
   - Avec domaine perso : `site: 'https://votre-domaine.tld'`, retirer `base`, ajouter un fichier `public/CNAME` contenant le domaine
2. Pousser sur la branche `main` d'un dépôt GitHub — le workflow `.github/workflows/deploy.yml` construit et publie automatiquement sur GitHub Pages.
3. Activer GitHub Pages sur le dépôt : Settings → Pages → Source = "GitHub Actions".
