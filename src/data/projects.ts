export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Orchestration d'agents IA — architecture maître-esclave",
    description:
      "Pipelines multi-agents pour automatiser veille, synthèse et exécution de tâches. Le projet évolue vers une architecture logicielle maître-esclave sous Linux, implémentée et supervisée par des agents IA.",
    tags: ["Agents IA", "Linux", "Automatisation"],
  },
  {
    title: "Neuro-transmetteur flexible (théorique)",
    description:
      "Théorisation d'un modèle de neuro-transmetteur complet et flexible. Travail encore au stade théorique, publication prévue sur GitHub.",
    tags: ["Recherche", "Théorie", "À publier"],
  },
];
