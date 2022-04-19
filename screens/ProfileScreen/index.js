import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "./Header";
import Profile from "./profile";
import Form from "./Form";
import Footer from "./Footer";
import AppContext from "../AppContext.js";

export default function index({ navigation }) {
  const myContext = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        Background
        Linear
        Gradient
        colors={["#575252", "#282828", "#000000"]}
        style={styles.background}
      />
      <Header navigation={navigation} />
      <Profile />
      <Form navigation={navigation} />
      <Footer  navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 22,
    color: "#FDA43C",
    fontWeight: "bold",
    //fontFamily: "Roboto",
  },
});
