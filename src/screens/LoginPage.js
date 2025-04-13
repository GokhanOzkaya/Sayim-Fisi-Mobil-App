import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import Loading from "../components/Loading.js";
import { useNavigation } from "@react-navigation/native";

const LoginPage = ({ navigation }) => {
  const [depo, setdepo] = useState();
  const [password, setPassword] = useState();
  const [result, setResult] = useState();
  const [selectedValue, setSelectedValue] = useState("Çengelköy");
  const [isLoading, setisLoading] = useState(false);

  console.log(isLoading);

  return (
    <View style={styles.container}>
      <Image
        style={styles.ımage}
        source={require("../../assets/Images/ıcon.png")}
      />
      <StatusBar style="auto" />
      <Text style={styles.welcome}>Welcome</Text>

      <View style={styles.pickerRoll}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Çengelköy" value="java" />
          <Picker.Item label="Avar" value="js" />
          <Picker.Item label="Bostanlı" value="python" />
          <Picker.Item label="Vahap" value="Vahap" />
        </Picker>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Şifre Giriniz"
        onChangeText={setPassword}
        secureTextEntry={true}
        keyboardType="numeric"
      ></TextInput>
      <Pressable
        onPress={() => setisLoading(true)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "grey" : "#FF7F00" },

          styles.pressButton,
        ]}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("SingUp")}
        style={({ pressed }) => [
          {
            color: pressed ? "grey" : "#FF7F00",
          },
          styles.presstext,
        ]}
      >
        <Text style={styles.presstext}>Hesabın yok mu? Hemen kaydol</Text>
      </Pressable>

      {isLoading ? (
        <Loading changeIsLoading={() => setisLoading(false)} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: "10",
    color: "blue",
    fontWeight: "bold",
    fontSize: 18,
  },
  pressButton: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  presstext: {
    marginTop: 10,
    color: "#FF7F00",
    fontSize: 16,
  },
  ımage: {
    width: "50%",
    height: 250,

    backgroundColor: "transparent",
    resizeMode: "contain",
  },
  welcome: {
    fontSize: 26,
    fontWeight: "bold",
  },
  picker: {
    textAlign: "center",
    justifyContent: "center",
  },
  pickerRoll: {
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: "80%",
    borderRadius: 10,
  },
});
