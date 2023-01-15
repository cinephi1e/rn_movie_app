export const BASE_URL = "https://api.themoviedb.org/3/movie";
export const API_KEY = "b80fa1fc52e6a74a68a1c3273cae8201";

// 슬라이더
export const getNowPlayings = () =>
  fetch(`${BASE_URL}/now_playing?api_key=${API_KEY}&language=ko&page=1`).then(
    (res) => res.json()
  );

// Ranking
export const getRanking = ({ pageParam = 1 }) => {
  return fetch(
    `${BASE_URL}/top_rated?api_key=${API_KEY}&language=ko&page=${pageParam}`
  ).then((res) => res.json());
};

// Upcoming
export const getUpcoming = ({ pageParam = 1 }) => {
  return fetch(
    `${BASE_URL}/upcoming?api_key=${API_KEY}&language=ko&page=${pageParam}`
  ).then((res) => res.json());
};

//  Detail
export const getMovies = (params) => {
  console.log("params", params);
  const [_, movieId] = params.queryKey;
  return fetch(
    `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=ko&append_to_response=videos`
  ).then((res) => res.json());
};
