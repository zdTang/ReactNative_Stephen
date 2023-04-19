import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const myName = "Mike";
const HomeScreen = (props) => {
  console.dir(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen,Mike</Text>
      <Button
        title="Components"
        onPress={() => props.navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
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
