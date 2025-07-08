import React, { useState } from 'react';
import { GlobalStyle } from '../../AppStyle';
import { BotoesOnOffStyle } from './BotoesOnOffStyle';
import { Pressable, TouchableOpacity, Image, View, Text } from 'react-native';
import switchON from '../../assets/pictures/switchON.png';
import switchOFF from '../../assets/pictures/switchOFF.png';

export default function Home() {
  const [isActive, setActive]: [boolean, (value: boolean) => void] = useState(false);
  const handleChangeTheme = () => {
    setActive(!isActive);
  }

  return (
    <View style={[GlobalStyle.container, GlobalStyle.rounded, isActive ? GlobalStyle.containerON : GlobalStyle.containerOFF]}>
      <Text style={BotoesOnOffStyle.btnsContainer}>BtnsComponent</Text>
      <Pressable onPress={handleChangeTheme}>
        <Image source={isActive ? switchON : switchOFF} style={{ width: 100, height: 100 }} />
      </Pressable>

      <TouchableOpacity onPress={handleChangeTheme}>
        <Image source={isActive ? switchON : switchOFF} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>

  );
}

