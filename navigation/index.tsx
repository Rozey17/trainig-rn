import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Homescreen from "../screens/Homescreen";
import Testscreen from "../screens/Testscreen";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import ProductScreen from "../screens/ProductScreen";
import AccountScreen from "../screens/AccountScreen";
const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* name is the title of the header of the screen */}
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        // hide header
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        //@ts-ignore
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Product"
        //@ts-ignore

        component={ProductScreen}
        // options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        //@ts-ignore
        component={HomeStackScreen}
        options={{
          tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />

      <BottomTab.Screen
        name="Test"
        //@ts-ignore

        component={AccountScreen}
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="black" />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="cart"
        //@ts-ignore

        component={Testscreen}
        options={{
          tabBarIcon: () => <Ionicons name="cart" size={24} color="black" />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="account"
        //@ts-ignore

        component={Testscreen}
        options={{
          tabBarIcon: () => <Feather name="menu" size={24} color="black" />,
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Navigation;
