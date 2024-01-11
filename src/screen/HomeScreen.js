import { View, Text, StyleSheet, Modal, Alert } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import MemoryCard from "../components/MemoryCard";
import randomCards from "../utils/cards";
import shuffle from "../utils/shuffle";
import ModalWin from "../components/ModalWin";
import useStateContext from "../hooks/useStateContext";
import { addScoreOnStorage } from "../utils/storage";

export default function HomeScreen() {
  // cards
  const cards = randomCards();
  const [board, setBoard] = useState(() => shuffle([...cards, ...cards]));
  const [selectedCard, setSelectedCard] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const { score, points, name } = useStateContext();

  const handleTapCard = (index) => {
    if (selectedCard.length >= 2 || selectedCard.includes(index)) return;
    setSelectedCard([...selectedCard, index]);
  };
  // const didPlayerWin = () => matchedCards.length === board.length;
  const didPlayerWin = matchedCards.length === board.length ? true : false;
  const resetGame = () => {
    addScoreOnStorage(name, score);
    setBoard(() => shuffle([...cards, ...cards]));
    setSelectedCard([]);
    setMatchedCards([]);
    points(0);
  };
  useEffect(() => {
    if (selectedCard.length < 2) return;
    //if card is same add a matchedCards and clean selectedCard
    if (board[selectedCard[0]] === board[selectedCard[1]]) {
      setMatchedCards([...matchedCards, ...selectedCard]);
      setSelectedCard([]);
      points(score + 10);
    } else {
      setTimeout(() => {
        setSelectedCard([]);
        // wrong card :(
        if (score > 0) {
          points(score - 2);
        }
      }, 1000);
    }
  }, [selectedCard]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {didPlayerWin ? "Congratulation" : "Memory Game!"}
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
      {/*if you Win open modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={didPlayerWin}
        onRequestClose={() => {
          Alert.alert("Modal has been closed");
        }}
      >
        <View style={styles.modalView}>
          <ModalWin resetGame={resetGame} />
        </View>
      </Modal>
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
  // modal styles
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
