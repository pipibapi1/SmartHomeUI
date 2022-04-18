import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Picker,
  View,
} from "react-native";
import axios from "axios";
import Moment from "moment";

export default function Choice({ navigation }) {
  const [data, setdata] = useState([]);
  const [distinctMonth, setdistinctMonth] = useState([]);
  const [month, setmonth] = useState(Moment(new Date()).format("MM/YYYY"));
  const [filteredData, setfilteredData] = useState([]);
  const [num, setnum] = useState(0);
  Moment.locale("en");

  useEffect(() => {
    axios
      .get("https://smart-home-server-cafecotdua.herokuapp.com/gas")
      .then((res) => {
        var temp = 0;
        var distinctTime = [];
        var filteredTime = [];
        for (let i = 0; i < res.data[0].data.length; i++) {
          if (res.data[0].data[i].value == 1 && Moment(res.data[0].data[i].time).format("MM/YYYY") == month) {
            temp += 1;
            filteredTime.push(res.data[0].data[i].time);
          }
          if (
            !distinctTime.includes(
              Moment(res.data[0].data[i].time).format("MM/YYYY")
            )
          )
            distinctTime.push(
              Moment(res.data[0].data[i].time).format("MM/YYYY")
            );
        }
        distinctTime = distinctTime.sort();
        setdistinctMonth(distinctTime);
        setfilteredData(filteredTime);
        setnum(temp);
        setdata(res.data[0].data);
      });
  }, [month]);

  const monthChangeHandler = (event) => {
    setmonth(event.target.value);
  };

  return (
    <>
      <SafeAreaView style={styles.container1}>
        <SafeAreaView style={styles.button1}>
          <View
            style={{ flexDirection: "column", width: "60%", marginTop: "5%" }}
          >
            <Text style={styles.text}>Tháng: {month} </Text>
            <Text style={styles.text}>Số lần báo động: {num}</Text>
          </View>
          <View style={{ width: "40%", marginTop: "8%", paddingRight: "5%" }}>
            <Picker
              // style={styles.text_gender}
              // selectedValue={Gender}
              onChange={monthChangeHandler}
              mode="dialog"
              itemStyle={{ height: 44, width: 44 }}
            >
              {distinctMonth
              .map((filteredData) => (
                <Picker.Item label={filteredData} value={filteredData} />
              ))}
            </Picker>
          </View>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.button}>
          <Text style={styles.text1}>Nhật ký</Text>
          <hr style={{ width: "100%" }}></hr>
          <ScrollView>
            {filteredData
              .map((data) => (
                <Text style={styles.text}>
                  {Moment(data).format("MMMM Do YYYY, h:mm:ss a")}{" "}
                  : <Text style={styles.text2}>Phát hiện rò rỉ khí gas</Text>
                </Text>
              ))}
            <SafeAreaView style={{ marginTop: "5%" }}></SafeAreaView>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingTop: "5%",
    paddingBottom: "5%",
    width: "100%",
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    marginTop: "70px",
    backgroundColor: "#575252",
    width: "80%",
    height: "100%",
    borderRadius: 15,
    // alignItems: "center",
    // justifyContent: "center",
    paddingLeft: "5%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
  },
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
