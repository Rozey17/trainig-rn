import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-wind";

const TestSection = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      {/* <View style={s`flex-row justify-between`}></View> */}
      <TouchableOpacity>
        <View style={s` p-5 bg-blue-700 `}>
          <Text style={s`text-white font-bold capitalize`}>Hello</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={s` p-5 bg-blue-700 `}>
          <Text style={s`text-white font-bold capitalize`}>Hello</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={s` p-5 bg-blue-700 `}>
          <Text style={s`text-white font-bold capitalize`}>Hello</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={s` p-5 bg-blue-700 `}>
          <Text style={s`text-white font-bold capitalize`}>Hello</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TestSection;
