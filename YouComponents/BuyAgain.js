import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BuyAgain = () => {
  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontWeight: "bold", fontSize: 17 }}>
        Your Lists
      </Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    width: "100%",
    height: 130,
    backgroundColor: "white",
    padding: 10,
  },
});

export default BuyAgain;
