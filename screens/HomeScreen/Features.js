import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Features() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Features</Text>
      <Text>This is a list of feature buttons</Text>
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
