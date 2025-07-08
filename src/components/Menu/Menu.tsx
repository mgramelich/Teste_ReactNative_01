import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyle } from '@/AppStyle';
import { MenuStyle } from './MenuStyles';

export function Menu() {
  return (
    <View style={MenuStyle.menuContainer}>
      <Text style={GlobalStyle.textoBranco}>Menu Component</Text>
    </View>
  );
}