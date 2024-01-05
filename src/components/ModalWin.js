import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

export default function ModalWin({ resetGame }) {
  return (
    <View style={styles.modalInformation}>
      <View>
        <Text style={styles.txtModal}>🎉 Congratulation 🎉</Text>
        <Text style={styles.txtModal}>Your score was :{/**score*/}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          textAlign="center"
          placeholder="nickname"
          style={styles.TxtInput}
          maxLength={3}
        />
      </View>
      {/*SOON  :D */}
      {/* <Pressable style={styles.buttonModal} onPress={resetGame}>
        <Text style={styles.pressableTxt}>Next Level</Text>
      </Pressable> */}
      <Pressable style={styles.buttonModal} onPress={resetGame}>
        <Text style={styles.pressableTxt}>Reset Game</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  modalInformation: {
    width: 250,
    height: 350,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#2d2d2d",
    backgroundColor: "#121212",
  },
  txtModal: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "pokemonSolidNormal",
    fontSize: 20,
  },
  inputContainer: {
    // width: 100,
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 40,
  },
  TxtInput: {
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "pokemonSolidNormal",
  },
  buttonModal: {
    backgroundColor: "#bb86fc",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  pressableTxt: {
    color: "#000",
    padding: 10,
    textAlign: "center",
    fontFamily: "pokemonSolidNormal",
    fontSize: 18,
  },
});
