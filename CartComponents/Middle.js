import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Bonus() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.iconTextContainer}>
          <View style={styles.iconWrapper}>
            <Icon
              name="airport-shuttle"
              size={100}
              color="#1E2A5E"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Free First Delivery</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Icon
              name="inventory"
              size={100}
              color="#1E2A5E"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Easy Returns</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Icon
              name="airport-shuttle"
              size={100}
              color="#1E2A5E"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Amazon Delivered</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 150,
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  iconTextContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  iconWrapper: {
    alignItems: "center",
    maxWidth: "30%",
  },
  icon: {
    marginBottom: 5,
  },
  iconText: {
    fontSize: 16,
    color: "#1E2A5E",
  },
});
