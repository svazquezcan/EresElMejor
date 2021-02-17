import React from 'react';
import { Alert, Text, View } from 'react-native';
import  LoginScreen  from '../widgets/LoginScreen.tsx';
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth';
import { LogoComponent } from "../widgets/LogoComponent";

export class LogIn extends React.Component {
    constructor(props){
      super(props);
      this.state={
        email:"",
        password:"",
        repassword:"",
        spinnerVisibility:false,
        errorMessage:"", 
      };
    }

    CheckPassword = (password) =>{ 
      var pass = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
      if(password.match(pass)){ 
      return true;
      }
    }

    render(){
        const { errorMessage } = this.state;

        const renderLoginButton = () => (
            <TouchableOpacity style={styles.loginButtonStyle} onPress={onPressLogin}>
              <Text style={loginButtonTextStyle}>
                {cardState ? loginText : signupText}
              </Text>
            </TouchableOpacity>
          );

        return(
        <LoginScreen
            spinnerEnable
            spinnerVisibility={this.state.spinnerVisibility}
            loginText="Inicia sesión"
            usernamePlaceholder="Email"
            passwordPlaceholder="Contraseña"
            loginButtonBackgroundColor="white"
            labelTextStyle={{
              color: "#adadad",
              fontFamily: "Now-Bold",
            }}
            logoTextStyle={{
              fontSize: 27,
              color: "#fdfdfd",
              fontFamily: "Now-Black",
            }}
            loginButtonTextStyle={{
              color: "#fdfdfd",
              fontFamily: "Now-Bold",
              fontWeight: "700",
              fontSize: 15
            }}
            textStyle={{
              color: "#757575",
              fontFamily: "Now-Regular",
            }}
            signupStyle={{
              color: "#fdfdfd",
              fontFamily: "Now-Bold",
              fontWeight: "700",
              fontSize: 15
            }}
            logoComponent={<LogoComponent/>}
            usernameOnChangeText={(email) => this.setState({email:email}, () => console.log("email", this.state.email))}
            passwordOnChangeText={(password) => this.setState({password:password}, () => console.log("password", this.state.password))}
            emailOnChangeText={(email) => this.setState({email:email}, () => console.log("email", this.state.email))}
            repasswordOnChangeText={(repassword) => this.setState({repassword:repassword}, () => console.log("repassword", this.state.repassword))}
            onPressLogin={() => {
                this.setState({spinnerVisibility:true}, () => console.log("spinnerVisibility: ", this.state.spinnerVisibility))
                setTimeout(() => {
                    this.setState({spinnerVisibility:false})
                }, 2000);
                if (this.state.password.length >= 6){
                  firebase
                  .auth()
                  .signInWithEmailAndPassword(this.state.email, this.state.password)
                  .then(() => this.props.navigation.navigate('Inicio'))
                  .catch(error => this.setState({ errorMessage: error }, () => console.log("errorLogin", errorMessage)))
              }
            }}
            onPressRegister={()=> {
              this.setState({spinnerVisibility:true}, () => console.log("spinnerVisibility: ", this.state.spinnerVisibility))
                setTimeout(() => {
                    this.setState({spinnerVisibility:false})
                }, 2000);
                if (this.state.password === this.state.repassword && this.CheckPassword(this.state.password)){
                  firebase
                  .auth()
                  .createUserWithEmailAndPassword(this.state.email, this.state.password)
                  .then(() => this.props.navigation.navigate('Inicio'))
                  .catch(error => this.setState({ errorMessage: error }, () => Alert.alert("Error de registro", errorMessage)))
                }
                else{
                  if (this.state.password !== this.state.repassword){
                    Alert.alert(
                      'Revisar contraseña',
                      'Las contraseñas no coinciden.',
                      [
                        {
                          text: 'Lo reviso',
                          onPress: () => console.log('Ok pressed'),
                          style: 'cancel',     
                        }
                      ]
                    )}
                  else{
                    Alert.alert(
                      'Contraseña incorrecta',
                      'La contraseña debe tener 6 caracteres o más y uno ha de ser un número.',
                      [
                        {
                          text: 'Ok',
                          onPress: () => console.log('Ok pressed'),
                          style: 'cancel',     
                        }
                      ]
                    )
                  }
              }}
            }
            onPressSignup={() => {
              console.log("onPressSignUp is pressed");
            }}
          > 
            <View
              style={{
                position: "relative",
                alignSelf: "center",
                marginTop: 64,
              }}
            >
              <Text style={{ color: "white", fontSize: 30 }}>
                Inside Login Screen Component
              </Text>
            </View>
          </LoginScreen>
        )
    }
  }