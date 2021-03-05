import React, { useReducer, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Evolucion } from './app/views/Evolucion.js';
import { Contactar } from './app/views/Contactar.js';
import { Perfil } from './app/views/Perfil.js';
import { Inicio } from './app/views/Inicio.js';
import { DetalleReto } from './app/views/DetalleReto.js';
import { NuevoReto } from './app/views/NuevoReto.js';
import { VerFotos } from './app/views/VerFotos.js';
import { LogIn } from './app/views/LogIn.js';
import { Cargando } from './app/views/Cargando.js';
import { Icon } from 'react-native-elements';
import { TabRouter } from 'react-navigation';



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
  },
  animatedIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 160,
    opacity: 0
  },
});

function MyBackButton() {
const navigation = useNavigation();

  return (
  <TouchableOpacity style={styles.boton}  onPress={() => {navigation.navigate('Inicio')}}>
    <Text style={styles.textoBoton}>INICIO</Text>
  </TouchableOpacity>
  );

}


function MySpecialBackButton() {
  const navigation = useNavigation();
  
    return ( 
      <Icon reverse
        name="arrow-back"
        color="#0984e3"
        onPress={() => {navigation.replace('Evolucion')}}/>
    );

  }

const Stack = createStackNavigator();
const Tab = createDrawerNavigator();
const Drawer = createDrawerNavigator();



function InicioDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Inicio" 
        component={Inicio} 
        options={({ route }) => ({ title: "Hola " + route.params.email })}
      />
      <Drawer.Screen 
        name="Perfil" 
        component={Perfil} 
      />
      <Drawer.Screen 
        name="Contáctanos" 
        component={Contactar} 
      />
    </Drawer.Navigator>
  );
}

export default function App () {
  let pressMenu

  return (
  
  <NavigationContainer ref={navigationRef => { pressMenu = navigationRef}}>
    <Stack.Navigator 
    initialRouteName="Cargando"
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
      component={InicioDrawer}
      options={{ 
        headerLeft: () =>  <Icon reverse
          name="menu"
          color="#0984e3"
          onPress={() => {
          pressMenu.dispatch(DrawerActions.toggleDrawer());
          }}
          />,
        headerRight: null,
        headerTitle: null,
        headerTitleStyle: {
          alignItems: 'flex-start'
        }  
      }}
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
        headerLeft: () => (
          <MySpecialBackButton style={styles.boton}/>
        )
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

    <Stack.Screen
      name='VerFotos'
      component={VerFotos}
      options={{
        title: 'Ver Fotos', 
      }}
      />

    <Stack.Screen
      name='LogIn'
      component={LogIn}
      options={{
        title: 'LogIn', 
        headerShown: false
      }}
      />

      <Stack.Screen
      name='Cargando'
      component={Cargando}
      options={{
        title: 'Cargando', 
        headerShown: false
      }}
      />

    </Stack.Navigator>

  </NavigationContainer>
    
  );

  

}



  