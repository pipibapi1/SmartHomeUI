import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

export default function ClimateInfo({ temp, humid }) {
  const [temperature, setTemperature] = useState(temp);
  const [humidity, setHumidity] = useState(humid);
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
  });
  client.on("error", function (error) {
    console.log("Can't connect" + error);
  });
  client.on("message", (topic, payload) => {
    console.log("Received Message:", topic, payload.toString());
    if (topic == temp_topic) {
      SetTemperature(payload.toString());
    } else {
      SetHumidity(payload.toString());
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        <SafeAreaView style={styles.temp_info}>
          <Image
            style={styles.temp_img}
            source={require("../assets/temp.png")}
          />
          <Text style={styles.tempVal}>{temperature}°C</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.humid_info}>
          <Image
            style={styles.humid_img}
            source={require("../assets/water.png")}
          />
          <Text style={styles.humidVal}>{humidity}%</Text>
        </SafeAreaView>
      </SafeAreaView>
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
    width: "22%",
    height: "48%",
  },
  tempVal: {
    backgroundColor: "transparent",
    fontSize: 50,
    color: "#FDA43C",
  },
  humid_img: {
    width: "22%",
    height: "48%",
  },
  humidVal: {
    backgroundColor: "transparent",
    fontSize: 50,
    color: "#4838FF",
  },
});
