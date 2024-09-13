import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../HomeComponents/SearchBar";
import CartIconAndText from "../CartComponents/CartIconAndText";
import AmazonPaySection from "../CartComponents/AmazonPaySection";
import ShoppingButton from "../CartComponents/ShoppingButton";

export default function CartScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView style={styles.scrollContainer}>
        <CartIconAndText />
        <AmazonPaySection />
        <ShoppingButton onPress={() => navigation.navigate("Home")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90DDDC",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor:'#D5D8D9',
    marginTop:10
  },
});
