import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const MenuCard = () => {
  const showAlert = (message) => {
    Alert.alert("Pressed", message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Amazon Pay")}
        >
          <Text style={styles.boxText}>Amazon Pay</Text>
          <Image
            source={require("../assets/amazonpay.jpg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Mobile, Electronics & Alexa")}
        >
          <Text style={styles.boxText}>Mobile, Electronics & Alexa</Text>
          <Image
            source={require("../assets/phone.jpeg")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Amazon Bazar")}
        >
          <Text style={styles.boxText}>Amazon Bazar</Text>
          <Image
            source={require("../assets/amazonbazar.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Travel & Auto")}
        >
          <Text style={styles.boxText}>Travel & Auto</Text>
          <Image
            source={require("../assets/travel3.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Groceries and Supplies")}
        >
          <Text style={styles.boxText}>Groceries and Supplies</Text>
          <Image
            source={require("../assets/groceries.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("MiniTV, Video & Music")}
        >
          <Text style={styles.boxText}>MiniTV, Video & Music</Text>
          <Image
            source={require("../assets/miniTV.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Fashion & Beauty")}
        >
          <Text style={styles.boxText}>Fashion & Beauty</Text>
          <Image
            source={require("../assets/beauty.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Home, Furniture & Decor")}
        >
          <Text style={styles.boxText}>Home, Furniture & Decor</Text>
          <Image
            source={require("../assets/furniture.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Pharmacy and Health")}
        >
          <Text style={styles.boxText}>Pharmacy and Health</Text>
          <Image
            source={require("../assets/pharmasy.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => showAlert("Toys, Children & Baby")}
        >
          <Text style={styles.boxText}>Toys, Children & Baby</Text>
          <Image source={require("../assets/toys.png")} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90DDDC",
  },
  row: {
    flexDirection: "row",
  },
  box: {
    flex:1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin:15,
    padding: 10,
    height: 180,
  },
  boxText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    position: "absolute",
    top: 10,
    left: 10,
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 10,
    left: 40,
  },
});

export default MenuCard;
