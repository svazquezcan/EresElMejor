import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import {
  ScreenWidth,
  ScreenHeight,
} from "@freakycoder/react-native-helpers";

interface Style {
  spinnerStyle: ViewStyle;
  loginButtonStyle: ViewStyle;
  loginButtonTextStyle: TextStyle;
  imageBackgroundStyle: ViewStyle;
  blackoverlay: ViewStyle;
  safeAreaViewStyle: ViewStyle;
  logoContainer: ViewStyle;
}

export const container = (loginButtonBackgroundColor: string) => {
  return {
    marginBottom: 32,
    width: ScreenWidth,
    height: ScreenHeight,
    backgroundColor: loginButtonBackgroundColor,
  };
};

export default StyleSheet.create<Style>({
  spinnerStyle: {
    left: 0,
    right: 0,
    zIndex: 9,
    height: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 24,
    marginBottom: 94,
    marginLeft:40,
    padding: 10,
    maxHeight: 40,
    maxWidth:180,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,255,0.3)", 
  },
  loginButtonStyle: {
    left: 0,
    right: 0,
    zIndex: 9,
    height: 50,     
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 24,
    marginBottom: 94,
    marginLeft:40,
    padding: 10,
    maxHeight: 40,
    maxWidth:180,
    minHeight:30,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,255,0.3)", 
  },
  loginButtonTextStyle: {
    color: "red",
    fontSize: 15,
    fontWeight: "700"
  },
  imageBackgroundStyle: {
    flex: 1,
    zIndex: -1,
    width: ScreenWidth,
    height: ScreenHeight * 0.59,
    ...StyleSheet.absoluteFillObject,
  },
  blackoverlay: {
    width: ScreenWidth,
    height: ScreenHeight*0.98,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  safeAreaViewStyle: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 12,
  },
});