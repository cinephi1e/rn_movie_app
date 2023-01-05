import React, { useEffect, useState } from "react";
import {
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  FlatList,
  View,
} from "react-native";
import styled, { css } from "@emotion/native";
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
    setUpcoming(results.filter((item) => item.overview));
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
    <FlatList
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      ListHeaderComponent={
        <>
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
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 7 }}
              data={ranking}
              ItemSeparatorComponent={<View style={{ width: 10 }} />}
              renderItem={({ item }) => <VerticalCards movie={item} />}
              keyExtractor={(item) => item.id}
            />
            <Subject>Upcoming</Subject>
          </Content>
        </>
      }
      data={upcoming}
      renderItem={({ item }) => <HorizonCards movie={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={<View style={{ height: 15 }} />}
    />
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

const Content = styled.View({
  flex: 2,
  padding: 15,
});

const Subject = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  color: ${(props) => props.theme.point};
`;
