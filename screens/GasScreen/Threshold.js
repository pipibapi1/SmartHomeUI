import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import AppContext from "../AppContext.js";

export default function Header() {
  const myContext = useContext(AppContext);
  const gasThresholdOn = (
    <Image style={styles.img} source={require("./assets/Gas_on.png")} />
  );

  const gasThresholdOff = (
    <Image style={styles.img} source={require("./assets/Gas_off.png")} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {myContext.gasWarning == 1 ? gasThresholdOn : gasThresholdOff}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    marginTop: "-50%",
    width: 300,
    height: 200,
    margin: "auto",
  },
  container: {
    width: "100%",
    height: "8%",
  },
});
