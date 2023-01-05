import styled, { css } from "@emotion/native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getImgPath } from "../util";

const VerticalCards = ({ movie }) => {
  const { navigate } = useNavigation();

  return (
    <Movie
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { movieId: movie.id } })
      }
    >
      <Poster
        source={{
          uri: getImgPath(movie.poster_path),
        }}
      />
      <Info>
        <Title numberOfLines={1}>{movie.title}</Title>
        <Rating>
          <FontAwesome name="star" size={12} color="#ffd900" />
          {movie.vote_average}/10.0
        </Rating>
      </Info>
    </Movie>
  );
};

export default VerticalCards;

const Movie = styled.TouchableOpacity`
  flex: 1;
`;

const Poster = styled.Image`
  flex: 3;
  width: 140px;
  height: 200px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const Info = styled.View`
  justify-content: center;
  align-items: center;
  padding: 5px 0 3px 0;
  background-color: ${(props) => props.theme.verticalInfo};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  width: 140px;
  height: 50px;
`;

const Title = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.normal};
  font-weight: bold;
  font-size: 17px;
`;

const Rating = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.normal};
`;
