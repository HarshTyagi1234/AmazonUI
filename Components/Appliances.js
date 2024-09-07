import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Appliances = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Appliances | Great Deals</Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.box}>
          <Image source={require('../assets/skincare.png')} style={styles.image} />
          {/* <View style={styles.textContainer}>
        <Text style={styles.description}>Rate</Text>
      </View> */}
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare.png')} style={styles.image} />
          {/* <View style={styles.textContainer}>
        <Text style={styles.description}>Rate</Text>
      </View> */}
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare.png')} style={styles.image} />
          {/* <View style={styles.textContainer}>
        <Text style={styles.description}>Rate</Text>
      </View> */}
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare.png')} style={styles.image} />
          {/* <View style={styles.textContainer}>
        <Text style={styles.description}>Rate</Text>
      </View> */}
        </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  box: {
    width: '48%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1, 
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

export default Appliances;
