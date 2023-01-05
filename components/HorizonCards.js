import styled, { css } from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { getImgPath } from "../util";

const HorizonCards = ({ movie }) => {
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
        <Date>{movie.release_date}</Date>
        <Desc numberOfLines={6}>{movie.overview}</Desc>
      </Info>
    </Movie>
  );
};

export default HorizonCards;

const Movie = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  border: 1px solid;
  border-width: 0 0 1px 0;
  border-color: ${(props) => props.theme.normal};
  padding: 7px 0 20px 0;
  height: 200px;
`;

const Poster = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: 7px;
`;

const Info = styled.View`
  flex: 1;
  margin-left: 15px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.normal};
`;

const Date = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.normal};
`;

const Desc = styled.Text`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.normal};
`;
