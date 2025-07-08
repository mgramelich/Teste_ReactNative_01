import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Button, Alert } from 'react-native';
import { GlobalStyle } from './AppStyle';

import Home from './screens/Home';
import { Menu } from '@/components/Menu/Menu';
import BotoesOnOff from '@/components/BotoesOnOff/BotoesOnOff';
import { Logo } from './components/Logo/Logo';

import { gerarSenha } from '@/services/passwordService';

export default function App() {
  const handleGerarSenha = () => {
    const senha = gerarSenha();
    Alert.alert('Senha Gerada', `Sua senha é: ${senha}`);
  }

  return (
    <SafeAreaView style={GlobalStyle.container}>
      <StatusBar style="auto" />

      <Logo />
      <BotoesOnOff />

      <Home />
      <Menu />

      <Button
        title="Gerar Senha"
        onPress={() => handleGerarSenha()}
      />
    </SafeAreaView>
  );
}
