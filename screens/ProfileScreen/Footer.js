import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Footer({ navigation }) {
  return (
    <SafeAreaView>
        <TouchableOpacity
        style={styles.info}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Image style={styles.img} source={require("./assets/exit.png")} />
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    marginBottom: "-800px",
    width: 55,
    height: 52,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "#FDA43C",
  },
  container: {
    width: "100%",
    height: "8%",
  },
  info: {
    marginLeft: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
});
