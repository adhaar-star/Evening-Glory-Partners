import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "./GlobalStyles";

const ResetPassword = () => {
  return (
    <View style={styles.resetPassword}>
      <Image
        style={styles.v960Ning111IconPosition}
        contentFit="cover"
        source={require("./assets/15847314-v960ning11-1.png")}
      />
      <View
        style={[styles.resetPasswordChild, styles.v960Ning111IconPosition]}
      />
      <View style={[styles.homeIndicatordark, styles.statusAreaPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.newPasswordParent, styles.passwordParentLayout]}>
        <Text style={styles.newPassword}>New Password</Text>
        <Image
          style={[styles.viewHideIcon, styles.viewIconLayout]}
          contentFit="cover"
          source={require("./assets/view-hide.png")}
        />
      </View>
      <View style={[styles.confirmPasswordParent, styles.passwordParentLayout]}>
        <Text style={styles.confirmPassword}>Confirm Password</Text>
        <Image
          style={[styles.viewHideIcon1, styles.viewIconLayout]}
          contentFit="cover"
          source={require("./assets/view-hide.png")}
        />
      </View>
      <Text style={[styles.resetPassword1, styles.textClr]}>
        Reset Password
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text style={[styles.resetPassword2, styles.resetPassword2Typo]}>
          Reset Password
        </Text>
      </Pressable>
      <Text
        style={[styles.pleaseEnterNew, styles.resetPassword2Typo]}
      >{`Please enter new password 
to reset`}</Text>
      <View style={[styles.component5, styles.groupChildShadowBox]}>
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
  statusAreaPosition: {
    left: "50%",
    position: "absolute",
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
  viewIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
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
  resetPassword2Typo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    left: "50%",
    position: "absolute",
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
  sim1SingleSimLayout: {
    width: 20,
    overflow: "hidden",
  },
  barPosition: {
    width: 3,
    borderRadius: Border.br_12xs,
    top: "50%",
    backgroundColor: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  resetPasswordChild: {
    backgroundColor: "rgba(243, 243, 243, 0.8)",
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
    marginLeft: -195,
    width: 390,
  },
  newPassword: {
    textAlign: "left",
    color: Color.colorDarkgray,
    fontSize: FontSize.size_sm,
    left: 20,
    marginTop: -10,
    fontFamily: FontFamily.poppinsRegular,
    top: "50%",
    position: "absolute",
  },
  viewHideIcon: {
    top: 12,
    left: 311,
  },
  newPasswordParent: {
    top: 348,
    height: 44,
  },
  confirmPassword: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    left: 20,
    top: "50%",
    marginTop: -10,
    position: "absolute",
  },
  viewHideIcon1: {
    top: 11,
    left: 313,
  },
  confirmPasswordParent: {
    top: 416,
    height: 44,
  },
  resetPassword1: {
    marginLeft: -80,
    top: 237,
    fontSize: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
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
  resetPassword2: {
    marginTop: -12,
    marginLeft: -64,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "50%",
  },
  rectangleParent: {
    top: 498,
    left: "50%",
    position: "absolute",
  },
  pleaseEnterNew: {
    marginLeft: -112,
    top: 278,
    color: "#5a5a5a",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
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
    marginTop: -273,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    top: "50%",
    marginLeft: -195,
    width: 390,
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
  resetPassword: {
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
});

export default ResetPassword;
