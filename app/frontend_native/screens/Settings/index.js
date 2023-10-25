import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "./GlobalStyles";

const Settings = () => {
  return (
    <View style={styles.verificationCode}>
 
      <Image
        style={[styles.expandRightIcon, styles.expandIconLayout]}
        contentFit="cover"
        source={require("./assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon1, styles.expandIconLayout]}
        contentFit="cover"
        source={require("./assets/expand-right.png")}
      />
      <Image
        style={[styles.expandRightIcon2, styles.expandIconLayout]}
        contentFit="cover"
        source={require("./assets/expand-right.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.frameParent}>
          <View style={styles.shubhamsharma123gmailcomParent}>
            <Text style={[styles.shubhamsharma123gmailcom, styles.editLayout]}>
              shubhamsharma123@gmail.com
            </Text>
            <Text style={[styles.edit, styles.editLayout]}>Edit</Text>
          </View>
          <Text style={[styles.accountSettings, styles.text1Typo]}>
            Account Settings
          </Text>
        </View>
        <Pressable
          style={[styles.rectangleParent, styles.groupChildPosition]}
          onPress={() => {}}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
        </Pressable>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.text1FlexBox]}>
            +91 9955535256
          </Text>
          <Text
            style={[styles.onlyPremiumMembers, styles.groupViewLayout]}
          >{`Only Premium Members `}</Text>
        </View>
     
        <View
 style={styles.groupItem}
/>
        <Pressable
          style={[styles.expandDown, styles.expandLayout]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("./assets/expand-down.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={styles.contactPosition}>
          <Text style={[styles.contactSupport, styles.contactPosition]}>
            Contact Support
          </Text>
        </View>
        <Pressable
          style={[styles.expandDown1, styles.expandLayout]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("./assets/expand-down.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.component7, styles.component7SpaceBlock]}>
        <View style={styles.component7Child} />
        <Text style={[styles.settings, styles.submitTypo]}>Settings</Text>
        <Pressable
          style={[styles.expandLeft, styles.expandLayout]}
          onPress={() => {}}
        >
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
  component7SpaceBlock: {
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
  submitPosition: {
    top: "50%",
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
  expandIconLayout: {
    height: 31,
    width: 31,
    left: 413,
    position: "absolute",
  },
  editLayout: {
    lineHeight: 26,
    textAlign: "left",
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildPosition: {
    width: 142,
    marginLeft: -71,
    height: 42,
    left: "50%",
    position: "absolute",
  },
  submitTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text1FlexBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  groupViewLayout: {
    height: 24,
    position: "absolute",
  },
  expandLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  contactPosition: {
    width: 183,
    height: 24,
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
    width: 390,
    left: "50%",
    position: "absolute",
  },
  text: {
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
    top: 0,
    width: 390,
    marginLeft: -195,
  },
  expandRightIcon: {
    top: 142,
  },
  expandRightIcon1: {
    top: 212,
  },
  expandRightIcon2: {
    top: 288,
  },
  shubhamsharma123gmailcom: {
    left: 12,
    color: "#787878",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    top: 8,
    lineHeight: 26,
    position: "absolute",
  },
  edit: {
    left: 318,
    color: "#4294ff",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    top: 8,
    lineHeight: 26,
    position: "absolute",
  },
  shubhamsharma123gmailcomParent: {
    top: 32,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#e3e3e3",
    borderWidth: 1,
    height: 42,
    width: 351,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  accountSettings: {
    textTransform: "capitalize",
    color: Color.colorDarkslategray_100,
    lineHeight: 26,
    textAlign: "left",
  },
  frameParent: {
    top: 21,
    height: 74,
    width: 351,
    left: 20,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: "#abb1be",
    top: 0,
  },
  submit: {
    marginTop: -12,
    marginLeft: -29,
    color: Color.colorWhite,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    left: "50%",
  },
  rectangleParent: {
    top: 123,
  },
  groupParent: {
    top: 92,
    backgroundColor: "#f3f3f3",
    height: 204,
    left: 0,
    width: 390,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    width: 150,
    height: 20,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  onlyPremiumMembers: {
    top: 22,
    fontSize: 12,
    color: "#c1c1c1",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    width: 208,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  parent: {
    height: 46,
    width: 208,
    left: 20,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 52,
    height: 1,
    left: 0,
    width: 390,
    position: "absolute",
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  expandDown: {
    left: 327,
    top: 10,
  },
  groupContainer: {
    top: 319,
    height: 52,
    left: 0,
    width: 390,
    position: "absolute",
  },
  contactSupport: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray_100,
  },
  expandDown1: {
    left: 307,
    top: 0,
  },
  groupView: {
    top: 391,
    width: 331,
    left: 20,
  },
  component7Child: {
    width: "92.31%",
    top: "0%",
    right: "7.69%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  settings: {
    marginTop: -13,
    left: 45,
    lineHeight: 23,
    color: "#31425f",
    top: "50%",
    position: "absolute",
    textAlign: "left",
  },
  expandLeft: {
    left: 13,
    top: 12,
  },
  component7: {
    top: 44,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 48,
    width: 390,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  verificationCode: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Settings;
