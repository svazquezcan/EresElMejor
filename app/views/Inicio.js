import React from 'react';
import { Menu } from '../widgets/Menu.js';
import { View, Text, Image, StyleSheet } from 'react-native';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min';

const styles = StyleSheet.create({
    contenedor: {
     flex:1,
     backgroundColor:'#000000',
     
    },
    img: {
        flex: 1.8,
        flexDirection:'row',
        width: null,
        height: null,
        justifyContent:'flex-end',
        resizeMode: 'center'
    }   
});

export class Inicio extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.contenedor}>
                <Image style={styles.img} source={require('../images/LOGOEEM.png')}></Image>
                <Menu navigate={navigate}/>
            </View>
        )
    }
}