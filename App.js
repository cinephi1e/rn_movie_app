import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Root from "./navigation/Root";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";

export default function App() {
  const isDark = useColorScheme() === "dark";

  return (
    // navigator를 사용하기 위해 NavigationContainer로 감싸야 한다.
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Root />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
