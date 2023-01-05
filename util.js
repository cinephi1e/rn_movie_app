import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

export const BASE_URL = "https://api.themoviedb.org/3/movie";
export const API_KEY = "b80fa1fc52e6a74a68a1c3273cae8201";

export const getImgPath = (path) => {
  return `https://image.tmdb.org/t/p/w500/${path}`;
};
