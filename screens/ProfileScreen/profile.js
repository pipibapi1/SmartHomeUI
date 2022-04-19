import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import AppContext from "../AppContext.js";

export default function Profile() {
  const myContext = useContext(AppContext);
  const [email, setemail] = useState(null);
  const [firstName, setfirstName] = useState("No");
  const [lastName, setlastName] = useState("Name");

  useEffect(() => {
    axios
      .get("https://smart-home-server-cafecotdua.herokuapp.com/userinfo")
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].email == myContext.email) {
            setemail(res.data[i].email);
            if(res.data[i].firstname) setfirstName(res.data[i].firstname);
            if(res.data[i].lastname) setlastName(res.data[i].lastname);
            break;
          }
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require("./assets/user.png")} />
      <Text style={styles.text_name}>{firstName + " " + lastName}</Text>
      <Text style={styles.text_email}>{email}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 92,
    height: 92,
    borderRadius: 92 / 2,
  },
  text_name: {
    marginTop: "8px",
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#FDA43C",
  },
  text_email: {
    marginTop: "8px",
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FDA43C",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "20%",
  },
  info: {
    height: "80%",
    marginLeft: "38%",
    marginTop: "8%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
  },
});
