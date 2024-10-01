import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const smartphones = [
  {
    image: require("../assets/redmi.png"),
    description: "Redmi series | starting 6,777Rs",
  },
  {
    image: require("../assets/samsung.png"),
    description: "Samsung series | starting 11,999Rs",
  },
  {
    image: require("../assets/realme.png"),
    description: "Realme series | starting 7,499Rs",
  },
  {
    image: require("../assets/oneplus.png"),
    description: "OnePlus Nord | starting 19,999Rs",
  },
];

const Smartphones = () => {
  const showAlert = () => {
    Alert.alert("Smartphones");
  };

  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#D5D8D9" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Top searched bestselling series in smartphones
          </Text>
        </View>
        <View style={styles.grid}>
          {smartphones.map((phone, index) => (
            <TouchableOpacity key={index} style={styles.box} onPress={showAlert}>
              <Image source={phone.image} style={styles.image} />
              <Text style={styles.description}>{phone.description}</Text>
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

export default Smartphones;
