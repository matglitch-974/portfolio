import type { Tile } from "./tiles";

const steam = (id: number): string => `https://store.steampowered.com/app/${id}/`;

export const games: Tile[] = [
  {
    title: "Minecraft",
    description: "Le bac à sable de référence, et les projets qui en dérivent.",
    image: "minecraft.jpg",
    groups: [
      {
        entries: [
          { title: "Minecraft", url: "https://www.minecraft.net", note: "éditions Java et Bedrock", image: "minecraft.jpg" },
          { title: "4D Miner", url: steam(1941640), note: "bac à sable en quatre dimensions", image: "4d-miner.jpg" },
          { title: "Prism Craft", url: "https://lairhisson.itch.io/prismcraft", note: "Minecraft en prismes à base triangulaire", glyph: "△" },
          { title: "minecraft-og", url: "https://github.com/matglitch-974", note: "projet personnel", glyph: "og" },
          { title: "Carbone", url: "https://github.com/matglitch-974", note: "chargeur de mods, en développement", glyph: "C" },
        ],
      },
    ],
  },
  {
    title: "Portal",
    description: "Énigmes à la première personne autour d'un pistolet à portails.",
    image: "portal2.jpg",
    groups: [
      {
        entries: [
          { title: "Portal", url: steam(400), note: "l'original de Valve, 2007", image: "portal.jpg" },
          { title: "Portal 2", url: steam(620), note: "la suite, avec un mode coopératif", image: "portal2.jpg" },
          { title: "Portal Reloaded", url: steam(1255980), note: "mod : un troisième portail pour voyager dans le temps", image: "portal-reloaded.jpg" },
          { title: "Portal with RTX", url: steam(2012840), note: "l'original entièrement en ray tracing", image: "portal-rtx.jpg" },
        ],
      },
    ],
  },
  { title: "The Stanley Parable", description: "Un narrateur commente, et conteste, chacun de vos choix.", url: steam(1703340), image: "stanley-parable.jpg" },
  { title: "Detroit: Become Human", description: "Fiction interactive sur l'éveil de conscience des androïdes.", url: steam(1222140), image: "detroit.jpg" },
  { title: "Viewfinder", description: "Photographier le monde pour le remodeler.", url: steam(1382070), image: "viewfinder.jpg" },
  { title: "Superliminal", description: "Énigmes de perspective, où la taille dépend du point de vue.", url: steam(1049410), image: "superliminal.jpg" },
  { title: "Blue Prince", description: "Un manoir à construire pièce par pièce, remis à zéro chaque jour.", url: steam(1569580), image: "blue-prince.jpg" },
  { title: "SC2KRender", description: "Les villes de SimCity 2000, rendues en 3D.", url: steam(1527140), image: "sc2krender.jpg" },
];
