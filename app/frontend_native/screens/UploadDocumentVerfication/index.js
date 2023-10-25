import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyles";

const UploadDocumentVerification = () => {
  return (
    <View style={[styles.profilePhoto, styles.id1ParentBg]}>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupBg]} />
        <View style={styles.submitIdProofWrapper}>
          <Text
            style={[styles.submitIdProof, styles.textTypo]}
          >{`Submit ID Proof `}</Text>
        </View>
      </View>
      <View
        style={[styles.inOrderToCreateAnAccountWrapper, styles.orderLayout]}
      >
        <Text style={[styles.inOrderTo, styles.inOrderToFlexBox]}>
          In order to create an account we need to be 100% sure that you are
          you. your document is fully secure.
        </Text>
      </View>
      <Image
        style={styles.expandLeftIcon}
        contentFit="cover"
        source={require("./assets/expand-left.png")}
      />
      <LinearGradient
        style={[
          styles.uploadAScannedCopyOfAGovParent,
          styles.frameChildPosition,
        ]}
        locations={[0, 1]}
        colors={["#e8e7e8", "#f6e6ed"]}
      >
        <Text style={[styles.uploadAScanned, styles.thankYouForTypo1]}>
          Upload a scanned copy of a Govt. issued ID.
        </Text>
        <View
          style={[styles.submitAnyOneOfThemAadharWrapper, styles.submitLayout]}
        >
          <Text style={[styles.submitAnyOne, styles.thankYouForTypo]}>
            Submit any one of them (Aadhar card, pan card, passport, Driving
            License)
          </Text>
        </View>
        <Image
          style={styles.driverLicense1Icon}
          contentFit="cover"
          source={require("./assets/driverlicense-1.png")}
        />
        <View style={[styles.frameChild, styles.frameChildPosition]} />
      </LinearGradient>  
      <View style={styles.ov13bh8731} />
      <View style={[styles.id1Parent, styles.id1ParentLayout]}>
        <Image
          style={styles.id1Icon}
          contentFit="cover"
          source={require("./assets/id-1.png")}
        />
        <Text style={[styles.thankYouFor, styles.thankYouForTypo]}>
          Thank you for uploading your ID
        </Text>
        <Pressable
          style={[styles.rectangleGroup, styles.rectangleLayout]}
          onPress={() => {}}
        >
          <View style={[styles.groupItem, styles.id1ParentLayout]} />
          <Text style={[styles.next, styles.textTypo]}>Next</Text>
        </Pressable>
        <View
          style={[styles.weWillVerifyYourIdAndGetWrapper, styles.willLayout]}
        >
          <Text style={[styles.weWillVerify, styles.willLayout]}>
            We will verify your id and get back to you as soon as possible
          </Text>
        </View>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  id1ParentBg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 42,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorMediumvioletred,
    height: 42,
  },
  textTypo: {
    textAlign: "left",
    fontWeight: "600",
  },
  orderLayout: {
    width: 355,
    position: "absolute",
  },
  inOrderToFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    justifyContent: "center",
    top: 0,
  },
  frameChildPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  thankYouForTypo1: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  submitLayout: {
    width: 326,
    marginLeft: -163,
  },
  thankYouForTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  iphoneWithNotchPosition: {
    marginLeft: -195,
    width: 390,
    left: "50%",
  },
  timeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  id1ParentLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  willLayout: {
    width: 259,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 51,
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
    width: 180,
    marginLeft: -90,
    left: "50%",
    position: "absolute",
  },
  submitIdProof: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "600",
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
    marginLeft: -64,
  },
  submitIdProofWrapper: {
    width: 128,
    height: 24,
    top: "50%",
    marginLeft: -64,
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 383,
    width: 180,
    marginLeft: -90,
    left: "50%",
  },
  inOrderTo: {
    fontSize: 13,
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    alignItems: "center",
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    width: 355,
    position: "absolute",
  },
  inOrderToCreateAnAccountWrapper: {
    top: 534,
    left: 16,
    height: 40,
  },
  expandLeftIcon: {
    marginTop: -361,
    left: 12,
    borderRadius: Border.br_5xs,
    width: 50,
    height: 50,
    top: "50%",
    position: "absolute",
  },
  uploadAScanned: {
    marginLeft: -160,
    top: 227,
    fontSize: 18,
    lineHeight: 26,
    width: 320,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  submitAnyOne: {
    width: 326,
    marginLeft: -163,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
  },
  submitAnyOneOfThemAadharWrapper: {
    top: 284,
    height: 42,
    position: "absolute",
    left: "50%",
  },
  driverLicense1Icon: {
    top: 109,
    left: 115,
    width: 143,
    height: 129,
    position: "absolute",
  },
  frameChild: {
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0.71)",
    height: 764,
  },
  uploadAScannedCopyOfAGovParent: {
    height: 342,
    backgroundColor: "transparent",
    top: 0,
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
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "600",
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
    justifyContent: "flex-end",
    right: 0,
    top: "50%",
  },
  statusArea: {
    marginTop: -4,
    marginLeft: -37.5,
    width: 76,
    height: 14,
    top: "50%",
    left: "50%",
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
    flex: 1,
  },
  iphoneWithNotch: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: -195,
    width: 390,
    left: "50%",
    justifyContent: "center",
    top: 0,
  },
  ov13bh8731: {
    top: 269,
    left: 120,
    borderRadius: 149,
    height: 152,
    width: 150,
    position: "absolute",
  },
  id1Icon: {
    top: 12,
    left: 109,
    width: 130,
    height: 130,
    position: "absolute",
  },
  thankYouFor: {
    marginLeft: -113.5,
    top: 141,
    lineHeight: 20,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupItem: {
    width: 150,
    right: 0,
    bottom: 0,
    backgroundColor: Color.colorMediumvioletred,
    height: 42,
  },
  next: {
    marginLeft: -18,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "600",
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    right: 95,
    bottom: 30,
    width: 150,
  },
  weWillVerify: {
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
    textAlign: "center",
    left: 0,
  },
  weWillVerifyYourIdAndGetWrapper: {
    top: 168,
    left: 41,
    height: 36,
  },
  id1Parent: {
    marginTop: -168,
    marginLeft: -170,
    width: 341,
    height: 307,
    top: "50%",
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  profilePhoto: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default UploadDocumentVerification;
