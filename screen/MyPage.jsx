import { Text, TouchableOpacity } from "react-native";

const MyPage = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity
      onPress={() => navigate("Stacks", { screen: "One", params: { id: 1 } })}
    >
      <Text>One 페이지로 이동</Text>
    </TouchableOpacity>
  );
};

export default MyPage;
