import React, { useState } from 'react';
import { GlobalStyle } from '@/AppStyle';
import { BotoesOnOffStyle } from './BotoesOnOffStyle';
import { Pressable, TouchableOpacity, Image, View, Text } from 'react-native';
import switchON from '@/assets/pictures/switchON.png';
import switchOFF from '@/assets/pictures/switchOFF.png';

export default function Home() {
  const [isActive, setActive] = useState(false);

  const handleChangeTheme = () => {
    setActive(!isActive);
  };

  return (
    <View style={[GlobalStyle.rounded, isActive ? GlobalStyle.containerON : GlobalStyle.containerOFF]}>

      <Text style={[GlobalStyle.bgBranco, GlobalStyle.textoPreto, GlobalStyle.padding10]}>BtnsComponent</Text>

      <View style={BotoesOnOffStyle.btnsContainer}>
        <Pressable onPress={handleChangeTheme}>
          <Image source={isActive ? switchON : switchOFF} style={{ width: 100, height: 100 }} />
        </Pressable>

        <TouchableOpacity onPress={handleChangeTheme}>
          <Image source={isActive ? switchON : switchOFF} style={{ width: 100, height: 100 }} />
        </TouchableOpacity>
      </View>
    </View>

  );
}
