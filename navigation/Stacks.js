import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const One = ({ route: { params }, navigation: { goBack } }) => {
  console.log(params);
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Text>돌아가기</Text>
    </TouchableOpacity>
  );
};
const Two = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("three")}>
      <Text>Two</Text>
    </TouchableOpacity>
  );
};
const Three = ({ navigation: { goBack } }) => {
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Text>Three</Text>
    </TouchableOpacity>
  );
};

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName="mypage">
      <Stack.Screen name="One" component={One} />
      <Stack.Screen name="Two" component={Two} />
      <Stack.Screen name="Three" component={Three} />
    </Stack.Navigator>
  );
};

export default Stacks;
