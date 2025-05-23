import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import React from "react";

export default function Register() {
  return (
    <LinearGradient
      colors={['#fff5f2', '#fff', '#ffe8e0']}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="person-add-outline" size={100} color="#ff5722" />
        </View>

        <Text style={styles.title}>Yeni Hesap Oluştur</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email adresinizi girin"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Şifre</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Şifrenizi girin"
            placeholderTextColor="#666"
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Şifre Tekrar</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Şifrenizi tekrar girin"
            placeholderTextColor="#666"
            secureTextEntry
          />
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#ff7043" : "#ff5722" },
          ]}
        >
          <Text style={styles.buttonText}>Hesap Oluştur</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#fff5f2',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: "#ff5722",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    fontWeight: "500",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#ff5722",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
}); 