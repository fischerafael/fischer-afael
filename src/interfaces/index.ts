export interface IPostRes {
  categories: number[];
  content: { rendered: string };
  date: string;
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
}

export interface IGithubRepo {
  created_at: string;
  description: string | null;
  full_name: string;
  homepage: string;
  id: number;
  language: string;
  name: string;
  owner: IGithubOwner;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  url: string;
  html_url: string;
  cover?: string;
}

export interface IGithubOwner {
  avatar_url: string;
  html_url: string;
  id: number;
  login: string;
}
