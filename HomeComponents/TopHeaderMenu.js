import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import itemImage1 from "../assets/phone.jpeg";
import itemImage2 from "../assets/groceries.jpeg";
import itemImage3 from "../assets/prime.png";
import itemImage4 from "../assets/miniTV.png";
import itemImage5 from "../assets/electronics.jpg";

const items = [
  { id: 1, image: itemImage1, itemName: "Phone" },
  { id: 2, image: itemImage2, itemName: "Groceries" },
  { id: 3, image: itemImage3, itemName: "Prime" },
  { id: 4, image: itemImage4, itemName: "Mini TV" },
  { id: 5, image: itemImage5, itemName: "Electronics" },
];

const TopHeaderMenu = () => {
  const handlePress = (itemName) => {
    Alert.alert("Welcome to " + itemName);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollView}
      >
        <View style={styles.scrollContent}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.itemContainer}
              onPress={() => handlePress(item.itemName)}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.itemName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    backgroundColor: "white",

    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  scrollView: {
    width: "100%",
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 5,
    fontSize: 13,
    color: "#333",
  },
});

export default TopHeaderMenu;
