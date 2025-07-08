import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },

  bgAmarelo: {
    backgroundColor: '#FFFF00',
    padding: 10,
    margin: 0,
    fontSize: 20,
    color: '#000000',
    borderRadius: 25,
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
  }

});
