import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const data = [
  [
    { imageSource: require("../assets/amazonpay.jpg"), text: "Amazon Pay" },
    {
      imageSource: require("../assets/phone.jpeg"),
      text: "Mobile, Electronics & Alexa",
    },
  ],
  [
    { imageSource: require("../assets/amazonbazar.png"), text: "Amazon Bazar" },
    { imageSource: require("../assets/travel3.png"), text: "Travel & Auto" },
  ],
  [
    {
      imageSource: require("../assets/groceries.png"),
      text: "Groceries and Supplies",
    },
    {
      imageSource: require("../assets/miniTV.png"),
      text: "MiniTV, Video & Music",
    },
  ],
  [
    { imageSource: require("../assets/beauty.png"), text: "Fashion & Beauty" },
    {
      imageSource: require("../assets/furniture.png"),
      text: "Home, Furniture & Decor",
    },
  ],
  [
    {
      imageSource: require("../assets/pharmasy.png"),
      text: "Pharmacy and Health",
    },
    {
      imageSource: require("../assets/toys.png"),
      text: "Toys, Children & Baby",
    },
  ],
];

const MenuCard = () => {
  const showAlert = (text) => {
    Alert.alert("Pressed", text);
  };

  return (
    <View style={styles.container}>
      {data.map((rowData, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {rowData.map((item, itemIndex) => (
            <TouchableOpacity
              key={itemIndex}
              style={styles.box}
              onPress={() => showAlert(item.text)}
            >
              <Image source={item.imageSource} style={styles.image} />
              <Text style={styles.boxText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#90DDDC",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  box: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginHorizontal: 8,
    padding: 10,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default MenuCard;
