import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

export default function ClimateInfo() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <SafeAreaView style={styles.temp_info}>
          <Image
            style={styles.temp_img}
            source={require("./assets/temp.png")}
          />
          <Text style={styles.tempVal}>22°C</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.humid_info}>
          <Image
            style={styles.humid_img}
            source={require("./assets/water.png")}
          />
          <Text style={styles.humidVal}>60%</Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    width: "100%",
    height: "64%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    //backgroundColor: "blue",
    width: "74%",
    height: "98%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  temp_info: {
    //backgroundColor: "purple",
    width: "100%",
    height: "46%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#FDA43C",
  },
  humid_info: {
    //backgroundColor: "yellow",
    width: "100%",
    height: "46%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#4838FF",
  },
  temp_img: {
    width: 81,
    height: 111,
  },
  tempVal: {
    backgroundColor: "transparent",
    fontSize: 55,
    color: "#FDA43C",
  },
  humid_img: {
    width: 81,
    height: 111,
  },
  humidVal: {
    backgroundColor: "transparent",
    fontSize: 55,
    color: "#4838FF",
  },
});
