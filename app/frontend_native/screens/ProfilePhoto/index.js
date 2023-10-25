import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize, Padding } from "./GlobalStyles";

const ProfilePhoto = () => {
  return (
    <View style={styles.profilePhoto}>
      <LinearGradient
        style={styles.uploadAScannedCopyOfAGovParent}
        locations={[0, 1]}
        colors={["#e8e7e8", "#f6e6ed"]}
      >
        <Text style={styles.uploadAScanned}>
          Upload a scanned copy of a Govt. issued ID.
        </Text>
        <View style={styles.submitAnyOneOfThemAadharWrapper}>
          <Text style={[styles.submitAnyOne, styles.inOrderToFlexBox]}>
            Submit any one of them (Aadhar card, pan card, passport, Driving
            License)
          </Text>
        </View>
        <Image
          style={styles.driverLicense1Icon}
          contentFit="cover"
          source={require("./assets/driverlicense-1.png")}
        />
      </LinearGradient>
      <View style={[styles.homeIndicatordark, styles.iphoneWithNotchPosition]}>
        <View style={styles.homeIndicator} />
      </View>
   
      <View style={styles.ov13bh8731} />
      <View
        style={[styles.inOrderToCreateAnAccountWrapper, styles.orderLayout]}
      >
        <Text style={[styles.inOrderTo, styles.orderLayout]}>
          In order to create an account we need to be 100% sure that you are
          you. your document is fully secure.
        </Text>
      </View>
      <Pressable
        style={[styles.expandLeft, styles.statusAreaPosition]}
        onPress={() => {}}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("./assets/expand-left.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildPosition]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.submitIdProofWrapper, styles.submitPosition]}>
          <Text
            style={[styles.submitIdProof, styles.submitPosition]}
          >{`Submit ID Proof `}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inOrderToFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    justifyContent: "center",
    textAlign: "center",
    top: 0,
  },
  iphoneWithNotchPosition: {
    marginLeft: -195,
    left: "50%",
    width: 390,
    position: "absolute",
  },
  timeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontWeight: "600",
  },
  statusAreaPosition: {
    top: "60%",
    position: "absolute",
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
  orderLayout: {
    width: 355,
    position: "absolute",
  },
  groupChildPosition: {
    width: 180,
    marginLeft: -90,
    height: 42,
    left: "50%",
    position: "absolute",
  },
  submitPosition: {
    marginLeft: -64,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  uploadAScanned: {
    marginLeft: -160,
    top: 227,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#31425f",
    width: 320,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  submitAnyOne: {
    fontSize: 14,
    justifyContent: "center",
    width: 326,
    marginLeft: -163,
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  submitAnyOneOfThemAadharWrapper: {
    top: 284,
    height: 42,
    width: 326,
    marginLeft: -163,
    left: "50%",
    position: "absolute",
  },
  driverLicense1Icon: {
    top: 109,
    left: 115,
    width: 143,
    height: 129,
    position: "absolute",
  },
  uploadAScannedCopyOfAGovParent: {
    height: 342,
    backgroundColor: "transparent",
    width: 390,
    left: 0,
    top: 0,
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
    bottom: 0,
    height: 34,
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
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
    position: "absolute",
  },
  leftArea: {
    height: 44,
    overflow: "hidden",
    flex: 1,
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
    flexDirection: "row",
    alignItems: "center",
  },
  statusArea: {
    marginTop: -4,
    marginLeft: -37.5,
    width: 76,
    height: 14,
    left: "50%",
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
    flex: 1,
  },
  iphoneWithNotch: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: -195,
    left: "50%",
    width: 390,
    position: "absolute",
    justifyContent: "center",
    top: 0,
  },
  ov13bh8731: {
    top: 269,
    left: 120,
    borderRadius: 149,
    width: 150,
    height: 152,
    position: "absolute",
  },
  inOrderTo: {
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    left: 0,
    width: 355,
  },
  inOrderToCreateAnAccountWrapper: {
    top: 534,
    left: 16,
    height: 40,
  },
  icon: {
    marginTop: -361,
    borderRadius: Border.br_5xs,
    height: "100%",
    width: "100%",
  },
  expandLeft: {
    left: 12,
    width: 50,
    height: 50,
  },
  groupChild: {
    borderRadius: 51,
    backgroundColor: "#a0235b",
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderWidth: 1,
    top: 0,
  },
  submitIdProof: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    fontWeight: "600",
  },
  submitIdProofWrapper: {
    width: 128,
    height: 24,
  },
  rectangleParent: {
    top: 383,
  },
  profilePhoto: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ProfilePhoto;
