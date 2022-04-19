import React, { useState, Component, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Picker,
  TouchableOpacity,
  Alert,
  Icon,
  View,
  Button,
} from "react-native";
import axios from "axios";
import Swal from "sweetalert2";
import CalendarPicker from "react-native-calendar-picker";
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
import AppContext from "../AppContext.js";

export default function Form({ navigation }) {
  const myContext = useContext(AppContext);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate
    ? selectedStartDate.format("DD/MM/YYYY").toString()
    : "";

  const [email, setemail] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [phoneNumber, setphoneNumber] = useState(null);
  const [Gender, setGender] = useState("Male");
  const [birthDay, setbirthDay] = useState(null);

  const [modal, setmodal] = useState(false);

  const onPress = () => {
    axios
      .post(
        "https://smart-home-server-cafecotdua.herokuapp.com/userinfo/update",
        {
          firstname: firstName,
          lastname: lastName,
          birthday: birthDay,
          gender: Gender,
          phone: phoneNumber,
          email: email,
        }
      )
      .then((response) => console.log(response.data));
    Swal.fire("Update Successfully!", "", "success");
    navigation.navigate("Home");
  };

  const firstnameChangeHandler = (event) => {
    setfirstName(event.target.value);
  };

  const lastnameChangeHandler = (event) => {
    setlastName(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setphoneNumber(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };

  const birthdayChangeHandler = (event) => {
    setbirthDay(event.target.value);
  };

  const [data, setdata] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://smart-home-server-cafecotdua.herokuapp.com/userinfo")
      .then((res) => {
        for(let i = 0; i < res.data.length; i++) {
          if(res.data[i].email == myContext.email)
          {
            console.log(res.data[i].firstname);
            setdata(res.data[i]);
            setemail(res.data[i].email);
            setfirstName(res.data[i].firstname);
            setlastName(res.data[i].lastname);
            setbirthDay(res.data[i].birthday);
            setGender(res.data[i].gender);
            setphoneNumber(res.data[i].phone);
            setLoading(false);
          }
        }
        
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={modal}
        onTouchOutside={() => {
          setmodal(false);
        }}
      >
        <ModalContent>
          <CalendarPicker onDateChange={setbirthDay} />
        </ModalContent>
      </Modal>
      <Text style={styles.text_title}>First name</Text>
      <TextInput
        style={styles.text_content}
        placeholder="What's your last name?"
        value={firstName}
        onChange={firstnameChangeHandler}
      ></TextInput>

      <Text style={styles.text_title}>Last name</Text>
      <TextInput
        style={styles.text_content}
        placeholder="What's your last name?"
        value={lastName}
        onChange={lastnameChangeHandler}
      ></TextInput>

      <Text style={styles.text_title}>Phone Number</Text>
      <View style={styles.sectionStyle}>
        <Image
          style={styles.imageStyle}
          source={require("./assets/phone.png")}
        />
        <TextInput
          style={styles.text_phone}
          placeholder="Phone number"
          value={phoneNumber}
          onChange={phoneChangeHandler}
          keyboardType="number-pad"
        ></TextInput>
      </View>

      <Text style={styles.text_title}>Gender</Text>
      <Picker
        style={styles.text_gender}
        selectedValue={Gender}
        onChange={genderChangeHandler}
        mode="dialog"
        itemStyle={{ height: 44, width: 44 }}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

      <Text style={styles.text_title}>Birthday</Text>
      <View style={styles.sectionStyle}>
        <TextInput
          style={styles.text_birthday}
          placeholder="Birthday"
          value={Moment(birthDay).format("DD/MM/YYYY")}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            setmodal(true);
          }}
        >
          <Image
            style={styles.imageStyle2}
            source={require("./assets/calendar.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.save} source={require("./assets/Save.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  imageStyle: {
    marginLeft: "3%",
    height: 50,
    width: 50,
    resizeMode: "stretch",
    alignItems: "center",
  },
  imageStyle2: {
    marginLeft: "-50%",
    height: 50,
    width: 50,
    resizeMode: "stretch",
    alignItems: "center",
  },
  img_phone: {
    marginLeft: "-130px",
    marginRight: "5px",
    width: 33,
    height: 33,
  },
  img_line: {
    height: 40,
    width: 3,
    marginBottom: "-5px",
  },
  img_down: {
    height: 38,
    width: 38,
  },
  save: {
    marginTop: "10px",
    marginLeft: "290px",
    height: "47px",
    width: "75px",
  },
  text_title: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Roboto",
    marginLeft: "8%",
    marginBottom: "5px",
  },
  text_content: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#C8C8C8",
    textAlign: "auto",
    marginLeft: "8%",
    paddingLeft: "30%",
    // justifyContent: "center",
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FDA43C",
    marginRight: "8%",
    marginBottom: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  text_gender: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#C8C8C8",
    // textAlign: "center",
    marginLeft: "8%",
    paddingLeft: "30%",
    justifyContent: "center",
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FDA43C",
    marginRight: "8%",
    marginBottom: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  text_phone: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#C8C8C8",
    // textAlign: "center",
    paddingLeft: "18%",
    justifyContent: "center",
    flex: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    paddingTop: "13px",
    paddingBottom: "13px",
  },
  text_birthday: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#C8C8C8",
    paddingLeft: "43%",
    justifyContent: "center",
    flex: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    paddingTop: "13px",
    paddingBottom: "13px",
  },
  container: {
    marginTop: "40px",
    width: "100%",
    height: "8%",
  },
});
