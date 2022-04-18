import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";
import Moment from "moment";

export default function Choice({ navigation }) {
  const [data, setdata] = useState([]);
  Moment.locale("en");

  useEffect(() => {
    axios
      .get("https://smart-home-server-cafecotdua.herokuapp.com/gas")
      .then((res) => {
        console.log(res.data[0].data.length);
        setdata(res.data[0].data);
      });
  }, []);

  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.button}>
        <Text style={styles.text1}>Nhật ký</Text>
        <hr style={{ width: "100%" }}></hr>
        <ScrollView>
          {data
            .filter((data) => data.value == 1)
            .map((filteredData) => (
              <Text style={styles.text}>
                {Moment(filteredData.time).format("MMMM Do YYYY, h:mm:ss a")} :{" "}
                <Text style={styles.text2}>Phát hiện rò rỉ khí gas</Text>
              </Text>
            ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "5%",
    paddingBottom: "5%",
    width: "100%",
    height: "30%",
    alignItems: "center",
  },
  button: {
    marginTop: "70px",
    backgroundColor: "#575252",
    width: "80%",
    height: "100%",
    borderRadius: 15,
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "white",
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
    fontSize: 12,
    color: "#FDA43C",
    fontWeight: "bold",
    flexDirection: "row",
    marginTop: "5%",
    marginLeft: "10%",
  },
  text1: {
    marginTop: "5%",
    backgroundColor: "transparent",
    fontSize: 14,
    color: "#FDA43C",
    fontWeight: "bold",
    marginLeft: "40%",
    flexDirection: "row",
  },
  text2: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "#F67E7D",
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
