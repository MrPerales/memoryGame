import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ScoreTable from "../components/ScoreTable";

export default function ScoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Players</Text>
      <ScrollView style={styles.tableScoreContainer}>
        {bestPlayers.map((_, index) => (
          <ScoreTable key={index} position={index + 1} />
        ))}
      </ScrollView>
    </View>
  );
}
const bestPlayers = [1, 2, 3, 3, 2, 2, 5, 85, 1, 2];
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
