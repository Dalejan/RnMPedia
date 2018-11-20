import { url } from "./url";

export class Character {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: url;
  location?: url;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}
