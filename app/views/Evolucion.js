import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Menu } from '../widgets/Menu.js';
import{db} from '../config/db';

let retos = [];

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

export class Evolucion extends React.Component {
  render(){

    //Prueba de conexion con bd, salen por consola los datos
    db.collection("retos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        retos.push(doc.data());
          console.info(retos);
          console.info(doc.data().detalle);
      });

    });

    return(
      <View style={styles.contenedor}>
        <View style={styles.contenido}>
        </View>
        <TouchableOpacity style={styles.menuInferior} onPress={() => this.props.navigation.navigate('NuevoReto')}>
          <Text style={styles.textoBoton}>NUEVO RETO</Text>
        </TouchableOpacity>  
      </View>
    )
  }
}