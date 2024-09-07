import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const items = [
  { id: 1, showIcons: true },
  { id: 2, text: 'Spin and win Upto 1000' },
  { id: 3, text: 'Claim your shopping award' },
  { id: 4, text: 'Smartwatches Starting 999' },
  { id: 5, text: 'Top Budget mobile starting 6,999' },
  { id: 6, text: 'Men shoes starting 399'  },
];

const Trending = () => {
  const handleIconPress = (iconName) => {
    Alert.alert(`${iconName} Clicked`);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handleIconPress('Item Container')}
          >
            {item.id === 1 ? (
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={() => handleIconPress('PayPal')}
                >
                  <FontAwesome name="paypal" size={24} color="black" />
                  <Text style={styles.iconText}> Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={() => handleIconPress('Dollar')}
                >
                  <FontAwesome name="dollar" size={24} color="black" />
                  <Text style={styles.iconText}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={() => handleIconPress('QR Code')}
                >
                  <FontAwesome name="qrcode" size={24} color="black" />
                  <Text style={styles.iconText}>Scan QR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconWrapper}
                  onPress={() => handleIconPress('File Text')}
                >
                  <FontAwesome name="file-text-o" size={24} color="black" />
                  <Text style={styles.iconText}>Recharge Bills</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.iconContainer}>
                {item.showIcons ? (
                  <>
                    <TouchableOpacity
                      style={styles.iconWrapper}
                      onPress={() => handleIconPress('PayPal')}
                    >
                      <FontAwesome name="paypal" size={24} color="black" />
                      <Text style={styles.iconText}> Pay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.iconWrapper}
                      onPress={() => handleIconPress('Dollar')}
                    >
                      <FontAwesome name="dollar" size={24} color="black" />
                      <Text style={styles.iconText}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.iconWrapper}
                      onPress={() => handleIconPress('QR Code')}
                    >
                      <FontAwesome name="qrcode" size={24} color="black" />
                      <Text style={styles.iconText}>Scan QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.iconWrapper}
                      onPress={() => handleIconPress('File Text')}
                    >
                      <FontAwesome name="file-text-o" size={24} color="black" />
                      <Text style={styles.iconText}>Recharge Bills</Text>
                    </TouchableOpacity>
                  </>
                ) : null}
                <Text style={styles.itemText}>{item.text}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
    width: "100%",
    height: 200,
    backgroundColor: 'grey'
  },
  scrollViewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 6,
  },
  iconContainer: {
    width: 150,
    height: 170,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconWrapper: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'column',
  },
  iconText: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    width: '100%',
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Trending;
