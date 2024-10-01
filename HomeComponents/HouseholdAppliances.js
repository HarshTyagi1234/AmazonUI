import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const categories = [
  {
    image: require("../assets/surfexcel.png"),
    description: "Health & Household Supplies",
  },
  {
    image: require("../assets/kitchen.png"),
    description: "Home & Kitchen",
  },
  {
    image: require("../assets/perfume.png"),
    description: "Beauty",
  },
  {
    image: require("../assets/oneplus.png"),
    description: "Electronics",
  },
  {
    image: require("../assets/apparel.png"),
    description: "Apparel",
  },
  {
    image: require("../assets/mouse.png"),
    description: "Computer & Accessories",
  },
];

const HouseholdAppliances = () => {
  const showAlert = () => {
    Alert.alert("Clicked");
  };

  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#D5D8D9" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Categories for you to browse</Text>
        </View>
        <View style={styles.grid}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.box} onPress={showAlert}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.description}>{item.description}</Text>
            </TouchableOpacity>
          ))}
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
