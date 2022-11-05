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
    <SafeAreaView style={s` pt-14 `}>
      <ScrollView style={s`p-3`}>
        <View style={s`flex-row  justify-between items-center `}>
          {/* <View style={s`w-1/3 h-20`}> */}
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png",
            }}
            style={s`h-20 w-1/4 object-contain object-center`}
          />
          {/* </View> */}

          <View style={s`flex-row w-1/6 justify-between`}>
            <Feather name="bell" size={20} color="black" />
            <Feather name="search" size={20} color="black" />
          </View>
        </View>
        <View style={s`py-5 `}>
          <Text style={s`text-center text-xl  `}>
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
            style={s`border border-gray-500  px-4 py-3 rounded bg-gray-200 mt-2`}
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
