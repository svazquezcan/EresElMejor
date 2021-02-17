import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from '@react-native-firebase/app'



export class Cargando extends React.Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Inicio' : 'LogIn'), console.log("user", user)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Cargando</Text>
        <ActivityIndicator size="large" color="null" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})