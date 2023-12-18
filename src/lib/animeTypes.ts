export type TAnime = {
  mal_id: number;
  title: string;
  name?: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  year: number;
  genres: [
    {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }
  ];
};

export type TAnimeReview = {
  entry: {
    mal_id: number;
    images: {
      jpg: { image_url: string };
    };
    title: string;
  };
  user: {
    images: {
      jpg: {
        image_url: string;
      };
    };
    username: string;
  };
  review: string;
  mal_id: number;
  score: number;
  date: string;
};

export type TRecommendation = {
  mal_id: string;
  entry: [
    {
      mal_id: number;
      url: string;

      images: {
        jpg: {
          image_url: string;
        };
      };
      title: string;
    }
  ];
  content: string;
  date: string;
  user: {
    url: string;
    username: string;
  };
};

export type TCharacterData = {
  character: {
    nicknames?: string[];
    favorites: number;
    about: string;
    mal_id: string;
    name: string;
    images: {
      jpg: { image_url: string };
    };
  };
};
