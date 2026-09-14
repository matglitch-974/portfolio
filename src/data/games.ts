export interface GameVariant {
  title: string;
  url: string;
  note?: string;
}

export interface GameItem {
  title: string;
  url: string;
  /** Image de fond, dans public/img/games/ */
  image: string;
  /** Déclinaisons révélées au clic sur la carte. */
  variants?: GameVariant[];
}

const steam = (id: number): string => `https://store.steampowered.com/app/${id}/`;

export const games: GameItem[] = [
  {
    title: "Minecraft",
    url: "https://www.minecraft.net",
    image: "minecraft.jpg",
    variants: [
      { title: "4D Miner", url: steam(1941640), note: "bac à sable en quatre dimensions" },
      { title: "Prism Craft", url: "https://lairhisson.itch.io/prismcraft" },
      { title: "minecraft-og", url: "https://github.com/matglitch-974", note: "projet personnel" },
      { title: "Carbone", url: "https://github.com/matglitch-974", note: "chargeur de mods, en développement" },
    ],
  },
  {
    title: "Portal",
    url: steam(400),
    image: "portal2.jpg",
    variants: [
      { title: "Portal", url: steam(400) },
      { title: "Portal 2", url: steam(620) },
      { title: "Portal Reloaded", url: steam(1255980) },
      { title: "Portal with RTX", url: steam(2012840) },
    ],
  },
  { title: "The Stanley Parable", url: steam(1703340), image: "stanley-parable.jpg" },
  { title: "Detroit: Become Human", url: steam(1222140), image: "detroit.jpg" },
  { title: "Viewfinder", url: steam(1382070), image: "viewfinder.jpg" },
  { title: "Superliminal", url: steam(1049410), image: "superliminal.jpg" },
  { title: "Blue Prince", url: steam(1569580), image: "blue-prince.jpg" },
  { title: "SC2KRender", url: steam(1527140), image: "sc2krender.jpg" },
];
