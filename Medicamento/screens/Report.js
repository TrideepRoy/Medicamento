import { View, Text ,StatusBar} from 'react-native'
import React from 'react'

const Report = () => {
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
        <Text style={{fontSize:20}}>Your Blood Report.pdf!</Text>
        <Text>All of your blood report will show here.</Text>
      </View>
    </View>
  );
}

export default Report