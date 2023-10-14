import React, { cloneElement, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  Touchable,
} from "react-native";
import { MaterialCommunityIcons,MaterialIcons,Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const OrderBlood = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>

      {/* <StatusBar style="auto" /> */}
      <Image style={{width:"70%",height:100,marginTop:5,marginBottom:-10,alignSelf:'center'}} source={require("../assets/medicamento_logo.png")} />
      <View style={styles.inputView}>
      <MaterialIcons name="email" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
      <Entypo name="phone" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile"
          placeholderTextColor="#003f5c"
         
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
      <Fontisto name="blood-drop" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#003f5c"
        
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
      <MaterialCommunityIcons name="onepassword" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Blood Group"
          placeholderTextColor="#003f5c"
         
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
      <MaterialCommunityIcons name="onepassword" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Age"
          placeholderTextColor="#003f5c"
          
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
      <MaterialCommunityIcons name="city" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="City, State"
          placeholderTextColor="#003f5c"
        
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
      <Entypo name="location-pin" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="City Code"
          placeholderTextColor="#003f5c"
        
          onChangeText={(password) => setPassword(password)}
        />
      </View>


      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Order Blood</Text>
      </TouchableOpacity>
  
  <Text style={{marginTop:10}}>
    You will be notified within 12 hrs if we find a match!
  </Text>
  
    </View>
  )
}

export default OrderBlood

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: StatusBar.cureentHeight,
      height:"100%",
    
    },
  
    image: {
      marginBottom: 40,
      width: 100,
      height: 100,
      marginTop:40,
    },
  
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 50,
      marginBottom: 15,
      borderColor: "red",
      borderWidth: 2,
      alignItems:'center',
      flexDirection:"row",
      // justifyContent:
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 5,
     
    },
  icon:{
    padding:10,
    color:"#FF1493"
  },
  
  
  
    loginBtn: {
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      // marginTop: 10,
      backgroundColor: "#FF1493",
    },
    loginText: {
      color: "white",
    },
  });