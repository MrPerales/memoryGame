import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import MemoryCard from "./src/components/MemoryCard";
import { cards } from "./src/utils/cards";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Game!</Text>
      {cards.map((card, index) => (
        <MemoryCard key={index} card={card} />
      ))}
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
  },
});
