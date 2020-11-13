import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Menu } from '../widgets/Menu.js';

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    flexDirection:'column',
  },
  titulo:{
    flex:1,
    backgroundColor: '#0984e3',
    color: '#ffffff',
    fontSize:20,
    textAlign:'center',
    borderColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    borderColor:'#000000',
    borderWidth:10,
    flexGrow:100,
    paddingVertical:75
  },
  lugar:{
    flex:3,
    backgroundColor: '#0984e3',
    color: '#ffffff',
    fontSize:20,
    textAlign:'center',
    justifyContent:'space-around',
    borderColor:'#000000',
    flexDirection:'column',
    borderWidth:10,
    paddingVertical:200,
  }
});

export class NuevoReto extends React.Component {
  render(){
    return(
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>NUEVO RETO</Text>
        <Text style={styles.lugar}>DETALLE</Text>
      </View>
    )
  }

}