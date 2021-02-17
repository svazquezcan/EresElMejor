import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
/**
 * ? Local Imports
 */
import Card from "../widgets/Card";
import styles, { container } from "../styles/BottomContainerStyles";

export interface IBottomContainerProps {
  signupStyle?: any;
  signupText?: string;
  emailTitle?: string;
  cardState?: boolean;
  usernameTitle?: string;
  passwordTitle?: string;
  contentComponent?: any;
  loginButtonText?: string;
  backgroundColor?: string;
  emailIconComponent?: any;
  repasswordTitle?: string;
  emailPlaceholder?: string;
  usernameIconComponent?: any;
  passwordIconComponent?: any;
  usernamePlaceholder?: string;
  emailTextInputValue?: string;
  passwordPlaceholder?: string;
  disableSignupButton?: boolean;
  repasswordIconComponent?: any;
  repasswordPlaceholder?: string;
  usernameTextInputValue?: string;
  passwordTextInputValue?: string;
  repasswordTextInputValue?: string;
  onSignUpPress?: () => void;
  emailOnChangeText?: (text: string) => void;
  usernameOnChangeText?: (text: string) => void;
  passwordOnChangeText?: (text: string) => void;
  repasswordOnChangeText?: (text: string) => void;
}

const BottomContainer = (props: IBottomContainerProps) => {
  const {
    cardState,
    onSignUpPress,
    backgroundColor,
    contentComponent,
    usernamePlaceholder,
    passwordPlaceholder,
    usernameOnChangeText,
    passwordOnChangeText,
    usernameIconComponent,
    passwordIconComponent,
    usernameTextInputValue,
    passwordTextInputValue,
    signupText,
    signupStyle,
    disableSignupButton,
    loginButtonText,
    emailPlaceholder,
    emailOnChangeText,
    emailIconComponent,
    emailTextInputValue,
    repasswordTextInputValue,
    repasswordPlaceholder,
    repasswordOnChangeText,
    repasswordIconComponent,
  } = props;

  const renderUserIcon = () => (
    <Image
      source={require("../images/user.png")}
      style={styles.userIconImageStyle}
    />
  );

  const renderPasswordIcon = () => (
    <Image
      source={require("../images/password.png")}
      style={styles.passwordIconImageStyle}
    />
  );

  const renderLoginCards = () => {
    return (
      <View>
        <Card
          value={usernameTextInputValue}
          placeholder={usernamePlaceholder}
          onChangeText={usernameOnChangeText}
          iconComponent={usernameIconComponent || renderUserIcon()}
          {...props}
        />
        <Card
          secureTextEntry
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          iconComponent={passwordIconComponent || renderPasswordIcon()}
          onChangeText={(text: string) =>
            passwordOnChangeText && passwordOnChangeText(text)
          }
          {...props}
        />
      </View>
    );
  };

  const renderSignupCards = () => {
    return (
      <View>
        <Card
          value={emailTextInputValue}
          placeholder={emailPlaceholder}
          onChangeText={emailOnChangeText}
          iconComponent={emailIconComponent || renderUserIcon()}
          {...props}
        />
        <Card
          secureTextEntry
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          onChangeText={passwordOnChangeText}
          iconComponent={passwordIconComponent || renderPasswordIcon()}
          {...props}
        />
        <Card
          secureTextEntry
          value={repasswordTextInputValue}
          placeholder={repasswordPlaceholder}
          onChangeText={repasswordOnChangeText}
          iconComponent={repasswordIconComponent || renderPasswordIcon()}
          {...props}
        />
      </View>
    );
  };

  const renderCardContent = () => {
    return cardState ? renderLoginCards() : renderSignupCards();
  };

  return (
    <View style={container(backgroundColor, cardState)}>
      {contentComponent}
      <View style={styles.containerGlue}>{renderCardContent()}</View>
      <View style={styles.footerContainer}>
        {!disableSignupButton && (
          <TouchableOpacity
            style={styles.signupButtonStyle}
            onPress={() => onSignUpPress && onSignUpPress()}
          >
            <Text style={signupStyle || styles.signupTextStyle}>
              {cardState ? signupText : loginButtonText}
            </Text>
            <View style={styles.signupButtonRightArrowContainer}>
              <Image
                source={require("../images/right-arrow.png")}
                style={styles.signupButtonRightArrowImageStyle}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

BottomContainer.defaultProps = {
  loginButtonText: "Ya tengo cuenta",
  disableSwitch: false,
  usernameTitle: "Email",
  passwordTitle: "Contraseña",
  signupText: "Crea cuenta nueva",
  repasswordTitle: "Vuelve a escribir la contraseña",
  usernamePlaceholder: "Email",
  passwordPlaceholder: "Contraseña",
  repasswordPlaceholder: "Vuelve a escribir la contraseña",
};

export default BottomContainer;