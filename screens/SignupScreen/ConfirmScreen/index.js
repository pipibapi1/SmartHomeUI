import * as React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "./Header";
import Form from "./Form";


export default function index({ route, navigation }) {
  const { email, name, password } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#575252", "#282828", "#000000"]}
        style={styles.background}
      />
      <Header navigation={navigation} />
      {/* <Text style={{ fontSize: "100px", marginTop: "100px" }}> {JSON.stringify(email)}</Text> */}
      <Form
        name={name}
        email={email}
        password={password}
        navigation={navigation}
      />
      {/* <SignupButton navigation={navigation}/> */}
      {/* <Footer navigation={navigation}/> */}
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
  },
});
