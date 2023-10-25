import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "./GlobalStyles";

const ForgetPassword = () => {
  return (
    <View style={styles.forgetPassword}>
      <Image
        style={styles.v960Ning111IconPosition}
        contentFit="cover"
        source={require("./assets/15847314-v960ning11-1.png")}
      />
      <View
        style={[styles.forgetPasswordChild, styles.v960Ning111IconPosition]}
      />
      <View
        style={[
          styles.forgetPasswordParent,
          styles.forgetPasswordParentPosition,
        ]}
      >
        <Text style={[styles.forgetPassword1, styles.textFlexBox]}>
          Forget Password
        </Text>
        <Text style={[styles.enterYourRegistered, styles.continueFlexBox]}>
          Enter your registered email or mobile number
        </Text>
        <View
          style={[
            styles.emailAddressotpWrapper,
            styles.forgetPasswordParentPosition,
          ]}
        >
          <Text style={[styles.emailAddressotp, styles.continueFlexBox]}>
            Email address/OTP
          </Text>
        </View>
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => {}}
        >
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <Text style={[styles.continue, styles.continueFlexBox]}>
            Continue
          </Text>
        </Pressable>
      </View>
      <View style={[styles.homeIndicatordark, styles.component5SpaceBlock]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.component5, styles.component5SpaceBlock]}>
        <View style={styles.component5Child} />
        <Pressable style={styles.expandLeft} onPress={() => {}}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("./assets/expand-left.png")}
          />
        </Pressable>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  v960Ning111IconPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  forgetPasswordParentPosition: {
    width: 350,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  continueFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 208,
    marginLeft: -104,
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    left: "50%",
    position: "absolute",
  },
  component5SpaceBlock: {
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
  statusAreaPosition: {
    left: "50%",
    position: "absolute",
  },
  sim1SingleSimLayout: {
    width: 20,
    overflow: "hidden",
  },
  barPosition: {
    width: 3,
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  forgetPasswordChild: {
    backgroundColor: "rgba(243, 243, 243, 0.8)",
  },
  forgetPassword1: {
    marginTop: -123.5,
    marginLeft: -84,
    fontSize: 20,
    lineHeight: 29,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  enterYourRegistered: {
    marginLeft: -137,
    top: 39,
    color: "#5a5a5a",
    width: 274,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    fontSize: FontSize.size_base,
    left: "50%",
  },
  emailAddressotp: {
    marginTop: -11,
    left: 20,
    fontSize: 14,
    color: "#969696",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: "50%",
  },
  emailAddressotpWrapper: {
    top: 127,
    height: 44,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: 350,
    marginLeft: -175,
  },
  groupChild: {
    borderRadius: 12,
    backgroundColor: "#a0235b",
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderWidth: 1,
    height: 40,
    width: 208,
    marginLeft: -104,
    top: 0,
  },
  continue: {
    marginLeft: -37,
    top: 8,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    left: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    top: 207,
    left: "50%",
    position: "absolute",
  },
  forgetPasswordParent: {
    marginTop: -184,
    height: 247,
    top: "50%",
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
  component5Child: {
    width: "92.31%",
    top: "0%",
    right: "7.69%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    marginTop: -23,
    height: "100%",
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  expandLeft: {
    left: 12,
    width: 50,
    height: 50,
    top: "50%",
    position: "absolute",
  },
  component5: {
    marginTop: -373,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  text: {
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
  forgetPassword: {
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ForgetPassword;
