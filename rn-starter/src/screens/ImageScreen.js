import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Sea" />
      <ImageDetail title="Mountain" />
      <ImageDetail title="Sunset" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
