import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import TopBar from "../YouComponents/TopBar";
import Data from "../YouComponents/Data";
import OtherMenu from "../YouComponents/OtherMenu";
import BuyAgain from "../YouComponents/BuyAgain";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollContainer}>
      <Data/>
      <OtherMenu/>
      <BuyAgain/>
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
    backgroundColor: "grey",
    marginTop: 10,
  },
});
