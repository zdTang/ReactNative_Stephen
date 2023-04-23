import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../Components/ColorCounter";

//Define Reducer function
//reducer takes two arguments:
//1. the current state
//2. the action-- Notice how the action is an object, it will have two parts:
//2-1. the type of action
//2-2. the payload
//reducer returns a new state
//reducer is a pure function
//reducer should not mutate the state

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    //we don't change the old object, we copy it to an new Object and update it
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const COLOR_INCREMENT = 15;
  //Notice how to use useReducer
  //useReducer takes two arguments:
  //1. the reducer function
  //2. the initial state
  //useReducer returns an array of two elements
  //[state,dispatch]
  //state is the current state
  //dispatch is a function that takes an action as an argument
  //dispatch is used to update the state
  //useReducer is a hook

  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state; //Deconstructing state
  console.log(state);

  return (
    <View style={styles.textStyle}>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
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
