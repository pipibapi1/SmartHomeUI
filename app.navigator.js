import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Quan
import HomeScreen from "./screens/HomeScreen/index.js";
import ClimateScreen from "./screens/ClimateScreen/index.js";
import SafeScreen from "./screens/SecurityScreen/SafeScreen/Index.js";
import AlarmScreen from "./screens/SecurityScreen/AlarmScreen/Index.js";
import SettingScreen from "./screens/SecurityScreen/SettingScreen/Index.js";
import NotificationScreen from "./screens/NotificationScreen/Index.js";
//Hoa
import ProfileScreen from "./screens/ProfileScreen/index.js";
import GasScreen from "./screens/GasScreen/index.js";
import Statistic from "./screens/StatisticScreen/StatisticScreen/index.js";
import GasStatistic from "./screens/StatisticScreen/GasStatisticScreen/index.js";
import TempStatistic from "./screens/StatisticScreen/TempStatisticScreen/index.js";
import SecurityStatistic from "./screens/StatisticScreen/SecurityStatisticScreen/index.js";
//Bang
import Login from "./screens/LoginScreen/index.js";
import Register from "./screens/SignupScreen/RegisterScreen/index.js";
import ConfirmScreen from "./screens/SignupScreen/ConfirmScreen/index.js";
import ForgotPassword from "./screens/ForgotPasswordScreen/EmailSubmitScreen/Index.js";
import LightScreen from "./screens/LightScreen/Index.js";
import NewPasswordScreen from "./screens/ForgotPasswordScreen/NewPasswordScreen/Index.js";
import VerifyScreen from "./screens/ForgotPasswordScreen/VerifyScreen/Index.js"; 

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Screen name="Home" component={HomeScreen}></Screen>
        <Screen name="Climate" component={ClimateScreen}></Screen>
        <Screen name="Notification" component={NotificationScreen}></Screen>
        <Screen name="Safe" component={SafeScreen}></Screen>
        <Screen name="Alarm" component={AlarmScreen}></Screen>
        <Screen name="Setting" component={SettingScreen}></Screen>
        <Screen name="Profile" component={ProfileScreen}></Screen>
        <Screen name="Gas" component={GasScreen}></Screen>
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Register" component={Register}></Screen>
        <Screen name="ConfirmScreen" component={ConfirmScreen}></Screen>
        <Screen name="ForgotPassword" component={ForgotPassword}></Screen>
        <Screen name="NewPasswordScreen" component={NewPasswordScreen}></Screen>
        <Screen name="VerifyScreen" component={VerifyScreen}></Screen>        
        <Screen name="Statistic" component={Statistic}></Screen>
        <Screen name="GasStatistic" component={GasStatistic}></Screen>
        <Screen name="TempStatistic" component={TempStatistic}></Screen>
        <Screen name="SecurityStatistic" component={SecurityStatistic}></Screen>
        <Screen name="Light" component={LightScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
