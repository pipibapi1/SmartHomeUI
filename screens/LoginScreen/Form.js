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

export default function Form({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    axios
      .post("http://localhost:5000/account/login", {
        password: password,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        if(response.data) navigation.navigate("Home");
      });
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  //   axios.post('http://localhost:5000/account/login').then(resp => {

  //   if (resp.data) console.log('hihi');
  // });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text_title}>Email</Text>
      <View style={styles.sectionStyle}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/email.png")}
        />
        <TextInput
          style={styles.text}
          placeholder="Ex: abc@example.com"
          value={email}
          onChange={emailInputHandler}
        ></TextInput>
      </View>

      <Text style={styles.text_title}>Your password</Text>
      <View style={styles.sectionStyle}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/pass.png")}
        />
        <TextInput
          style={styles.text}
          placeholder="*********"
          value={password}
          onChange={passwordInputHandler}
          secureTextEntry={true}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      >
        <Text style={styles.forgotpass}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          style={styles.img}
          source={require("./assets/loginbutton.png")}
        />
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
    marginBottom: "200px",
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
  forgotpass: {
    backgroundColor: "transparent",
    fontSize: "14px",
    // fontFamily: "Roboto",
    // textAlign: 'center',
    marginLeft: "8%",
    // alignItems: "center",
    // justifyContent: "center",
    marginBottom: "27px",
    color: "#FDA43C",
  },
  container: {
    marginTop: "30px",
    width: "100%",
    height: "40%",
  },
});
