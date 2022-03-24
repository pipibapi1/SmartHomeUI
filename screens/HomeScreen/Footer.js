import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Footer() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Footer</Text>
      <Text>This contains Home Button</Text>
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
