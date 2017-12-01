import {
    StyleSheet
} from 'react-native';

const black = '#000';
const white = '#fff';
module.exports = StyleSheet.create({
    contenedor:{
        flex: 1,
        width:  undefined,
        height:  undefined,
    },
    contenido: {
        
        alignItems: 'center',
        marginTop:20,
    },
    contenedorTitulo:{
        marginTop:5,
        

    },
    titulo: {
        color: white,
        fontSize: 45,
        fontWeight: 'bold',
        textShadowColor: black,
        textShadowOffset: { width:0.7, height:0.7},
        backgroundColor:'transparent'
    },
    contenedorSubTitulo:{
        marginTop:5
    },
    subTitulo: {
        color: white,
        fontSize: 14,
        fontWeight: 'bold',
        textShadowColor: black,
        textShadowOffset: { width:0.7, height:0.7},
        backgroundColor:'transparent'
    },
    contenedorFormulario: {
        marginTop:5,
        //justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    input:{
        fontWeight: 'bold',
        color: black,
        height:45,
        width:250,
        margin: 5,
        textAlign:'center',
        borderColor: black,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: white,
        //opacity: 0.75
     },
    contenedorLogo: {
        alignItems: 'center',
        marginTop: 30
    },
    imagenLogo: {
        width: 175,
        height:160,
    },
    contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'center'

    },
    contenedorBotonIngresar:{
        margin: 2,
        justifyContent: 'center',
        height:45,
        width:100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2076bc',
        backgroundColor: '#2076bc',
       
      },
      contenedorBotonRegistro:{
        margin: 2,
        justifyContent: 'center',
        height:45,
        width:100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#65A838',
        backgroundColor: '#65A838',
       
      },
      textoBoton:{
        color: white,
        fontWeight: 'bold',
        fontSize : 15,
        textAlign: 'center',
        textShadowColor: black,
        textShadowOffset: { width:0.7, height:0.7},
        //opacity:0.9
      },

});