import React from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor: '#000000',
    alignContent:'center',
    //justifyContent:'center',
  },
  
  fila:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#000000',
    borderWidth:2,
    borderRadius:20,
    backgroundColor:'#0984e3'

  },

  boton:{
    width:'50%',
    height:'50%',
    backgroundColor:'#0984e3',
    justifyContent:'center',
    alignItems:'center'
  },
  textoBoton:{
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:18
  }

});

export class Menu extends React.Component {

  viewMsg = ()=>{
    Alert.alert("Has apretado el boton");
  }

  render(){
    return(
      <View style={styles.contenedor}>
        <View style={styles.fila}>
          <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
            <Text style={styles.textoBoton}>EVOLUCIÓN</Text>
          </TouchableOpacity>
          </View >
          <View style={styles.fila}>
          <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
            <Text style={styles.textoBoton}>NUEVO RETO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
            <Text style={styles.textoBoton}>PERFIL</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.fila}>
          <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
            <Text style={styles.textoBoton}>CONTACTAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      )
  }

}
