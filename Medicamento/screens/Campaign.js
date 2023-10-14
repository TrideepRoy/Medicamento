import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

const Campaign = () => {
  return (
    <View style={{ marginTop: StatusBar.currentHeight, width: "90%" }}>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <Entypo
          name="location-pin"
          size={24}
          color="#FF1493"
          style={{ padding: 5 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#003f5c",
            padding: 3,
          }}
        >
          Current Campaigns
        </Text>
      </View>
      <View >
        <View style={{ width: "90%",alignItems:'center',flexDirection:'row',justifyContent:"space-between",marginTop:20 }}>
      <Entypo name="dot-single" size={34} color="black" />
        <Text style={{padding:10,fontSize:15}}>Howrah Sommilani Roktodan Sibir</Text>
        <TouchableOpacity style={{width:80,height:20,backgroundColor:'#FF1493',borderRadius:20,}}>
            <Text style={{alignSelf:'center'}}>Read More</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "90%",alignItems:'center',flexDirection:'row',justifyContent:"space-between",marginTop:20 }}>
      <Entypo name="dot-single" size={34} color="black" />
        <Text style={{padding:10,fontSize:15}}>Blood for life - Barasat, Kolkata</Text>
        <TouchableOpacity style={{width:80,height:20,backgroundColor:'#FF1493',borderRadius:20,}}>
            <Text style={{alignSelf:'center'}}>Read More</Text>
        </TouchableOpacity>
      </View>

   <View style={{ width: "90%",alignItems:'center',flexDirection:'row',justifyContent:"space-between",marginTop:20 }}>
      <Entypo name="dot-single" size={34} color="black" />
        <Text style={{padding:10,fontSize:15}}>Youth Club Roktodan Sibir</Text>
        <TouchableOpacity style={{width:80,height:20,backgroundColor:'#FF1493',borderRadius:20,}}>
            <Text style={{alignSelf:'center'}}>Read More</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "90%",alignItems:'center',flexDirection:'row',justifyContent:"space-between",marginTop:20 }}>
      <Entypo name="dot-single" size={34} color="black" />
        <Text style={{padding:10,fontSize:15}}>kharda juba Club - Blood Donation</Text>
        <TouchableOpacity style={{width:80,height:20,backgroundColor:'#FF1493',borderRadius:20,}}>
            <Text style={{alignSelf:'center'}}>Read More</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
};

export default Campaign;
