import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import MemoryCard from "./src/components/MemoryCard";
import { cards } from "./src/utils/cards";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import shuffle from "./src/utils/shuffle";

export default function App() {
  // cards
  const [board, setBoard] = useState(() => shuffle([...cards, ...cards]));
  const [selectedCard, setSelectedCard] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);

  const handleTapCard = (index) => {
    if (selectedCard.length >= 2 || selectedCard.includes(index)) return;
    setSelectedCard([...selectedCard, index]);
  };
  const didPlayerWin = () => matchedCards.length === board.length;
  const resetGame = () => {
    setBoard(() => shuffle([...cards, ...cards]));
    setSelectedCard([]);
    setMatchedCards([]);
    setScore(0);
  };
  useEffect(() => {
    if (selectedCard.length < 2) return;
    //if card is same add a matchedCards and clean selectedCard
    if (board[selectedCard[0]] === board[selectedCard[1]]) {
      setMatchedCards([...matchedCards, ...selectedCard]);
      setSelectedCard([]);
      setScore(score + 10);
    } else {
      setTimeout(() => {
        setSelectedCard([]);
        // wrong card :(
        if (score > 0) {
          setScore(score - 2);
        }
      }, 1000);
    }
  }, [selectedCard]);
  // fonts
  const [fontsLoaded] = useFonts({
    unownFont: require("./assets/fonts/Unown-OVEwA.ttf"),
    pokemonSolidNormal: require("./assets/fonts/PokemonSolidNormal-xyWR.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {didPlayerWin() ? "Congratulation" : "Memory Game!"}
      </Text>
      <Text style={styles.score}>Score:{score}</Text>
      <View style={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver =
            selectedCard.includes(index) || matchedCards.includes(index);
          return (
            <MemoryCard
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index)}
              key={index}
              card={card}
            />
          );
        })}
      </View>
      {didPlayerWin() && <Button onPress={resetGame} title="reset" />}
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
  score: {
    fontFamily: "pokemonSolidNormal",
    color: "#fff",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
});
