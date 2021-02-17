import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Spinner from "react-native-spinkit";


/**
 * ? Local Imports
 */
import styles, { container } from "../styles/LoginScreenStyles";
import BottomContainer, {
  IBottomContainerProps,
} from "./BottomContainer";
import { ICardProps } from "./Card";

export interface ILoginProps extends IBottomContainerProps, ICardProps {
  source?: any;
  loginText?: string;
  spinnerStyle?: any;
  logoComponent?: any;
  signupText: string;
  spinnerType?: string;
  spinnerSize?: number;
  spinnerColor?: string;
  spinnerEnable?: boolean;
  onPressLogin?: () => void;
  onPressRegister?: () => void;
  onPressSignup?: () => void;
  loginButtonTextStyle?: any;
  spinnerVisibility?: boolean;
  loginButtonBackgroundColor?: any;
}

const defaultBackground =
  "https://firebasestorage.googleapis.com/v0/b/thebest-110a1.appspot.com/o/retosBackground.png?alt=media"

const LoginScreen = (props: ILoginProps) => {
  const {
    source,
    loginText,
    signupText,
    spinnerType,
    spinnerSize,
    spinnerColor,
    onPressLogin,
    onPressRegister,
    spinnerStyle,
    spinnerEnable,
    onPressSignup,
    logoComponent,
    spinnerVisibility,
    loginButtonTextStyle,
    loginButtonBackgroundColor,
  } = props;

  const [cardState, setCardState] = React.useState(true);

  const renderSpinner = () => (
    <View style={styles.spinnerStyle}>
      <Spinner
        size={spinnerSize}
        type={spinnerType}
        style={spinnerStyle}
        color={spinnerColor}
        isVisible={spinnerVisibility}
      />           
    </View>
  );

  const renderLoginButton = () => (
    <TouchableOpacity style={styles.loginButtonStyle} onPress={()=> {
      cardState ? onPressLogin() : onPressRegister()}}>
      <Text style={loginButtonTextStyle}>
        {cardState ? loginText : signupText}
      </Text>
    </TouchableOpacity>
  );

  return (
      <KeyboardAvoidingView
      behavior="position"
      /*keyboardVerticalOffset={-105} behavior="position">*/
      style={{flex: 3 }}>
      <View style={container(loginButtonBackgroundColor)}>
        <ImageBackground
          source={source}
          borderRadius={24}
          resizeMode="cover"
          style={styles.imageBackgroundStyle}
        >
        </ImageBackground>
          <View style={styles.blackoverlay}>
            <SafeAreaView style={styles.safeAreaViewStyle}>
              <View style={styles.logoContainer}>{logoComponent}</View>
              <BottomContainer
                {...props}
                cardState={cardState}
                onSignUpPress={() => {
                  setCardState(!cardState);
                  onPressSignup && onPressSignup();
                }}
              />
            </SafeAreaView>
          </View>
        <View>
          {spinnerEnable && spinnerVisibility
            ? renderSpinner()
            : renderLoginButton()}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

LoginScreen.defaultProps = {
  spinnerSize: 30,
  loginText: "Iniciar sesión",
  spinnerEnable: true,
  spinnerColor: "#fdfdfd",
  signupText: "Crear una cuenta",
  spinnerVisibility: true,
  spinnerType: "ThreeBounce",
  source: { uri: defaultBackground },
  loginButtonBackgroundColor: "#282828",
  loginButtonTextStyle: styles.loginButtonTextStyle,
};  

export default LoginScreen;