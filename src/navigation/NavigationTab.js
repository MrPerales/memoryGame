import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screen/HomeScreen";
import ScoreScreen from "../screen/ScoreScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1d1d1d",
        },
        tabBarActiveTintColor: "#bb86fc",
        tabBarInactiveBackgroundColor: "#121212",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Game",
          tabBarIcon: ({ color, size }) => (
            <Icon name="gamepad" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Score"
        component={ScoreScreen}
        options={{
          tabBarLabel: "Scores",
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
