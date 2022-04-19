import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import axios from "axios";
import Swal from "sweetalert2";

export default function Form(props) {
  // console.log(props.name);

  const [otp, setOtp] = useState("");

  const onPress = () => {
    if (otp == "0000") {
      axios
        .post(
          "http://localhost:5000/account/register",
          {
            name: props.name,
            password: props.password,
            email: props.email,
          }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data == "Successfull") {
            Swal.fire("Register Successfully!", "", "success");
            props.navigation.navigate("Login");
          }
        });
    } else Swal.fire("Something went wrong!", "", "error");
  };

  const optInputHandler = (event) => {
    setOtp(event.target.value);
  };

  //   axios.post('http://localhost:5000/account/login').then(resp => {

  //   if (resp.data) console.log('hihi');
  // });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text_title}>Verification Code</Text>
      <View style={styles.sectionStyle}>
        <TextInput
          style={styles.text}
          placeholder="EX: 123456"
          value={otp}
          onChange={optInputHandler}
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          style={styles.img}
          source={require("../assets/signupbutton.png")}
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
    textAlign: "center",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1,
    paddingTop: "13px",
    paddingBottom: "13px",
    borderColor: "transparent",
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
    marginTop: "190px",
    width: "100%",
    height: "61%",
  },
});
