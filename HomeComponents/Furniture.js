import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const images = [
  require("../assets/furniture.png"),
  require("../assets/furniture2.png"),
  require("../assets/furniture3.png"),
  require("../assets/furniture4.png"),
  require("../assets/furniture5.png"),
  require("../assets/furniture6.png"),
  require("../assets/furniture7.png"),
  require("../assets/furniture.png"),
  require("../assets/furniture9.png"),
];

const Furniture = () => {
  const showAlert = () => {
    Alert.alert("Furniture");
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Upto 60% off | Furniture from stores nearby
          </Text>
        </View>
        <View style={styles.grid}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={showAlert}
            >
              <Image source={image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#D5D8D9",
  },
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
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  box: {
    width: "30%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});

export default Furniture;
