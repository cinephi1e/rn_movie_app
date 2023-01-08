import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "@emotion/native";

const MyPage = ({ navigation: { navigate } }) => {
  return (
    <Content>
      <Title>아직 ㄴ</Title>
    </Content>
  );
};

export default MyPage;
const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: white;
`;
