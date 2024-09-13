import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

export default function Location() {
  const handlePress = () => {
    Alert.alert("Delivering to Ghazibad 201206");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.iconTextContainer}>
        <Icon name="location-dot" size={20} color="#000" style={styles.icon} />
        <Text style={styles.text}>
          Delivering to Baghpat 250101 - Update location
        </Text>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.angleDownContainer}
        >
          <Icon name="angle-down" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 43,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B9E9EF",
    marginTop: 8,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  angleDownContainer: {
    marginLeft: 35,
  },
  text: {
    fontSize: 12,
    color: "#333",
  },
});
