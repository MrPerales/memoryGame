import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ScoreTable({ position, playerName, playerScore }) {
  const positionName = (position) => {
    if (position === 1) {
      return "ST";
    } else if (position === 2) {
      return "ND";
    } else if (position === 3) {
      return "RD";
    } else if (position >= 4) {
      return "TH";
    }
  };
  const positionStyle = (position) => {
    let txtColor;
    if (position <= 3) {
      txtColor = "#6200ee";
    } else if (position > 3 && position <= 6) {
      txtColor = "#7f39fb";
    } else if (position > 6 && position <= 9) {
      txtColor = "#985eff";
    } else if (position === 10) {
      txtColor = "#dbb2ff";
    }
    return {
      color: txtColor,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, positionStyle(position)]}>
        {`${position} ${positionName(position)}`}
      </Text>
      <Text style={[styles.text, positionStyle(position)]}>
        {playerScore} PTS
      </Text>
      <Text style={[styles.text, positionStyle(position)]}>{playerName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#2d2d2d",
    marginBottom: 10,
  },
  text: {
    width: 100,
    height: 40,
    padding: 10,
    textAlign: "center",
    fontFamily: "pokemonSolidNormal",
    fontSize: 12,
  },
});
