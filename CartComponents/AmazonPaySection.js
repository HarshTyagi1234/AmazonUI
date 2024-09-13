import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const handleAlert = () => {
  Alert.alert("Clicked");
};

export default function AmazonPaySection() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.contentContainer}>
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
      </View>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent', 
  },
  contentContainer: {
    backgroundColor: 'white', 

    paddingVertical: 10,
  
  },
  line: {
    height: 1,
    backgroundColor: 'grey',
    width: '100%',
  },
  imageTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10
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
