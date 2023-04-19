import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const myName = "Mike";
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen,Mike</Text>
      <Button title="button" onPress={() => console.log("press")} />
      <TouchableOpacity onPress={() => console.log("press lIST")}>
        <Text>Go to List DEMO</Text>
        <Text>Go to List DEMO</Text>
        <Text>Go to List DEMO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
