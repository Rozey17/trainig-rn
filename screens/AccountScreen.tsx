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
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png",
            }}
            style={s`h-20 w-1/4 object-contain object-center`}
          />

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
        <View style={s`py-5 space-y-5`}>
          <View style={s`flex-row justify-between items-center`}>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/G/01/FlexComm/Web/HomeStep2Box._CB1577736561_.png",
              }}
              style={s`h-24 w-1/4 mr-4 object-contain `}
            />
            <Text style={s`text-lg flex-1`}>
              Vérifier l'état de la commande et suivre, modifier ou retourner
              les articles
            </Text>
          </View>
          <View style={s`flex-row justify-between items-center mt-5`}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3731/3731072.png",
              }}
              style={s`h-24 w-1/4 mr-4 object-contain `}
            />
            <Text style={s`text-lg flex-1`}>
              Magasinez les achats passés et les articles essentiels de tous les
              jours
            </Text>
          </View>
          <View style={s`flex-row justify-between items-center mt-5`}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1216/1216995.png",
              }}
              style={s`h-24 w-1/4 mr-4 object-contain `}
            />
            <Text style={s`text-lg flex-1`}>
              Créez des listes avec les éléments que vous voulez maintenant ou
              plus tard
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
