export interface AnimeType {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: "tv";
  score: string;
  status: "released";
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string;
}
