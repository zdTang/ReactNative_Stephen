import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Sunset"
        url={require("../../assets/images/beach.jpg")}
        score="1"
      />
      <ImageDetail
        title="Forest"
        url={require("../../assets/images/forest.jpg")}
        score="99"
      />
      <ImageDetail
        title="Mountain"
        url={require("../../assets/images/mountain.jpg")}
        score="66"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
