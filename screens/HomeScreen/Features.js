import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Features() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Features</Text>
        <SafeAreaView style={styles.buttonsWrapper}>
          <SafeAreaView style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert("Go to climate screen!");
              }}
            >
              <Image
                style={styles.temp_img}
                source={require("./assets/temp.png")}
              />
              <Text style={styles.buttonText}>Climate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert("Go to light screen!");
              }}
            >
              <Image
                style={styles.light_img}
                source={require("./assets/light.png")}
              />
              <Text style={styles.buttonText}>Light</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert("Go to gas screen!");
              }}
            >
              <Image
                style={styles.flame_img}
                source={require("./assets/flame.png")}
              />
              <Text style={styles.buttonText}>Gas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert("Go to security screen!");
              }}
            >
              <Image
                style={styles.security_img}
                source={require("./assets/security.png")}
              />
              <Text style={styles.buttonText}>Security</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert("Go to statistic screen!");
              }}
            >
              <Image
                style={styles.statistic_img}
                source={require("./assets/statistic.png")}
              />
              <Text style={styles.buttonText}>Statistic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert("Go to notification screen!");
              }}
            >
              <Image
                style={styles.notification_img}
                source={require("./assets/notification.png")}
              />
              <Text style={styles.buttonText}>Notification</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "purple",
    width: "100%",
    height: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "88%",
    height: "94%",
    //backgroundColor: "red",
    justifyContent: "space-between",
  },
  buttonsWrapper: {
    width: "100%",
    height: "92%",
    //backgroundColor: "green",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    width: "84%",
    height: "100%",
    // backgroundColor: "purple",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#575252",
    width: "45%",
    height: "25%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#FDA43C",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 22,
    color: "#FDA43C",
    fontWeight: "bold",
  },
  temp_img: {
    width: 36,
    height: 50,
  },
  light_img: {
    width: 36,
    height: 50,
  },
  flame_img: {
    width: 36,
    height: 50,
  },
  security_img: {
    width: 36,
    height: 50,
  },
  statistic_img: {
    width: 50,
    height: 48,
  },
  notification_img: {
    width: 45,
    height: 46,
  },
});
