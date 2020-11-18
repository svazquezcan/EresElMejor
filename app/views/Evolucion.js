import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Menu } from '../widgets/Menu.js';

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    flexDirection:'column',
    backgroundColor: '#ffffff'
  },
  lugar:{
    flex:1,
    backgroundColor: '#0984e3',
    color: '#ffffff',
    fontSize:20,
    textAlign:'center',
    justifyContent:'space-around',
    borderColor:'#ffffff',
    flexDirection:'column',
    borderWidth:10,
    paddingVertical:200,
  }
});

export class Evolucion extends React.Component {
  render(){
    return(
      <View style={styles.contenedor}>
        <Text style={styles.lugar}>DETALLE</Text>
      </View>
    )
  }

}


