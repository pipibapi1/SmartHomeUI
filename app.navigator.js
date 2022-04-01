import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/Index.js";
import ClimateScreen from "./screens/ClimateScreen/Index.js";
import SafeScreen from "./screens/SecurityScreen/SafeScreen/Index.js";
import AlarmScreen from "./screens/SecurityScreen/AlarmScreen/Index.js";
import SettingScreen from "./screens/SecurityScreen/SettingScreen/Index.js";
import NotificationScreen from "./screens/NotificationScreen/Index.js";
const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Screen name="Home" component={HomeScreen}></Screen>
        <Screen name="Climate" component={ClimateScreen}></Screen>
        <Screen name="Notification" component={NotificationScreen}></Screen>
        <Screen name="Safe" component={SafeScreen}></Screen>
        <Screen name="Alarm" component={AlarmScreen}></Screen>
        <Screen name="Setting" component={SettingScreen}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
