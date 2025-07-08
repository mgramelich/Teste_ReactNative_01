import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import { GlobalStyle } from './AppStyle';

import Home from './screens/Home';
import { Menu } from './components/Menu/Menu';
import BotoesOnOff from './components/BotoesOnOff/BotoesOnOff';

export default function App() {
  return (
    <SafeAreaView style={[GlobalStyle.container]}>
      <StatusBar style="auto" />
      <View>
        <BotoesOnOff />
      </View>

      <View>
        <Home />
        <Menu />
      </View>

    </SafeAreaView>
  );
}
