import React from 'react';
import { Image } from 'react-native';

export class LogoComponent extends React.Component {
  render() {
    return (
        <Image
        source={require('../images/iconEEM.png')}
        style={{ width: 400, height: 400 }}
        />
    )
  }
}

