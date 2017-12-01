import {
    StyleSheet
} from 'react-native';
const black = '#000';
const white = '#fff';

module.exports = StyleSheet.create({
    contenedor:{
        flex:1,
        width: undefined,
        height: undefined
    },
    contenido: {
        //marginTop:5,
    },
    contenedorTitulo:{
        alignItems: 'center',
        marginTop:5,
    },
    titulo: {
        color: white,
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: black,
        textShadowOffset: { width:0.7, height:0.7},
        backgroundColor:'transparent'
    },
    subTitulo:{
        color: white,
        fontSize: 14,
        fontWeight: 'bold',
        textShadowColor: black,
        textShadowOffset: { width:0.7, height:0.7},
        backgroundColor:'transparent'
    },
    contenedorLogo: {
        alignItems: 'center',
        marginTop: 10
    },
    imagenLogo: {
        width: 100,
        height:90,
    },
    imagenMovimiento: {
        width: 70,
        height:100,
    },
    imagenIluminacion: {
        width: 90,
        height:90,
    },
    imagenEncendido: {
        width: 90,
        height:90,
    },
    contenedorBotones: {
        marginTop:10, 
        marginLeft:10, 
        marginRight:10, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        flexWrap: 'wrap'
    },
    botonDesactivado: {
        margin:5, 
        backgroundColor: '#2B5182', 
        width: 160, 
        height: 160, 
        opacity:0.9, 
        justifyContent: 'center',  
        alignItems: 'center', 
        borderRadius:5
    },
    botonActivado: {
        margin:5, 
        backgroundColor: '#4BAC39', 
        width: 160, 
        height: 160, 
        opacity:0.9, 
        justifyContent: 'center',  
        alignItems: 'center',
        borderRadius:5
    },
    textoBoton: {
        color: '#fff', 
        marginTop:5, 
        fontWeight: 'bold'
    }
    
})