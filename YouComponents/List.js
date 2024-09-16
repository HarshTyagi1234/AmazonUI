import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
const List = () => {
  const navigation = useNavigation();
  const showAlert = () => {
    Alert.alert("Clicked");
  };

  return (
    <View style={styles.listsContainer}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.box} onPress={showAlert}>
          <Text style={styles.boxText}>Your Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={showAlert}>
          <Text style={styles.boxText}>Buy Again</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.box} onPress={showAlert}>
          <Text style={styles.boxText}>Your Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={showAlert}>
          <Text style={styles.boxText}>Your Lists</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.yourOrderText}>Your Orders</Text>
      <Text style={styles.anotherText}>Hi! You have no recent orders.</Text>
      <TouchableOpacity
        style={styles.returnContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{fontSize:17}}>Return to the Homepage</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listsContainer: {
    marginTop: 35,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  box: {
    width: "48%",
    height: 50,
    backgroundColor: "#E9EFEC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "grey",
  },
  boxText: {
    fontSize: 16,
  },
  yourOrderText: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
  returnContainer: {
    marginTop: 7,
    width: "100%",
    height: 50,
    backgroundColor: "#E9EFEC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "grey",
  },
  anotherText: { marginTop: 7, fontSize: 15 },
});

export default List;
