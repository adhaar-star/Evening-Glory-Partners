import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, FontFamily, Color, Padding } from "./GlobalStyles";

const Messages = () => {
  return (
    <View style={styles.chat2}>
     
      <View style={styles.imgBoxParent}>
        <Image
          style={[styles.imgBoxIcon, styles.imgBoxIconLayout]}
          contentFit="cover"
          source={require("./assets/Img_box.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("./assets/Camera_fill.png")}
        />
        <Text style={styles.messages}>Messages...</Text>
      </View>
      <LinearGradient
        style={[styles.hiWrapper, styles.hiWrapperLayout]}
        locations={[0, 1]}
        colors={["#7e42fc", "#744fb0"]}
      >
        <Text style={[styles.hi, styles.hiTypo]}>Hi</Text>
      </LinearGradient>
      <View style={[styles.hiContainer, styles.containerPosition]}>
        <Text style={[styles.hi1, styles.hiTypo]}>Hi</Text>
      </View>
      <LinearGradient
        style={[styles.whatsGoingOnWrapper, styles.whatsLayout]}
        locations={[0, 1]}
        colors={["#7e42fc", "#744fb0"]}
      >
        <Text style={[styles.whatsGoingOn, styles.whatsPosition]}>
          Whats going on
        </Text>
      </LinearGradient>
      <View style={[styles.whatsGoingOnContainer, styles.whatsLayout]}>
        <Text style={[styles.whatsGoingOn1, styles.whatsPosition]}>
          Whats going on
        </Text>
      </View>
      <Text style={[styles.today127Pm, styles.today127PmTypo]}>
        Today 1.27 PM
      </Text>
      <View style={[styles.component6, styles.component6Layout]}>
        <View style={styles.component6Child} />
        <Pressable
          style={[styles.expandLeft, styles.imgBoxIconLayout]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("./assets/expand-left.png")}
          />
        </Pressable>
        <View style={styles.luccyDesyParent}>
          <Text style={[styles.luccyDesy, styles.textTypo]}>Luccy Desy</Text>
          <Text style={[styles.active3hAge, styles.luccyDesyPosition]}>
            Active 3h age
          </Text>
        </View>
        <View
          style={[
            styles.expressiveMiddleAgedWomanPWrapper,
            styles.expressiveLayout,
          ]}
        >
          <Image
            style={[
              styles.expressiveMiddleAgedWomanPIcon,
              styles.expressiveLayout,
            ]}
            contentFit="cover"
            source={require("./assets/expressive-middle-aged-woman-posing-1.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.expressiveMiddleAgedWomanPContainer,
          styles.expressiveLayout,
        ]}
      >
        <Image
          style={[
            styles.expressiveMiddleAgedWomanPIcon,
            styles.expressiveLayout,
          ]}
          contentFit="cover"
          source={require("./assets/expressive-middle-aged-woman-posing-1.png")}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  imgBoxIconLayout: {
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  hiWrapperLayout: {
    width: 38,
    borderRadius: Border.br_7xl,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  hiTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    left: 12,
    top: 6,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  containerPosition: {
    left: 57,
    backgroundColor: Color.colorWhitesmoke,
  },
  whatsLayout: {
    width: 138,
    borderRadius: Border.br_7xl,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  whatsPosition: {
    left: 14,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 6,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  today127PmTypo: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
  },
  component6Layout: {
    width: 390,
    marginLeft: -195,
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  luccyDesyPosition: {
    left: 0,
    position: "absolute",
  },
  expressiveLayout: {
    height: 30,
    width: 30,
    top: "50%",
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
  imgBoxIcon: {
    left: 275,
    marginTop: -12,
  },
  frameChild: {
    top: 7,
    left: 312,
    width: 32,
    height: 32,
    position: "absolute",
  },
  messages: {
    marginTop: -11,
    left: 17,
    lineHeight: 22,
    color: "#787878",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  imgBoxParent: {
    marginLeft: -175,
    top: 556,
    borderRadius: 45,
    width: 350,
    height: 46,
    backgroundColor: Color.colorWhitesmoke,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  hi: {
    color: Color.colorWhite,
  },
  hiWrapper: {
    top: 446,
    left: 332,
    backgroundColor: "transparent",
  },
  hi1: {
    color: Color.colorGray_100,
  },
  hiContainer: {
    top: 319,
    width: 38,
    borderRadius: Border.br_7xl,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  whatsGoingOn: {
    color: Color.colorWhite,
  },
  whatsGoingOnWrapper: {
    top: 484,
    left: 232,
    backgroundColor: "transparent",
  },
  whatsGoingOn1: {
    color: Color.colorGray_100,
  },
  whatsGoingOnContainer: {
    top: 357,
    left: 57,
    backgroundColor: Color.colorWhitesmoke,
  },
  today127Pm: {
    marginLeft: -40,
    top: 261,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  component6Child: {
    width: "92.31%",
    top: "0%",
    right: "7.69%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    marginTop: -12,
    width: "100%",
  },
  expandLeft: {
    left: 13,
  },
  luccyDesy: {
    marginTop: -16.5,
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#31425f",
    left: 0,
    position: "absolute",
    fontSize: FontSize.size_xs,
    top: "50%",
  },
  active3hAge: {
    top: 18,
    fontSize: 10,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
  },
  luccyDesyParent: {
    left: 82,
    width: 69,
    height: 33,
    marginTop: -15,
    top: "50%",
    position: "absolute",
  },
  expressiveMiddleAgedWomanPIcon: {
    marginLeft: -15,
    marginTop: -15,
    left: "50%",
  },
  expressiveMiddleAgedWomanPWrapper: {
    left: 45,
    borderRadius: Border.br_29xl,
    width: 30,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    marginTop: -15,
  },
  component6: {
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
    left: "50%",
    position: "absolute",
  },
  expressiveMiddleAgedWomanPContainer: {
    marginTop: 19,
    left: 20,
    borderRadius: Border.br_29xl,
    width: 30,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
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
    left: "50%",
    position: "absolute",
  },
  privacyIndicatorNone: {
    left: 6,
    width: 6,
    height: 6,
    top: 6,
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
    backgroundColor: Color.colorWhite,
  },
  chat2: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Messages;
