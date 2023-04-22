import React, { useState } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const SquareScreen = () => {
  //const [colors, setColors] = useState({ green: 0, red: 0, blue: 0 });
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red, green, blue);
  return (
    <View style={styles.textStyle}>
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
        color="Green"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;
