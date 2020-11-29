import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


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
    flex:0.5,
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
  }

});


export class NuevoReto extends React.Component {
  render(){
    return(
      <View style={styles.contenedor}>
        <View style={styles.contenido}>
          <Text>Hola estoy en Nuevo Reto</Text>
        </View>
      </View>
    )
  }

}