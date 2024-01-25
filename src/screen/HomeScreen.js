import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const { navigation } = props;
  const getToGame = () => {
    navigation.navigate("Game");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen...............</Text>
      <Text style={styles.title}>HomeScreen...............</Text>
      <Text style={styles.title}>HomeScreen...............</Text>
      <Text style={styles.title}>HomeScreen...............</Text>
      <Text style={styles.title}>HomeScreen...............</Text>
      <Text style={styles.title}>HomeScreen...............</Text>
      <Button onPress={getToGame} title="game" />
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
});
