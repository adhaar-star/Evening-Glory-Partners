import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyles";

const UploadDocument = () => {
  return (
    <View style={[styles.profilePhoto, styles.groupParentBg]}>
        
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.submitIdProofWrapper, styles.submitPosition1]}>
          <Text
            style={[styles.submitIdProof, styles.textTypo]}
          >{`Submit ID Proof `}</Text>
        </View>
      </View>
      <View
        style={[
          styles.inOrderToCreateAnAccountWrapper,
          styles.fileDockParentPosition,
        ]}
      >
        <Text style={[styles.inOrderTo, styles.inOrderToFlexBox]}>
          In order to create an account we need to be 100% sure that you are
          you. your document is fully secure.
        </Text>
      </View>
      <LinearGradient
        style={[
          styles.uploadAScannedCopyOfAGovParent,
          styles.frameParentPosition,
        ]}
        locations={[0, 1]}
        colors={["#e8e7e8", "#f6e6ed"]}
      >
        <Text style={[styles.uploadAScanned, styles.uploadTypo]}>
          Upload a scanned copy of a Govt. issued ID.
        </Text>
        <View
          style={[
            styles.submitAnyOneOfThemAadharWrapper,
            styles.submitPosition,
          ]}
        >
          <Text style={[styles.submitAnyOne, styles.submitAnyOneTypo]}>
            Submit any one of them (Aadhar card, pan card, passport, Driving
            License)
          </Text>
        </View>
        <Image
          style={styles.driverLicense1Icon}
          contentFit="cover"
          source={require("./assets/driverlicense-1.png")}
        />
        <View style={[styles.frameChild, styles.frameParentPosition]} />
      </LinearGradient>
      <Image
        style={styles.expandLeftIcon}
        contentFit="cover"
        source={require("./assets/expand-left.png")}
      />
    
     
      <View style={[styles.groupParent, styles.frameParentPosition]}>
        <Pressable
          style={[styles.fileDockParent, styles.fileDockParentPosition]}
          onPress={() => {}}
        >
          <Image
            style={[styles.fileDockIcon, styles.inOrderToPosition]}
            contentFit="cover"
            source={require("./assets/file-dock.png")}
          />
          <Text style={[styles.uploadDocument, styles.submitAnyOneTypo]}>
            Upload Document
          </Text>
        </Pressable>
        <Pressable style={styles.cameraFillParent} onPress={() => {}}>
          <Image
            style={[styles.fileDockIcon, styles.inOrderToPosition]}
            contentFit="cover"
            source={require("./assets/camera-fill.png")}
          />
          <Text style={[styles.uploadDocument, styles.submitAnyOneTypo]}>
            Take Photo
          </Text>
        </Pressable>
   
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentBg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 42,
    position: "absolute",
  },
  submitPosition1: {
    marginLeft: -64,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  fileDockParentPosition: {
    left: 16,
    position: "absolute",
  },
  inOrderToFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    justifyContent: "center",
    textAlign: "center",
    top: 0,
  },
  frameParentPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  uploadTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  submitPosition: {
    width: 326,
    marginLeft: -163,
    left: "50%",
  },
  submitAnyOneTypo: {
    fontSize: FontSize.size_sm,
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
  inOrderToPosition: {
    left: 0,
    position: "absolute",
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
    width: 180,
    marginLeft: -90,
    height: 42,
    left: "50%",
  },
  submitIdProof: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    top: "50%",
    marginLeft: -64,
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  submitIdProofWrapper: {
    width: 128,
    height: 24,
    top: "50%",
  },
  rectangleParent: {
    top: 383,
    width: 180,
    marginLeft: -90,
    height: 92,
    left: "50%",
  },
  inOrderTo: {
    fontSize: 13,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    width: 355,
  },
  inOrderToCreateAnAccountWrapper: {
    top: 734,
    height: 40,
    width: 355,
  },
  expandLeftIcon: {
    marginTop: -261,
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
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  submitAnyOne: {
    width: 326,
    marginLeft: -163,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
  },
  submitAnyOneOfThemAadharWrapper: {
    top: 284,
    height: 42,
    position: "absolute",
  },
  driverLicense1Icon: {
    top: 109,
    left: 115,
    width: 143,
    height: 129,
    position: "absolute",
  },
  frameChild: {
    top: 37,
    backgroundColor: "rgba(0, 0, 0, 0.71)",
    height: 773,
  },
  uploadAScannedCopyOfAGovParent: {
    height: 542,
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
    bottom: 0,
    height: 34,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
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
    width: 150,
    height: 152,
    position: "absolute",
  },
  fileDockIcon: {
    width: 24,
    height: 24,
    top: 0,
  },
  uploadDocument: {
    marginTop: -10,
    left: 34,
    lineHeight: 20,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    top: "50%",
  },
  fileDockParent: {
    top: 24,
    width: 163,
    height: 24,
  },
  cameraFillParent: {
    top: 72,
    left: 17,
    width: 113,
    height: 24,
    position: "absolute",
  },
  frameItem: {
    top: 61,
    height: 2,
  },
  groupParent: {
    top: 467,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    height: 143,
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

export default UploadDocument;
