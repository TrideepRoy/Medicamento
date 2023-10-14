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
  ScrollView
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


handleSubmit=()=>{
  const{email,password,bloodgroup,mobilenumber}=this.state;
  console.log(email,password,bloodgroup,mobilenumber);

}
render=()=>{
  <form onSubmit={(this.handleSubmit)}></form>
}
  

const SignUp = ({navigation}) => 

  {
    const [fdata, setFdata]= useState({
      mobilenumber:'',
      email:'',
      password:'',
      cpassword:'',
      bloodgroup:'',
    })
    const [errormsg, setErrormsg]=useState(null);
    const SendToBackend=()=>{
    //console.log(fdata);
      if(fdata.mobilenumber == '' ||
      fdata.password == '' ||
      fdata.email == '' ||
      fdata.cpassword == '' ||
      fdata.bloodgroup == '' ){
        setErrormsg('All fields are required');
        return;
      }
      else{
        if(fdata.password!=fdata.cpassword){
          setErrormsg('Password and confirm password must be same');
        }
        else{
          fetch('http://31.0.132.125:3000/signup',{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify(fdata)
          })
            .then(res=>res.json()).then(
              data=>{
                //console.log(data);
                if(data.error){
                  setErrormsg(data.error);
                }
                else{
                  alert('Account created successfully!');
                  navigation.navigate('Login');
                }
              }
            )
         
        }
      }
    
    }
    
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../assets/blood-test.png")} /> */}
      <Image style={{width:"70%",height:100,marginTop:-60,marginBottom:-10,alignSelf:'center'}} source={require("../assets/medicamento_logo.png")} />
      {/* <StatusBar style="auto" /> */}
      
      <View style={styles.inputView}>
     
      <MaterialIcons name="email" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          onPressIn={()=> setErrormsg(null)}
          placeholderTextColor="#003f5c"
          onChangeText={(text)=>setFdata({ ...fdata, email:text})}
        />
      </View>

      <View style={styles.inputView}>
      <MaterialCommunityIcons name="onepassword" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          onPressIn={()=> setErrormsg(null)}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text)=>setFdata({ ...fdata, password:text})}
        />
      </View>

      <View style={styles.inputView}>
      <MaterialCommunityIcons name="onepassword" size={24} style={styles.icon}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          onPressIn={()=> setErrormsg(null)}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text)=>setFdata({ ...fdata, cpassword:text})}
        />
      </View>

      <View style={styles.inputView}>
      <MaterialIcons name="local-phone" size={24} style={styles.icon} />
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile Number."
          onPressIn={()=> setErrormsg(null)}
          placeholderTextColor="#003f5c"
        
          onChangeText={(text)=>setFdata({ ...fdata, mobilenumber:text})}
        />
      </View>

      <View style={styles.inputView}>
      <Fontisto name = "blood-drop"size={24} style={styles.icon} />
        <TextInput
          style={styles.TextInput}
          placeholder="Blood Group"
          onPressIn={()=> setErrormsg(null)}
          placeholderTextColor="#003f5c"
        
          onChangeText={(text)=>setFdata({ ...fdata, bloodgroup:text})}
        />
      </View>



      

      <TouchableOpacity style={styles.loginBtn}
      onPress={()=>{
        SendToBackend();
      }}>
        <Text style={styles.loginText}
        >Sign Up</Text>
      
  
      </TouchableOpacity>

      {
        errormsg ? <Text>{errormsg}</Text> : null
      }
      
        
      
       

      <TouchableOpacity style={{marginTop:30,alignSelf:'center'}}>
        <Text style={{color:'#FF1493'}}>
            read about our terms and conditions!
        </Text>
      </TouchableOpacity> 

    </View>
     ) 
    
}

export default SignUp

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
      alignSelf:'center',
      // marginBottom
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