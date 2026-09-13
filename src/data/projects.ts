export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "XEOS — OS Linux universel",
    description:
      "Mon système d'exploitation, pensé pour tourner partout : VR, PC, ARM64, TV, IoT. La v3.7.0 démarre pour de vrai — image ISO validée en machine virtuelle, init maison en PID 1, 95 pilotes chargés, et une interface graphique écrite de zéro en DRM/KMS. Le tout en Rust, sans la moindre dépendance externe, et fabriqué intégralement depuis Windows. Devise : « le futur c'est l'opti ».",
    tags: ["Rust", "Linux", "Bas niveau", "VR / IoT"],
    featured: true,
  },
  {
    title: "Interface Windows réinventée — Liquid Glass",
    description:
      "Deux méga-mods Windhawk maison qui unifient Windows 11 en une seule interface cohérente et futuriste : Liquid Glass partout, et une barre des tâches transformée en dock Dynamic Island qui lit les vraies épingles du système. Du Direct2D, du vrai hook système, et un design pensé comme un tout.",
    tags: ["C++", "Direct2D", "UI/UX", "Windhawk"],
    featured: true,
  },
  {
    title: "b3dva — serveur Minecraft crossplay",
    description:
      "Un serveur survie qui réunit Java et Bedrock sur une même adresse : Paper 26.2, Geyser et Floodgate pour le pont entre plateformes, et une pile Via complète qui couvre Minecraft Java 1.7 jusqu'à 26.2 et Bedrock v26.0 à v26.40. TPS à 20, avec un bot qui tourne en permanence dessus.",
    tags: ["Minecraft", "Paper", "Crossplay", "Bots"],
  },
  {
    title: "Neuro-transmetteur flexible",
    description:
      "Théorisation d'un modèle de neuro-transmetteur complet et flexible. Le travail de conception avance, avec une publication prévue sur GitHub.",
    tags: ["Recherche", "Théorie", "À publier"],
  },
];
