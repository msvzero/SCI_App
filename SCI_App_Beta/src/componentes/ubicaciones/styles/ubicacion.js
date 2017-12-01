import {
    StyleSheet
} from 'react-native';

const negro = '#000';
const blanco = '#fff';
const azulOscuro = '#19344D';
const azulClaro = '#2B5182';
const verdeClaro = '#329547';

module.exports = StyleSheet.create({

contenedorUbicacion: {
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor:'#2B5182',
    height:75
},
contenedorIzq: {
    flexDirection: 'row', 
    backgroundColor:'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start'
},
contenedorDer: {
    flexDirection: 'row',
    backgroundColor:'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end'
},
contenedorIconIzq:{
    marginLeft:20
},
descripcion: {
    color: '#fff', 
    marginLeft: 10, 
    marginRight: 50, 
    fontSize:18, 
    fontWeight: 'bold'
},
modo: {
    color: '#fff', 
    marginLeft: 12, 
    fontSize:15
}
 
});