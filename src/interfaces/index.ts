export interface IPostRes {
  categories: number[];
  content: { rendered: string };
  date: string;
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
}
