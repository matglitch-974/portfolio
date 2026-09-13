export interface Channel {
  name: string;
  url: string;
}

const handle = (h: string): string => `https://www.youtube.com/@${h}`;
const search = (q: string): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const channels: Channel[] = [
  { name: "French Hardware", url: search("French Hardware") },
  { name: "Léo Tech Maker", url: handle("LeoTechMaker") },
  { name: "dexsilicium", url: handle("dexsilicium") },
  { name: "EGO", url: handle("ego_one") },
  { name: "Fuzay au Carré", url: handle("FuzayAuCarre") },
  { name: "Underscore_", url: handle("Underscore_") },
  { name: "V2F", url: search("V2F") },
  { name: "0verflow", url: search("0verflow") },
  { name: "overfl-0-w", url: handle("overfl-0-w") },
  { name: "TRY", url: search("TRY") },
  { name: "VisionIA-FR", url: handle("VisionIA-FR") },
  { name: "BarthH95", url: handle("BarthH95") },
  { name: "melvynxdev", url: handle("melvynxdev") },
  { name: "Parlons Cyber", url: handle("ParlonsCyber") },
  { name: "Dan Fait Des Jeux", url: handle("DanFaitDesJeux") },
  { name: "Micode", url: handle("Micode") },
  { name: "realcrin", url: handle("realcrin") },
  { name: "Vous avez le droit", url: handle("Vousavezledroit") },
  { name: "L'envers du décode", url: handle("Lenversdudécode") },
  { name: "Cresus Investissement", url: handle("CresusInvestissement") },
  { name: "Korben", url: search("Korben") },
  { name: "KAPPA Studio", url: handle("KAPPA-Studio") },
];
