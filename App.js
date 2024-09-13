import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import MenuScreen from "./screens/MenuScreen";
import YouScreen from "./screens/YouScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home-outline" size={26} color={color} />
            ),
          }}
        />
           <Tab.Screen
          name="You"
          component={YouScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="person-outline" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="cart-outline" size={29} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="menu-outline" size={30} color={color} />
            ),
          }}
        />
          
      </Tab.Navigator>
    </NavigationContainer>
  );
}
