export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "XEOS — système d'exploitation Linux universel",
    description:
      "Système d'exploitation conçu pour une exécution multiplateforme : VR, PC, ARM64, téléviseurs et objets connectés. La version 3.8.4 s'installe sur disque et démarre de manière autonome, en BIOS comme en UEFI : installateur écrivant lui-même la table de partitions GPT, processus d'initialisation propriétaire en PID 1, 95 pilotes chargés et interface graphique développée intégralement en DRM/KMS. Écrit en Rust sans dépendance externe, avec une chaîne de fabrication fonctionnant entièrement sous Windows.",
    tags: ["Rust", "Linux", "Systèmes bas niveau", "VR / IoT"],
    featured: true,
  },
  {
    title: "Interface Windows unifiée — Liquid Glass",
    description:
      "Deux modules Windhawk développés sur mesure, unifiant Windows 11 en une interface cohérente : traitement Liquid Glass généralisé et barre des tâches repensée en dock Dynamic Island, synchronisé avec les épingles natives du système. Rendu en Direct2D et interception au niveau système.",
    tags: ["C++", "Direct2D", "Interface", "Windhawk"],
    featured: true,
  },
  {
    title: "b3dva — serveur Minecraft multiplateforme",
    description:
      "Serveur de survie réunissant les éditions Java et Bedrock sur une adresse unique : socle Paper 26.2, passerelle Geyser et Floodgate, et pile Via assurant la compatibilité de Minecraft Java 1.7 à 26.2 ainsi que Bedrock v26.0 à v26.40. Performances stables à 20 TPS, avec un bot en service continu.",
    tags: ["Minecraft", "Paper", "Multiplateforme", "Bots"],
  },
  {
    title: "Neuro-transmetteur flexible",
    description:
      "Travaux de modélisation d'un neuro-transmetteur complet et flexible. La conception se poursuit, avec une publication prévue sur GitHub.",
    tags: ["Recherche", "Modélisation", "Publication à venir"],
  },
];
