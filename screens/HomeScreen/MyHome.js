import { StyleSheet, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";

export default function MyHome({ temp, humid }) {
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
    password: "aio_mLiJ80UX61ecGLCeUwzTi3vtWCpE",
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
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>My Home</Text>
        <SafeAreaView style={styles.panel}>
          <SafeAreaView style={styles.panel_part1}>
            <Text style={styles.homeinfo1}>{temperature}°C</Text>
            <Text style={styles.homeinfo2}>{humidity}%</Text>
            <SafeAreaView style={styles.title_part}>
              <Text style={styles.title}>Climate</Text>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={styles.panel_part2}>
            <Text style={styles.homeinfo1}>Low</Text>
            <SafeAreaView style={styles.title_part}>
              <Text style={styles.title}>Gas</Text>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={styles.panel_part3}>
            <Text style={styles.homeinfo1}>5/15</Text>
            <SafeAreaView style={styles.title_part}>
              <Text style={styles.title}>Lights on</Text>
            </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={styles.panel_part4}>
            <Text style={styles.homeinfo1}>3/12</Text>
            <SafeAreaView style={styles.title_part}>
              <Text style={styles.title}>Doors on safe mode</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "grey",
    width: "100%",
    height: "37%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "88%",
    height: "94%",
    //backgroundColor: "red",
    justifyContent: "space-between",
  },
  panel: {
    backgroundColor: "#FDA43C",
    width: "100%",
    height: "83%",
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  panel_part1: {
    //backgroundColor: "red",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EA9939",
  },
  panel_part2: {
    //backgroundColor: "red",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EA9939",
  },
  panel_part3: {
    //backgroundColor: "red",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EA9939",
  },
  panel_part4: {
    //backgroundColor: "red",
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 20,
    borderWidth: 0.5,
    borderColor: "#EA9939",
  },
  homeinfo1: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  homeinfo2: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  title_part: {
    //backgroundColor: "red",
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#000000",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 21,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
