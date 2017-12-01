/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'

//Componentes
import Login from './src/componentes/autenticacion/login';
import Ubicaciones from './src/componentes/ubicaciones/Ubicaciones';
import UbicacionDetalle from './src/componentes/ubicaciones/UbicacionDetalle';
import Registro from './src/componentes/autenticacion/Registro';

const Navegador = StackNavigator({
  Login: { screen: Login },
  Registro: { screen: Registro },
  Ubicaciones: { screen: Ubicaciones },
  UbicacionDetalle: {screen: UbicacionDetalle }
});

export default class App extends Component {
  render() {
    return (
        <Navegador />
    );
  }
}


