import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
import React, { useEffect, useRef } from "react";

export default function HomeScreen(props) {
  const { navigation } = props;
  const getToGame = () => {
    navigation.navigate("Game");
  };

  // animation
  const logoAnimation = useRef(new Animated.Value(0)).current;
  const colorAnimation = useRef(new Animated.Value(0)).current;
  const buttonStartAnimation = useRef(new Animated.Value(0)).current;
  const colorStyle = {
    color: colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#000", "#fff"],
    }),
  };
  const flipCardPair = {
    transform: [
      {
        rotateX: logoAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };
  const flipCardOdd = {
    transform: [
      {
        rotateY: logoAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };
  useEffect(() => {
    Animated.timing(logoAnimation, {
      toValue: 180,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(colorAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    Animated.timing(buttonStartAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, [logoAnimation, colorAnimation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Animated.View style={[styles.letterContainer, flipCardOdd]}>
            <Animated.Text style={[styles.title, colorStyle]}>M</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.letterContainer, flipCardPair]}>
            <Animated.Text style={[styles.title, colorStyle]}>E</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.letterContainer, flipCardOdd]}>
            <Animated.Text style={[styles.title, colorStyle]}>M</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.letterContainer, flipCardPair]}>
            <Animated.Text style={[styles.title, colorStyle]}>O</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.letterContainer, flipCardOdd]}>
            <Animated.Text style={[styles.title, colorStyle]}>R</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.letterContainer, flipCardPair]}>
            <Animated.Text style={[styles.title, colorStyle]}>Y</Animated.Text>
          </Animated.View>
        </View>
        <View style={styles.logo}>
          <Animated.View style={[styles.letterContainer, flipCardOdd]}>
            <Animated.Text style={[styles.title, colorStyle]}>G</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.letterContainer, flipCardPair]}>
            <Animated.Text style={[styles.title, colorStyle]}>A</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.letterContainer, flipCardOdd]}>
            <Animated.Text style={[styles.title, colorStyle]}>M</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.letterContainer, flipCardPair]}>
            <Animated.Text style={[styles.title, colorStyle]}>E</Animated.Text>
          </Animated.View>
        </View>
      </View>
      <Animated.View style={{ opacity: buttonStartAnimation }}>
        <Pressable style={styles.button} onPress={getToGame}>
          <Text style={styles.titleButton}>Start</Text>
        </Pressable>
      </Animated.View>
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
  logoContainer: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    flexDirection: "row",
    // marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  letterContainer: {
    height: 80,
    width: 50,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#2d2d2d",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontFamily: "pokemonSolidNormal",
  },
  button: {
    width: 100,
    color: "#000",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#2d2d2d",
  },
  titleButton: {
    textAlign: "center",
    color: "#bb86fc",
    fontFamily: "pokemonSolidNormal",
    padding: 10,
  },
});
