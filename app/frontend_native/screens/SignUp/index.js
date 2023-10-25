import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "./GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Image
        style={styles.signUpChildPosition}
        contentFit="cover"
        source={require("./assets/15847314-v960ning11-1.png")}
      />
      <View style={[styles.signUpChild, styles.signUpChildPosition]} />
      <View
        style={[styles.emailMobileNumberWrapper, styles.passwordParentLayout]}
      >
        <Text style={[styles.emailMobile, styles.signUpItemPosition]}>
          Email / Mobile Number
        </Text>
      </View>
      <View style={[styles.passwordParent, styles.passwordParentLayout]}>
        <Text style={[styles.emailMobile, styles.signUpItemPosition]}>
          Password
        </Text>
        <Image
          style={styles.viewHideIcon}
          contentFit="cover"
          source={require("./assets/view-hide.png")}
        />
      </View>
      <Text style={styles.welcomeBackYouve}>{`Welcome back you’ve
been missed`}</Text>
      <Text style={[styles.signUp1, styles.text2FlexBox]}>Sign Up</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.signUp2, styles.signTypo]}>Sign Up</Text>
      </Pressable>
      <Text style={styles.rememberMe}>Remember me</Text>
      <Pressable
        style={[styles.signUpInner, styles.groupLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.superGParent, styles.parentPosition]}>
            <Image
              style={[styles.superGIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("./assets/superg.png")}
            />
            <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
              Continue with Google
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.smartphoneCall1Parent, styles.parentPosition]}>
            <Image
              style={[styles.smartphoneCall1Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("./assets/smartphonecall-1.png")}
            />
            <Text style={[styles.continueWithMobile, styles.continueTypo]}>
              Continue with Mobile OTP
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.signUpItem, styles.signUpItemLayout]} />
      <Pressable
        style={[styles.alreadyHaveAnContainer, styles.signPosition]}
        onPress={() => {}}
      >
        <Text style={styles.text}>
          <Text style={styles.alreadyHaveAnAccount}>
            <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={[styles.login1, styles.signTypo]}>Login</Text>
          </Text>
        </Text>
      </Pressable>
      <View
        style={[styles.homeIndicatordark, styles.iphoneWithNotchSpaceBlock]}
      >
        <View style={styles.homeIndicator} />
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  signUpChildPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  passwordParentLayout: {
    width: 350,
    marginLeft: -175,
    height: 44,
    borderRadius: Border.br_5xs,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  signUpItemPosition: {
    left: 20,
    position: "absolute",
  },
  text2FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupChildLayout: {
    height: 40,
    width: 162,
    left: "50%",
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  signTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 42,
    width: 264,
    position: "absolute",
  },
  parentPosition: {
    bottom: "21.43%",
    top: "21.43%",
    height: "57.14%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continueTypo: {
    marginTop: -9,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  signUpItemLayout: {
    width: 20,
    overflow: "hidden",
  },
  signPosition: {
    left: "50%",
    position: "absolute",
  },
  iphoneWithNotchSpaceBlock: {
    marginLeft: -195,
    width: 390,
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  areaFlexBox: {
    flex: 1,
    height: 44,
  },
  barPosition: {
    width: 3,
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorBlack,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  signUpChild: {
    backgroundColor: "rgba(243, 243, 243, 0.8)",
  },
  emailMobile: {
    marginTop: -10,
    color: Color.colorDarkgray,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    top: "50%",
  },
  emailMobileNumberWrapper: {
    top: 187,
    height: 44,
  },
  viewHideIcon: {
    top: 11,
    left: 313,
    width: 24,
    height: 24,
    position: "absolute",
  },
  passwordParent: {
    top: 255,
    height: 44,
  },
  welcomeBackYouve: {
    marginLeft: -88,
    top: 101,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  signUp1: {
    marginLeft: -39,
    top: 60,
    fontSize: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -81,
    borderRadius: 10,
    backgroundColor: Color.colorMediumvioletred,
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderColor: "#dbdbdb",
    height: 40,
    width: 162,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  signUp2: {
    marginTop: -12,
    marginLeft: -32,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -80,
    top: 355,
  },
  rememberMe: {
    marginLeft: -150,
    top: 313,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  superGIcon: {
    width: "14.46%",
    right: "85.54%",
  },
  continueWithGoogle: {
    left: "20.48%",
    color: "#353535",
  },
  superGParent: {
    width: "62.94%",
    right: "18.48%",
    left: "18.58%",
  },
  groupWrapper: {
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    height: 42,
    width: 264,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  signUpInner: {
    top: 473,
    left: 64,
    height: 42,
    width: 264,
  },
  smartphoneCall1Icon: {
    width: "12.9%",
    right: "87.1%",
  },
  continueWithMobile: {
    left: "16.67%",
    color: Color.colorWhite,
  },
  smartphoneCall1Parent: {
    width: "70.52%",
    right: "14.69%",
    left: "14.79%",
  },
  groupContainer: {
    backgroundColor: "#4285f4",
    height: 42,
    width: 264,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  groupPressable: {
    top: 530,
    left: 64,
    height: 42,
    width: 264,
  },
  signUpItem: {
    top: 312,
    borderRadius: 4,
    borderColor: Color.colorDimgray,
    height: 20,
    borderWidth: 1,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  alreadyHaveAn: {
    fontSize: FontSize.size_sm,
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  alreadyHaveAnAccount: {
    color: "#0d0d0d",
    fontFamily: FontFamily.poppinsRegular,
  },
  login1: {
    color: Color.colorMediumvioletred,
  },
  text: {
    marginLeft: -117,
    textAlign: "center",
  },
  alreadyHaveAnContainer: {
    top: 429,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  homeIndicatordark: {
    bottom: 0,
    height: 34,
    left: "50%",
    position: "absolute",
  },
  text2: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
  },
  locationServicesActiveWit: {
    width: 16,
    height: 16,
    display: "none",
    marginLeft: 2,
    overflow: "hidden",
  },
  time: {
    marginLeft: -17,
    top: 16,
  },
  leftArea: {
    height: 44,
    overflow: "hidden",
  },
  notchArea: {
    width: 164,
    height: 44,
  },
  bar4: {
    marginTop: -6,
    marginLeft: 6.35,
    height: 12,
  },
  bar3: {
    marginTop: -3.6,
    marginLeft: 1.05,
    height: 10,
  },
  bar2: {
    marginTop: -1,
    marginLeft: -4.25,
    height: 7,
  },
  bar1: {
    marginTop: 1.4,
    marginLeft: -9.55,
    height: 5,
  },
  sim1SingleSim: {
    height: 14,
  },
  networkWifiFull: {
    marginLeft: 4,
    height: 12,
  },
  batteryFullUncharged: {
    width: 28,
    marginLeft: 4,
    height: 14,
  },
  autoLayout: {
    marginTop: -7,
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    position: "absolute",
  },
  statusArea: {
    marginTop: -4,
    marginLeft: -37.5,
    width: 76,
    height: 14,
    top: "50%",
  },
  privacyIndicatorNone: {
    top: 6,
    left: 6,
    width: 6,
    height: 6,
    position: "absolute",
  },
  rightArea: {
    height: 44,
  },
  iphoneWithNotch: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: -195,
    width: 390,
    top: 0,
  },
  signUp: {
    width: "100%",
    overflow: "hidden",
    height: 844,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
