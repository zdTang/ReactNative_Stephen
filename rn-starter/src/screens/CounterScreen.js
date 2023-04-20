import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CounterScreen = () => {
  var [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={styles.text}>Counter Count:{counter}</Text>
      <Button
        title="Increate"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decreate"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;
