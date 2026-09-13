export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Neuro-transmetteur flexible (théorique)",
    description:
      "Théorisation d'un modèle de neuro-transmetteur complet et flexible. Travail encore au stade théorique, publication prévue sur GitHub.",
    tags: ["Recherche", "Théorie", "À publier"],
  },
];
