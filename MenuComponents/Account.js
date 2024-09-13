import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Account = () => {
  const showAlert = (message) => {
    Alert.alert(message);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => showAlert("Switch Account pressed")}
      >
        <Text style={styles.boxText}>Switch Account</Text>
        <Icon name="angle-right" size={20} color="#333" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => showAlert("Sign Out pressed")}
      >
        <Text style={styles.boxText}>Sign Out</Text>
        <Icon name="angle-right" size={20} color="#333" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => showAlert("Customer Services pressed")}
      >
        <Text style={styles.boxText}>Customer Services</Text>
        <Icon name="angle-right" size={20} color="#333" style={styles.icon} />
      </TouchableOpacity>
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
  box: {
    width: "90%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginVertical: 10,
    justifyContent: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  boxText: {
    fontSize: 18,
    color: "#333",
    textAlign: "left",
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
});

export default Account;
