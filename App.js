import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Usúario" style={styles.inputLogin}></TextInput>
      <TextInput placeholder="Senha" style={styles.inputLogin}></TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLogin: {
    height: 200,
    width: 240,
    fontSize: 30,
    borderColor: '#CCC',
    fontWeight:'bold'
  }
});
