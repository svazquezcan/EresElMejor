import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex:1
    }
});

export class Inicio extends React.Component {
    render() {
        return(
            <View style={styles.contenedor}>
                <Image source={require('../images/theBest6.png')}></Image>
                <Text>Zona para los clickables</Text>
            </View>
        )
    }
}