import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "react-native-wind";

const ProductScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={s`p-3`}>
        <TouchableOpacity>
          <Text style={s`text-cyan-700 text-xs`}>
            Visiter la boutique PlayStation
          </Text>
        </TouchableOpacity>

        <Text style={s`text-lg font-bold`}>
          Sony, manette PlayStation 5 officielle DualSense, Sans fil, Batterie
          rechargeable, Bluetooth, Compatible avec PS5, Couleur : Bicolore
        </Text>
      </View>
      <View style={s`h-80`}>
        <Image
          source={{
            uri: "https://pic.clubic.com/v1/images/1862589/raw?fit=smartCrop&width=1200&height=675&hash=473279818794f5a901583e0922caf6728f0dae24",
          }}
          style={s`h-full `}
        />
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
