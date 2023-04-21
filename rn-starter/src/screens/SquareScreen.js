import React, { useState } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";

const SquareScreen = () => {
  const [colors, setColors] = useState({ green: 0, red: 0, blue: 0 });
  console.log(colors);
  return (
    <View style={styles.textStyle}>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
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
