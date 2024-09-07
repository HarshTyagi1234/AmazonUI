import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import TopHeaderMenu from "../Components/TopHeaderMenu";
import Location from "../Components/Location";
import Trending from "../Components/Trending";
import Bonus from "../Components/Bonus";
import Offers from "../Components/Offers";
import Skincare from "../Components/SkinCare";
import Furniture from "../Components/Furniture";
import Appliances from "../Components/Appliances";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Location />
        <TopHeaderMenu />
        <Offers />
        <Trending />
        <Bonus />
        <Skincare/>
        <Furniture/>
        <Appliances/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90DDDC",
  },
  scrollViewContent: {

    alignItems: "center",
  
  },
});
