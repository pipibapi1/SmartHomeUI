import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  Switch,
  ScrollView,
} from "react-native";
import CustomSwitch from 'react-native-custom-switch';


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
        {/*Room 1*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("../assets/Door1.png")}
              />
              <Switch  style={styles.toggle}
                onValueChange={toggleSwitch1}
                value={switchValue1}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Living Room</Text>
              <Image
                style={styles.light_bulb}
                source={require("./assets/Light_off.png")}
              />
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Room 2*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("./assets/Kitchen.png")}
              />
              <Switch  style={styles.toggle}
                onValueChange={toggleSwitch2}
                value={switchValue2}
                trackColor={{ true: "blue", false: "red" }}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Kitchen</Text>
              <Image
                style={styles.light_bulb}
                source={require("./assets/Light_off.png")}
              />
              <Text style={styles.room_info}>
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Room 3*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("./assets/terrace.png")}
              />
              <Switch  style={styles.toggle}
                onValueChange={toggleSwitch3}
                value={switchValue3}
                trackColor={{ true: "blue", false: "red" }}
              />  
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Terrace</Text>
              <Image
                style={styles.light_bulb}
                source={require("./assets/Light_off.png")}
              />
              <Text style={styles.room_info}>
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>

        {/*Room 4*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("./assets/garden.png")}
              />
              <Switch  style={styles.toggle}
                onValueChange={toggleSwitch4}
                value={switchValue4}
                trackColor={{ true: "blue", false: "red" }}
              />      
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Garden</Text>
              <Image
                style={styles.light_bulb}
                source={require("./assets/Light_off.png")}
              />
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        {/*Room 4*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("../assets/Door4.png")}
              />
              <Switch  style={styles.toggle}
                onValueChange={toggleSwitch4}
                value={switchValue4}
                trackColor={{ true: "blue", false: "red" }}
              />    
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Room 4</Text>
              <Image
                style={styles.light_bulb}
                source={require("./assets/Light_off.png")}
              />
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        {/*Room 4*/}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.room_img_wrapper}>
              <Image
                style={styles.room_img}
                source={require("../assets/Door4.png")}
              />
              <Switch  style={styles.toggle}
                onValueChange={toggleSwitch4}
                value={switchValue4}
                trackColor={{ true: "blue", false: "red" }}
              />    
            </SafeAreaView>
            <SafeAreaView style={styles.room_info_wrapper}>
              <Text style={styles.room_info}>Room 4</Text>
              <Image
                style={styles.light_bulb}
                source={require("./assets/Light_off.png")}
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
  room_img_wrapper: {
    //backgroundColor: "purple",
    width: "100%",
    height: "67%",
  },
  room_info_wrapper: {
    //backgroundColor: "red",
    width: "90%",
    height: "33%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggle: {
    //backgroundColor: "red",
    flexDirection: "row",
    alignItems: "right",
    justifyContent: "space-between",
    marginLeft: "81.3%",
    marginTop: "-25%"
  },  
  light_bulb: {
    //backgroundColor: "red",
    width: "17%",
    height: "100%",
    marginLeft: "60%",
    marginTop: "1%"
  },   
  room_img: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  room_info: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
