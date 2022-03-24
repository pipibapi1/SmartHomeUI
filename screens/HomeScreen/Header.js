import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
      <Text>
        This contains the User Information Image Button and the name of user
      </Text>
    </View>
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
