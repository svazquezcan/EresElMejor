import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
import { Evolucion } from './app/views/Evolucion.js';
import { Contactar } from './app/views/Contactar.js';
import { Perfil } from './app/views/Perfil.js';
import { Inicio } from './app/views/Inicio.js';
import { DetalleReto } from './app/views/DetalleReto.js';
import { NuevoReto } from './app/views/NuevoReto.js';


const styles = StyleSheet.create({
  boton: {
    height: 30,
    width: 60,
    backgroundColor: '#0000ff',
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14
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
  textoBoton2:{
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:18
  }
});

function MyBackButton() {
const navigation = useNavigation();

  return (
  <TouchableOpacity style={styles.boton}  onPress={() => {navigation.navigate('Inicio')}}>
    <Text style={styles.textoBoton}>INICIO</Text>
  </TouchableOpacity>
  );

}


const Stack = createStackNavigator();

export default function App () {

  return (
  <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="Inicio"
    screenOptions={{ headerStyle: { 
      backgroundColor: '#0984e3' 
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <MyBackButton style={styles.boton}/>
    )
    }}>

    <Stack.Screen
      name="Inicio"
      component={Inicio}
      options={{title: 'Inicio', 
      headerShown: false}}
    />

    <Stack.Screen
      name='Evolucion'
      component={Evolucion}
      options={{
        title: 'Evolucion', 
        headerLeft: null,
      }}
    />

    <Stack.Screen
      name='DetalleReto'
      component={DetalleReto}
      options={{
        title: 'Detalle Reto', 
      }}
    />

    <Stack.Screen
      name='Contactar'
      component={Contactar}
      options={{
        title: 'Contactar', 
        headerLeft: null,
      }}
    />

    <Stack.Screen
      name='Perfil'
      component={Perfil}
      options={{
        title: 'Perfil', 
        headerLeft: null,
      }}
      />

    <Stack.Screen
      name='NuevoReto'
      component={NuevoReto}
      options={{
        title: 'Nuevo Reto', 
        headerLeft: null,
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
    
  );

}



  