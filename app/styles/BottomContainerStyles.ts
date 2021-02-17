import {
    ViewStyle,
    TextStyle,
    StyleSheet,
    Dimensions,
    ImageStyle,
  } from "react-native";
  const { width, height } = Dimensions.get("window");
  
  interface Style {
    containerGlue: ViewStyle;
    footerContainer: ViewStyle;
    signupContainer: ViewStyle;
    signupTextStyle: TextStyle;
    signupButtonStyle: TextStyle;
    signupButtonRightArrowContainer: ViewStyle;
    signupButtonRightArrowImageStyle: ImageStyle;
    passwordIconImageStyle: ImageStyle;
    userIconImageStyle: ImageStyle;
  }
  
  export const container = (
    backgroundColor: string = "rgba(255,255,255,0.45)",
  ): ViewStyle => {
    return {
      backgroundColor,
      borderRadius: 24,
      width: width * 0.9,
      alignSelf: "center",
      position: "absolute",
      bottom: height * 0.15,
      height: "auto",
    };
  };

  export default StyleSheet.create<Style>({
    containerGlue: {
      marginTop: 12,
    },
    footerContainer: {
      flex: 1,
      margin: 16,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "flex-end",
      maxHeight: 30,
    },
    signupContainer: {
      marginLeft: "auto",
    },
    signupTextStyle: {
      color: "#fdfdfd",
      fontWeight: "700",
    },
    signupButtonStyle: {
      padding: 10,
      paddingLeft:20,
      paddingRight:10,
      minHeight: 30,
      borderRadius: 16,
      marginLeft: 180,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.45)",
    },
    signupButtonRightArrowContainer: {
      marginLeft: 5,
    },
    signupButtonRightArrowImageStyle: {
      width: 15,
      height: 15,
    },
    passwordIconImageStyle: {
      width: 30,
      height: 30,
    },
    userIconImageStyle: {
      width: 30,
      height: 30,
    },
  });