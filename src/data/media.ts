export interface MediaItem {
  title: string;
  url: string;
}

export interface MediaGroup {
  title: string;
  items: MediaItem[];
  /** Sous-catégories affichées à la suite des titres du groupe. */
  subgroups?: MediaGroup[];
}

/** `query` : terme de recherche JustWatch, quand il diffère du titre affiché. */
const justwatch = (title: string, query: string = title): MediaItem => ({
  title,
  url: `https://www.justwatch.com/fr/recherche?q=${encodeURIComponent(query)}`,
});

export const movies: MediaItem[] = [
  justwatch("Black Mirror"),
  justwatch("Rick et Morty"),
  justwatch("Ready Player One"),
  justwatch("Star Wars (saga)", "Star Wars"),
  justwatch("The Big Bang Theory"),
  justwatch("Interstellar"),
  justwatch("The Truman Show"),
  justwatch("Edward Snowden", "Snowden"),
  justwatch("Terminator (saga)", "Terminator"),
  justwatch("Retour vers le futur (saga)", "Retour vers le futur"),
  justwatch("Her"),
  justwatch("Les Nouveaux Héros"),
  justwatch("Fondation"),
];

export const mediaGroups: MediaGroup[] = [
  {
    title: "Les de Funès",
    items: [
      justwatch("La Soupe aux choux"),
      justwatch("Le Grand Restaurant"),
      justwatch("Le Corniaud"),
      justwatch("L'Avare"),
      justwatch("L'Aile ou la Cuisse"),
    ],
    subgroups: [
      {
        title: "Le Gendarme",
        items: [
          justwatch("Le Gendarme de Saint-Tropez"),
          justwatch("Le Gendarme et les Gendarmettes"),
        ],
      },
    ],
  },
];
