import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

const YourAccount = () => {
  const showAlert = () => {
    Alert.alert("Clicked");
  };
  const data = [
    "Your Orders",
    "Your Addresses",
    "View Amazon Pay balance statement",
    "Amazon Pay UPI",
    "Subscribe & Save",
    "Top-up your Amazon Pay Wallet",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Account</Text>
        <TouchableOpacity onPress={showAlert}>
          <Text style={styles.topRightText}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.boxContainer}>
          {data.map((text, index) => (
            <TouchableOpacity onPress={showAlert} key={index}>
              <View style={styles.box}>
                <Text style={styles.boxText}>{text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    width: "100%",
    height: 140,
    backgroundColor: "white",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 17,
  },
  topRightText: {
    fontSize: 17,
    color: "blue",
  },
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    height: 50,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#E9EFEC",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "grey",
  },
  boxText: {
    fontSize: 17,
  },
});

export default YourAccount;
