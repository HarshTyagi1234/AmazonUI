import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TopBar = () => {
  const showAlert = () => {
    Alert.alert("Clicked");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.boldText}>amazon</Text>
        <Text style={styles.normalText}>.in</Text>
      </Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={showAlert} style={styles.iconButton}>
          <Icon name="cog" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showAlert} style={styles.iconButton}>
          <Icon name="bell" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showAlert} style={styles.iconButton}>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
  boldText: {
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 15,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default TopBar;
