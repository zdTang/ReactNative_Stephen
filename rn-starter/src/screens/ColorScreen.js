import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const ColorScreen = () => {
  return (
    <View style={styles.textStyle}>
      <Button title="Add a color" />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ColorScreen;
