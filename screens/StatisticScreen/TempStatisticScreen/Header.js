import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.info}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image style={styles.img} source={require("../assets/user.png")} />
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Statistic");
          }}
        >
          <Image style={styles.img2} source={require("../assets/undo.png")} />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  img2: {
    marginTop: "10%",
    marginLeft: "5%",
    width: 38,
    height: 38,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: "#FDA43C",
  },
  container: {
    marginTop: "5%",
    width: "100%",
    height: "8%",
  },
  info: {
    width: "28%",
    height: "80%",
    marginLeft: "70%",
    marginTop: "2%",
    flexDirection: "row",
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
