export interface BlogProps {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
}

export interface PostProps {
  slug: string;
  data: {
    heroImage: string;
    title: string;
    pubDate: string;
  };
}
