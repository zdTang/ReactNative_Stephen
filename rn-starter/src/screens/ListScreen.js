import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const friends = [
  { name: "mike", key: "1" }, //key must be a string
  { name: "john", key: "2" },
  { name: "peter", key: "3" },
  { name: "drew", key: "4" },
  { name: "peter", key: "5" },
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
