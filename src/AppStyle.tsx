import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEDDD',
  },

  bgBranco: {
    backgroundColor: '#fff',
  },

  bgAmarelo: {
    backgroundColor: '#FFFF00',
    padding: 10,
    margin: 0,
    fontSize: 20,
    color: '#000000',
    borderRadius: 25,
  },

  centroHorizontal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBranco: {
    color: '#fff',
  },

  textoPreto: {
    color: '#000',
  },

  containerON: {
    backgroundColor: '#000',
  },

  containerOFF: {
    backgroundColor: '#FFF',
  },

  rounded: {
    borderRadius: 25,
    marginBottom: 30,
  },

  padding10: {
    padding: 10
  },

  marginBottom30: {
    marginBottom: 30
  },

  negrito: {
    fontWeight: 'bold',
  }
});
