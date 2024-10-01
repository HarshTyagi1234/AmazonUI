import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import TopBar from "../YouComponents/TopBar";
import Data from "../YouComponents/Data";
import OtherMenu from "../YouComponents/OtherMenu";
import BuyAgain from "../YouComponents/BuyAgain";
import YourLists from "../YouComponents/YourLists";
import YourAccount from "../YouComponents/YourAccount";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollContainer}>
      <Data/>
      <OtherMenu/>
      <BuyAgain/>
      <YourLists/>
      <YourAccount/>
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
    backgroundColor: "#DFD3C3",
    marginTop: 10,
  },
});
