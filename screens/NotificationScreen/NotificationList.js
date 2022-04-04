import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View,
  Dimensions,
} from "react-native";

export default function NotificationList() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        {/*begin card */}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.head}>
              <SafeAreaView style={styles.warning_tag}>
                <Text style={styles.head_text}>Warning</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.date}>
                <Text style={styles.head_text}>9:44 AM 10/03/2022</Text>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
              <Text style={styles.body_text}>
                There may be Gas Leak in your home !
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        {/*begin card */}
        {/*begin card */}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.head}>
              <SafeAreaView style={styles.alert_tag}>
                <Text style={styles.head_text}>Alert</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.date}>
                <Text style={styles.head_text}>10:00 PM 09/03/2022</Text>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
              <Text style={styles.body_text}>
                Somebody has just opened Door 1 !!!
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        {/*begin card */}
        {/*begin card */}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.head}>
              <SafeAreaView style={styles.warning_tag}>
                <Text style={styles.head_text}>Warning</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.date}>
                <Text style={styles.head_text}>9:44 AM 10/03/2022</Text>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
              <Text style={styles.body_text}>
                There may be Gas Leak in your home !
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        {/*begin card */}
        {/*begin card */}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.head}>
              <SafeAreaView style={styles.warning_tag}>
                <Text style={styles.head_text}>Warning</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.date}>
                <Text style={styles.head_text}>9:44 AM 10/03/2022</Text>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
              <Text style={styles.body_text}>
                There may be Gas Leak in your home !
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        {/*begin card */}
        {/*begin card */}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.head}>
              <SafeAreaView style={styles.warning_tag}>
                <Text style={styles.head_text}>Warning</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.date}>
                <Text style={styles.head_text}>9:44 AM 10/03/2022</Text>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
              <Text style={styles.body_text}>
                There may be Gas Leak in your home !
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        {/*begin card */}
        {/*begin card */}
        <SafeAreaView style={styles.card}>
          <SafeAreaView style={styles.inner}>
            <SafeAreaView style={styles.head}>
              <SafeAreaView style={styles.warning_tag}>
                <Text style={styles.head_text}>Warning</Text>
              </SafeAreaView>
              <SafeAreaView style={styles.date}>
                <Text style={styles.head_text}>9:44 AM 10/03/2022</Text>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
              <Text style={styles.body_text}>
                There may be Gas Leak in your home !
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
        {/*begin card */}
      </ScrollView>
    </SafeAreaView>
  );
}
let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    width: "100%",
    height: "66%",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    //backgroundColor: "blue",
    width: "88%",
    height: "66vh",
    //flexDirection: "column",
    //justifyContent: "space-between",
  },
  card: {
    //backgroundColor: "red",
    height: "16.5vh",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    backgroundColor: "#575252",
    width: "90%",
    height: "88%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  head: {
    //backgroundColor: "red",
    width: "95%",
    height: "33%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  head_text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#ffffff",
  },
  warning_tag: {
    backgroundColor: "#FF7A00",
    width: "35%",
    height: "85%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  alert_tag: {
    backgroundColor: "#FF0000",
    width: "35%",
    height: "85%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    //backgroundColor: "yellow",
    width: "60%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    //backgroundColor: "purple",
    width: "90%",
    height: "67%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body_text: {
    backgroundColor: "transparent",
    fontSize: 14,
    color: "#ffffff",
  },
});
