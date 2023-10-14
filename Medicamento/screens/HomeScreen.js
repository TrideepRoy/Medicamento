import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import Nearby from "./Nearby";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{ marginTop: StatusBar.currentHeight, backgroundColor: "#fff",height:"100%" }}
    >
     <Image style={{width:"70%",height:20,marginTop:25,alignSelf:'center'}} source={require("../assets/medicamento_logo.png")} />
      <View style={{ width: "100%" }}>
        <Nearby />
      </View>

      <View
        style={{
          width: "90%",
          paddingLeft: 10,
          alignSelf: "center",
          justifyContent: "center",
          paddingRight: 10,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: -60,
          }}
        >
          <View>
            <TouchableOpacity
              style={styles.cont}
              onPress={() => navigation.navigate("search")}
            >
              <Image source={require("../assets/ion_search-outline.png")} />
            </TouchableOpacity>
            <Text style={{color:"#003f5c"}}>Find Donors</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.cont}
             onPress={() => navigation.navigate("Donations")}>
              <Image
                source={require("../assets/openmoji_blood-transfusion.png")}
              />
            </TouchableOpacity>
            <Text style={{color:"#003f5c"}}>Donates</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cont}
              onPress={() => navigation.navigate("Order")}
            >
              <Image source={require("../assets/si-glyph_blood-bag.png")} />
            </TouchableOpacity>
            <Text style={{color:"#003f5c"}}>Order Blood</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ padding: 10 }}>
            <TouchableOpacity style={styles.cont}>
              <Image source={require("../assets/maki_doctor-11.png")} />
            </TouchableOpacity>
            <Text style={{color:"#003f5c"}}>Assistant</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.cont}
             onPress={() => navigation.navigate("Report")}
            >
              <Image source={require("../assets/la_file-medical-alt.png")} />
            </TouchableOpacity>
            <Text style={{color:"#003f5c"}}>Report</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.cont} 
             onPress={() => navigation.navigate("Campaign")}>
              <Image source={require("../assets/grommet-icons_announce.png")} />
            </TouchableOpacity>
            <Text style={{color:"#003f5c"}}>Campaign</Text>
          </View>
        </View>
      </View>
      {/* <BottomNavigation/> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cont: {
    alignSelf: "center",
  },
});
