import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  contenedor:{
    flex:1 ,
    backgroundColor: '#ffffff',
    alignContent:'center',
    flexDirection: 'column',

  },
  
  contenido:{
    flex:3,
    justifyContent:'center',
    alignContent:'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor:'#000000',
    backgroundColor:'#ffffff',
  },

  menuInferior:{
    flex:0.15,
    backgroundColor:'#0984e3',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'column',
    borderColor:'#ffffff',
    borderWidth:2,
    borderRadius:20,

  },
  textoBoton:{
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:18
  },

  detalleReto:{
    borderColor:'#ffffff',
    color: '#000000'
  }

});

export class DetalleReto extends React.Component {
  render(){
      return(
      <View style={styles.contenedor}>
        <View style={styles.contenedor}>
          <Text style={styles.detalleReto}>{this.props.route.params.titulo}</Text>
          <Text style={styles.detalleReto}>{this.props.route.params.img}</Text>
        </View>
        <TouchableOpacity style={styles.menuInferior} onPress={() => this.props.navigation.navigate('NuevoReto')}>
          <Text style={styles.textoBoton}>NUEVO RETO</Text>
        </TouchableOpacity>  
      </View>
    )
  }
}