import React from 'react';
import { GlobalStyle } from '@/AppStyle';
import { Text, TextInput, View } from 'react-native';

export default function Home() {
  return (
    <>
      <View>
        <Text style={[GlobalStyle.bgAmarelo]}>Home works!</Text>
      </View>

      <View>
        <TextInput />
      </View>

    </>
  );
}
