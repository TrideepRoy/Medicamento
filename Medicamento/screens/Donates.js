import { View, Text, TextInput, StatusBar } from "react-native";
import React from "react";

const Donates = () => {
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
        flexDirection: "column",
        alignSelf:'center'
      }}
    >
      <View style={{marginTop:30}}>
        <Text style={{fontSize:20}}>You dont have any donations yet!</Text>
        <Text>All of your donations will show here.</Text>
      </View>
    </View>
  );
};

export default Donates;
