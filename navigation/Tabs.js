import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import MyPage from "../screen/MyPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import {
  DARK_BG,
  DARK_HEADER,
  DARK_POINT,
  LIGHT_BG,
  LIGHT_HEADER,
  LIGHT_POINT,
} from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? DARK_BG : LIGHT_BG,
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? DARK_HEADER : LIGHT_HEADER,
        },
        tabBarActiveTintColor: isDark ? DARK_POINT : LIGHT_POINT,
        headerStyle: { backgroundColor: isDark ? DARK_HEADER : LIGHT_HEADER },
        headerTintColor: isDark ? DARK_POINT : LIGHT_POINT,
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          title: "메인",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="film" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: "나의 페이지",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
