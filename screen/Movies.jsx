import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, Alert } from "react-native";
import styled, { css } from "@emotion/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import VerticalCards from "../components/VerticalCards";
import HorizonCards from "../components/HorizonCards";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import { getNowPlayings, getRanking, getUpcoming } from "../api";

const Movies = ({ navigation: { navigate } }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const { data: nowPlayingData, isLoading: isLoadingNP } = useQuery(
    ["Movies", "NowPlaying"],
    getNowPlayings
  );

  const { data: rankingData, isLoading: isLoadingRK } = useInfiniteQuery(
    ["Movies", "Ranking"],
    getRanking,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
      },
    }
  );

  const {
    data: upcomingData,
    isLoading: isLoadingUC,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["Movies", "Upcoming"], getUpcoming, {
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
    },
  });

  // 무한스크롤
  const fetchMore = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  const onRefresh = async () => {
    setIsRefreshing(true);
    await queryClient.refetchQueries(["Movies"]);
    setIsRefreshing(false);
  };

  const isLoading = isLoadingNP || isLoadingRK || isLoadingUC;

  if (isLoading) {
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
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <>
          <Container>
            <Swiper height="100%" showsPagination={false} autoplay loop>
              {nowPlayingData.results
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
              data={rankingData.pages.map((page) => page.results).flat()}
              ItemSeparatorComponent={<View style={{ width: 10 }} />}
              renderItem={({ item }) => <VerticalCards movie={item} />}
              keyExtractor={(item) => item.id}
              onEndReached={fetchMore}
              onEndReachedThreshold={0.5}
            />
            <Subject>Upcoming</Subject>
          </Content>
        </>
      }
      data={upcomingData.pages.map((page) => page.results).flat()}
      renderItem={({ item }) => <HorizonCards movie={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={<View style={{ height: 15 }} />}
    />
  );
};

export default Movies;

const Container = styled.TouchableOpacity({
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
