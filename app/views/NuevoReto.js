import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

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
      alert('Por favor, rellena todos los campos')
    } 
    else if (!this.state.nombre.match(/^[a-zA-ZÀ-ÿ ]+$/) || !this.state.detalle.match(/^[a-zA-ZÀ-ÿ ]+$/) || 
    !this.state.categoria.match(/^[a-zA-ZÀ-ÿ ]+$/) || !this.state.tiempo.match(/^-?[0-9]*$/) || !this.state.periocidad.match(/^-?[0-9]*$/) ){
      alert('Por favor, revisa que los campos cumplen los requisitos indicados')
    }
    else{
      await firestore().collection('retos').add({
        nombre: this.state.nombre,
        detalle: this.state.detalle,
        categoria: this.state.categoria,
        tiempo: this.state.tiempo,
        periocidad: this.state.periocidad,
        completado: '0%'
      })
      alert('El nuevo reto se ha guardado correctamente 👍')

      this.props.navigation.navigate("Evolucion")
    }
    
  }
   

  changeNombre(nombre){
    this.setState({nombre})
    this.setState({isValidNombre: true})
    this.setState({isCorrectNombre: true})
    this.setState({errorMessageNombre:''})

    if (nombre == ''){
      this.setState({isValidNombre: false})
      this.setState({errorMessageNombre:'Error, el campo "nombre" no puede estar vacío'})
    }
    else if (!nombre.match(/^[a-zA-ZÀ-ÿ ]+$/)){
      this.setState({isCorrectNombre: false})
      this.setState({errorMessageNombre:'Error, el campo "nombre" solo puede contener letras'})
    }
  }

  changeDetalle(detalle){
    this.setState({detalle})
    this.setState({isValidDetalle: true})
    this.setState({errorMessageDetalle:''})
    if (detalle == ''){
      this.setState({isValidDetalle: false})
      this.setState({errorMessageDetalle: 'Error, el campo "detalle" no puede estar vacío'})
    }
    else if (!detalle.match(/^[a-zA-ZÀ-ÿ ]+$/)){
      this.setState({isCorrectDetalle: false})
      this.setState({errorMessageDetalle:'Error, el campo "detalle" solo puede contener letras'})
    }
  }

  changeCategoria(categoria){
    this.setState({categoria})
    this.setState({isValidCategoria: true})
    this.setState({errorMessageCategoria:''})
    if (categoria == ''){
      this.setState({isValidCategoria: false})
      this.setState({errorMessageCategoria: 'Error, el campo "categoría" no puede estar vacío'})
    }
    else if (!categoria.match(/^[a-zA-ZÀ-ÿ ]+$/)){
      this.setState({isCorrectCategoria: false})
      this.setState({errorMessageCategoria:'Error, el campo "categoría" solo puede contener letras'})
    }
  }

  changeTiempo(tiempo){
    this.setState({tiempo})
    this.setState({isValidTiempo: true})
    this.setState({errorMessageTiempo:''})
    if (tiempo == ''){
      this.setState({isValidTiempo: false})
      this.setState({errorMessageTiempo: 'Error, el campo "tiempo" no puede estar vacío'})
    }
    else if (!tiempo.match(/^-?[0-9]*$/)){
      this.setState({isCorrectTiempo: false})
      this.setState({errorMessageTiempo:'Error, el campo "tiempo" solo puede contener números'})
    }
  }

  changePeriocidad(periocidad){
    this.setState({periocidad})
    this.setState({isValidPeriocidad: true})
    this.setState({errorMessagePeriocidad:''})
    if (periocidad == ''){
      this.setState({isValidPeriocidad: false})
      this.setState({errorMessagePeriocidad: 'Error, el campo "periocidad" no puede estar vacío'})
    }
    else if (!periocidad.match(/^-?[0-9]*$/)){
      this.setState({isCorrectPeriocidad: false})
      this.setState({errorMessagePeriocidad:'Error, el campo "periocidad" solo puede contener números'})
    }
  }

  render(){
    const { errorMessageNombre } = this.state;
    const { errorMessageDetalle } = this.state;
    const { errorMessageCategoria } = this.state;
    const { errorMessageTiempo } = this.state;
    const { errorMessagePeriocidad } = this.state;  
    return(
      <View>
        <Text style={{marginLeft:10, marginTop:20, marginBottom:25, fontSize:25,fontWeight:"bold"}}>Nuevo Reto</Text>
        <Input 
          type='text'
          label='nombre'
          placeholder='Escribe tu nuevo reto' 
          value={this.state.nombre}
          onChangeText={(nombre) => this.changeNombre(nombre)}
          errorStyle={{ color: 'red', marginBottom: 20, margin: 0 }}
          errorMessage={errorMessageNombre}
          renderErrorMessage={false}
        />

        <Input
          type='text'
          label='detalle'
          value={this.state.detalle}
          placeholder='Describe tu reto'
          onChangeText={(detalle) => this.changeDetalle(detalle)}
          errorStyle={{ color: 'red', marginBottom: 20, margin: 0 }}
          errorMessage={errorMessageDetalle}
          renderErrorMessage={false}
        />

        <Input
          type='text'
          label='categoria'
          value={this.state.categoria}
          placeholder='Cual es la categoria'
          onChangeText={(categoria) => this.changeCategoria(categoria)}
          errorStyle={{ color: 'red', marginBottom: 20, margin: 0 }}
          errorMessage={errorMessageCategoria}
          renderErrorMessage={false}
        />


        <Input
          type='number'
          label='tiempo'
          value={this.state.tiempo}
          placeholder="Tiempo en dias que dura el reto"
          onChangeText={(tiempo) => this.changeTiempo(tiempo)}
          errorStyle={{ color: 'red', marginBottom: 20, margin: 0 }}
          errorMessage={errorMessageTiempo}
          renderErrorMessage={false}
          />


        <Input
          type='number'
          label='periocidad'
          value={this.state.periocidad}
          placeholder='Cada cuanto avisa en dias'
          onChangeText={(periocidad) => this.changePeriocidad(periocidad)}
          errorStyle={{ color: 'red', marginBottom: 20, margin: 0 }}
          errorMessage={errorMessagePeriocidad}
          renderErrorMessage={false}
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