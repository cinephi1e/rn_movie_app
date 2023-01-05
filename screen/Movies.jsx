import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import styled, { css } from "@emotion/native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import { getImgPath, SCREEN_HEIGHT } from "../util";

const Movies = ({ navigation: { navigate } }) => {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "b80fa1fc52e6a74a68a1c3273cae8201";

  const getNowPlayings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=ko&page=1`
    ).then((res) => res.json());

    setNowPlayings(results);
    setLoading(false);
  };

  useEffect(() => {
    getNowPlayings();
  }, []);

  if (loading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <ScrollView>
      <Container>
        <Swiper height="100%" showsPagination={false} autoplay={true} loop>
          {nowPlayings.map((movie) => (
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
                  <SwiperMovieTitle>{movie.title}</SwiperMovieTitle>
                  <SwiperMovieRating>
                    <FontAwesome name="star" size={16} color="#ffd900" />
                    {movie.vote_average}/10.0
                  </SwiperMovieRating>
                  <SwiperMovieDesc numberOfLines={4}>
                    {movie.overview}
                  </SwiperMovieDesc>
                </SwiperMovieInfo>
              </SwiperMovieExplanation>
            </SwiperMovie>
          ))}
        </Swiper>
      </Container>
      <Content>
        <Subject>My Favorite</Subject>
        <TopRatedMovieList horizontal={true}>
          <TopRatedMovie>
            <MoviePoster
              source={{
                uri: "https://www.themoviedb.org/t/p/original/cJHxCLYTNMGF7hY7AeLi1w2MZs.jpg",
              }}
            />
            <TopRatedMovieInfo>
              <TopRatedMovieTitle>타이타닉</TopRatedMovieTitle>
              <TopRatedMovieRating>
                <FontAwesome name="star" size={12} color="#ffd900" />
                9.0/10.0
              </TopRatedMovieRating>
            </TopRatedMovieInfo>
          </TopRatedMovie>
          <TopRatedMovie>
            <MoviePoster
              source={{
                uri: "https://www.themoviedb.org/t/p/original/hPeKa7IFm44zvMVM4njcv66clj3.jpg",
              }}
            />
            <TopRatedMovieInfo>
              <TopRatedMovieTitle>펄프픽션</TopRatedMovieTitle>
              <TopRatedMovieRating>
                <FontAwesome name="star" size={12} color="#ffd900" />
                10.0/10.0
              </TopRatedMovieRating>
            </TopRatedMovieInfo>
          </TopRatedMovie>
          <TopRatedMovie>
            <MoviePoster
              source={{
                uri: "https://www.themoviedb.org/t/p/original/tsHgbimg2FSGsJsWnr7qsHsCekg.jpg",
              }}
            />
            <TopRatedMovieInfo>
              <TopRatedMovieTitle>그래비티</TopRatedMovieTitle>
              <TopRatedMovieRating>
                <FontAwesome name="star" size={12} color="#ffd900" />
                10.0/10.0
              </TopRatedMovieRating>
            </TopRatedMovieInfo>
          </TopRatedMovie>
        </TopRatedMovieList>
        <Subject>Upcoming</Subject>
        <UpcomingMovieList>
          <UpcomingMovie>
            <UpcomingMoviePoster
              source={{
                uri: "https://www.themoviedb.org/t/p/original/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
              }}
            />
            <UpcomingMovieInfo>
              <UpcomingMovieTitle>바빌론</UpcomingMovieTitle>
              <UpcomingMovieDate>2023-02</UpcomingMovieDate>
              <UpcomingMovieDesc numberOfLines={6}>
                황홀하면서도 위태로운 고대 도시, 바빌론에 비유되던 할리우드. 꿈
                하나만을 위해 모인 사람들이 이를 쟁취하기 위해 벌이는
                강렬하면서도 매혹적인 이야기
              </UpcomingMovieDesc>
            </UpcomingMovieInfo>
          </UpcomingMovie>
          <UpcomingMovie>
            <UpcomingMoviePoster
              source={{
                uri: "https://www.themoviedb.org/t/p/original/sDXPAVwDZWJreeZhq6xhRly8PHW.jpg",
              }}
            />
            <UpcomingMovieInfo>
              <UpcomingMovieTitle>
                앤트맨과 와스프: 퀸텀매니아
              </UpcomingMovieTitle>
              <UpcomingMovieDate>2023-02</UpcomingMovieDate>
              <UpcomingMovieDesc numberOfLines={6}>
                마블 시네마틱 유니버스 페이즈 5의 첫번째 영화이자 앤트맨
                실사영화 시리즈의 3번째 영화이며 전작 이후 5년 만에 개봉한다.
              </UpcomingMovieDesc>
            </UpcomingMovieInfo>
          </UpcomingMovie>
          <UpcomingMovie>
            <UpcomingMoviePoster
              source={{
                uri: "https://www.themoviedb.org/t/p/original/mGHbioxwFNAXsAOR3B8cacqPj5s.jpg",
              }}
            />
            <UpcomingMovieInfo>
              <UpcomingMovieTitle>다음 소희</UpcomingMovieTitle>
              <UpcomingMovieDate>2023-02</UpcomingMovieDate>
              <UpcomingMovieDesc numberOfLines={6}>
                소희는 고등학교 졸업을 앞두고 인터넷 회사 콜센터에
                현장실습생으로 취직한다. 소녀는 대기업에 취직했다며 들뜨지만,
                실상은 기대와 다르다. 노동 착취가 예사로 일어나는 콜센터는
                그야말로 노동 지옥이다. 그곳의 잔인한 현실은 암울한 사고로
                이어지고, 형사 유진은 악착같이 진실을 좇는다. 그러나 부조리한
                사회 시스템 앞에서 그녀는 무력함을 절감한다
              </UpcomingMovieDesc>
            </UpcomingMovieInfo>
          </UpcomingMovie>
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

// 스와이퍼
const SwiperMovie = styled.View`
  flex: 1;
  height: ${SCREEN_HEIGHT / 3.3 + "px"};
`;

const SwiperScreenShot = styled.Image({
  flex: 1,
  height: 280,
});

const SwiperMovieExplanation = styled.View({
  flex: 1,
  flexDirection: "row",
  padding: 10,
  marginTop: 105,
});

const SwiperPoster = styled.Image({
  width: 100,
  height: 150,
});

const SwiperMovieInfo = styled.View({
  marginLeft: 10,
  width: "75%",
  marginTop: 30,
});

const SwiperMovieTitle = styled.Text({
  color: "white",
  fontWeight: "bold",
  fontSize: 26,
});

const SwiperMovieRating = styled.Text({
  color: "white",
  fontSize: 18,
});

const SwiperMovieDesc = styled.Text({
  color: "white",
  width: "95%",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

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

const TopRatedMovie = styled.TouchableOpacity({
  flex: 1,
  marginRight: 10,
});

const MoviePoster = styled.Image({
  flex: 3,
  width: 140,
  height: 200,
  borderTopLeftRadius: 7,
  borderTopRightRadius: 7,
});

const TopRatedMovieInfo = styled.View({
  justifyContents: "center",
  alignItems: "center",
  padding: 5,
  backgroundColor: "#bbbfc4",
  borderBottomLeftRadius: 7,
  borderBottomRightRadius: 7,
});

const TopRatedMovieTitle = styled.Text({
  flex: 1,
  color: "white",
  fontWeight: "bold",
  fontSize: 18,
});

const TopRatedMovieRating = styled.Text({
  flex: 1,
  color: "white",
});

// Upcoming Movies
const UpcomingMovieList = styled.ScrollView({
  flex: 1,
  marginTop: 10,
  marginBottom: 35,
});

const UpcomingMovie = styled.TouchableOpacity({
  flex: 1,
  flexDirection: "row",
  marginBottom: 20,
});

const UpcomingMoviePoster = styled.Image({
  flex: 1.3,
  width: 140,
  height: 200,
  borderRadius: 7,
});

const UpcomingMovieInfo = styled.View({
  flex: 2,
  marginLeft: 15,
});
const UpcomingMovieTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.normal};
`;

const UpcomingMovieDate = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.normal};
`;

const UpcomingMovieDesc = styled.Text`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.normal};
`;
