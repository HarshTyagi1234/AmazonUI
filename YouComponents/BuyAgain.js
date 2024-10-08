import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

const BuyAgain = () => {
  const showAlert = () => {
    Alert.alert("Clicked");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Buy Again</Text>
      <Text style={styles.text2}>
        See what others are reordering on Buy Again
      </Text>
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={{ fontSize: 17 }}> Visit Buy Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    width: "100%",
    height: 160,
    backgroundColor: "white",
    padding: 10,
  },
  text1: { padding: 10, fontWeight: "bold", fontSize: 17 },
  text2: { padding: 10, fontSize: 17 },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#E9EFEC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "grey",
  },
});

export default BuyAgain;
