import React,  {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { login,logout, obtenerToken } from '../../apis/auth';
import styles from './styles/login';
//Logo 
const logo = require('../../../assets/sciLogoBlanco.png');
const fondo = require('../../../assets/fondo.jpg');
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: ''
        }
        this.iniciarSesion = this.iniciarSesion.bind(this);
    }
    iniciarSesion(navigate){
        let {email, password } = this.state;
        let URL = 'http://192.168.1.101:3000/auth/login';
        fetch(URL, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }) 
        .then((response) => response.json())
        .then((responseJson) => {
            if(!responseJson.mensaje){
                let token = JSON.stringify(responseJson.token);
                this.setState({token: token});
                navigate('Ubicaciones', {token: this.state.token});
            }else {
                alert(responseJson.mensaje);
            }
        })
        .catch((error) => {
            alert(`Error: ${error}`)
        });
    }
    static navigationOptions = {
        header: null
    }
    render() {
        const { navigate } = this.props.navigation;
        return(
            <ImageBackground source={fondo} style={styles.contenedor}>
                <View style={styles.contenido}>
                    <View style={styles.contenedorLogo}><Image source={logo}s style={styles.imagenLogo}></Image></View>
                    <View style={styles.contenedorTitulo}><Text style={styles.titulo}>S.C.I</Text></View>
                    <View style={styles.contenedorSubTitulo}><Text style={styles.subTitulo}>Datos del Usuario</Text></View>
                    <View style={styles.contenedorFormulario}>
                        <TextInput onChangeText={(texto) => this.setState({email: texto.toLowerCase()})} placeholder="Email del Usuario" style={styles.input}/>
                        <TextInput onChangeText={(texto) => this.setState({password: texto.toLowerCase()})} placeholder="Contraseña" style={styles.input} secureTextEntry={true}/>
                    </View>
                    
                </View>
                <View style={styles.contenedorBotones}>
                    <TouchableOpacity onPress={() => this.iniciarSesion(navigate)} style={styles.contenedorBotonIngresar}>
                        <Text style={styles.textoBoton}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
export default Login
