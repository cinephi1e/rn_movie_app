import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Root from "./navigation/Root";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./colors";

export default function App() {
  const isDark = useColorScheme() === "dark";

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {/* navigator를 사용하기 위해 NavigationContainer로 감싸야 한다. */}
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
