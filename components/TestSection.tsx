import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-wind";

const TestSection = () => {
  return (
    <View style={s`flex-row justify-between px-3`}>
      <TouchableOpacity>
        <View style={s` py-5`}>
          <Text style={s` font-bold capitalize`}>Listes Alexa</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={s` py-5`}>
          <Text style={s` font-bold capitalize`}>Prime</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={s` py-5`}>
          <Text style={s` font-bold capitalize`}>Vidéo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={s` py-5`}>
          <Text style={s` font-bold capitalize`}>Musique</Text>
        </View>
      </TouchableOpacity>
    </View>
    // </ScrollView>
  );
};

export default TestSection;
