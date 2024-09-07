import React from 'react';
import { View,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../Components/SearchBar';
import CartIconAndText from '../Components/CartIconAndText';
import AmazonPaySection from '../Components/AmazonPaySection';
import ShoppingButton from '../Components/ShoppingButton';

export default function CartScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SearchBar />
      <CartIconAndText />
      <AmazonPaySection />
      <ShoppingButton onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
