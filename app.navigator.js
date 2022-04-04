import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/Index.js";
import ClimateScreen from "./screens/ClimateScreen/Index.js";
import SafeScreen from "./screens/SecurityScreen/SafeScreen/Index.js";
import AlarmScreen from "./screens/SecurityScreen/AlarmScreen/Index.js";
import SettingScreen from "./screens/SecurityScreen/SettingScreen/Index.js";
import NotificationScreen from "./screens/NotificationScreen/Index.js";
import ProfileScreen from "./screens/ProfileScreen/index.js";
import GasScreen from "./screens/GasScreen/index.js";
import Login from "./screens/LoginScreen/index.js";
import Signup from "./screens/SignupScreen/index.js";
import ForgotPassword from "./screens/LoginScreen/ForgotPassword.js";
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
        <Screen name="Signup" component={Signup}></Screen>
        <Screen name="ForgotPassword" component={ForgotPassword}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
