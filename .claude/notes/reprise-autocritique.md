# Reprise — autocritique du portfolio

Point d'étape au 2026-09-28, établi sur `main` @ `bf5774b`.
Aucune modification du site n'a encore été faite : on attend l'arbitrage du Maître.

## Déjà corrigé (commits 2807fb8 → bf5774b)
- Section Coordonnées (e-mail, X), navigation fixe, `:focus-visible`, `prefers-reduced-motion`.
- Balises canonical, Open Graph, Twitter Card, `theme-color`.
- Tuiles dépliables (`TileGrid.astro` + `data/tiles.ts`) pour films et jeux.
- Faute « portflio » du README.

## Reste à traiter

### Réalisable sans apport du Maître
| # | Point | Fichiers |
|---|-------|----------|
| 4 | Titre erroné : « Edward Snowden » → *Snowden* (film d'Oliver Stone) | `src/data/media.ts` |
| 8 | Navigation mobile sur 4 lignes : menu repliable ou défilement horizontal | `src/components/Hero.astro` |
| 9 | Pas d'`og:image` (1200×630) ; passer en `summary_large_image` | `src/layouts/Layout.astro`, `public/` |
| 10 | Tuiles à groupes inaccessibles sans JS : amélioration progressive | `src/components/TileGrid.astro` |
| 11 | Numérotation 01–08 manuelle, fragile au réordonnancement | tous les composants de section |
| 12 | README : arborescence et section « premier déploiement » périmées | `README.md` |
| 13 | Ni 404 ni sitemap ; e-mail en clair (collecte par robots) | `src/pages/`, `astro.config.mjs`, `Contact.astro` |
| 14 | ~1,7 Mo de vignettes JPEG ; WebP ≈ −40 % (mineur) | `public/img/` |

### Nécessite du contenu du Maître (ne rien inventer)
| # | Point | Besoin |
|---|-------|--------|
| 1 | Projets sans lien, capture ni démo | URL des dépôts, captures XEOS / Liquid Glass / b3dva |
| 2 | GitHub absent des Coordonnées ; `minecraft-og` et `Carbone` pointent vers la racine du profil | URL exactes des dépôts |
| 6 | Section Environnement réduite à une phrase | Logiciels et outils réellement utilisés |
| 7 | VR et optimisation quasi absentes ; carte « Neuro-transmetteur » floue | Réalisations VR, précision du projet |

### Arbitrage éditorial
| # | Point | Piste proposée |
|---|-------|----------------|
| 3 | Films + jeux ≈ moitié de la page, contre 4 projets en texte seul | Remonter les projets, fusionner loisirs en une section « Culture » en fin de page |
| 5 | Hero et « À propos » redondants ; PRAXIS cité 4 fois | Réécrire le hero en une accroche distincte |

## Pour reprendre
1. `git pull` sur `main`, puis relire ce fichier.
2. Indiquer à Miku les numéros à traiter et fournir les éléments de la colonne « Besoin ».
3. Vérification : `npm run build`, puis `npm run preview` et contrôle visuel à 1280 px et 390 px.
