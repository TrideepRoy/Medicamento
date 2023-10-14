import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ItemArray} from './Data';

const Body = () => {
  return (
    <FlatList
      data={ItemArray}
      numColumns={3}
      renderItem={({item}) => <Card item={item} />}
    />
  );
};

export default Body;

const Card = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.subCard}>
        <TouchableOpacity style={styles.body}>
          <Image
            style={{width: 60, height: '60%',}}
            source={item.image}
          />
          <Text
            style={
              {}
            }>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  subCard: {
    margin: 10,
    backgroundColor: "white",
    height: '100%',
  },
  body: {
    alignItems: 'center',
    marginTop: '20%',
  },
});
