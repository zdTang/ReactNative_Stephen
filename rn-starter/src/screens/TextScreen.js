import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const TextScreen = () => {
  return (
    <View>
      <Text>TextScreen</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default TextScreen;

// By default, the TextInput component is a single line and has no border and no background.
// We need to add a style to make it look like a text field.
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
