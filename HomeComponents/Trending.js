import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Text,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const items = [
  { id: 1, showIcons: true },
  {
    id: 2,
    text: "Headsets Upto 70% off",
    image: require("../assets/earbuds.png"),
  },
  {
    id: 3,
    text: "Men's shoes Under 399Rs",
    image: require("../assets/shoes.png"),
  },
  {
    id: 4,
    text: "Starting 299Rs PC Accessories",
    image: require("../assets/pc.png"),
  },
  {
    id: 5,
    text: "utensilss 60% off",
    image: require("../assets/utensils.png"),
  },
  {
    id: 6,
    text: "400Rs cashback on first 4 orders",
    image: require("../assets/amazonfresh.png"),
  },
];

const Trending = () => {
  const showAlert = () => {
    Alert.alert("Clicked  " );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={ showAlert}
          >
            {item.id === 1 ? (
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={showAlert}
                >
                  <FontAwesome name="paypal" size={24} color="black" />
                  <Text style={styles.iconText}> Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={showAlert}
                >
                  <FontAwesome name="dollar" size={24} color="black" />
                  <Text style={styles.iconText}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={showAlert}
                >
                  <FontAwesome name="qrcode" size={24} color="black" />
                  <Text style={styles.iconText}>Scan QR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={showAlert}
                >
                  <FontAwesome name="file-text-o" size={24} color="black" />
                  <Text style={styles.iconText}>Recharge Bills</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.iconContainer}>
                {item.image && (
                  <>
                    <Image source={item.image} style={styles.itemImage} />
                    <Text style={styles.itemText}>{item.text}</Text>
                  </>
                )}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 190,
    backgroundColor: "#D5D8D9",
  },
  scrollViewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 6,
  },
  iconContainer: {
    width: 150,
    height: 170,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative",
  },
  iconWrapper: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    flexDirection: "column",
  },
  iconText: {
    color: "black",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
    width: "100%",
  },
  itemText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    position: "absolute",
    top: 10,
    width: "100%",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});

export default Trending;
