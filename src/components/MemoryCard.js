import { Image, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function MemoryCard({ onPress, isTurnedOver, card }) {
  return (
    <Pressable
      onPress={onPress}
      style={isTurnedOver ? styles.cardUp : styles.cardDown}
    >
      {isTurnedOver ? (
        <Image source={{ uri: card }} style={styles.image} />
      ) : (
        <Text style={styles.text}> ?</Text>
      )}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  cardUp: {
    backgroundColor: "#1d1d1d",
    width: 100,
    height: 100,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#2d2d2d",
  },
  cardDown: {
    backgroundColor: "#1d1d1d",
    width: 100,
    height: 100,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#2d2d2d",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 2,
  },
  text: {
    fontFamily: "unownFont",
    fontSize: 40,
    color: "#bb86fc",
  },
});
