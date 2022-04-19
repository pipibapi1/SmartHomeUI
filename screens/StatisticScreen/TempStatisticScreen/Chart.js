import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Picker,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit";
import axios from "axios";
import Moment from "moment";
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
  BottomModal,
  ModalPortal,
} from "react-native-modals";
import CalendarPicker from "react-native-calendar-picker";
Moment.locale("en");

export default function Chart() {
  const [modal, setmodal] = useState(false);
  const [date, setdate] = useState(new Date());

  const [temperatureTime, settemperatureTime] = useState([]);
  const [temperatureValue, settemperatureValue] = useState([]);
  const [humidityTime, sethumidityTime] = useState([]);
  const [humidityValue, sethumidityValue] = useState([]);

  useEffect(() => {
    axios
      .get("https://smart-home-server-cafecotdua.herokuapp.com/temp")
      .then((res) => {
        var time = [];
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          if (
            Moment(date).format("DD/MM/YYYY") ==
            Moment(data[i].createAt).format("DD/MM/YYYY")
          ) {
            console.log(data[i].data);
            for(let j = 0; j < data[i].data.length; j++) {
              time.push({
                time: Moment(data[i].data[j].time).format("hh:mm"),
                value: data[i].data[j].val,
              });
            }
            break;
          }
        }
        console.log(time);

        const size = time.length;
        var filteredTime = [];
        if (size <= 6)
          filteredTime = time.sort(function (a, b) {
            return a.time < b.time ? -1 : a.time == b.time ? 0 : 1;
          });
        else
          filteredTime = time
            .sort(function (a, b) {
              return a.time < b.time ? -1 : a.time == b.time ? 0 : 1;
            })
            .slice(size - 6, size);
        console.log(filteredTime);

        var realTime = [];
        var realValue = [];
        for (let i = 0; i < filteredTime.length; i++) {
          realTime.push(filteredTime[i].time);
          realValue.push(filteredTime[i].value);
        }

        settemperatureTime(realTime);
        settemperatureValue(realValue);
      });
    axios
      .get("https://smart-home-server-cafecotdua.herokuapp.com/humidity")
      .then((res) => {
        var time = [];
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          if (
            Moment(date).format("DD/MM/YYYY") ==
            Moment(data[i].createAt).format("DD/MM/YYYY")
          ) {
            console.log(data[i].data);
            for(let j = 0; j < data[i].data.length; j++) {
              time.push({
                time: Moment(data[i].data[j].time).format("hh:mm"),
                value: data[i].data[j].val,
              });
            }
            break;
          }
        }
        console.log(time);

        const size = time.length;
        var filteredTime = [];
        if (size <= 6)
          filteredTime = time.sort(function (a, b) {
            return a.time < b.time ? -1 : a.time == b.time ? 0 : 1;
          });
        else
          filteredTime = time
            .sort(function (a, b) {
              return a.time < b.time ? -1 : a.time == b.time ? 0 : 1;
            })
            .slice(size - 6, size);
        console.log(filteredTime);

        var realTime = [];
        var realValue = [];
        for (let i = 0; i < filteredTime.length; i++) {
          realTime.push(filteredTime[i].time);
          realValue.push(filteredTime[i].value);
        }

        sethumidityTime(realTime);
        sethumidityValue(realValue);
      });
  }, [date]);

  return (
    <View style={{ height: "400px", marginTop: "5%" }}>
      <Modal
        visible={modal}
        onTouchOutside={() => {
          setmodal(false);
        }}
      >
        <ModalContent>
          <CalendarPicker onDateChange={setdate} />
        </ModalContent>
      </Modal>
      <View style={styles.sectionStyle}>
        <Text style={styles.text_birthday} placeholder="DD/MM/YYYY">
          {Moment(date).format("DD/MM/YYYY")}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setmodal(true);
          }}
        >
          <Image
            style={styles.imageStyle2}
            source={require("../assets/calendar.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.text_name}>Temperature chart</Text>
            <LineChart
              data={{
                labels: temperatureTime,
                datasets: [
                  {
                    data: temperatureValue,
                  },
                ],
              }}
              width={350} // from react-native
              height={220}
              // yAxisLabel="$"
              yAxisSuffix="°C"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#575252",
                backgroundGradientFrom: "#575252",
                backgroundGradientTo: "#575252",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#575252",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </SafeAreaView>

        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.text_name}>Humidity chart</Text>
            <LineChart
              data={{
                labels: humidityTime,
                datasets: [
                  {
                    data: humidityValue,
                  },
                ],
              }}
              width={350} // from react-native
              height={220}
              yAxisSuffix="%"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#575252",
                backgroundGradientFrom: "#575252",
                backgroundGradientTo: "#575252",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#575252",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text_birthday: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#C8C8C8",
    paddingLeft: "30%",
    justifyContent: "center",
    flex: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "transparent",
    marginLeft: "8%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FDA43C",
    marginRight: "8%",
    marginBottom: "10px",
  },
  imageStyle2: {
    height: 50,
    width: 50,
    resizeMode: "stretch",
    alignItems: "center",
  },
  text_name: {
    marginTop: "8px",
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#FDA43C",
  },
  img: {
    width: 383,
    height: 254,
  },
  container: {
    marginTop: "10%",
    marginLeft: "50px",
    marginRight: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "88%",
    height: "94%",
    //backgroundColor: "red",
    justifyContent: "space-between",
  },
  text: {
    marginTop: "-10%",
    marginLeft: "2%",
    backgroundColor: "transparent",
    fontSize: 21,
    color: "#FDA43C",
    fontWeight: "bold",
  },
});
