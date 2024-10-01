import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

const OtherMenu = () => {
  const showAlert = () => {
    Alert.alert("Clicked");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Keep shopping for</Text>
        <TouchableOpacity>
          <Text style={styles.editText} onPress={showAlert}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.boxWrapper}>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/watch.png")}
              style={styles.watch}
            />
          </TouchableOpacity>
          <Text style={styles.boxText}>Smart Watches</Text>
        </View>

        <View style={styles.boxWrapper}>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/tshirt.png")}
              style={styles.tshirt}
            />
          </TouchableOpacity>
          <Text style={styles.boxText}>Men's T-shirts</Text>
        </View>
      </View>
      <TouchableOpacity onPress={showAlert}>
        <Text style={styles.editText}>View your browsing history</Text>
      </TouchableOpacity>
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
  watch: { width: 100, height: 100 },
  tshirt: { width: 130, height: 130 },
});

export default OtherMenu;
