import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { SelectList } from 'react-native-dropdown-select-list'
import { FontFamily, Border, Color, FontSize, Padding } from "./GlobalStyles";

const WelcomeProfile = () => {
    const country_living = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'India'},
        {key:'3', value:'USA'}

    ]

  return (
    <View style={styles.verificationCode}>
  
      <Pressable style={styles.rectangleParent} onPress={() => {}}>
        <View style={styles.groupChild} />
        <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("./assets/vector.svg")}
      />
    
      <Text style={[styles.welcomeFillYourContainer, styles.continueTypo]}>
        <Text style={styles.welcome}>{`Welcome
`}</Text>
        <Text style={styles.fillYourProfile}>
          Fill Your Profile Information
        </Text>
      </Text>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={styles.enterYourFirstNameWrapper}>
          <Text style={styles.enterYourFirst}>Enter your first name</Text>
        </View>
        <Text style={styles.firstName}>First Name</Text>
      </View>
      <View style={[styles.frameGroup, styles.frameLayout]}>
        <View style={styles.enterYourFirstNameWrapper}>
      


        <View style={styles.expandDownIcon}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={country_living} 
        save="value"
    />
    </View>

        </View>
        <Text style={styles.firstName}>Country</Text>
      </View>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View style={styles.enterYourFirstNameWrapper}>
          <Text style={styles.enterYourFirst}>Enter your first name</Text>
        </View>
        <Text style={styles.firstName}>Last Name</Text>
      </View>
      <View style={styles.dateOfBirthParent}>
        <Text style={styles.firstName}>Date of Birth</Text>
        <View style={styles.groupView}>
          <View style={[styles.ddWrapper, styles.wrapperShadowBox]}>
            <Text style={[styles.dd, styles.ddPosition]}>DD</Text>
          </View>
          <View style={[styles.mmWrapper, styles.wrapperShadowBox]}>
            <Text style={[styles.mm, styles.ddPosition]}>MM</Text>
          </View>
          <View style={styles.yyyyWrapper}>
            <Text style={[styles.yyyy, styles.ddPosition]}>YYYY</Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.expandLeft} onPress={() => {}}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("./assets/expand-left.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  continueTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIconPosition: {
    top: 0,
    width: 390,
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  continuePosition: {
    top: "50%",
    left: "50%",
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
  frameLayout: {
    height: 74,
    width: 351,
    left: 20,
    position: "absolute",
  },
  wrapperShadowBox: {
    width: 57,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_9xs,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  ddPosition: {
    marginTop: -13,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    left: "50%",
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
    marginLeft: -195,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: "#a0235b",
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    borderColor: "#dbdbdb",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    top: 0,
    height: 42,
    width: 162,
    marginLeft: -81,
    left: "50%",
    position: "absolute",
  },
  continue: {
    marginTop: -12,
    marginLeft: -37,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "50%",
    left: "50%",
  },
  rectangleParent: {
    top: 746,
    height: 42,
    width: 162,
    marginLeft: -81,
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    height: 230,
    left: 0,
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
    position: "absolute",
  },
  statusArea: {
    marginTop: -4,
    marginLeft: -37.5,
    width: 76,
    height: 14,
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
    top: 0,
    width: 390,
    marginLeft: -195,
    justifyContent: "center",
  },
  welcome: {
    fontSize: 22,
  },
  fillYourProfile: {
    fontSize: FontSize.size_base,
  },
  welcomeFillYourContainer: {
    top: 65,
    left: 60,
    color: "#31425f",
    width: 229,
    textAlign: "left",
  },
  enterYourFirst: {
    top: 8,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    left: 12,
    textAlign: "left",
    position: "absolute",
  },
  enterYourFirstNameWrapper: {
    borderColor: Color.colorGainsboro_200,
    borderRadius: Border.br_5xs,
    top: 32,
    width: 351,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    height: 42,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  firstName: {
    color: Color.colorDarkslategray_100,
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 0,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 231,
  },
  expandDownIcon: {
    top: 0,
    left: 0,
    width: "100%",
    height: 24,
    position: "absolute",
  },
  frameGroup: {
    top: 529,
  },
  frameContainer: {
    top: 327,
  },
  dd: {
    marginLeft: -10.5,
  },
  ddWrapper: {
    left: 0,
  },
  mm: {
    marginLeft: -12.5,
  },
  mmWrapper: {
    left: 71,
  },
  yyyy: {
    marginLeft: -16,
  },
  yyyyWrapper: {
    left: 142,
    width: 84,
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_9xs,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupView: {
    height: 52,
    width: 226,
    top: 32,
    left: 0,
    position: "absolute",
  },
  dateOfBirthParent: {
    top: 423,
    height: 84,
    width: 226,
    left: 20,
    position: "absolute",
  },
  icon: {
    marginTop: -360,
    height: "100%",
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  expandLeft: {
    width: 50,
    height: 50,
    left: 12,
    top: "50%",
    position: "absolute",
  },
  verificationCode: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default WelcomeProfile;
