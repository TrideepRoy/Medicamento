import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import OrderBlood from "./screens/OrderBlood";
import Campaign from "./screens/Campaign";
import Donates from "./screens/Donates";
import Report from "./screens/Report";
const Stack = createStackNavigator();

const StackNavigation1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="search" component={SearchScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Order" component={OrderBlood} options={{headerShown:false}}/>
      <Stack.Screen name="Campaign" component={Campaign} options={{headerShown:false}}/>
      <Stack.Screen name="Donations" component={Donates} options={{headerShown:false}}/>
      <Stack.Screen name="Report" component={Report} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Notifications" component={Donates} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation1;
