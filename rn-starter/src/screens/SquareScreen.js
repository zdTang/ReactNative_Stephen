import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../Components/ColorCounter";

//Define Reducer function
//reducer takes two arguments:
  //1. the current state
  //2. the action
  //reducer returns a new state
  //reducer is a pure function
  //reducer should not mutate the state
  
const reducer = (state, action) => { 
  //state==={red:number,green:number,blue:number}
  //action==={colorToChange:'red' || 'green' || 'blue',amount:15 || -15}
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
      //we don't change the old object, we copy it to an new Object and update it
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
}


const SquareScreen = () => {

  
  

  const COLOR_INCREMENT = 15;
  const [state, dispatch] = useReducer(reducer,{red:0,green:0,blue:0});}
  
  console.log(state);

  return (
    <View style={styles.textStyle}>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
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
