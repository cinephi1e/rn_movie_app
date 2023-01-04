import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import styled, { css } from "@emotion/native";
import { FontAwesome } from "@expo/vector-icons";

const Movies = ({ navigation: { navigate } }) => {
  return (
    <ScrollView>
      <Container>
        <Header>
          <HeaderBackground />
          <HeaderScreenshot
            source={{
              uri: "https://www.themoviedb.org/t/p/original/A1bWhTFQKkhF1yhSKWosSyzn2Hp.jpg",
            }}
          />
          <HeaderMovie>
            <HeaderPoster
              source={{
                uri: "https://www.themoviedb.org/t/p/original/N0rskx91Eh6aWjvBybeY6epNic.jpg",
              }}
            />
            <HeaderMovieInfo>
              <HeaderMovieTitle>헤어질 결심</HeaderMovieTitle>
              <HeaderMovieRating>
                <FontAwesome name="star" size={16} color="#ffd900" />
                9.0/10.0
              </HeaderMovieRating>
              <HeaderMovieDesc numberOfLines={4}>
                산 정상에서 추락한 한 남자의 변사 사건. 담당 형사 해준은
                사망자의 아내 서래와 마주하게 된다. 남편의 죽음 앞에서 특별한
                동요를 보이지 않는 서래. 경찰은 보통의 유가족과는 다른 서래를
                용의선상에 올린다. 해준은 사건 당일의 알리바이 탐문과 신문,
                잠복수사를 통해 서래를 알아가면서 그녀에 대한 관심이 점점
                커져가는 것을 느낀다. 한편 좀처럼 속을 짐작하기 어려운 서래는
                상대가 자신을 의심한다는 것을 알면서도 조금의 망설임도 없이
                해준을 대하는데...
              </HeaderMovieDesc>
            </HeaderMovieInfo>
          </HeaderMovie>
        </Header>
      </Container>
      <Content>
        <Subject>Top Rated Movies</Subject>
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
        <Subject>Upcoming Movies</Subject>
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
              <UpcomingMovieDesc numberOfLines={8}>
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
              <UpcomingMovieDesc numberOfLines={8}>
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
              <UpcomingMovieDesc numberOfLines={8}>
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

// 슬라이더
const Header = styled.View({
  flex: 1,
});

const HeaderBackground = styled.View({
  backgroundColor: "rgba(0, 0, 0, 0.418)",
  flex: 1,
  height: 300,
  zIndex: 9,
});

const HeaderScreenshot = styled.Image({
  flex: 1,
  height: 300,
  marginTop: -300,
});

const HeaderMovie = styled.View({
  flex: 1,
  flexDirection: "row",
  padding: 10,
  zIndex: 10,
});

const HeaderPoster = styled.Image({
  width: 100,
  height: 150,
  marginTop: -170,
});

const HeaderMovieInfo = styled.View({
  marginLeft: 10,
  width: "70%",
  marginTop: -120,
});

const HeaderMovieTitle = styled.Text({
  color: "white",
  fontWeight: "bold",
  fontSize: 26,
});

const HeaderMovieRating = styled.Text({
  color: "white",
  fontSize: 18,
});

const HeaderMovieDesc = styled.Text({
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

const Subject = styled.Text({
  fontSize: 30,
  fontWeight: "bold",
});

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
const UpcomingMovieTitle = styled.Text({
  fontSize: 26,
  fontWeight: "bold",
  marginBottom: 5,
});

const UpcomingMovieDate = styled.Text({
  fontSize: 20,
  marginBottom: 5,
});

const UpcomingMovieDesc = styled.Text({
  fontSize: 18,
  overflow: "hidden",
  textOverflow: "ellipsis",
});
