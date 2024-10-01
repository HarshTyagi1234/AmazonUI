import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import List from "./List"; 

const Data = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="user" size={25} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello, Harsh</Text>
          <Icon name="angle-down" size={25} color="black" />
        </View>
      </View>
      <View style={styles.flagContainer}>
        <Image
          source={require("../assets/flag2.png")}
          style={styles.flagImage}
        />
        <Text style={styles.languageText}>ENG</Text>
      </View>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  text: {
    fontSize: 15,
    marginRight: 10,
  },
  flagContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  flagImage: {
    width: 30,
    height: 20,
  },
  languageText: {
    fontSize: 15,
    marginLeft: 5,
  },
});

export default Data;
