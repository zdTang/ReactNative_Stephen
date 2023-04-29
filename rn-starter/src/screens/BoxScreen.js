import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child1</Text>
      <Text style={styles.textTwoStyle}>Child2</Text>
      <Text style={styles.textThreeStyle}>Child3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "green",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "green",
    flex: 1,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "green",
    flex: 1,
  },
});
