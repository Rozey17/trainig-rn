import { View, Text, Button } from "react-native";
import React from "react";

const Testscreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Testscreen</Text>
      <Button
        title="go to home screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Testscreen;
