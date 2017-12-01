import React,  {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { registro } from '../../apis/auth';
import styles from './styles/login';
//Logo 
const logo = require('../../../assets/sciLogoBlanco.png');
const fondo = require('../../../assets/fondo.jpg');
export default class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreCompleto: '',
            email: '',
            password: '',
            error: ''
        }

        this.registro = this.registro.bind(this);
    }
    static navigationOptions = {
        header: null
    }
    componentWillMount(){
        this.setState({ error: ''});
    }
    registro(navigate){
        registro(this.state.nombreCompleto, this.state.email, this.state.password);
        alert('Registro exitoso!')
        navigate('Login');
            
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
                        <TextInput onChangeText={(texto) => this.setState({nombreCompleto: texto.toLowerCase()})} placeholder="Nombre Completo" style={styles.input}/>
                        <TextInput onChangeText={(texto) => this.setState({email: texto.toLowerCase()})} placeholder="Email" style={styles.input}/>
                        <TextInput onChangeText={(texto) => this.setState({password: texto.toLowerCase()})} placeholder="Contraseña" style={styles.input} secureTextEntry={true}/>
                    </View>
                    
                </View>
                <View style={styles.contenedorBotones}>
                    <TouchableOpacity onPress={() => this.registro(navigate)} style={styles.contenedorBotonIngresar}>
                        <Text style={styles.textoBoton}>Guardar</Text>
                    </TouchableOpacity>
                   
                </View>
            </ImageBackground>
        )
    }
}
