import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const myName = "Mike";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen,Mike</Text>
      <Button
        title="Components"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List DEMO"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    
  },
});

export default HomeScreen;
