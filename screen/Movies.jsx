import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import styled, { css } from "@emotion/native";
import { FontAwesome } from "@expo/vector-icons";
import { getImgPath } from "../util";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import VerticalCards from "../components/VerticalCards";
import HorizonCards from "../components/HorizonCards";

const Movies = ({ navigation: { navigate } }) => {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "b80fa1fc52e6a74a68a1c3273cae8201";

  // 슬라이더 데이터
  const getNowPlayings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=ko&page=1`
    ).then((res) => res.json());
    setNowPlayings(results);
  };

  // Ranking 데이터
  const getRanking = async () => {
    const { results } = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=ko&page=1`
    ).then((res) => res.json());
    setRanking(results);
  };

  // Upcoming 데이터
  const getUpcoming = async () => {
    const { results } = await fetch(
      `${BASE_URL}/upcoming?api_key=${API_KEY}&language=ko&page=1`
    ).then((res) => res.json());
    setUpcoming(results);
  };

  const getData = async () => {
    await Promise.all([getNowPlayings(), getRanking(), getUpcoming()]);
    setLoading(false);
  };

  const onRefresh = async () => {
    setIsRefreshing(true);
    await getData();
    setIsRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <Container>
        <Swiper height="100%" showsPagination={false} autoplay loop>
          {nowPlayings
            .filter((movie) => movie.overview)
            .map((movie) => (
              <Slide key={movie.id} movie={movie} />
            ))}
        </Swiper>
      </Container>
      <Content>
        <Subject>Ranking</Subject>
        <TopRatedMovieList horizontal={true}>
          {ranking.map((movie) => (
            <VerticalCards key={movie.id} movie={movie} />
          ))}
        </TopRatedMovieList>

        <Subject>Upcoming</Subject>
        <UpcomingMovieList>
          {upcoming
            .filter((movie) => movie.overview)
            .map((movie) => (
              <HorizonCards key={movie.id} movie={movie} />
            ))}
        </UpcomingMovieList>
      </Content>
    </ScrollView>
  );
};

export default Movies;

const Container = styled.ScrollView({
  flex: 1,
});

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// 내용
const Content = styled.View({
  flex: 2,
  padding: 15,
});

const Subject = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.point};
`;

// Top Rated Movies
const TopRatedMovieList = styled.ScrollView({
  flex: 1,
  flexDirection: "row",
  marginTop: 10,
  marginBottom: 35,
});

// Upcoming Movies
const UpcomingMovieList = styled.ScrollView({
  flex: 1,
  marginTop: 10,
  marginBottom: 35,
});
