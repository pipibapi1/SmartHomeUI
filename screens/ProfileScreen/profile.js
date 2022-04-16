import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";

export default function Profile() {
  const [email, setemail] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/userinfo").then((res) => {
      setemail(res.data[0].email);
      setfirstName(res.data[0].firstname);
      setlastName(res.data[0].lastname);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={require("./assets/profile.jpg")} />
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