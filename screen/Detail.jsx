import { StyleSheet, ActivityIndicator, Linking } from "react-native";
import styled, { css } from "@emotion/native";
import { useEffect, useState } from "react";
import { getImgPath, SCREEN_HEIGHT } from "../util";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { DARK_NORMAL, LIGHT_NORMAL } from "../colors";
import { useQuery } from "react-query";
import { getMovies } from "../api";

const Detail = ({
  route: {
    params: { movieId },
  },
}) => {
  const isDark = useColorScheme() === "dark";

  const { data: movies, isLoading } = useQuery(["Detail", movieId], getMovies);

  const openYoutube = async (key) => {
    await Linking.openURL(`https://www.youtube.com/watch?v=${key}`);
  };

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <Container>
      <Information>
        <ScreenShot
          source={{ uri: getImgPath(movies.backdrop_path) }}
          style={StyleSheet.absoluteFill}
        />
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["transparent", "black"]}
        />
        <Info>
          <Title>
            {movies.title}({movies.release_date.slice(0, 4)})
          </Title>
          <Desc numberOfLines={4}>{movies.overview}</Desc>
        </Info>
      </Information>

      <YoutubeList>
        {movies?.videos?.results.map((video) => (
          <Video key={video.key} onPress={() => openYoutube(video.key)}>
            <FontAwesome5
              name="youtube"
              size={16}
              color={isDark ? DARK_NORMAL : LIGHT_NORMAL}
            />
            <VideoTitle numberOfLines={1}>{video.name}</VideoTitle>
          </Video>
        ))}
      </YoutubeList>

      <Reviews>
        <Review>Review</Review>
        <ReviewAdd>
          <ReviewAddText>Add Review</ReviewAddText>
        </ReviewAdd>
      </Reviews>
    </Container>
  );
};

export default Detail;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.background};
`;

const Information = styled.View``;

const ScreenShot = styled.Image`
  flex: 1;
  width: 100%;
  height: ${SCREEN_HEIGHT / 3.3 + "px"};
`;

const Info = styled.View`
  height: ${SCREEN_HEIGHT / 3.3 + "px"};
  justify-content: flex-end;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-left: 20px;
  color: white;
`;

const Desc = styled.Text`
  width: 90%;
  font-size: 16px;
  margin: 10px auto;
  color: white;
`;

const YoutubeList = styled.View`
  padding: 12px;
  /* max-height: 82px; */
  /* overflow: hidden; */
`;

const Video = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 5px;
`;

const VideoTitle = styled.Text`
  width: 90%;
  margin-left: 10px;
  color: ${(props) => props.theme.normal};
`;

const Reviews = styled.View`
  padding: 12px;
`;

const Review = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.normal};
  margin-bottom: 20px;
`;

const ReviewAdd = styled.TouchableOpacity`
  border: 1px solid;
  border-color: ${(props) => props.theme.normal};
  border-radius: 7px;
  padding: 10px;
`;

const ReviewAddText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.normal};
`;
