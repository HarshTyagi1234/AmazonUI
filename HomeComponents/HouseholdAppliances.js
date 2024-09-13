import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const HouseholdAppliances = () => {
  const showAlert = () => {
    Alert.alert("Welcome");
  };

  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#D5D8D9" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Categories for you to browse</Text>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/surfexcel.png")}
              style={styles.image}
            />
            <Text style={styles.description}>Health & Household Supplies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/kitchen.png")}
              style={styles.image}
            />
            <Text style={styles.description}>Home & Kitchen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/perfume.png")}
              style={styles.image}
            />
            <Text style={styles.description}>Beauty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/oneplus.png")}
              style={styles.image}
            />
            <Text style={styles.description}>Electronics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/apparel.png")}
              style={styles.image}
            />
            <Text style={styles.description}>Apparel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/mouse.png")}
              style={styles.image}
            />
            <Text style={styles.description}>Computer & Accessories</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 5,
    margin: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 145,
    borderRadius: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
});

export default HouseholdAppliances;
