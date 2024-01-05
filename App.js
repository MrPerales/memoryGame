import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import NavigationTab from "./src/navigation/NavigationTab";
import StatesProvider from "./src/context/context";

export default function App() {
  // fonts
  const [fontsLoaded] = useFonts({
    unownFont: require("./assets/fonts/Unown-OVEwA.ttf"),
    pokemonSolidNormal: require("./assets/fonts/PokemonSolidNormal-xyWR.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <StatesProvider>
        <NavigationTab></NavigationTab>
        <StatusBar style="light" />
      </StatesProvider>
    </NavigationContainer>
  );
}
