import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Homescreen from "../screens/Homescreen";
import Testscreen from "../screens/Testscreen";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Test" component={Testscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
