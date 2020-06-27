import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginpage  from './screens/Loginpage';
import QuesNavigator from './navigator/QuesNavigator'

export default function App() {
  return (
    //<Loginpage />
    <QuesNavigator />
    
  
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
