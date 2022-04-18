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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidError, setEmailValidError] = useState('');

  console.log(emailValidError);
  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (val.target.value.length == 0) setEmailValidError('');
    else if (reg.test(val.target.value) === false) {
      setEmailValidError('Please enter valid email address!');
    } else if (reg.test(val.target.value) === true) {
      setEmailValidError('');
    }
    };

  const onPress = () => {
    if (!name || !password || !email) Swal.fire("Something went wrong!", "", "error");
    else if (password.length < 6) Swal.fire("Password must be at least 6 characters long", "", "info");
    else if (name && email && password && !emailValidError && password.length >=6){
    axios
      .post("http://localhost:5000/account/users", {
        email: email,
      })
      .then((response) => {
        if (response.data == "exists") {
          Swal.fire("Email address exists!", "", "error");
          navigation.navigate("Register");
        } else {
          navigation.navigate("ConfirmScreen", {
            email: email,
            name: name,
            password: password,
          });
        }
      });
    }
    else Swal.fire("Something went wrong!", "", "error");
  };

  // const onPress = () => {
  //   navigation.navigate("ConfirmScreen",{
  //     email: email,
  //     name: name,
  //     password: password,
  //   })
  // };

  const nameInputHandler = (event) => {
    setName(event.target.value);
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
      <Text style={styles.text_title}>Your name</Text>
      <View style={styles.sectionStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/usericon.png")}
        />
        <TextInput
          style={styles.text}
          placeholder="Ex. Saul Ramirez"
          value={name}
          onChange={nameInputHandler}
        ></TextInput>
      </View>

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
          onChange={(value) => {
            emailInputHandler(value);
            handleValidEmail(value);
          }}
        ></TextInput>
      </View>
      {emailValidError ? <Text style={styles.error_text}>{emailValidError}</Text> : <Text></Text>}

      <Text style={styles.text_title}>Your password</Text>
      <View style={styles.sectionStyle}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/pass.png")}
        />
        <TextInput
          style={styles.text}
          placeholder="*********"
          value={password}
          onChange={passwordInputHandler}
          secureTextEntry={true}
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
    marginBottom: "28px",
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
  error_text: {
    marginLeft: "8%",
    marginTop: "-25px",
    paddingBottom: "10px",
    color: "#FDA43C",
  },
  container: {
    marginTop: "190px",
    width: "100%",
    height: "61%",
  },
});
