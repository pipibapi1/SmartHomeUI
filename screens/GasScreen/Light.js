import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  Animated,
} from "react-native";
import AppContext from "../AppContext.js";

export default function Footer() {
  const host = "io.adafruit.com";
  const ada_port = "443"; //web socket
  //const clientId = `mqtt_${Math.random().toString(16).slice(3)}`; => !!!!! ERROR MULTIPLE CLIENT !!!!!!
  const clientId = "mqtt_06092001_controlAlarm";
  const connectUrl = `mqtt://${host}:${ada_port}`;

  const alarmController_topic = "duy1711ak/feeds/alarmcontroller";
  const mqtt = require("mqtt");
  const Swal = require("sweetalert2");

  var client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 1000000,
    username: "duy1711ak",
    password: "aio_wSsJ61gqapOCi1uvfve5DTHJtc3N",
    reconnectPeriod: 600000,
  });

  client.on("connect", () => {
    console.log("Feeds Connected");
    client.subscribe([alarmController_topic], () => {
      console.log(`Subscribe to topic '${alarmController_topic}'`);
    });
  });

  client.on("error", function (error) {
    console.log("Can't connect" + error);
  });

  const myContext = useContext(AppContext);
  const [amin, setAmin] = useState(new Animated.Value(0));

  const rotation = amin.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-15deg", "15deg"],
  });
  const ringingBell = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(amin, {
          toValue: -1,
          duration: 100,
          delay: 500,
        }),
        Animated.timing(amin, {
          toValue: 1,
          duration: 100,
        }),
        Animated.timing(amin, {
          toValue: -1,
          duration: 100,
        }),
        Animated.timing(amin, {
          toValue: 1,
          duration: 100,
        }),
        Animated.timing(amin, {
          toValue: 0,
          duration: 100,
        }),
      ])
    ).start();
  };
  const stopRinging = () => {
    Animated.timing(amin, {
      toValue: 0,
      duration: 100,
    }).start();
    Animated.timing(amin).stop();
  };

  if (myContext.lightGasThreshold == 1) {
    ringingBell();
  }
  if (myContext.lightGasThreshold == 0) {
    stopRinging();
  }

  const turnOffAlarm = () => {
    Swal.fire({
      title: "Turn off alarm?",
      text: "Your gas detecting system will be inactive for a while!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Turn off",
    }).then((result) => {
      if (result.isConfirmed) {
        myContext.lightGasThresholdClick();
        client.publish(alarmController_topic, "0");
        stopRinging();
      }
    });
  };

  const light_on = (
    <SafeAreaView style={styles.button}>
      <SafeAreaView style={styles.turnoff}>
        <TouchableOpacity onPress={turnOffAlarm}>
          <Text style={styles.turnoff_text}>Turn off alarm</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );

  const light_off = (
    <SafeAreaView style={styles.button}>
      <SafeAreaView style={styles.alarmoff}>
        <TouchableOpacity>
          <Text style={styles.alarmoff_text}>Turn off alarm</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{ marginTop: "30%", transform: [{ rotate: rotation }] }}
      >
        <Image
          style={styles.bell_image}
          source={require("./assets/bell.png")}
        />
      </Animated.View>

      {myContext.lightGasThreshold == 1 ? light_on : light_off}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    width: "100%",
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "70px",
    //backgroundColor: "#575252",
    width: "80%",
    height: "60%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "coulumn",
  },
  button2: {
    marginTop: "50px",
    backgroundColor: "#575252",
    width: "80%",
    height: "120%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  home_image: {
    marginRight: "10px",
    width: "70px",
    height: "70px",
  },
  home_image2: {
    marginLeft: "-35px",
    marginRight: "10px",
    width: "40px",
    height: "40px",
  },
  home_image3: {
    marginRight: "10px",
    marginTop: "15px",
    marginLeft: "10px",
    width: "240px",
    height: "7px",
  },
  home_image4: {
    marginRight: "-10px",
    marginTop: "-7px",
    marginLeft: "20px",
    width: "50px",
    height: "7px",
  },
  home_image5: {
    marginRight: "30px",
    marginTop: "-7px",
    marginLeft: "200px",
    width: "75px",
    height: "47px",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 18,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
  },
  text2: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
    marginRight: "220px",
  },
  text3: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
  },
  turnoff: {
    backgroundColor: "#FDA43C",
    width: "80%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  turnoff_text: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  alarmoff: {
    backgroundColor: "#b3b3b3",
    width: "80%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  alarmoff_text: {
    color: "#737373",
    fontSize: 24,
    fontWeight: "bold",
  },
  bell_image: {
    width: "65px",
    height: "65px",
  },
});
