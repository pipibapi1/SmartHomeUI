import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import MyHome from "./MyHome";
import Features from "./Features";

function Body({ navigation }) {
  const [temperature, setTemperature] = useState(28);
  const [humidity, setHumidity] = useState(60);
  const SetTemperature = (value) => {
    setTemperature(value);
  };
  const SetHumidity = (value) => {
    setHumidity(value);
  };
  //Connect to feeds temperature and humidity
  const host = "io.adafruit.com";
  const ada_port = "443"; //web socket
  const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
  const connectUrl = `mqtt://${host}:${ada_port}`;
  const temp_topic = "duy1711ak/feeds/iot-temp";
  const humi_topic = "duy1711ak/feeds/iot-humi";
  const door_topic = "duy1711ak/feeds/iot-door";
  const gas_topic = "duy1711ak/feeds/iot-gas";

  const mqtt = require("mqtt");

  var client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 10000,
    username: "duy1711ak",
    password: "aio_wSsJ61gqapOCi1uvfve5DTHJtc3N",
    reconnectPeriod: 6000,
  });

  client.on("connect", () => {
    console.log("Temperature-Feeds Connected");
    client.subscribe([temp_topic], () => {
      console.log(`Subscribe to topic '${temp_topic}'`);
    });
    client.subscribe([humi_topic], () => {
      console.log(`Subscribe to topic '${humi_topic}'`);
    });
    console.log("Door and Gas feeds Connected");
    client.subscribe([door_topic], () => {
      console.log(`Subscribe to topic '${door_topic}'`);
    });
    client.subscribe([gas_topic], () => {
      console.log(`Subscribe to topic '${gas_topic}'`);
    });
  });
  client.on("error", function (error) {
    console.log("Can't connect" + error);
  });
  client.on("message", (topic, payload) => {
    if (topic == temp_topic) {
      console.log("Temperature update");
      SetTemperature(payload.toString());
    }
    if (topic == humi_topic) {
      console.log("Humidity update");
      SetHumidity(payload.toString());
    }
    if (topic == door_topic) {
      console.log("Door open");
      //alert("Someone's just opened your door");
    }
    if (topic == gas_topic) {
      //console.log("Gas leak");
      //alert("There may be gas leak in your house");
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <MyHome temp={temperature} humid={humidity} />
      <Features navigation={navigation} temp={temperature} humid={humidity} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "76%",
  },
});
export default Body;
