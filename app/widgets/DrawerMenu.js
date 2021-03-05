import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Perfil } from '../views/Perfil.js';
import { Contactar } from "../views/Contactar.js";
import { Inicio } from "../views/Inicio.js";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Contactar" component={Contactar} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;