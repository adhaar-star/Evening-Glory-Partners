import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize, Padding } from "./GlobalStyles";

const UploadPhotos = () => {
  return (
    <View style={styles.profilePhoto}>
      <LinearGradient
        style={styles.addYourPhotosToCompleteYoWrapper}
        locations={[0, 1]}
        colors={["#e8e7e8", "#f6e6ed"]}
      >
        <Text style={[styles.addYourPhotos, styles.useCameraTypo1]}>
          Add Your Photos to Complete Your Profie
        </Text>
      </LinearGradient>
      <Image
        style={[styles.profilePhotoChild, styles.statusAreaPosition]}
        contentFit="cover"
        source={require("./assets/ellipse-70.png")}
      />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("./assets/18156023-5939837-1.png")}
      />
      <View
        style={[styles.homeIndicatordark, styles.iphoneWithNotchSpaceBlock]}
      >
        <View style={styles.homeIndicator} />
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.addFromGalleryParent, styles.parentLayout]}>
          <Text style={[styles.addFromGallery, styles.textTypo]}>
            Add from Gallery
          </Text>
          <Image
            style={[styles.imgLoadBoxFillIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/img-load-box-fill.png")}
          />
        </View>
      </Pressable>
    
      <View style={styles.ov13bh8731} />
      <View style={[styles.cameraFillParent, styles.parentLayout]}>
        <Image
          style={[styles.imgLoadBoxFillIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("./assets/camera-fill.png")}
        />
        <Text style={[styles.useCamera, styles.useCameraTypo]}>Use Camera</Text>
      </View>
      <View style={[styles.addPhotosLaterParent, styles.parentLayout]}>
        <Text style={[styles.addPhotosLater, styles.useCameraTypo]}>
          Add Photos Later
        </Text>
        <Image
          style={[styles.expandRightIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("./assets/expand-right.png")}
        />
      </View>
      <Image
        style={styles.expandLeftIcon}
        contentFit="cover"
        source={require("./assets/expand-left.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  useCameraTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  statusAreaPosition: {
    left: "50%",
    position: "absolute",
  },
  iphoneWithNotchSpaceBlock: {
    marginLeft: -195,
    width: 390,
  },
  groupChildLayout: {
    height: 42,
    width: 231,
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontWeight: "600",
  },
  iconLayout: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    top: "50%",
    backgroundColor: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  useCameraTypo: {
    letterSpacing: -0.6,
    fontSize: FontSize.size_sm,
    top: 2,
    textAlign: "left",
    position: "absolute",
  },
  addYourPhotos: {
    marginLeft: -160,
    top: 153,
    fontSize: 22,
    lineHeight: 32,
    color: "#31425f",
    textAlign: "center",
    width: 320,
    left: "50%",
    position: "absolute",
  },
  addYourPhotosToCompleteYoWrapper: {
    height: 342,
    backgroundColor: "transparent",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  profilePhotoChild: {
    marginLeft: -91,
    top: 255,
    width: 182,
    height: 182,
  },
  icon: {
    top: 267,
    left: 124,
    borderRadius: 71,
    width: 143,
    height: 148,
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
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -115.5,
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
  addFromGallery: {
    marginLeft: -54,
    fontSize: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  imgLoadBoxFillIcon: {
    left: 0,
  },
  addFromGalleryParent: {
    marginLeft: -83.5,
    width: 168,
    top: "50%",
    marginTop: -12,
    left: "50%",
  },
  rectangleParent: {
    marginLeft: -115,
    top: 454,
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
    flex: 1,
  },
  iphoneWithNotch: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: -195,
    width: 390,
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
  useCamera: {
    left: 26,
    color: "#110f58",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  cameraFillParent: {
    top: 524,
    left: 140,
    width: 109,
  },
  addPhotosLater: {
    fontFamily: FontFamily.poppinsRegular,
    color: "#9198aa",
    left: 0,
  },
  expandRightIcon: {
    left: 112,
  },
  addPhotosLaterParent: {
    top: 751,
    left: 127,
    width: 136,
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
  profilePhoto: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default UploadPhotos;
