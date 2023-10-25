import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Border, Color, Padding } from "./GlobalStyles";

const RecommendedPartnerPreference = () => {
  return (
    <View style={styles.profilePhoto}>
      <LinearGradient
        style={styles.expandLeftParent}
        locations={[0, 1]}
        colors={["#e8e7e8", "#f6e6ed"]}
      >
        <View style={[styles.expandLeft, styles.expandLeftLayout]} />
        <View style={[styles.component5, styles.editPosition]}>
          <View style={styles.component5Child} />
          <Pressable style={styles.expandLeft1} onPress={() => {}}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("./assets/expand-left.png")}
            />
          </Pressable>
          <Text
            style={[
              styles.recommendedPartnerPreference,
              styles.confirmedContinueTypo,
            ]}
          >
            Recommended Partner Preferences
          </Text>
        </View>
      </LinearGradient>

      <Text style={styles.weveCustomizedThese}>
        We've customized these preferences to ensure you receive the most
        tailored recommendations that perfectly align with your profile
      </Text>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild, styles.frameChildShadowBox]} />
          <Text style={[styles.ageRange, styles.rangeTypo]}>Age Range</Text>
          <Text style={[styles.to56, styles.to56Typo]}>50 to 56</Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("./assets/ellipse-71.png")}
            />
            <Image
              style={[styles.ageGroup21, styles.expandLeftLayout]}
              contentFit="cover"
              source={require("./assets/agegroup-2-1.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
          <View style={[styles.frameItem, styles.frameChildShadowBox]} />
          <Text style={[styles.maritalStatus, styles.rangeTypo]}>
            Marital Status
          </Text>
          <Text style={[styles.neverMarried, styles.hinduTypo]}>
            Never Married
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("./assets/ellipse-711.png")}
            />
            <Image
              style={[styles.ageGroup21, styles.expandLeftLayout]}
              contentFit="cover"
              source={require("./assets/people-1-1.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
          <View style={[styles.frameInner, styles.frameChildShadowBox]} />
          <Text style={[styles.religion, styles.rangeTypo]}>Religion</Text>
          <Text style={[styles.hindu, styles.hinduTypo]}>Hindu</Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("./assets/ellipse-712.png")}
            />
            <Image
              style={[styles.ageGroup21, styles.expandLeftLayout]}
              contentFit="cover"
              source={require("./assets/religion-1.png")}
            />
          </View>
        </View>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <View style={[styles.rectangleView, styles.frameChildShadowBox]} />
          <Text style={[styles.community, styles.rangeTypo]}>Community</Text>
          <Text style={[styles.maratha, styles.hinduTypo]}>Maratha</Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("./assets/ellipse-713.png")}
            />
            <Image
              style={[styles.community1Icon, styles.community1IconPosition]}
              contentFit="cover"
              source={require("./assets/community-1.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.frameViewPosition]}>
          <View style={[styles.frameChild1, styles.frameChildShadowBox]} />
          <Text style={[styles.motherTongue, styles.rangeTypo]}>
            Mother Tongue
          </Text>
          <Text style={[styles.marathi, styles.hinduTypo]}>Marathi</Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("./assets/ellipse-714.png")}
            />
            <Image
              style={[styles.ageGroup21, styles.expandLeftLayout]}
              contentFit="cover"
              source={require("./assets/language-1-1.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={[styles.frameChild2, styles.frameChildShadowBox]} />
          <Text
            style={[styles.heightRange, styles.to60Position]}
          >{`Height Range `}</Text>
          <Text style={[styles.to60, styles.to60Position]}>
            5’ 1’’ to 6’ 0’’
          </Text>
          <View style={[styles.ellipseParent, styles.groupChildLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("./assets/ellipse-715.png")}
            />
            <Image
              style={[styles.ageGroup21, styles.expandLeftLayout]}
              contentFit="cover"
              source={require("./assets/height-1-1.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.edit, styles.editPosition]}
          onPress={() => {}}
        >
          <Text style={styles.edit1}>edit</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild3, styles.groupLayout]} />
        <Text
          style={[styles.confirmedContinue, styles.to56Position]}
        >{`Confirmed & Continue `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  expandLeftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  editPosition: {
    left: "50%",
    position: "absolute",
  },
  confirmedContinueTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
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
  community1IconPosition: {
    left: 6,
    top: 6,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 114,
    width: 151,
    position: "absolute",
  },
  frameChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: 0,
  },
  rangeTypo: {
    fontSize: FontSize.size_xs,
    top: 55,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
  },
  to56Typo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    top: 85,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupChildLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  hinduTypo: {
    top: 84,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  frameViewPosition: {
    top: 316,
    height: 114,
    width: 151,
    position: "absolute",
  },
  to60Position: {
    marginLeft: -40.5,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 42,
    width: 230,
    left: "50%",
    position: "absolute",
  },
  to56Position: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  expandLeft: {
    top: 67,
    left: 93,
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
    borderRadius: Border.br_5xs,
    height: "100%",
    width: "100%",
  },
  expandLeft1: {
    left: 12,
    top: 7,
    width: 30,
    height: 36,
    position: "absolute",
  },
  recommendedPartnerPreference: {
    top: 11,
    left: 50,
    color: "#31425f",
    textAlign: "left",
    position: "absolute",
  },
  component5: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    height: 48,
    bottom: 0,
    left: "50%",
    marginLeft: -195,
    width: 390,
  },
  expandLeftParent: {
    height: 100,
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
    height: 34,
    bottom: 0,
    left: "50%",
    marginLeft: -195,
    width: 390,
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
    width: 6,
    height: 6,
  },
  rightArea: {
    height: 44,
    flex: 1,
  },
  iphoneWithNotch: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: -195,
    justifyContent: "center",
    width: 390,
    top: 0,
  },
  weveCustomizedThese: {
    marginLeft: -175,
    top: 118,
    fontSize: 13,
    height: 67,
    width: 351,
    color: Color.colorLightslategray,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 114,
    width: 151,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  ageRange: {
    marginLeft: -33.5,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  to56: {
    marginLeft: -29.5,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    width: 40,
  },
  ageGroup21: {
    top: 8,
    left: 8,
  },
  ellipseParent: {
    left: 55,
    top: 12,
  },
  rectangleParent: {
    left: 13,
    top: 54,
    width: 151,
  },
  frameItem: {
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 114,
    width: 151,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  maritalStatus: {
    marginLeft: -41.5,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  neverMarried: {
    marginLeft: -49.5,
  },
  rectangleGroup: {
    top: 185,
    left: 13,
  },
  frameInner: {
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 114,
    width: 151,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  religion: {
    marginLeft: -24.5,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  hindu: {
    marginLeft: -21.5,
  },
  rectangleContainer: {
    top: 186,
    left: 188,
  },
  rectangleView: {
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 114,
    width: 151,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  community: {
    marginLeft: -36.5,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  maratha: {
    marginLeft: -30.5,
  },
  community1Icon: {
    height: 28,
    width: 28,
  },
  frameView: {
    left: 13,
  },
  frameChild1: {
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 114,
    width: 151,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  motherTongue: {
    marginLeft: -45.5,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  marathi: {
    marginLeft: -27.5,
  },
  rectangleParent1: {
    left: 188,
  },
  frameChild2: {
    elevation: 14,
    shadowRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 114,
    width: 151,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  heightRange: {
    fontSize: FontSize.size_xs,
    top: 55,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
  },
  to60: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    top: 85,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleParent2: {
    left: 188,
    top: 54,
    width: 151,
  },
  edit1: {
    marginLeft: 132.5,
    color: "#1791e9",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  edit: {
    top: 12,
  },
  frameParent: {
    top: 203,
    left: 20,
    borderColor: "#e3e3e3",
    height: 497,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    width: 351,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild3: {
    marginLeft: -115,
    borderRadius: 10,
    backgroundColor: "#a0235b",
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    borderColor: "#dbdbdb",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: 0,
    width: 230,
    borderWidth: 1,
    borderStyle: "solid",
  },
  confirmedContinue: {
    marginTop: -12,
    marginLeft: -90,
    color: Color.colorWhite,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  groupPressable: {
    marginLeft: -101,
    top: 748,
  },
  profilePhoto: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default RecommendedPartnerPreference;
