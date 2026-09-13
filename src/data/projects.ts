export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Interface Windows réinventée",
    description:
      "Deux mods système développés pour Windhawk : une taskbar repensée et une refonte d'interface, avec effets de flou natifs. Intervention au niveau des hooks système, pas de la simple customisation visuelle.",
    tags: ["C++", "Windows API", "Windhawk"],
  },
  {
    title: "Orchestration d'agents IA",
    description:
      "Pipelines multi-agents pour automatiser veille, synthèse et exécution de tâches — de la collecte d'information à la génération de bilans exploitables, sans intervention manuelle.",
    tags: ["Agents IA", "Automatisation", "Python"],
  },
  {
    title: "Robot hybride multi-terrains",
    description:
      "Conception d'un châssis unique capable de terre, air et eau. Chenilles rétractables, bilan masse/poussée en cours, architecture pensée dès la base pour la polyvalence.",
    tags: ["Robotique", "Électronique", "Conception"],
  },
  {
    title: "Atelier CAO paramétrique",
    description:
      "Chaîne de conception locale pilotée en script : génération STL/3MF/BOM en une commande, gabarits réutilisables, sortie directe vers l'impression 3D.",
    tags: ["OpenSCAD", "Fabrication", "3D"],
  },
];
