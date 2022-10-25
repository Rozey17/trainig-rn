import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { s } from "react-native-wind";

const Testscreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={s`p-10`}>
      <Text style={s`text-red-500 font-extrabold`}>Testscreen</Text>
      <Button
        title="go to home screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Testscreen;
