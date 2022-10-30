import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import TestSection from "../components/TestSection";
import { Ionicons } from "@expo/vector-icons";

const Homescreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <SafeAreaView style={s` pt-14 bg-cyan-100 `}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s`mx-3 `}>
          <View style={s`relative`}>
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
        </View>
        <TestSection />
        <View style={s`bg-cyan-200 flex-row items-center py-3 px-2 relative`}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text>Selectionnez votre adresse de livraison</Text>
        </View>

        <View style={s`h-80`}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1666315/pexels-photo-1666315.jpeg",
            }}
            style={s`object-contain h-60 w-full object-center`}
          />
          <View style={s`absolute -bottom-20`}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={s`p-3`}
            >
              <Pressable
                onPress={() => navigation.push("Product")}
                style={s`mr-3 bg-white h-44 w-36 rounded-md shadow-lg`}
              >
                <View style={s`p-2 space-y-10`}>
                  <Text style={s``}>Poursuivre la navigation</Text>
                  <Image
                    source={{
                      uri: "https://pic.clubic.com/v1/images/1862589/raw?fit=smartCrop&width=1200&height=675&hash=473279818794f5a901583e0922caf6728f0dae24",
                    }}
                    style={s`h-24 mt-5`}
                  />
                </View>
              </Pressable>
              <Pressable
                style={s`mr-3 bg-white h-44 w-36 rounded-md shadow-lg`}
              >
                <View style={s`p-2 space-y-10`}>
                  <Text style={s``}>Continuer vos achats de</Text>
                  <Image
                    source={{
                      uri: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/wzitsrb4oucx9jukxsmc/chaussure-air-max-90-pour-dlXJdc.png",
                    }}
                    style={s`h-24 mt-5`}
                  />
                </View>
              </Pressable>
              <Pressable
                style={s`mr-3 bg-white h-44 w-36 rounded-md shadow-lg`}
              >
                <View style={s`p-2 space-y-10`}>
                  <Text style={s``}>Poursuivre la navigation</Text>
                  <Image
                    source={{
                      uri: "https://images.samsung.com/is/image/samsung/p6pim/fr/qe75qn700btxxc/gallery/fr-qled-tv-qe75qn700btxxc-l-perspective--black-thumb-531501985?$420_420_PNG$",
                    }}
                    style={s`h-24 mt-5`}
                  />
                </View>
              </Pressable>
              <Pressable
                style={s`mr-3 bg-white h-44 w-36 rounded-md shadow-lg`}
              >
                <View style={s`p-2 space-y-10`}>
                  <Text style={s``}>Poursuivre la navigation</Text>
                  <Image
                    source={{
                      uri: "https://pic.clubic.com/v1/images/1862589/raw?fit=smartCrop&width=1200&height=675&hash=473279818794f5a901583e0922caf6728f0dae24",
                    }}
                    style={s`h-24 mt-5`}
                  />
                </View>
              </Pressable>
              <Pressable
                style={s`mr-3 bg-white h-44 w-36 rounded-md shadow-lg`}
              >
                <View style={s`p-2 space-y-10`}>
                  <Text style={s``}>Poursuivre la navigation</Text>
                  <Image
                    source={{
                      uri: "https://pic.clubic.com/v1/images/1862589/raw?fit=smartCrop&width=1200&height=675&hash=473279818794f5a901583e0922caf6728f0dae24",
                    }}
                    style={s`h-24 mt-5`}
                  />
                </View>
              </Pressable>
              <Pressable
                style={s`mr-3 bg-white h-44 w-36 rounded-md shadow-lg`}
              >
                <View style={s`p-2 space-y-10`}>
                  <Text style={s``}>Poursuivre la navigation</Text>
                  <Image
                    source={{
                      uri: "https://pic.clubic.com/v1/images/1862589/raw?fit=smartCrop&width=1200&height=675&hash=473279818794f5a901583e0922caf6728f0dae24",
                    }}
                    style={s`h-24 mt-5`}
                  />
                </View>
              </Pressable>
            </ScrollView>
          </View>
        </View>

        <View style={s`bg-white mt-20 p-5 space-y-5`}>
          <Text style={s`font-bold text-lg`}>
            Découvrer nos moyens de paiement disponibles
          </Text>
          <View style={s`pt-5`}>
            <View style={s`flex-row space-x-5`}>
              <View>
                <View style={s`bg-gray-200 h-40 w-44 p-7 mr-2`}>
                  <Image
                    source={{
                      uri: "https://pngimg.com/uploads/credit_card/credit_card_PNG74.png",
                    }}
                    style={s`h-full`}
                  />
                </View>
                <Text>carte bancaire</Text>
              </View>

              <View>
                <View style={s`bg-gray-200 h-40 w-44  p-7`}>
                  <Image
                    source={{
                      uri: "https://www.pngmart.com/files/10/Amazon-Gift-Card-Transparent-Background.png",
                    }}
                    style={s`h-full`}
                  />
                </View>
                <Text>chèques cadeaux</Text>
              </View>
            </View>

            <View style={s`flex-row mt-2`}>
              <View>
                <View style={s`bg-gray-200 h-40 w-44 p-7 mr-2`}>
                  <Image
                    source={{
                      uri: "https://m.media-amazon.com/images/I/41VxEh6Lh1L._AC_UL320_.jpg",
                    }}
                    style={s`h-full`}
                  />
                </View>
                <Text>paiement en 4 fois</Text>
              </View>

              <View>
                <View style={s`bg-gray-200 h-40 w-44  p-7`}>
                  <Image
                    source={{
                      uri: "https://m.media-amazon.com/images/S/aplus-media/sota/f5b16669-d89e-4827-9dfd-b632d613398a.__CR0,0,300,225_PT0_SX300_V1___.png",
                    }}
                    style={s`h-full`}
                  />
                </View>
                <Text>Recharge de compte</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
