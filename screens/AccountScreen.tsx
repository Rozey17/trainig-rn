import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { Feather } from "@expo/vector-icons";

const AccountScreen = () => {
  return (
    <SafeAreaView style={s` pt-14 bg-cyan-100 `}>
      <ScrollView style={s`p-3`}>
        <View style={s`flex-row  justify-between items-center `}>
          {/* <View style={s`w-1/3 h-20`}> */}
          <Image
            source={{
              uri: "data:image/png;base64,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",
            }}
            style={s`h-20 w-60 object-contain object-center`}
          />
          {/* </View> */}

          <View style={s`flex-row w-1/6 justify-between`}>
            <Feather name="bell" size={20} color="black" />
            <Feather name="search" size={20} color="black" />
          </View>
        </View>
        <View style={s`py-5`}>
          <Text style={s`text-center text-xl`}>
            Identifiez-vous pour une meilleure expérience
          </Text>
        </View>
        <View>
          <Pressable
            style={s`border border-gray-500 px-4 py-3 rounded bg-amber-300`}
          >
            <Text style={s`text-center `}>Identifiez-vous</Text>
          </Pressable>
          <Pressable
            style={s`border border-gray-500  px-4 py-3 rounded bg-gray-200 mt-3`}
          >
            <Text style={s`text-center `}>Créer un compte</Text>
          </Pressable>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
