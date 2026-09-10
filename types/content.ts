export type Profile = {
  name: string;
  nameLatin: string;
  house: string;
  affiliation: string;
  affiliationLatin: string;
  affiliationLatinFull: string;
  tagline: string;
  about: string[];
};

export type Project = {
  name: string;
  description: string;
  period?: string;
  url?: string;
};

export type Interest = {
  label: string;
  note?: string;
};

export type Link = {
  label: string;
  url: string;
};

export type LinkSection = {
  items: Link[];
  note?: string;
};

export type SectionTitles = {
  projects: string;
  interests: string;
  links: string;
};
