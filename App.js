import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './src/components/Menu'

export default function App() {
  return (
    <Menu />
   //aca va el drawer o menu, donde vamos a llamar a todas las pantallas
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
