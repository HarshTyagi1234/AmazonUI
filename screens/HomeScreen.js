import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../HomeComponents/SearchBar";
import TopHeaderMenu from "../HomeComponents/TopHeaderMenu";
import Location from "../HomeComponents/Location";
import Trending from "../HomeComponents/Trending";
import Bonus from "../HomeComponents/Bonus";
import Offers from "../HomeComponents/Offers";
import Skincare from "../HomeComponents/SkinCare";
import Furniture from "../HomeComponents/Furniture";
import Smartphones from "../HomeComponents/Smartphones";
import HouseholdAppliances from "../HomeComponents/HouseholdAppliances";

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
        <Skincare />
        <Smartphones />
        <Furniture />
        <HouseholdAppliances />
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
    borderStartColor:'#D5D8D9',
  },
});
