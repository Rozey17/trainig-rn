import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ProductScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={s`p-3 bg-white`}>
        <TouchableOpacity>
          <Text style={s`text-cyan-700 text-xs`}>
            Visiter la boutique PlayStation
          </Text>
        </TouchableOpacity>

        <Text style={s`text-lg font-bold`}>
          Sony, manette PlayStation 5 officielle DualSense, Sans fil, Batterie
          rechargeable, Bluetooth, Compatible avec PS5, Couleur : Bicolore
        </Text>
        <View style={s`flex-row`}>
          <Entypo name="star" size={24} color="#FFA500" />
          <Entypo name="star" size={24} color="#FFA500" />
          <Entypo name="star" size={24} color="#FFA500" />
          <Entypo name="star" size={24} color="#FFA500" />
          <Entypo name="star-outlined" size={24} color="#FF8C00" />
        </View>
      </View>
      <View style={s`h-80`}>
        <Image
          source={{
            uri: "https://pic.clubic.com/v1/images/1862589/raw?fit=smartCrop&width=1200&height=675&hash=473279818794f5a901583e0922caf6728f0dae24",
          }}
          style={s`h-full `}
        />
      </View>
      <View style={s`p-3`}>
        <View style={s`flex-row`}>
          <Text style={s`text-cyan-700`}> Livraison GRATUITE</Text>
          <Text style={s`font-bold`}> vendredi 4 novembre</Text>
        </View>
        <View style={s`flex-row`}>
          <Ionicons name="location-outline" size={20} color="#20B2AA" />

          <Text style={s`text-cyan-700`}> Entrez votre adresse</Text>
        </View>
        <View style={s``}>
          <Text style={s`text-green-700 text-lg`}> En stock. </Text>

          {/* <Button title="Ajouter au panier" color="#FFD700" />
          <Button title="Ajouter au panier" color="#FFD700" /> */}
          <TouchableOpacity
            style={s`bg-yellow-400 rounded-md px-5 py-3 text-center text-lg mt-3`}
          >
            <Text style={s` text-center text-lg`}>Ajouter au panier</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={s`bg-amber-600 rounded-md px-5 py-3 text-center text-lg mt-3`}
          >
            <Text style={s` text-center text-lg`}>Acheter maintenant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
