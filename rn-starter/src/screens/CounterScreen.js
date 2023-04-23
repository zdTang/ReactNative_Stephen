import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CounterScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increase":
        return { ...state, count: state.count + 1 }; // Never change a state, just copy it and modify it.
      case "Decrease":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  var [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Text style={styles.text}>Counter Count:{state.count}</Text>
      <Button
        title="Increate"
        onPress={() => {
          dispatch({ type: "Increase" });
        }}
      />
      <Button
        title="Decreate"
        onPress={() => {
          dispatch({ type: "Decrease" });
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
