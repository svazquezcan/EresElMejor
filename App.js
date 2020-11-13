import React from 'react';
import { Inicio } from './app/views/Inicio.js';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Evolucion } from './app/views/Evolucion.js';
import { NuevoReto } from './app/views/NuevoReto.js';
import { Contactar } from './app/views/Contactar.js';
import { Perfil } from './app/views/Perfil.js';

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
   }}
   >


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
      }}
      />

    <Stack.Screen
       name='NuevoReto'
       component={NuevoReto}
       options={{
         title: 'NuevoReto',
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
     </Stack.Navigator>
   </NavigationContainer>
 );
}
