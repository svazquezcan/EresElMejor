import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Inicio } from './app/views/Inicio.js';
import { Evolucion } from './app/views/Evolucion.js';
import { NuevoReto } from './app/views/NuevoReto.js';
import { Contactar } from './app/views/Contactar.js';
import { Perfil } from './app/views/Perfil.js';
import { DetalleReto } from './app/views/DetallleReto.js';

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
        }
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
          headerRight: () => (
            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigate('Inicio')}>
              <Text style={styles.textoBoton}>INICIO</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name='NuevoReto'
        component={NuevoReto}
        options={{
          title: 'Nuevo reto', 
          headerRight: () => (
            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigate('Inicio')}>
              <Text style={styles.textoBoton}>INICIO</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name='Contactar'
        component={Contactar}
        options={{
          title: 'Contactar', 
          headerRight: () => (
            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigate('Inicio')}>
              <Text style={styles.textoBoton}>INICIO</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{
          title: 'Perfil', 
          headerRight: () => (
            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigate('Inicio')}>
              <Text style={styles.textoBoton}>INICIO</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name='DetalleReto'
        component={DetalleReto}
        options={{
          title: 'Detalle Reto', 
          headerRight: () => (
            <TouchableOpacity style={styles.boton} onPress={() => this.props.navigate('Inicio')}>
              <Text style={styles.textoBoton}>INICIO</Text>
            </TouchableOpacity>
          ),
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
