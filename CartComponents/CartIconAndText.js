import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CartIconAndText = () => {
  const handleAlert = () => {
    Alert.alert("Clicked");
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconAndTextWrapper}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="shopping-cart" size={90} color="#000" />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Your Amazon cart is empty</Text>
          <TouchableOpacity onPress={handleAlert}>
            <Text style={styles.additionalText}>
              Pick up where you left off
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",

    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  iconAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 20,
  },
  textWrapper: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
  additionalText: {
    fontSize: 16,
    color: "blue",
    marginTop: 5,
  },
});

export default CartIconAndText;
