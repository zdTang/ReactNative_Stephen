import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child1</Text>
      <Text style={styles.textStyle}>Child2</Text>
      <Text style={styles.textStyle}>Child3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    alignItems: "center",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "green",
  },
});
