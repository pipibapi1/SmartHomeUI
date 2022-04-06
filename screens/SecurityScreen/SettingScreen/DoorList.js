import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Switch,
  ScrollView,
} from "react-native";
import AppContext from "../AppContext.js";

export default function DoorList() {
  const myContext = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        {/*Door 1*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.door_img_wrapper}>
              <Image
                style={styles.door_img}
                source={require("../assets/Door1.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.door_info_wrapper}>
              <Text style={styles.door_info}>Door 1</Text>
              <Text style={styles.door_info}>
                {myContext.doorSwitchValue1
                  ? "Safe mode: On"
                  : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={myContext.doorToggleSwitch1}
                value={myContext.doorSwitchValue1}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Door 2*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.door_img_wrapper}>
              <Image
                style={styles.door_img}
                source={require("../assets/Door2.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.door_info_wrapper}>
              <Text style={styles.door_info}>Door 2</Text>
              <Text style={styles.door_info}>
                {myContext.doorSwitchValue2
                  ? "Safe mode: On"
                  : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={myContext.doorToggleSwitch2}
                value={myContext.doorSwitchValue2}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Door 3*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.door_img_wrapper}>
              <Image
                style={styles.door_img}
                source={require("../assets/Door3.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.door_info_wrapper}>
              <Text style={styles.door_info}>Door 3</Text>
              <Text style={styles.door_info}>
                {myContext.doorSwitchValue3
                  ? "Safe mode: On"
                  : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={myContext.doorToggleSwitch3}
                value={myContext.doorSwitchValue3}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Door 4*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.door_img_wrapper}>
              <Image
                style={styles.door_img}
                source={require("../assets/Door4.png")}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.door_info_wrapper}>
              <Text style={styles.door_info}>Door 4</Text>
              <Text style={styles.door_info}>
                {myContext.doorSwitchValue4
                  ? "Safe mode: On"
                  : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={myContext.doorToggleSwitch4}
                value={myContext.doorSwitchValue4}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    width: "100%",
    height: "66%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    //backgroundColor: "blue",
    width: "88%",
    height: "66vh",
    //alignItems: "center",
    //justifyContent: "center",
  },
  card: {
    //backgroundColor: "purple",
    height: "16.5vh",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    backgroundColor: "#575252",
    width: "88%",
    height: "88%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  door_img_wrapper: {
    //backgroundColor: "purple",
    width: "100%",
    height: "67%",
  },
  door_info_wrapper: {
    //backgroundColor: "red",
    width: "90%",
    height: "33%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  door_img: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  door_info: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
