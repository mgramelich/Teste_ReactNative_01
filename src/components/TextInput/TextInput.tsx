import React from 'react';
import { View, TextInput } from 'react-native';

import { style } from './TextInputStyle';
import { GlobalStyle } from '@/AppStyle';

export function TxtInput() {
  return (
    <View style={GlobalStyle.container}>
      {/* <TextInput
        placeholder="Senha"
        style={[style.input]}
      /> */}

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      
    </View>
  );
}