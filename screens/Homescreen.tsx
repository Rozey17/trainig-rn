import { View, Text, Button } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const Homescreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="go to test screen"
        onPress={() => navigation.navigate("Test")} //push to the name
      />
    </View>
  );
};

export default Homescreen;
