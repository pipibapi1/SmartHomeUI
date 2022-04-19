import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import Swal from "sweetalert2";

export default function Form({ navigation }) {
  const [email, setEmail] = useState("");

  const onPress = () => {
    axios
      .post(
        "https://smart-home-server-cafecotdua.herokuapp.com/account/users",
        {
          email: email,
        }
      )
      .then((response) => {
        if (response.data == "Not exists") {
          Swal.fire("Email address does not exist!", "", "error");
          navigation.navigate("ForgotPassword");
        } else {
          navigation.navigate("NewPasswordScreen", {
            email: email,
          });
        }
      });
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text_title}>Email</Text>
      <View style={styles.sectionStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/email.png")}
        />
        <TextInput
          style={styles.text}
          placeholder="Ex: abc@example.com"
          value={email}
          onChange={emailInputHandler}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image style={styles.img} source={require("../assets/submit.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // height: 40,
    borderRadius: 5,
    backgroundColor: "transparent",
    // fontSize: 16,
    // color: "#C8C8C8",
    // textAlign: "center",
    marginLeft: "8%",
    // flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FDA43C",
    marginRight: "8%",
    marginBottom: "22px",
  },
  imageStyle: {
    marginLeft: "3%",
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  img: {
    marginBottom: "150px",
    marginTop: "5%",
    width: "75%",
    height: 52,
    marginLeft: "50px",
    borderRadius: 10,
  },
  text_title: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto",
    marginLeft: "8%",
    marginBottom: "5px",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FFFFFF",
    // justifyContent: "center",
    flex: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    paddingTop: "13px",
    paddingBottom: "13px",
    borderColor: "transparent",
    marginLeft: "3%",
  },
  container: {
    marginTop: "190px",
    width: "100%",
    height: "61%",
  },
});
