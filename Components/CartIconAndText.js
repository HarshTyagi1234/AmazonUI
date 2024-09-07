import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const { height: screenHeight } = Dimensions.get("window");

const CartIconAndText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;
  const navigation = useNavigation(); 

  const handlePress = () => {
    setIsVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconAndTextWrapper}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="shopping-cart" size={90} color="#000" />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Your Amazon cart is empty</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.additionalText}>
              Pick up where you left off
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isVisible && (
        <Animated.View
          style={[
            styles.animatedView,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.scrollViewText}>Keep shopping for</Text>
            <Text style={{ marginTop: 30 }}>
              Recently viewed categories and products appear to make it easy to
              pick up where you left off
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={{ marginTop: 30, color: "blue" }}>
                Continue shopping
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 8,
  },
  iconContainer: {
    marginRight: 20,
  },
  textWrapper: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
  additionalText: {
    fontSize: 16,
    color: "blue",
    marginTop: 5,
  },
  animatedView: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "black",
  },
  scrollViewContent: {
    padding: 20,
  },
  scrollViewText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: "blue",
  },
});

export default CartIconAndText;
