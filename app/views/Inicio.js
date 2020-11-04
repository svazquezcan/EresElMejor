import React from 'react';
import { Menu } from '../widgets/Menu.js';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex:1
    },
    img: {
        flex: 1.5,
        width: null,
        height: null,
        resizeMode: "cover"
    }   
});

export class Inicio extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.contenedor}>
                <Image style={styles.img} source={require('../images/theBest6.png')}></Image>
                <Menu navigate={navigate}/>
            </View>
        )
    }
}