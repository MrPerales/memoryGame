import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ScoreTable from "../components/ScoreTable";
import useStateContext from "../hooks/useStateContext";
import { getBestScorePlayersFromStorage } from "../utils/storage";

export default function ScoreScreen() {
  const { score, points } = useStateContext();
  const [bestPlayers, setBestPlayers] = useState();

  useEffect(() => {
    getDataStorage();
  }, [points, score]);

  getDataStorage = async () => {
    const response = await getBestScorePlayersFromStorage();
    // order from smallest to largest
    const data = await response.sort((a, b) => b.score - a.score);
    setBestPlayers(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Players</Text>
      <ScrollView style={styles.tableScoreContainer}>
        {bestPlayers?.map((player, index) => (
          <ScoreTable
            key={index}
            position={index + 1}
            playerName={player.nickname}
            playerScore={player.score}
          />
        ))}
      </ScrollView>
    </View>
  );
}
// const bestPlayers = [1, 2, 3, 3, 2, 2, 5, 85, 1, 2];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "pokemonSolidNormal",
    fontSize: 30,
    marginTop: 60,
  },
  tableScoreContainer: {
    marginTop: 15,
  },
});
