import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" url="../../assets/images/beach.jpg" />
      <ImageDetail title="Sea" url="../../assets/images/forest.jpg" />
      <ImageDetail title="Mountain" url="../../assets/images/mountain.jpg" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
