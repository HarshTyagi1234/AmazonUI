import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const OtherMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Keep shopping for</Text>
        <Text style={styles.editText}>Edit</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.boxWrapper}>
          <View style={styles.box}>
            <Image
              source={require("../assets/watch.png")}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <Text style={styles.boxText}>Smart Watches</Text>
        </View>

        <View style={styles.boxWrapper}>
          <View style={styles.box}>
            <Image
              source={require("../assets/tshirt.png")}
              style={{ width: 130, height: 130 }}
            />
          </View>
          <Text style={styles.boxText}>Men's T-shirts</Text>
        </View>
      </View>

      <Text style={{ color: "blue", fontSize: 16 }}>
        View your browsing history
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    width: "100%",
    height: 270,
    backgroundColor: "white",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
  },

  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  boxWrapper: {
    width: "48%",
    alignItems: "center",
  },
  box: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  boxText: {
    marginTop: 5,
    fontSize: 14,
    color: "#000",
  },
  editText: { fontSize: 16, color: "blue", paddingRight: 4 },
});

export default OtherMenu;
