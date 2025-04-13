import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Ana Sayfaya Hoş Geldiniz! 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff5f2',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
}); 