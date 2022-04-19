import * as React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Restart } from "fiction-expo-restart";
import Swal from "sweetalert2";

export default function Footer({ navigation }) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.info}
        onPress={() => {
          //navigation.navigate("Login");
          Swal.fire({
            title: "Are you sure you want to log out?",
            text: "You will be disconnected from your home!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log out",
          }).then((result) => {
            if (result.isConfirmed) {
              Restart();
            }
          });
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
