import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyles";

const UsersList = () => {
  return (
    <View style={styles.profilePhoto}>
      <View
        style={[styles.positiveAttitudeLifeItIsMParent, styles.parentLayout]}
      >
        <Image
          style={[styles.positiveAttitudeLifeItIsMIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("./assets/positiveattitudelifeitismykeyhappiness-1.png")}
        />
        <LinearGradient
          style={[styles.frameChild, styles.frameChildLayout]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={[styles.favoriteFillIcon, styles.favoriteIconPosition]}
          contentFit="cover"
          source={require("./assets/favorite-fill1.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyClr]}>
          Vaneeta Roy
        </Text>
        <Text style={[styles.yrs57, styles.yrs57Typo]}>50 yrs. 5’ 7”</Text>
        <Text style={[styles.marathi96Kuli, styles.hartwellUsaTypo]}>
          Marathi, 96 Kuli Marath
        </Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={[styles.hartwellUsa, styles.hartwellUsaTypo]}>
          Hartwell, USA
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.matchWrapperLayout]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
        </LinearGradient>
        <TouchableHighlight >
        <View style={styles.sendRequestWrapper}>
      
          <Text style={[styles.sendRequest, styles.yrs57Typo]}>
            Send Request
          </Text>
          
        </View>
        </TouchableHighlight>
      </View>
      <View
        style={[styles.amazingWomanSittingIndoorsParent, styles.parentLayout]}
      >
        <Image
          style={[styles.amazingWomanSittingIndoorsIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("./assets/amazingwomansittingindoorstable-1.png")}
        />
        <LinearGradient
          style={[styles.frameChild, styles.frameChildLayout]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={[styles.favoriteFillIcon, styles.favoriteIconPosition]}
          contentFit="cover"
          source={require("./assets/favorite-fill.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyClr]}>
          Vaneeta Roy
        </Text>
        <Text style={[styles.yrs57, styles.yrs57Typo]}>50 yrs. 5’ 7”</Text>
        <Text style={[styles.marathi96Kuli, styles.hartwellUsaTypo]}>
          Marathi, 96 Kuli Marath
        </Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={[styles.hartwellUsa, styles.hartwellUsaTypo]}>
          Hartwell, USA
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.matchWrapperLayout]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
        </LinearGradient>
        <TouchableHighlight >
        <View style={styles.sendRequestWrapper}>
       
          <Text style={[styles.sendRequest, styles.yrs57Typo]}>
            Send Request
          </Text>
         
        </View>
        </TouchableHighlight >
      </View>
      <View
        style={[styles.seniorWomanPosingAgainstBlParent, styles.parentLayout]}
      >
        <Image
          style={[styles.seniorWomanPosingAgainstBlIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("./assets/seniorwomanposingagainstbluebackground-1.png")}
        />
        <LinearGradient
          style={[styles.frameChild, styles.frameChildLayout]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={[styles.favoriteFillIcon2, styles.favoriteIconPosition]}
          contentFit="cover"
          source={require("./assets/favorite-fill.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyClr]}>
          Vaneeta Roy
        </Text>
        <Text style={[styles.yrs57, styles.yrs57Typo]}>50 yrs. 5’ 7”</Text>
        <Text style={[styles.marathi96Kuli, styles.hartwellUsaTypo]}>
          Marathi, 96 Kuli Marath
        </Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={[styles.hartwellUsa, styles.hartwellUsaTypo]}>
          Hartwell, USA
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.matchWrapperLayout]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
        </LinearGradient>
        <View style={styles.sendRequestWrapper}>
          <Text style={[styles.sendRequest, styles.yrs57Typo]}>
            Send Request
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View
          style={[
            styles.brunetteSmileyWomanPosing1Wrapper,
            styles.frameChildLayout,
          ]}
        >
          <Image
            style={[
              styles.brunetteSmileyWomanPosing1Icon,
              styles.groupPosition,
            ]}
            contentFit="cover"
            source={require("./assets/brunettesmileywomanposing-1.png")}
          />
        </View>
        <LinearGradient
          style={[styles.frameChild, styles.frameChildLayout]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={[styles.favoriteFillIcon2, styles.favoriteIconPosition]}
          contentFit="cover"
          source={require("./assets/favorite-fill.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyClr]}>
          Vaneeta Roy
        </Text>
        <Text style={[styles.yrs57, styles.yrs57Typo]}>50 yrs. 5’ 7”</Text>
        <Text style={[styles.marathi96Kuli, styles.hartwellUsaTypo]}>
          Marathi, 96 Kuli Marath
        </Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={[styles.hartwellUsa, styles.hartwellUsaTypo]}>
          Hartwell, USA
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={[styles.groupItem, styles.groupPosition]}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.matchWrapperLayout]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
        </LinearGradient>
        <View style={styles.sendRequestWrapper}>
          <Text style={[styles.sendRequest, styles.yrs57Typo]}>
            Send Request
          </Text>
        </View>
      </View>
      <View style={styles.profilePhotoChild} />
      <View style={[styles.homeIndicatordark, styles.component6Layout]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.component6, styles.component6Layout]}>
        <View style={styles.component6Child} />
        <Pressable style={styles.expandLeft} onPress={() => {}}>
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
  parentLayout: {
    height: 395,
    width: 351,
  },
  iconPosition: {
    top: "50%",
    left: "50%",
  },
  frameChildLayout: {
    width: 352,
    position: "absolute",
  },
  favoriteIconPosition: {
    top: 14,
    position: "absolute",
  },
  vaneetaRoyClr: {
    color: Color.colorWhite,
    left: 11,
  },
  yrs57Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  hartwellUsaTypo: {
    top: 288,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChildLayout: {
    height: 28,
    width: 82,
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  onlinePosition: {
    left: 12,
    position: "absolute",
  },
  matchWrapperLayout: {
    height: 34,
    position: "absolute",
  },
  matchPosition: {
    top: 6,
    position: "absolute",
  },
  component6Layout: {
    width: 390,
    marginLeft: -195,
    backgroundColor: Color.colorWhite,
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
    backgroundColor: Color.colorBlack,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  positiveAttitudeLifeItIsMIcon: {
    width: 357,
    height: 536,
    marginLeft: -175.5,
    marginTop: -197.5,
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 176,
    left: -1,
    height: 219,
    backgroundColor: "transparent",
  },
  favoriteFillIcon: {
    left: 296,
    width: 52,
    height: 52,
  },
  vaneetaRoy: {
    top: 230,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    fontWeight: "600",
    position: "absolute",
  },
  yrs57: {
    textAlign: "left",
    top: 265,
    fontWeight: "500",
    position: "absolute",
    left: 11,
  },
  marathi96Kuli: {
    color: Color.colorWhite,
    left: 11,
  },
  productManager: {
    left: 88,
    textAlign: "left",
    top: 265,
    fontWeight: "500",
    position: "absolute",
  },
  hartwellUsa: {
    left: 171,
    color: Color.colorOrange,
  },
  groupChild: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSeagreen_200,
    top: 0,
    height: 28,
    width: 82,
  },
  online: {
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  groupItem: {
    top: 7,
    width: 8,
    height: 8,
  },
  onlineParent: {
    top: 4,
    width: 58,
    height: 21,
  },
  rectangleParent: {
    top: 316,
    left: 11,
    position: "absolute",
  },
  match: {
    marginLeft: -39,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 6,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  matchWrapper: {
    left: 14,
    borderRadius: Border.br_5xs,
    width: 112,
    top: 16,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  sendRequest: {
    top: 9,
    left: 19,
    textAlign: "left",
    position: "absolute",
  },
  sendRequestWrapper: {
    top: 337,
    left: 197,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorSeagreen_100,
    width: 139,
    height: 40,
    overflow: "hidden",
    position: "absolute",
  },
  positiveAttitudeLifeItIsMParent: {
    top: 116,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: 351,
    backgroundColor: Color.colorWhite,
    marginLeft: -177,
  },
  amazingWomanSittingIndoorsIcon: {
    width: 353,
    height: 531,
    marginLeft: -175.5,
    marginTop: -197.5,
    top: "50%",
    position: "absolute",
  },
  amazingWomanSittingIndoorsParent: {
    top: 539,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: 351,
    backgroundColor: Color.colorWhite,
    marginLeft: -177,
  },
  seniorWomanPosingAgainstBlIcon: {
    marginLeft: -175.5,
    marginTop: -197.5,
    top: "50%",
    position: "absolute",
    height: 395,
    width: 351,
  },
  favoriteFillIcon2: {
    left: 299,
    width: 46,
    height: 46,
  },
  seniorWomanPosingAgainstBlParent: {
    marginLeft: -175,
    top: 962,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: 351,
    backgroundColor: Color.colorWhite,
  },
  brunetteSmileyWomanPosing1Icon: {
    width: 331,
    height: 496,
    top: 0,
  },
  brunetteSmileyWomanPosing1Wrapper: {
    marginTop: -232.5,
    marginLeft: -176.5,
    borderRadius: 48,
    height: 430,
    top: "50%",
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameParent: {
    marginLeft: -174,
    top: 1385,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: 351,
    backgroundColor: Color.colorWhite,
  },
  profilePhotoChild: {
    top: 1972,
    left: 20,
    width: 350,
    height: 80,
    overflow: "hidden",
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
    position: "absolute",
    left: "50%",
    marginLeft: -195,
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
    width: "100%",
  },
  expandLeft: {
    left: 13,
    top: 12,
    width: 24,
    height: 24,
    position: "absolute",
  },
  component6: {
    top: 44,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    marginLeft: -195,
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
    left: 6,
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
    width: 390,
    marginLeft: -195,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  profilePhoto: {
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default UsersList;
