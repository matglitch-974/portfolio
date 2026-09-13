export interface Channel {
  name: string;
  /** Handle YouTube exact. Absent tant que le handle reste à confirmer. */
  handle?: string;
  /** Fichier d'avatar dans public/img/avatars/ (handles confirmés uniquement). */
  pic?: string;
}

export const channelUrl = (c: Channel): string =>
  c.handle
    ? `https://www.youtube.com/@${c.handle}`
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(c.name)}`;

export const channels: Channel[] = [
  { name: "Léo Tech Maker", handle: "LeoTechMaker", pic: "LeoTechMaker.jpg" },
  { name: "Leo Duff", handle: "LeoDuff", pic: "LeoDuff.jpg" },
  { name: "dexsilicium", handle: "dexsilicium", pic: "dexsilicium.jpg" },
  { name: "EGO", handle: "ego_one", pic: "ego_one.jpg" },
  { name: "Fuzay au Carré", handle: "FuzayAuCarre", pic: "FuzayAuCarre.jpg" },
  { name: "Underscore_", handle: "Underscore_", pic: "Underscore_.jpg" },
  { name: "overfl-0-w", handle: "overfl-0-w", pic: "overfl-0-w.jpg" },
  { name: "VisionIA-FR", handle: "VisionIA-FR", pic: "VisionIA-FR.jpg" },
  { name: "BarthH95", handle: "BarthH95", pic: "BarthH95.jpg" },
  { name: "melvynxdev", handle: "melvynxdev", pic: "melvynxdev.jpg" },
  { name: "Parlons Cyber", handle: "ParlonsCyber", pic: "ParlonsCyber.jpg" },
  { name: "Dan Fait Des Jeux", handle: "DanFaitDesJeux", pic: "DanFaitDesJeux.jpg" },
  { name: "Micode", handle: "Micode", pic: "Micode.jpg" },
  { name: "realcrin", handle: "realcrin", pic: "realcrin.jpg" },
  { name: "Vous avez le droit", handle: "Vousavezledroit", pic: "Vousavezledroit.jpg" },
  { name: "L'envers du décode", handle: "Lenversdudécode", pic: "Lenversdudecode.jpg" },
  { name: "Cresus Investissement", handle: "CresusInvestissement", pic: "CresusInvestissement.jpg" },
  { name: "Korben", handle: "korben", pic: "korben.jpg" },
  { name: "KAPPA Studio", handle: "KAPPA-Studio", pic: "KAPPA-Studio.jpg" },
  { name: "French Hardware" },
  { name: "V2F" },
  { name: "0verflow" },
  { name: "TRY" },
];
