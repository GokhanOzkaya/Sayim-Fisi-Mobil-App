import React from "react";
import { HomePage, LoginPage, ProfilePage, SingUpPage } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./authStack";
import UserStack from "./userStack";
import { createAppContainer } from "@react-navigation/native";

const Stack = createStackNavigator(); // createStackNavigator fonksiyonunu çağırın

const RootNavigation = () => {
  // Fonksiyonu büyük harfle adlandırın
  const isAuth = false;
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
