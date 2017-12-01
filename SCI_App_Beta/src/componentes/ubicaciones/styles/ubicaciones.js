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
       // marginTop:20,
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
    contenedorLogo: {
        alignItems: 'center',
        marginTop: 10
    },
    imagenLogo: {
        width: 100,
        height:90,
    },
});