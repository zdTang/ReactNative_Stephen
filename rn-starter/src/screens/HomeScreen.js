import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const myName = "Mike";
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen,Mike</Text>
      <Button title="button" onPress={() => console.log("press")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
