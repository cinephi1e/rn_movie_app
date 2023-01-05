import { LinearGradient } from "expo-linear-gradient";
import { getImgPath, SCREEN_HEIGHT } from "../util";
import styled, { css } from "@emotion/native";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Slide = ({ movie }) => {
  return (
    <SwiperMovie>
      <SwiperScreenShot
        source={{
          uri: getImgPath(movie.backdrop_path),
        }}
      />
      <LinearGradient
        style={StyleSheet.absoluteFill}
        colors={["transparent", "rgba(0,0,0,0.2)", "black"]}
      />
      <SwiperMovieExplanation style={StyleSheet.absoluteFill}>
        <SwiperPoster
          source={{
            uri: getImgPath(movie.poster_path),
          }}
        />
        <SwiperMovieInfo>
          <SwiperMovieTitle numberOfLines={1}>{movie.title}</SwiperMovieTitle>
          <SwiperMovieRating>
            <FontAwesome name="star" size={16} color="#ffd900" />
            {movie.vote_average}/10.0
          </SwiperMovieRating>
          <SwiperMovieDesc numberOfLines={4}>{movie.overview}</SwiperMovieDesc>
        </SwiperMovieInfo>
      </SwiperMovieExplanation>
    </SwiperMovie>
  );
};

export default Slide;

const SwiperMovie = styled.View`
  flex: 1;
  height: ${SCREEN_HEIGHT / 3.3 + "px"};
`;

const SwiperScreenShot = styled.Image`
  flex: 1;
  height: 280px;
`;

const SwiperMovieExplanation = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px;
  margin-top: 105px;
`;

const SwiperPoster = styled.Image`
  width: 90px;
  height: 130px;
`;

const SwiperMovieInfo = styled.View`
  margin: 15px 0 0 110px;
  width: 75%;
  position: absolute;
`;

const SwiperMovieTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 26px;
`;

const SwiperMovieRating = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 5px;
`;

const SwiperMovieDesc = styled.Text`
  color: white;
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
