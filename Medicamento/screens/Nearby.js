import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
const Nearby = () => {
  return (
    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',width:"100%",height:"70%",backgroundColor:"#fff"}}>
      <TouchableOpacity style={{justifyContent:'center'}}>
      <FontAwesome5 name="users" size={55} color="#FF1493" style={{alignSelf:"center",marginTop:20,elevation:3}}/>
      <Text style={{alignSelf:'center',color:"#003f5c",fontWeight:'bold',marginTop:20}}>
       Nearby Donors
      </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Nearby