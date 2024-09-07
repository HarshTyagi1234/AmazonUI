import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const handleAlert = () => {
  Alert.alert("Clicked");
};

export default function AmazonPaySection() {
  return (
    <View style={styles.container}>
          <View style={styles.lineContainer}>
      <View style={styles.line} />
      <View style={styles.imageTextWrapper}>
        <Image
          source={require('../assets/amazonpay.jpg')}
          style={styles.image}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            Pay with <Text style={styles.amazonPayText}>Amazon Pay UPI</Text>
          </Text>
          <TouchableOpacity onPress={handleAlert}>
            <Text style={styles.text}>
              Enjoy faster payments & instant refunds.
              <Text style={styles.linkNow}> Link now</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1

  },
  lineContainer: {
    marginTop: 20,
    width: '100%',
  },
  line: {
    height: 1,
    backgroundColor: 'grey',
    width: '100%',
    marginVertical: 10,
  },
  imageTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  amazonPayText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  linkNow: {
    fontWeight: 'bold',
    color: 'blue',
  },
  textWrapper: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});
