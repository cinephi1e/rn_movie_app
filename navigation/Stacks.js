import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import Detail from "../screen/Detail";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { DARK_HEADER, DARK_POINT, LIGHT_HEADER, LIGHT_POINT } from "../colors";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Stacks = ({ navigation: { goBack } }) => {
  const isDark = useColorScheme() === "dark";
  return (
    <Stack.Navigator
      initialRouteName="mypage"
      screenOptions={{
        headerStyle: { backgroundColor: isDark ? DARK_HEADER : LIGHT_HEADER },
        headerTintColor: isDark ? DARK_POINT : LIGHT_POINT,
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: isDark ? DARK_POINT : LIGHT_POINT }}>
              <Ionicons
                name="chevron-back-sharp"
                size={24}
                color={isDark ? DARK_POINT : LIGHT_POINT}
              />
            </Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Stacks;
