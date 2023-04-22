import React, { useState } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const SquareScreen = () => {
  //const [colors, setColors] = useState({ green: 0, red: 0, blue: 0 });
  const COLOR_INCREMENT = 15;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function setColor(color, change) {
    switch (color) {
      case "red":
        if (red + change > 255 || red + change < 0) {
          return;
        }
        setRed(red + change);
        break;
      case "green":
        if (green + change > 255 || green + change < 0) {
          return;
        }
        setGreen(green + change);
        break;
      default:
        if (blue + change > 255 || blue + change < 0) {
          return;
        }
        setBlue(blue + change);
    }
  }
  console.log(red, green, blue);

  return (
    <View style={styles.textStyle}>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
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
