import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, FontFamily, Color, FontSize, Padding } from "./GlobalStyles";

const VerificationCode = () => {
  return (
    <View style={styles.verificationCode}>
      <Image
        style={styles.v960Ning111IconPosition}
        contentFit="cover"
        source={require("./assets/15847314-v960ning11-1.png")}
      />
      <View
        style={[styles.verificationCodeChild, styles.v960Ning111IconPosition]}
      />
      <View style={styles.groupParent}>
        <View style={styles.groupContainer}>
          <View style={[styles.enterYourNoWrapper, styles.enterLayout]}>
            <View style={[styles.enterYourNo, styles.enterLayout]}>
              <View style={[styles.enterYourNoChild, styles.iconLayout]} />
              <Text style={styles.text}>1</Text>
            </View>
          </View>
          <View style={[styles.enterYourNoContainer, styles.enterLayout]}>
            <View style={[styles.enterYourNo, styles.enterLayout]}>
              <View style={[styles.enterYourNoChild, styles.iconLayout]} />
              <Text style={styles.text}>1</Text>
            </View>
          </View>
          <View style={[styles.enterYourNoFrame, styles.enterLayout]}>
            <View style={[styles.enterYourNo, styles.enterLayout]}>
              <View style={[styles.enterYourNoChild, styles.iconLayout]} />
              <Text style={styles.text}>1</Text>
            </View>
          </View>
          <View style={[styles.groupView, styles.enterLayout]}>
            <View style={[styles.enterYourNo, styles.enterLayout]}>
              <View style={[styles.enterYourNoChild, styles.iconLayout]} />
              <Text style={styles.text}>1</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => {}}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.verify, styles.verifyTypo]}>Verify</Text>
        </Pressable>
        <Text style={[styles.verificationCode1, styles.verifyTypo]}>
          Verification Code
        </Text>
        <Text style={styles.pleaseEnterThe}>{`Please enter the OTP sent to your
email id/Mobile`}</Text>
        <Text style={styles.didntReceiveTheContainer}>
          <Text
            style={styles.didntReceiveThe}
          >{`Didn’t receive the OTP? `}</Text>
          <Text style={styles.resendOtp}>{`Resend OTP  `}</Text>
        </Text>
      </View>
      <View style={[styles.homeIndicatordark, styles.component5Position]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.component5, styles.component5Position]}>
        <View style={[styles.component5Child, styles.childPosition]} />
        <Pressable style={styles.expandLeft} onPress={() => {}}>
          <Image
            style={[styles.icon, styles.iconLayout]}
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
  enterLayout: {
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_5xs,
    height: "100%",
  },
  groupChildLayout: {
    height: 42,
    width: 150,
    bottom: 0,
    position: "absolute",
  },
  verifyTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  component5Position: {
    marginLeft: -195,
    left: "50%",
    width: 390,
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  timeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  verificationCodeChild: {
    backgroundColor: "rgba(243, 243, 243, 0.8)",
  },
  enterYourNoChild: {
    width: "100.3%",
    right: "-0.3%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  text: {
    marginLeft: -1,
    color: Color.colorGray_100,
    display: "flex",
    width: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  enterYourNo: {
    borderRadius: Border.br_7xs,
    left: 0,
    width: 40,
  },
  enterYourNoWrapper: {
    left: 0,
    width: 40,
  },
  enterYourNoContainer: {
    left: 50,
  },
  enterYourNoFrame: {
    left: 100,
  },
  groupView: {
    left: 150,
  },
  groupContainer: {
    top: 112,
    left: 37,
    width: 190,
    height: 40,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 12,
    backgroundColor: Color.colorMediumvioletred,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderWidth: 1,
    right: 0,
  },
  verify: {
    marginLeft: -23,
    color: '#ffff',
    textAlign: "left",
    fontSize: FontSize.size_base,
    marginTop: -12,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    right: 56,
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  verificationCode1: {
    marginTop: -139.5,
    marginLeft: -88.5,
    fontSize: 20,
    lineHeight: 29,
    color: Color.colorBlack,
    textAlign: "left",
  },
  pleaseEnterThe: {
    marginLeft: -131.5,
    top: 39,
    color: "#5a5a5a",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  didntReceiveThe: {
    color: Color.colorBlack,
  },
  resendOtp: {
    color: "#4285f4",
  },
  didntReceiveTheContainer: {
    marginLeft: -105.5,
    top: 187,
    fontSize: 12,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    top: 238,
    left: 63,
    width: 263,
    height: 279,
    position: "absolute",
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
    height: 34,
    bottom: 0,
    marginLeft: -195,
    position: "absolute",
  },
  component5Child: {
    width: "92.31%",
    right: "7.69%",
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  icon: {
    marginTop: -23,
    width: "100%",
    borderRadius: Border.br_5xs,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    top: "50%",
    position: "absolute",
  },
  text4: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    textAlign: "left",
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
    justifyContent: "center",
    left: "50%",
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
    justifyContent: "flex-end",
    right: 0,
    top: "50%",
  },
  statusArea: {
    marginTop: -4,
    marginLeft: -37.5,
    width: 76,
    height: 14,
    left: "50%",
    top: "50%",
    position: "absolute",
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
    left: "50%",
    width: 390,
    justifyContent: "center",
    top: 0,
    flexDirection: "row",
  },
  verificationCode: {
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default VerificationCode;
