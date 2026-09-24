import type { Tile } from "./tiles";

const jw = (path: string): string => `https://www.justwatch.com/fr/${path}`;
const search = (q: string): string =>
  `https://www.justwatch.com/fr/recherche?q=${encodeURIComponent(q)}`;

export const movies: Tile[] = [
  { title: "Black Mirror", description: "Anthologie sur les dérives de la technologie.", url: jw("serie/black-mirror"), image: "black-mirror.jpg" },
  { title: "Rick et Morty", description: "Science-fiction animée, absurde et multivers.", url: jw("serie/rick-and-morty"), image: "rick-et-morty.jpg" },
  { title: "Ready Player One", description: "Chasse au trésor dans un monde virtuel.", url: jw("film/ready-player-one"), image: "ready-player-one.jpg" },
  { title: "Star Wars (saga)", description: "Le space opera fondateur.", url: search("Star Wars"), image: "star-wars.jpg" },
  { title: "The Big Bang Theory", description: "Sitcom d'une bande de scientifiques.", url: jw("serie/the-big-bang-theory"), image: "big-bang-theory.jpg" },
  { title: "Interstellar", description: "Voyage au-delà du système solaire, à l'épreuve de la relativité.", url: jw("film/interstellar"), image: "interstellar.jpg" },
  { title: "The Truman Show", description: "Une vie entière filmée à l'insu de son héros.", url: jw("film/the-truman-show"), image: "truman-show.jpg" },
  { title: "Edward Snowden", description: "Le lanceur d'alerte de la NSA, filmé par Oliver Stone.", url: jw("film/snowden"), image: "snowden.jpg" },
  { title: "Terminator (saga)", description: "Skynet, l'IA qui se retourne contre l'humanité.", url: search("Terminator"), image: "terminator.jpg" },
  { title: "Retour vers le futur (saga)", description: "Voyages dans le temps à bord d'une DeLorean.", url: search("Retour vers le futur"), image: "retour-vers-le-futur.jpg" },
  { title: "Her", description: "Une histoire d'amour avec une intelligence artificielle.", url: jw("film/her"), image: "her.jpg" },
  { title: "Les Nouveaux Héros", description: "Un jeune inventeur et Baymax, son robot soignant.", url: jw("film/les-nouveaux-heros"), image: "nouveaux-heros.jpg" },
  { title: "Fondation", description: "Asimov adapté : la chute d'un empire galactique.", url: jw("serie/foundation"), image: "fondation.jpg" },
  {
    title: "Les de Funès",
    description: "Les classiques de Louis de Funès.",
    image: "aile-ou-la-cuisse.jpg",
    groups: [
      {
        entries: [
          { title: "La Soupe aux choux", url: jw("film/la-soupe-aux-choux"), note: "1981 · un extraterrestre chez deux paysans", image: "soupe-aux-choux.jpg" },
          { title: "Le Grand Restaurant", url: jw("film/le-grand-restaurant"), note: "1966 · un restaurateur tyrannique mêlé à un enlèvement", image: "grand-restaurant.jpg" },
          { title: "Le Corniaud", url: jw("film/le-corniaud"), note: "1965 · une Cadillac piégée, face à Bourvil", image: "corniaud.jpg" },
          { title: "L'Avare", url: jw("film/lavare"), note: "1980 · Molière porté à l'écran", image: "avare.jpg" },
          { title: "L'Aile ou la Cuisse", url: jw("film/laile-ou-la-cuisse"), note: "1976 · un critique gastronomique contre la malbouffe", image: "aile-ou-la-cuisse.jpg" },
        ],
      },
      {
        title: "Le Gendarme",
        entries: [
          { title: "Le Gendarme de Saint-Tropez", url: jw("film/le-gendarme-de-saint-tropez"), note: "1964 · Cruchot muté sur la Côte d'Azur", image: "gendarme-saint-tropez.jpg" },
          { title: "Le Gendarme et les Gendarmettes", url: jw("film/the-gendarme-and-the-gendarmettes"), note: "1982 · des femmes arrivent à la brigade", image: "gendarme-gendarmettes.jpg" },
        ],
      },
    ],
  },
];
