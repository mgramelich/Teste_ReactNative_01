import React from 'react';
import { View, Text, Image } from 'react-native';

import { LogoStyle } from './LogoStyle';
import logo from '@/assets/pictures/logo1.png';
import { GlobalStyle } from '@/AppStyle';

export function Logo() {
  return (
    <View style={[GlobalStyle.centroHorizontal, GlobalStyle.marginBottom30]}>
      <Image source={logo} style={LogoStyle.logoContainer} />
      <Text style={[GlobalStyle.negrito, GlobalStyle.textoPreto]}>Password Generator</Text>
    </View>
  );
}