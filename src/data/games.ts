export interface GameItem {
  title: string;
  url: string;
  note?: string;
}

const steam = (title: string): string =>
  `https://store.steampowered.com/search/?term=${encodeURIComponent(title)}`;

export const games: GameItem[] = [
  {
    title: "Minecraft",
    url: "https://www.minecraft.net",
    note: "dont Prism Craft et 4D Miner côté mods joués, et deux projets perso en cours : minecraft-og et Carbone (mod-loader en développement)",
  },
  { title: "Portal", url: steam("Portal") },
  { title: "Portal 2", url: steam("Portal 2") },
  { title: "Portal Reloaded", url: steam("Portal Reloaded") },
  { title: "Portal with RTX", url: steam("Portal with RTX") },
  { title: "The Stanley Parable", url: steam("The Stanley Parable") },
  { title: "Detroit: Become Human", url: steam("Detroit Become Human") },
  { title: "Viewfinder", url: steam("Viewfinder") },
];
