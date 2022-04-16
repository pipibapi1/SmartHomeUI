import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import axios from "axios";
import Moment from 'moment';

export default function Choice({ navigation }) {

  const [data, setdata] = useState([]);
  const [num, setnum] = useState(0);
  const [time, settime] = useState("");
  Moment.locale('en');

  useEffect(() => {
    axios.get("http://localhost:5000/door").then((res) => {
      settime(Moment(res.data[0].data[0].time).format('MMM YYYY'))
      var temp = 0;
      for (let i = 0; i < res.data[0].data.length; i++) {
        if(res.data[0].data[i].value == 1) temp += 1;
      }
      setnum(temp);
      setdata(res.data[0]);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.button}>
        {/* <SafeAreaView style={styles.button}> */}
        <Text style={styles.text}>Tháng: {time}</Text>
        <Text style={styles.text}>Số lần báo động:  {num}</Text>
        {/* </SafeAreaView> */}
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "5%",
    paddingBottom: "5%",
    width: "100%",
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "50px",
    backgroundColor: "#575252",
    width: "80%",
    height: "100%",
    borderRadius: 15,
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: "10%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "white"
  },
  button2: {
    marginTop: "50px",
    backgroundColor: "#575252",
    width: "80%",
    height: "120%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  home_image: {
    marginRight: "10px",
    width: "46px",
    height: "46px",
  },
  home_image2: {
    marginLeft: "-35px",
    marginRight: "10px",
    width: "40px",
    height: "40px",
  },
  home_image3: {
    marginRight: "10px",
    marginTop: "15px",
    marginLeft: "10px",
    width: "240px",
    height: "7px",
  },
  home_image4: {
    marginRight: "-10px",
    marginTop: "-7px",
    marginLeft: "20px",
    width: "50px",
    height: "7px",
  },
  home_image5: {
    marginRight: "30px",
    marginTop: "-7px",
    marginLeft: "200px",
    width: "75px",
    height: "47px",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 14,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
    marginTop: "5%"
  },
  text2: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
    marginRight: "220px",
  },
  text3: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
  },
});
