import { Text, TouchableOpacity } from "react-native";

const MyPage = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity>
      <Text>One 페이지로 이동</Text>
    </TouchableOpacity>
  );
};

export default MyPage;
