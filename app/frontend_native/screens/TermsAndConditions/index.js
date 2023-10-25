import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import CheckBox from 'react-native-check-box'
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily, Padding } from "./GlobalStyles";

const TermsAndCondition = () => {
  return (
    <View style={styles.termsAndCondition}>
    
      <Text
        style={[styles.loremIpsumDolor, styles.iHaveReadTypo1]}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
 ex ea commodo consequat. Duis
 aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
,sunt in culpa qui officia deserunt mollit anim id est laborum."`}</Text>
   
   
       <CheckBox  style={[styles.termsAndConditionChild, styles.expandLeftLayout]}
      
      
        />
        <Text style={[styles.iHaveRead, styles.iHaveReadTypo]}>
        I have read and agree to the term
      </Text>
     
      <View style={[styles.component7, styles.component7Layout]}>
        <View style={styles.component7Child} />
        <Text style={[styles.termsAndConditions, styles.iHaveReadTypo]}>
          Terms and conditions
        </Text>
        <Pressable
          style={[styles.expandLeft, styles.expandLeftLayout]}
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
  component7Layout: {
    width: 390,
    marginLeft: -195,
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
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
    top: "50%",
    backgroundColor: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  iHaveReadTypo1: {
    fontSize: FontSize.size_sm,
    left: "50%",
  },
  iHaveReadTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  expandLeftLayout: {
    height: 24,
    width: 24,
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
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
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
    top: 0,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    width: 390,
    marginLeft: -195,
  },
  loremIpsumDolor: {
    marginLeft: -181,
    top: 112,
    fontFamily: FontFamily.poppinsRegular,
    color: "#4e4e4e",
    width: 353,
    textAlign: "left",
    position: "absolute",
  },
  iHaveRead: {
    marginLeft: -145,
    top: 482,
    color: "#3d3c3c",
    width: 242,
    fontSize: FontSize.size_sm,
    left: "50%",
  },
  termsAndConditionChild: {
 top: 482,
    left: 20,
    borderRadius: 4,
    overflow: "hidden",
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
  termsAndConditions: {
    marginTop: -13,
    left: 45,
    fontSize: 16,
    lineHeight: 23,
    color: "#31425f",
    top: "50%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  expandLeft: {
    left: 13,
    top: 12,
  },
  component7: {
    top: 45,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 48,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  termsAndCondition: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  checkboxContainer: {
    top: 82,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});

export default TermsAndCondition;
