/** Élément d'une tuile dépliable. */
export interface TileEntry {
  title: string;
  url: string;
  note?: string;
  /** Vignette, relative au dossier d'images de la grille. */
  image?: string;
  /** Glyphe affiché à la place d'une vignette absente. */
  glyph?: string;
}

/** Sous-ensemble d'une tuile dépliable, éventuellement titré. */
export interface TileGroup {
  title?: string;
  entries: TileEntry[];
}

/**
 * Tuile de grille : image de fond, titre, description courte.
 * Avec `groups`, la tuile se déplie ; sinon elle pointe vers `url`.
 */
export interface Tile {
  title: string;
  description: string;
  image: string;
  url?: string;
  groups?: TileGroup[];
}

export const entryCount = (t: Tile): number =>
  (t.groups ?? []).reduce((n, g) => n + g.entries.length, 0);
