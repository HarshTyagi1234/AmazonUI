import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";


export default function SearchBar() {
  const handlePress = (message) => {
    Alert.alert(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => handlePress("Search icon pressed")}
        >
          <Icon name="search" size={22} color="grey" />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Search Amazon.in" />
        <TouchableOpacity
          style={[styles.iconContainer, styles.cameraContainer]}
          onPress={() => handlePress("Camera icon pressed")}
        >
          <Icon name="camera" size={22} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => handlePress("Microphone icon pressed")}
        >
          <Icon name="microphone" size={22} color="grey" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => handlePress("QR code image pressed")}>
        <Image
          source={require("../assets/qr-code.png")}
          style={styles.qrImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "93%",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 65,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "grey",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
 
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  cameraContainer: {
    marginRight: 3,
  },
  searchBar: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  qrImage: {
    width: 23,
    height: 23,
    marginLeft: 10,
  },
});
