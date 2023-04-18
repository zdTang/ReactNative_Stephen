import React from "react";
import { View, Text, StyleSheet } from "react-native";

const myName = "Mike";
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen,Mike</Text>
      <Text style={styles.text}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
