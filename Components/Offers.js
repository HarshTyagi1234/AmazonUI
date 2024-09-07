import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Alert, TouchableOpacity, Image } from "react-native";

const { width } = Dimensions.get("window");

const Page = ({ imageSource, isActive, onPress }) => (
  <TouchableOpacity style={styles.page} onPress={onPress}>
    <Image
      source={imageSource}
      style={styles.image}
      resizeMode="cover"
    />
    <View style={styles.dotsContainer}>
      {[0, 1, 2, 3, 4].map((index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { backgroundColor: isActive === index ? "blue" : "white" },
          ]}
        />
      ))}
    </View>
  </TouchableOpacity>
);

const Offers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);


  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newPage = Math.floor(contentOffsetX / width);
    setCurrentPage(newPage);
  };


  const handlePagePress = () => {
    Alert.alert("Welcome");
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextPage = (currentPage + 1) % 5; 
      setCurrentPage(nextPage);
      scrollViewRef.current.scrollTo({ x: nextPage * width, animated: true });
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
   
        style={styles.scrollView}
      >
        <Page
          imageSource={require('../assets/offer1.jpg')}
          isActive={currentPage}
          onPress={handlePagePress}
        />
        <Page
          imageSource={require('../assets/offer2.jpg')}
          isActive={currentPage}
          onPress={handlePagePress}
        />
        <Page
          imageSource={require('../assets/offer3.jpg')}
          isActive={currentPage}
          onPress={handlePagePress}
        />
        <Page
          imageSource={require('../assets/offer4.jpg')}
          isActive={currentPage}
          onPress={handlePagePress}
        />
        <Page
          imageSource={require('../assets/offer5.jpg')}
          isActive={currentPage}
          onPress={handlePagePress}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 280,
    alignItems: "center",
    marginTop:3,
    backgroundColor:'white',

    backgroundColor:'white'
  },
  scrollView: {
    width: "100%",
    height: 300,
  },
  page: {
    width,
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width,
    height: 300,
  },
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Offers;
