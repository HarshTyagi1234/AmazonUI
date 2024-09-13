import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
const showalert = () => {
  Alert.alert("Clicked");
};

const Info = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showalert}>
        <Icon name="info-circle" size={24} color="#1898AB" />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>
          Looking for the app settings? They've moved to
        </Text>
        <Icon name="user" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: 16,
    backgroundColor: "#90DDDC",
  },
  text: {
    marginHorizontal: 8,
    fontSize: 17,
    color: "#000",
  },
});

export default Info;
