import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const TextScreen = () => {
  const [Password, setPassword] = React.useState("");
  // By this way, we can use the name variable anywhere in the component.
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={Password}
        secureTextEntry={true}
        onChangeText={(newValue) => setPassword(newValue)}
      ></TextInput>
      <Text>
        {Password.length < 6 && Password.length > 0
          ? "Password is too short"
          : ""}
      </Text>
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
