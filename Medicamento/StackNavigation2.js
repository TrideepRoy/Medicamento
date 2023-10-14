import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
const Stack = createStackNavigator();

const StackNavigation2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Notifications" component={Donates} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation2;
