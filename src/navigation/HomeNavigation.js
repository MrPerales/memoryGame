import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import Game from "../screen/Game";

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        // headerStyle: { backgroundColor: "#fff" },
        headerStyle: { backgroundColor: "#121212" },
        headerTransparent: true,
        headerTitleStyle: { fontSize: 12, color: "#fff" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{
          headerTitleStyle: { fontSize: 12, color: "#f01" },
          title: null,
        }}
      />
    </Stack.Navigator>
  );
}
