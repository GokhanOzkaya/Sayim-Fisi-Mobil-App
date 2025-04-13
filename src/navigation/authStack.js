import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LoginPage, SingUpPage } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const authStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"LoginPage"} component={LoginPage} />
      <Stack.Screen name={"SingUpPage"} component={SingUpPage} />
    </Stack.Navigator>
  );
};

export default authStack;

const styles = StyleSheet.create({});
