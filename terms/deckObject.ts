import { directionalTerms, introTerms } from "./basics";
export type TermObject = {
  [key: string]: string;
};

export type Deck = {
  group: string;
  chapter: string;
  unitCode: string;
  unitName: string;
  data: Record<string, string>;
};

export type DeckObject = Record<string, Deck>;

export const emptyDeckObject = {
  group: "no-group",
  chapter: "no-chapter",
  unitCode: "no-chapter",
  unitName: "no-chapter",
  data: { none: "none" },
}

export const deckObject: DeckObject = {
  "0": {
    group: "basics",
    chapter: "Chapter 1",
    unitCode: "intro",
    unitName: "Basic Terms",
    data: introTerms
  },
  "1": {
    group: "basics",
    chapter: "Chapter 1",
    unitCode: "directions",
    unitName: "Directional Terms",
    data: directionalTerms
  }
}