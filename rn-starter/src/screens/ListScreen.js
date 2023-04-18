import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const friends = [
  { name: "mike" }, //key must be a string
  { name: "john" },
  { name: "peter" },
  { name: "drew" },
  { name: "peterTwo" },
];

const ListScreen = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
  // Notice the structure of 'item'
  // it is not just a '{ name: "peter" }'
  // its real structure is like this: item==={item:{name:'frient'},index:0}
  //
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
    bordercolor: "red",
    shadowColor: "#000",
    borderWidth: 2,
    paddingVertical: 10,
    textAlign: "center",
  },
});
export default ListScreen;
