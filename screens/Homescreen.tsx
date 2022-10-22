import { View, Text, Button } from "react-native";
import React from "react";

const Homescreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="go to test screen"
        onPress={() => navigation.navigate("Test")} //push to the name
      />
    </View>
  );
};

export default Homescreen;
