import styled, { css } from "@emotion/native";
import { FontAwesome } from "@expo/vector-icons";
import { getImgPath } from "../util";

const HorizonCards = ({ movie }) => {
  return (
    <UpcomingMovie>
      <UpcomingMoviePoster
        source={{
          uri: getImgPath(movie.poster_path),
        }}
      />
      <UpcomingMovieInfo>
        <UpcomingMovieTitle numberOfLines={1}>{movie.title}</UpcomingMovieTitle>
        <UpcomingMovieDate>{movie.release_date}</UpcomingMovieDate>
        <UpcomingMovieDesc numberOfLines={6}>
          {movie.overview}
        </UpcomingMovieDesc>
      </UpcomingMovieInfo>
    </UpcomingMovie>
  );
};

export default HorizonCards;

const UpcomingMovie = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin-bottom: 20px;
`;

const UpcomingMoviePoster = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: 7px;
`;

const UpcomingMovieInfo = styled.View`
  flex: 2;
  margin-left: 15px;
  justify-content: center;
`;

const UpcomingMovieTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.normal};
`;

const UpcomingMovieDate = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.normal};
`;

const UpcomingMovieDesc = styled.Text`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.normal};
`;
