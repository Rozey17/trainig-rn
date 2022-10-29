import { View, Text, Button, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import TestSection from "../components/TestSection";

const Homescreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <SafeAreaView>
      <View style={s`relative mx-4`}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={s`absolute left-2 top-3 bottom-3`}
        />
        <TextInput
          placeholder="recherche"
          style={s`pl-10 py-2 border border-gray-300 rounded-md text-black`}
        />
      </View>
      <TestSection />
    </SafeAreaView>
  );
};

export default Homescreen;
