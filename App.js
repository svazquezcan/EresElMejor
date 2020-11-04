import React from 'react';
import { Inicio } from './app/views/Inicio.js';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator 
     initialRouteName="Inicio">
       <Stack.Screen
       name="Inicio"
       component={Inicio}
       options={{title: 'Inicio', 
       headerShown: false}}
      />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
