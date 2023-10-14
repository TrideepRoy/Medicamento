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
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';

const Login = ({navigation}) => {
    const [fdata, setFdata]=useState({
      email:'',
      password:''
    })

    const [errormsg, setErrormsg]=useState(null);

    const Sendtobackend=()=>{
      //console.log(fdata);
      if(fdata.email==''||
          fdata.password==''){
            setErrormsg("All fields are required!");
            return;
          }
          else{
            fetch('http://31.0.132.125:3000/signin',{
              method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(fdata)
          })
           .then(res => res.json()).then(
            data => {
              //console.log(data);
              if(data.error){
                setErrormsg(data.error);
              }
              else{
                alert('Login Successfull!');
                navigation.navigate('HomeScreen');

              }
            }
           )
          }
    }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/blood-test.png")} />
      <Image style={{width:"70%",height:100,marginTop:-60,marginBottom:-10,alignSelf:'center'}} source={require("../assets/medicamento_logo.png")} />
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
      <MaterialIcons name="email" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onPressIn={()=> setErrormsg(null)}
          onChangeText={(text)=>setFdata({ ...fdata, email:text})}
        />
      </View>

      <View style={styles.inputView}>
      <MaterialCommunityIcons name="onepassword" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onPressIn={()=> setErrormsg(null)}
          onChangeText={(text)=>setFdata({ ...fdata, password:text})}        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      {
        errormsg ? <Text>{errormsg}</Text> : null
      }

      <TouchableOpacity style={styles.loginBtn}
      onPress={()=> Sendtobackend()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style ={{marginTop:10,width:"90%",alignSelf:'center',justifyContent:'center',flexDirection:'row'}}>
        <Text style={{padding:5 }}>Already have an account?</Text>
        <TouchableOpacity style={{padding:5}} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={{color:"#FF1493"}}>
          Sign Up
        </Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: StatusBar.cureentHeight,
    },
  
    image: {
      marginBottom: 40,
      width: 100,
      height: 100,
    },
  
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 50,
      marginBottom: 20,
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
  
  
    forgot_button: {
      height: 30,
      marginBottom: 10,
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