import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BuyAgain = () => {
  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontWeight: "bold", fontSize: 17 }}>
        Buy Again
      </Text>
      <Text style={{ padding: 10, fontSize: 17 }}>
        See what others are reordering on Buy Again
      </Text>
      <View
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#E9EFEC",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "grey",
        }}
      >
        <Text style={{ fontSize: 17 }}> Visit Buy Again</Text>
      </View>
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
});

export default BuyAgain;
