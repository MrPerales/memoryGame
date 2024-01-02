import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import MemoryCard from "./src/components/MemoryCard";
import { cards } from "./src/utils/cards";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    unownFont: require("./assets/fonts/Unown-OVEwA.ttf"),
    pokemonSolidNormal: require("./assets/fonts/PokemonSolidNormal-xyWR.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Game!</Text>
      <View style={styles.board}>
        {cards.map((card, index) => (
          <MemoryCard key={index} card={card} />
        ))}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontFamily: "pokemonSolidNormal",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
});
