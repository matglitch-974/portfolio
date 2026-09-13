export interface MediaItem {
  title: string;
  url: string;
}

const justwatch = (title: string): string =>
  `https://www.justwatch.com/fr/recherche?q=${encodeURIComponent(title)}`;

export const movies: MediaItem[] = [
  { title: "Black Mirror", url: justwatch("Black Mirror") },
  { title: "Rick et Morty", url: justwatch("Rick et Morty") },
  { title: "Ready Player One", url: justwatch("Ready Player One") },
  { title: "Star Wars (saga)", url: justwatch("Star Wars") },
  { title: "The Big Bang Theory", url: justwatch("The Big Bang Theory") },
  { title: "Interstellar", url: justwatch("Interstellar") },
  { title: "Dune", url: justwatch("Dune") },
  { title: "Snowden", url: justwatch("Snowden") },
  { title: "Terminator (saga)", url: justwatch("Terminator") },
  { title: "Retour vers le futur (saga)", url: justwatch("Retour vers le futur") },
  { title: "Her", url: justwatch("Her") },
  { title: "Les Nouveaux Héros", url: justwatch("Les Nouveaux Héros") },
  { title: "Fondation", url: justwatch("Fondation") },
];
