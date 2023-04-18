import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const friends = [
  { name: "mike" },
  { name: "john" },
  { name: "peter" },
  { name: "drew" },
  { name: "peter" },
];

const ListScreen = () => {
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
  // Notice the structure of 'item'
  // it is not just a '{ name: "peter" }'
  // its real structure is like this: item==={item:{name:'frient'},index:0}
  //
};

const styles = StyleSheet.create({});
export default ListScreen;
