import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import TestSection from "../components/TestSection";
import { Ionicons } from "@expo/vector-icons";

const Homescreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <SafeAreaView style={s`  bg-cyan-100 h-full overflow-y-scroll`}>
      <View style={s`relative mx-3`}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={s`absolute left-2 top-3 bottom-3 z-10`}
        />
        <TextInput
          placeholder="recherche"
          style={s`pl-10 py-2 border border-gray-300 rounded-md text-black bg-white`}
        />
      </View>
      <TestSection />
      <View style={s`bg-cyan-200 flex-row items-center py-3 relative`}>
        <Ionicons name="location-outline" size={20} color="black" />
        <Text>Selectionnez votre adresse de livraison</Text>
      </View>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1666315/pexels-photo-1666315.jpeg",
        }}
        style={s`object-contain h-60 w-full object-center`}
      />
      <View style={s`bg-cyan-200 flex-row items-center py-3 relative`}>
        <Ionicons name="location-outline" size={20} color="black" />
        <Text>Selectionnez votre adresse de livraison</Text>
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;
