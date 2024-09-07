import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function ShoppingButton({ onPress }) {
  return (
    <View style={styles.containter}>
      <TouchableOpacity style={styles.yellowBox} onPress={onPress}>
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({        
  containter: {
    flex: 1,
  },
  yellowBox: {
    backgroundColor: "yellow",
    height: 45,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});
