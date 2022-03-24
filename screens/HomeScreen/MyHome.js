import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function MyHome() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>My Home</Text>
      <Text>This is a small panel display the main status of my home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "transparent",
    fontSize: 22,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
