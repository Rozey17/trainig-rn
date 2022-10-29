import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { s } from "react-native-wind";

const Testscreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    // <View style={s`bg-gradient-to-r from-cyan-500 to-teal-600 p-10`}>
    //   <Text style={s`text-red-500 font-extrabold`}>Testscreen</Text>
    //   {/* <Button
    //     title="go to home screen"
    //     onPress={() => navigation.navigate("Home")}
    //   /> */}
    //   <TouchableOpacity onPress={() => navigation.navigate("Home")}>
    //     <Text>Home Screen</Text>
    //   </TouchableOpacity>
    // </View>
    <SafeAreaView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
        // style={s``}
      >
        <View style={s`flex flex-row space-x-5`}>
          <View style={s`h-40 bg-green-400 w-40`}></View>
          <View style={s`h-40 bg-yellow-400 w-40`}></View>
          <View style={s`h-40 bg-red-400 w-40`}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Testscreen;
