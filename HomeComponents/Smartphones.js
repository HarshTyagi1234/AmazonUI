import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

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
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/redmi.png")}
              style={styles.image}
            />
            <Text style={styles.description}>
              Redmi series | starting 6,777Rs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/samsung.png")}
              style={styles.image}
            />
            <Text style={styles.description}>
              Samsung series | starting 11,999Rs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/realme.png")}
              style={styles.image}
            />
            <Text style={styles.description}>
              Realme series | starting 7,499Rs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={showAlert}>
            <Image
              source={require("../assets/oneplus.png")}
              style={styles.image}
            />
            <Text style={styles.description}>
              OnePlus Nord | starting 19,999Rs
            </Text>
          </TouchableOpacity>
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
