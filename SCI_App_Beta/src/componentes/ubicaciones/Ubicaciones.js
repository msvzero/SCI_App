import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Ubicacion from './Ubicacion';

import styles from './styles/ubicaciones';

const logo = require('../../../assets/sciLogoBlanco.png');
const fondo = require('../../../assets/fondo.jpg');

//Acciones para navegacion
const accionSalir = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Login'})
    ]
});
export default class Ubicaciones extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(){
        super();
        this.state = {
            ubicaciones : '',
        }
        this.obtenerUbicaciones = this.obtenerUbicaciones.bind(this);

    }
    componentWillMount(){
        this.obtenerUbicaciones();
    }
    obtenerUbicaciones(){
        this.setState({
            ubicaciones: ''
        })
        let { params } = this.props.navigation.state;
        let token = `JWT ${params.token}`;
        let URL = "http://127.0.0.1:3000/ubicaciones";
        fetch(URL, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token.replace(/["]+/g, '')
            },
        })
        .then((respuesta) => respuesta.json())
        .then((respuestaJson) => {
            this.setState({
                ubicaciones: respuestaJson
            });
            console.log(this.state);
        }, (error) => {
            console.log(error);
        });
     
    }
    render() {
        let { navigate } = this.props.navigation;
        let { params } = this.props.navigation.state;
        return(
            <ImageBackground source={fondo} style={styles.contenedor}>
                <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 30, backgroundColor: 'transparent'}}>
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => this.props.navigation.dispatch(accionSalir)}>
                        <Text style={{color:'#fff', fontSize: 18, fontWeight: 'bold'}}>Salir</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contenido}>
                    <View style={styles.contenedorLogo}>
                        <Image source={logo} style={styles.imagenLogo}/>
                    </View>
                    <View style={styles.contenedorTitulo}>
                        <Text style={styles.titulo}>Centro de Control</Text>
                    </View>
                    <View style={{marginTop:30, marginLeft:10, marginRight:10, opacity:0.9}}>
                    <FlatList 
                    data={this.state.ubicaciones.ubicaciones} 
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <TouchableOpacity 
                    onPress={() => navigate('UbicacionDetalle', {token:params.token, id:item._id,actuador: item.actuador, canal: item.canal, descripcion: item.descripcion, modoActual: item.modo})}>
                    <Ubicacion  descripcion={item.descripcion}  modo={item.modo}/></TouchableOpacity> }/>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}