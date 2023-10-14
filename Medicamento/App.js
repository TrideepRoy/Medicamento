import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import StackNavigation from "./StackNavigation";
import StackNavigation1 from "./StackNavigation";
import StackNavigation2 from "./StackNavigation2";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={StackNavigation1}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="home" size={24} color="#FF1493" />
            ),
            tabBarActiveBackgroundColor: "pink",
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="LoginScreen"
          component={StackNavigation2}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="person" size={24} color="#FF1493" />
            ),
            tabBarActiveBackgroundColor: "pink",
            tabBarShowLabel: false,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
