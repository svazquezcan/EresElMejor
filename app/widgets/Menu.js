import React from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  contenedor:{
    
  },
  fila:{

  },
  boton:{

  },
  textoBoton:{
   
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
          <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
            <Text style={styles.textoBoton}>NUEVO RETO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fila}>
          <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
            <Text style={styles.textoBoton}>PERFIL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
            <Text style={styles.textoBoton}>CONTACTAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      )
  }

}
