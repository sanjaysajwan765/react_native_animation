import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Opacity from './src/Opacity';
import Translate from './src/Translate';
import Scale from './src/Scale';
import Dimesion from './src/Dimesion';
import { StyleSheet, Text, View } from 'react-native';
import Dimension from './src/Dimesion';
import Absolute from './src/Absolute';
import Color from './src/Color';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Opacity/> */}
      {/* <Translate /> */}
      {/* <Scale/> */}
      {/* <Dimension/> */}
      <Absolute/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
