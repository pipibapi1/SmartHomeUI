import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Switch,
  ScrollView,
} from "react-native";

export default function DoorList() {
  const [switchValue1, setswitchValue1] = useState(false);
  const [switchValue2, setswitchValue2] = useState(false);
  const [switchValue3, setswitchValue3] = useState(false);
  const [switchValue4, setswitchValue4] = useState(false);
  const toggleSwitch1 = (value) => {
    setswitchValue1(value);
  };
  const toggleSwitch2 = (value) => {
    setswitchValue2(value);
  };
  const toggleSwitch3 = (value) => {
    setswitchValue3(value);
  };
  const toggleSwitch4 = (value) => {
    setswitchValue4(value);
  };
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
                {switchValue1 ? "Safe mode: On" : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={toggleSwitch1}
                value={switchValue1}
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
                {switchValue2 ? "Safe mode: On" : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={toggleSwitch2}
                value={switchValue2}
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
                {switchValue3 ? "Safe mode: On" : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={toggleSwitch3}
                value={switchValue3}
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
                {switchValue4 ? "Safe mode: On" : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={toggleSwitch4}
                value={switchValue4}
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
                {switchValue4 ? "Safe mode: On" : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={toggleSwitch4}
                value={switchValue4}
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
                {switchValue4 ? "Safe mode: On" : "Safe mode: Off"}
              </Text>
              <Switch
                onValueChange={toggleSwitch4}
                value={switchValue4}
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
