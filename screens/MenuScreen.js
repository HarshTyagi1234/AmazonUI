import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../HomeComponents/SearchBar";
import MenuCard from "../MenuComponents/MenuCard";
import Account from "../MenuComponents/Account";
import Info from "../MenuComponents/Info";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView style={styles.scrollContainer}>
        <MenuCard />
        <Account/>
        <Info/>
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
    backgroundColor: "#90DDDC",
    marginTop: 10,
  },
});
