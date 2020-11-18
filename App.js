import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Inicio } from './app/views/Inicio.js';
import { Evolucion } from './app/views/Evolucion.js';
import { NuevoReto } from './app/views/NuevoReto.js';
import { Contactar } from './app/views/Contactar.js';
import { Perfil } from './app/views/Perfil.js';
import { DetalleReto } from './app/views/DetallleReto.js';
import { useNavigation } from '@react-navigation/native';

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
  }
});

const Stack = createStackNavigator();

function MyBackButton() {
const navigation = useNavigation();

  return (
  <TouchableOpacity style={styles.boton}  onPress={() => {navigation.goBack();}}>
    <Text style={styles.textoBoton}>INICIO</Text>
  </TouchableOpacity>
  );
}

export default function App() {
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
        headerLeft: null,
        headerRight: () => (
          <MyBackButton style={styles.boton}/>
        ),
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
          title: 'Evolución', 
        }}
      />

      <Stack.Screen
        name='NuevoReto'
        component={NuevoReto}
        options={{
          title: 'Nuevo reto', 
        }}
      />

      <Stack.Screen
        name='Contactar'
        component={Contactar}
        options={{
          title: 'Contactar', 
        }}
      />

      <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{
          title: 'Perfil', 
        }}
      />

      <Stack.Screen
        name='DetalleReto'
        component={DetalleReto}
        options={{
          title: 'Detalle Reto', 
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
