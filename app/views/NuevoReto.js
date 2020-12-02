import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { db } from '../config/db.js';



const styles = StyleSheet.create({
  contenedor:{
    flex:1 ,
    backgroundColor: '#ffffff',
    alignContent:'center',
    flexDirection: 'column'
  },
  botonGuardar:{
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft:10
  },
});



export class NuevoReto extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      detalle: '',
      categoria: '',
      tiempo: '',
      periocidad: ''
    };
  }

  addNewReto = async () =>{
    if (this.state.nombre === '' || this.state.detalle === '' || this.state.categoria === ''||
     this.state.tiempo === ''|| this.state.periocidad === ''){
      alert('Por favor rellena todos los campos')
    }else{
      await db.collection('retos').add({
        nombre: this.state.nombre,
        detalle: this.state.detalle,
        categoria: this.state.categoria,
        tiempo: this.state.tiempo,
        periocidad: this.state.periocidad,
        completado: '0%'
      })
      alert('Se ha guardado el nuevo reto')

      this.props.navigation.navigate("Evolucion");
    }
    
  }
   

  changeNombre(nombre){
    this.setState({nombre})
  }

  changeDetalle(detalle){
    this.setState({detalle})
  }

  changeCategoria(categoria){
    this.setState({categoria})
  }

  changeTiempo(tiempo){
    this.setState({tiempo})
  }

  changePeriocidad(periocidad){
    this.setState({periocidad})
  }

  render(){
    return(
      <View>
        <Text style={{marginLeft:10, marginTop:20, marginBottom:25, fontSize:25,fontWeight:"bold"}}>Nuevo Reto</Text>
        <Input 
          type='text'
          label='nombre'
          placeholder='Escribe tu nuevo reto' 
          value={this.state.nombre}
          onChangeText={(nombre) => this.changeNombre(nombre)}
        />

        <Input
          type='text'
          label='detalle'
          value={this.state.detalle}
          placeholder='Describe tu reto'
          onChangeText={(detalle) => this.changeDetalle(detalle)}
        />

        <Input
          type='text'
          label='categoria'
          value={this.state.categoria}
          placeholder='Cual es la categoria'
          onChangeText={(categoria) => this.changeCategoria(categoria)}
        />


        <Input
          type='number'
          label='tiempo'
          value={this.state.tiempo}
          placeholder="Tiempo en dias que dura el reto"
          onChangeText={(tiempo) => this.changeTiempo(tiempo)}
          />


        <Input
          type='number'
          label='periocidad'
          value={this.state.periocidad}
          placeholder='Cada cuanto avisa en dias'
          onChangeText={(periocidad) => this.changePeriocidad(periocidad)}
        />

        <Button style={styles.botonGuardar}
          onPress={() => this.addNewReto()}
          icon={{
            name: "save",
            size: 20,
            color: "white",
          }}
          title="GUARDAR"
        />
        </View>

    )
  }
}