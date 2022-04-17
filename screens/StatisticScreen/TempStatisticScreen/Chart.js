import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, View, Image, ScrollView } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import axios from "axios";
import Moment from "moment";
Moment.locale("en");

export default function Chart() {
  const [temperatureTime, settemperatureTime] = useState([]);
  const [temperatureValue, settemperatureValue] = useState([]);
  const [humidityTime, sethumidityTime] = useState([]);
  const [humidityValue, sethumidityValue] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/temp").then((res) => {
      const time = [];
      const value = [];
      const data = res.data[0].data.slice(0,6).sort(function(a,b){
        return new Date(a.time) - new Date(b.time);
      });
      for (let i = 0; i < data.length; i++) {
        time.push(Moment(data[i].time).format("Do"));
        value.push(data[i].val);
      }
      settemperatureTime(time);
      settemperatureValue(value);
    });
    axios.get("http://localhost:5000/humidity").then((res) => {
      const time = [];
      const value = [];
      const data = res.data[0].data.slice(0,6).sort(function(a,b){
        return new Date(a.time) - new Date(b.time);
      });
      for (let i = 0; i < data.length; i++) {
        time.push(Moment(data[i].time).format("Do"));
        value.push(data[i].val);
      }
      sethumidityTime(time);
      sethumidityValue(value);

    });
  }, []);






  return (
    <View style={{height: "400px", marginTop: "5%"}} >
    <ScrollView >
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
