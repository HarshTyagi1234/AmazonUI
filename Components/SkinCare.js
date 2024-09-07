import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Skincare = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Skincare Products | Upto 60% off</Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.box}>
          <Image source={require('../assets/skincare.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare2.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare3.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare4.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare5.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare6.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare7.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/skincare9.png')} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10, 
  },
  header: {
    marginBottom: 10, 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box: {
    width: '30%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});

export default Skincare;
