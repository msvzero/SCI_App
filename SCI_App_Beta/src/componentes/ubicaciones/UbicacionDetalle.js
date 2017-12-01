import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles/ubicacionDetalle';
const logo = require('../../../assets/sciLogoBlanco.png');
const fondo = require('../../../assets/fondo.jpg');
const movimiento = require('../../../assets/detection.png');
const sol = require('../../../assets/sol.png');
const luzPrendida = require('../../../assets/luzPrendida.png');
const luzApagada = require('../../../assets/luzApagada.png');
//Acciones para navegacion
const accionVolver = NavigationActions.back({
    actions: [
        NavigationActions.navigate({ routeName: 'Ubicaciones'})
    ]
});


export default class UbicacionDetalle extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(){
        super();
        this.state = {
            id: '',
            actuador: '',
            canal: '',
            modo: '',
            seleccion: ''

        }
        this.enviarDatos = this.enviarDatos.bind(this);
        this.seleccion = this.seleccion.bind(this);
        this.actualizarDatosUbicacion = this.actualizarDatosUbicacion.bind(this);
        this.actualizarDatosActuador = this.actualizarDatosActuador.bind(this);
        

    }
    enviarDatos(){
        this.actualizarDatosActuador();
        this.actualizarDatosUbicacion();
    }
    seleccion(id, actuador, canal, modo){
        this.setState({
            id: id,
            actuador: actuador,
            canal: canal,
            modo: modo,
            seleccion: modo
        });
    }
    actualizarDatosActuador(){
        let { params } = this.props.navigation.state;
        let { navigate } = this.props.navigation;
        let token = `JWT ${params.token}`;
        fetch(`http://192.168.1.101:3000/actuadores/${this.state.actuador}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': token.replace(/["]+/g, '')
            },
            body: JSON.stringify({
              modo: this.state.modo,
              canal: this.state.canal,
            })
          })
        Alert.alert(
            'Aviso',
            'El modo fue actualizado',
            [
                {text: 'Seguir', onPress: () => navigate('Ubicaciones', {token: params.token})},
            ],
            
        )
    }
    actualizarDatosUbicacion(){
        let { params } = this.props.navigation.state;
        let token = `JWT ${params.token}`;
        fetch(`http://192.168.1.101:3000/ubicaciones/${this.state.id}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': token.replace(/["]+/g, '')
            },
            body: JSON.stringify({
              modo: this.state.modo,
            })
          })
    }
    
    render(){
        const { params } = this.props.navigation.state;
        return(
            <ImageBackground source={fondo} style={styles.contenedor}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, backgroundColor: 'transparent'}}>
                <TouchableOpacity style={{marginLeft: 10}} onPress={() => this.props.navigation.dispatch(accionVolver)}>
                    <Text style={{color:'#fff', fontSize: 18, fontWeight: 'bold'}}>Volver</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contenido}>
                <View style={styles.contenedorLogo}>
                    <Image source={logo} style={styles.imagenLogo}/>
                </View>
                <View style={styles.contenedorTitulo}>
                    <Text style={styles.titulo}>{params.descripcion}</Text>
                    <Text style={styles.subTitulo}>{`Modo Actual: ${params.modoActual}`}</Text>
                </View>
                <View style={styles.contenedorBotones}>
                    <TouchableOpacity onPress={() => {
                        this.state.seleccion !== 'encendido'? this.seleccion(params.id, params.actuador, params.canal, 'encendido'): this.enviarDatos()
                    }}>
                        <View style={this.state.seleccion === 'encendido'? styles.botonActivado: styles.botonDesactivado}>
                            <Image source={luzPrendida} style={styles.imagenEncendido}/>
                            <Text style={styles.textoBoton}>Encendido</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.state.seleccion !== 'apagado'? this.seleccion(params.id, params.actuador, params.canal, 'apagado'): this.enviarDatos()
                    }}>
                        <View style={this.state.seleccion === 'apagado'? styles.botonActivado: styles.botonDesactivado}>
                            <Image source={luzApagada} style={styles.imagenEncendido}/>
                            <Text style={styles.textoBoton}>Apagado</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.state.seleccion !== 'automatico'? this.seleccion(params.id, params.actuador, params.canal, 'automatico'): this.enviarDatos()
                    }}>
                        <View style={this.state.seleccion === 'automatico'? styles.botonActivado: styles.botonDesactivado}>
                            <Image source={sol} style={styles.imagenIluminacion}/>
                            <Text style={styles.textoBoton}>Automatico</Text>
                        </View>  
                    </TouchableOpacity>
                </View> 
            </View>
            </ImageBackground>
        )
    }
}