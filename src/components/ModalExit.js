import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { useEffect, useRef } from "react";
import useStateContext from "../hooks/useStateContext";

export default function ModalExit({ gotoHome }) {
  const { setOpenModalExit } = useStateContext();
  const cancelExit = () => {
    setOpenModalExit(false);
  };
  // animations
  const modalAnimated = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(modalAnimated, {
      toValue: 3,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [modalAnimated]);
  return (
    <Animated.View
      style={[styles.modalInformation, { opacity: modalAnimated }]}
    >
      <View>
        <Text style={styles.txtModal}>Are you sure you want to quit ?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.pressable} onPress={gotoHome}>
          <Text style={styles.txtButton}>Yes</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={cancelExit}>
          <Text style={styles.txtButton}>No</Text>
        </Pressable>
      </View>
    </Animated.View>
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
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#2d2d2d",
  },
  txtButton: {
    color: "#bb86fc",
    textAlign: "center",
    fontFamily: "pokemonSolidNormal",
    fontSize: 16,
  },
});
