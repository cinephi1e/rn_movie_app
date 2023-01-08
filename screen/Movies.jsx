import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import styled, { css } from "@emotion/native";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import VerticalCards from "../components/VerticalCards";
import HorizonCards from "../components/HorizonCards";
import { useQuery, useQueryClient } from "react-query";
import { getNowPlayings, getRanking, getUpcoming } from "../api";

const Movies = ({ navigation: { navigate } }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: nowPlayingData,
    isLoading: isLoadingNP,
    // refetch: refetchNP,
  } = useQuery(["Movies", "NowPlaying"], getNowPlayings);

  const {
    data: rankingData,
    isLoading: isLoadingRK,
    // refetch: refetchRK,
  } = useQuery(["Movies", "Ranking"], getRanking);

  const {
    data: upcomingData,
    isLoading: isLoadingUC,
    // refetch: refetchUC,
  } = useQuery(["Movies", "Upcoming"], getUpcoming);

  const onRefresh = async () => {
    setIsRefreshing(true);
    // await Promise.all([refetchNP(), refetchRK(), refetchUC()]);
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
              data={rankingData.results}
              ItemSeparatorComponent={<View style={{ width: 10 }} />}
              renderItem={({ item }) => <VerticalCards movie={item} />}
              keyExtractor={(item) => item.id}
            />
            <Subject>Upcoming</Subject>
          </Content>
        </>
      }
      data={upcomingData.results}
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
