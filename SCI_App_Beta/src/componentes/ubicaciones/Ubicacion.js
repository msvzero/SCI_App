import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import styles from './styles/ubicacion';
export default class Ubicacion extends Component {
    constructor(props){
        super(props);
        this.state = {
            descripcion: this.props.descripcion,
            modo: this.props.modo
        }

    }
    render() {
        return(
         <View>
            <View style={styles.contenedorUbicacion}>
                <View style={styles.contenedorIzq}>
                    <View style={styles.contenedorIconIzq}>
                        <Icon size={50} name='lightbulb-outline' color='#fff' />
                    </View>
                    <View style={{marginRight:10, width:220}}>
                        <Text style={styles.descripcion}>{this.state.descripcion}</Text>
                        <Text style={styles.modo}>{this.state.modo}</Text>
                    </View>
                </View>
                <View style={styles.contenedorDer}>
                    <View>
                        <Icon size={50} name='keyboard-arrow-right' color='#fff' />
                    </View>
                </View>
            </View>
         </View>
        )
    }
}