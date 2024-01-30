import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function ModalExit() {
  const gotoHome = () => {
    // go to home
  };
  return (
    <View style={styles.modalInformation}>
      <View>
        <Text style={styles.txtModal}>Are you sure you want to quit ?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.pressable} onPress={gotoHome}>
          <Text style={styles.txtButton}>Yes</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.txtButton}>No</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  modalInformation: {
    width: 250,
    height: 200,
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
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 15,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  pressable: {
    width: 100,
  },
  txtButton: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "pokemonSolidNormal",
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
