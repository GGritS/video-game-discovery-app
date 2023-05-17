export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Publisher = {
  id: number;
  name: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
};

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

export type FetchResponse<T> = {
  count: number;
  results: T[];
  next: string | null;
};

export type Trailer = {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
};

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
};

export type Screenshot = {
  id: number;
  image: string;
  width: number;
  height: number;
};
