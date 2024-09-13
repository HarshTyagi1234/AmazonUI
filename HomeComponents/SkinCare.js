import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const Skincare = () => {
  const showAlert = () => {
    Alert.alert("Beauty Products");
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Skincare Products | Upto 60% off</Text>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare2.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare3.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare4.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare5.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare6.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare7.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/skincare9.png")}
              style={styles.image}
            />
          </TouchableOpacity>
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
    marginTop: 2,
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
    borderRadius: 15,
  },
});

export default Skincare;
