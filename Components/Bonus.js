import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Bonus() {
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <View style={styles.iconWrapper}>
          <Icon name="directions-car" size={24} color="#1E2A5E" style={styles.icon} />
          <Text style={styles.text}>Free delivery on first order</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="attach-money" size={24} color="#1E2A5E" style={styles.icon} />
          <Text style={styles.text}>Pay on delivery</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="local-post-office" size={24} color="#1E2A5E" style={styles.icon} />
          <Text style={styles.text}>Easy returns</Text>
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop:2,
    width:'100%',
    alignItems:'center',
    backgroundColor:'white',
  },
  iconTextContainer: {
    flexDirection: 'row',
    margin:5,
    
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
     maxWidth: '30%',
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 14,
    color: 'black',
    flexShrink: 1,
  },
});
