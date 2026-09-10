export type Profile = {
  name: string;
  affiliation: string;
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
