import axios from "axios";

export const getRecommendations = async (page = 1) => {
  const response = await axios.get(
    `https://api.jikan.moe/v4/recommendations/anime?page=${page}`
  );
  return response.data.data;
};

export const getAnimeReviews = async () => {
  const response = await fetch("https://api.jikan.moe/v4/reviews/anime");
  const data = await response.json();
  return data.data;
};

export const fetchAnime = async (animeId: string) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`);
  return response.data.data;
};

export const fetchCharacters = async (animeId: string) => {
  const response = await axios.get(
    `https://api.jikan.moe/v4/anime/${animeId}/characters`
  );
  return response.data.data;
};
