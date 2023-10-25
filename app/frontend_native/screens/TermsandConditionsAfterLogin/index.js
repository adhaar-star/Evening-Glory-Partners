import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "./GlobalStyles";
import CheckBox from 'react-native-check-box'


const TermsAndConditionsAfterLogin = () => {
  return (
    <View style={styles.termsAndCondition}>

<View style={[styles.component5Icon]}>
   <View style={[styles.component5Child]}>
      <Image style={[styles.component5IconLayout]}
        
        contentFit="cover"
        source={require("./assets/Menu.png")}
      />
     </View>
     <View style={[styles.component5Child]}>
        <Image style={[styles.component5IconLayout]}
        
        contentFit="cover"
        source={require("./assets/Bell_pin.png")}
      />
      
      </View>
      <View style={[styles.component5Child]}>
       <Image style={[styles.component5IconLayout]}
        
        contentFit="cover"
        source={require("./assets/expressive-middle-aged-woman-posing-1.png")}
      />
      </View>
      </View>
      <View
        style={[styles.portraitWomanSmiling1Parent, styles.portraitIconLayout]}
      >
        <Image
          style={[styles.portraitWomanSmiling1Icon, styles.portraitIconLayout]}
          contentFit="cover"
          source={require("./assets/portraitwomansmiling-1.png")}
        />
        <View style={[styles.frameChild, styles.portraitIconLayout]} />
      </View>
      <View
        style={[
          styles.seniorWomanPosingAgainstBlParent,
          styles.portraitIconLayout,
        ]}
      >
        <Image
          style={[styles.portraitWomanSmiling1Icon, styles.portraitIconLayout]}
          contentFit="cover"
          source={require("./assets/seniorwomanposingagainstbluebackground-1.png")}
        />
        <View style={[styles.frameChild, styles.portraitIconLayout]} />
      </View>
      <View
        style={[
          styles.brunetteSmileyWomanPosing1Parent,
          styles.portraitIconLayout,
        ]}
      >
        <Image
          style={[styles.portraitWomanSmiling1Icon, styles.portraitIconLayout]}
          contentFit="cover"
          source={require("./assets/brunettesmileywomanposing-1.png")}
        />
        <View style={[styles.frameChild, styles.portraitIconLayout]} />
      </View>
      <View
        style={[
          styles.amazingWomanSittingIndoorsParent,
          styles.portraitIconLayout,
        ]}
      >
        <Image
          style={[
            styles.amazingWomanSittingIndoorsIcon,
            styles.portraitIconLayout,
          ]}
          contentFit="cover"
          source={require("./assets/amazingwomansittingindoorstable-1.png")}
        />
        <View style={[styles.frameChild, styles.portraitIconLayout]} />
      </View>
      <View
        style={[
          styles.positiveAttitudeLifeItIsMParent,
          styles.rectangleGroupShadowBox,
        ]}
      >
        <Image
          style={styles.positiveAttitudeLifeItIsMIcon}
          contentFit="cover"
          source={require("./assets/positiveattitudelifeitismykeyhappiness-1.png")}
        />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.matchWrapperBg]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={styles.favoriteFillIcon}
          contentFit="cover"
          source={require("./assets/favorite-fill.png")}
        />
        <Text style={styles.vaneetaRoy}>Vaneeta Roy</Text>
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
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.matchWrapperBg]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchTypo]}>90% Match</Text>
        </LinearGradient>
      </View>
      <View style={styles.homeChild}>
        <View style={styles.closeroundOverlap}>
        <Image
          style={styles.closeroundOverlapImage}
          contentFit="cover"
          source={require("./assets/Close_round.png")}
        />
        </View>
        <View style={styles.chatOverlap}>
        <Image
          style={styles.chatOverlapImage}
          contentFit="cover"
          source={require("./assets/Chat.png")}
        />
        </View>
        <View style={styles.doneroundOverlap}>
        <Image
          style={styles.doneroundOverlapImage}
          contentFit="cover"
          source={require("./assets/Done_round.png")}
        />

        </View>
       

        </View>
      <View style={styles.frameParent}>
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.homeFillParent, styles.parentPosition]}>
            <Image
              style={[styles.homeFillIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/home-fill.png")}
            />
            <Text style={styles.home}>Home</Text>
          </View>
        </View>
        <Pressable
          style={[styles.groupContainer, styles.groupPosition1]}
          onPress={() => {}}
        >
          <View style={[styles.searchAltParent, styles.parentPosition]}>
            <Image
              style={[styles.searchAltIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/search-alt.png")}
            />
            <Text style={[styles.search, styles.chatTypo]}>Search</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.groupParent, styles.groupPosition1]}
          onPress={() => {}}
        >
          <View style={[styles.requestsWrapper, styles.wrapperPosition]}>
            <Text style={[styles.requests, styles.chatTypo]}>Requests</Text>
          </View>
          <Image
            style={[styles.users1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/users-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.groupWrapperLayout]}
          onPress={() => {}}
        >
          <View style={[styles.chatWrapper, styles.wrapperPosition]}>
            <Text style={[styles.chat, styles.chatTypo]}>Chat</Text>
          </View>
          <Image
            style={[styles.chatAlt3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/chat-alt-3.png")}
          />
        </Pressable>
      </View>
      <View
        style={[styles.termsAndConditionItem, styles.component5IconPosition]}
      />
      <View style={styles.frameView}>
        <View style={[styles.groupView, styles.groupLayout]}>
          <Pressable
            style={[styles.rectangleGroup, styles.groupPosition]}
            onPress={() => {}}
          >
            <View style={[styles.groupInner, styles.groupInnerLayout]} />
            <Text style={[styles.accept, styles.acceptTypo]}>Accept</Text>
          </Pressable>
          <Pressable
            style={[styles.declineWrapper, styles.groupInnerLayout]}
            onPress={() => {}}
          >
            <Text style={[styles.decline, styles.declineTypo]}>Decline</Text>
          </Pressable>
        </View>
        <Image
          style={styles.contract11}
          contentFit="cover"
          source={require("./assets/contract-1-1.png")}
        />
        <Text style={[styles.termsAndConditions, styles.acceptTypo]}>
          Terms and conditions
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.declineTypo]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <Text style={[styles.iHaveRead, styles.yrs57Typo]}>
          I have read and agree to the term
        </Text>
         <CheckBox  style={[styles.frameIcon, styles.iconLayout]}
      
      
      />
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneWithNotchPosition: {
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  matchPosition: {
    top: 6,
    position: "absolute",
  },
  component5IconPosition: {
    top: 44,
    width: 390,
    position: "absolute",
  },
  portraitIconLayout: {
    height: 496,
    position: "absolute",
  },
  rectangleGroupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  matchWrapperBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  yrs57Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  hartwellUsaTypo: {
    top: 418,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 28,
    width: 82,
    position: "absolute",
  },
  onlinePosition: {
    left: 12,
    position: "absolute",
  },
  matchTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  groupWrapperLayout: {
    width: 88,
    height: 62,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    height: 41,
    marginTop: -19,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupPosition1: {
    backgroundColor: Color.colorGray_100,
    width: 88,
    height: 62,
    top: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  chatTypo: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    height: 15,
    top: 38,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 42,
    position: "absolute",
  },
  groupPosition: {
    width: 125,
    right: 0,
    bottom: 0,
  },
  groupInnerLayout: {
    borderRadius: Border.br_3xs,
    height: 42,
    position: "absolute",
  },
  acceptTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  declineTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
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
    width: 390,
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
    color: Color.colorBlack,
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
    justifyContent: "flex-end",
    right: 0,
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
    left: "50%",
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
    top: 0,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  component5Icon: {
    height: 48,
    left: "50%",
    marginLeft: -195,
    top: 44,
  },
  portraitWomanSmiling1Icon: {
    width: 331,
    left: 0,
    top: 0,
  },
  frameChild: {
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    width: 330,
    height: 496,
    top: 0,
  },
  portraitWomanSmiling1Parent: {
    top: 147,
    width: 330,
    height: 496,
    borderRadius: Border.br_29xl,
    marginLeft: -165,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  seniorWomanPosingAgainstBlParent: {
    top: 141,
    width: 330,
    height: 496,
    borderRadius: Border.br_29xl,
    marginLeft: -165,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  brunetteSmileyWomanPosing1Parent: {
    top: 136,
    width: 330,
    height: 496,
    borderRadius: Border.br_29xl,
    marginLeft: -165,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  amazingWomanSittingIndoorsIcon: {
    left: 0,
    width: 330,
    height: 496,
    top: 0,
  },
  amazingWomanSittingIndoorsParent: {
    top: 131,
    width: 330,
    height: 496,
    borderRadius: Border.br_29xl,
    marginLeft: -165,
    left: "50%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  positiveAttitudeLifeItIsMIcon: {
    marginTop: -260.5,
    marginLeft: -175.5,
    width: 357,
    height: 536,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 318,
    left: -1,
    height: 203,
    width: 352,
    backgroundColor: "transparent",
  },
  favoriteFillIcon: {
    left: 296,
    width: 52,
    height: 52,
    top: 14,
    position: "absolute",
  },
  vaneetaRoy: {
    top: 360,
    fontSize: 22,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    left: 11,
    fontWeight: "600",
    position: "absolute",
  },
  yrs57: {
    fontSize: FontSize.size_sm,
    top: 395,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
    left: 11,
  },
  marathi96Kuli: {
    color: Color.colorWhite,
    left: 11,
  },
  productManager: {
    left: 88,
    fontSize: FontSize.size_sm,
    top: 395,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  hartwellUsa: {
    left: 171,
    color: "#fbbc05",
  },
  groupChild: {
    borderRadius: 40,
    backgroundColor: "rgba(3, 115, 75, 0.4)",
    left: 0,
    top: 0,
  },
  online: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "left",
    top: 0,
  },
  groupItem: {
    top: 7,
    width: 8,
    height: 8,
    left: 0,
    position: "absolute",
  },
  onlineParent: {
    top: 4,
    width: 58,
    height: 21,
  },
  rectangleParent: {
    top: 446,
    left: 11,
  },
  match: {
    marginLeft: -39,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    top: 6,
    position: "absolute",
    textAlign: "left",
    left: "50%",
  },
  matchWrapper: {
    left: 14,
    borderRadius: 8,
    width: 112,
    top: 16,
    height: 34,
    overflow: "hidden",
  },
  positiveAttitudeLifeItIsMParent: {
    marginLeft: -173,
    top: 101,
    borderRadius: 37,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 351,
    height: 521,
    elevation: 16,
    shadowRadius: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  termsAndConditionChild: {
    marginLeft: -126,
    top: 574,
    borderRadius: 86,
    width: 243,
    height: 111,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  homeFillIcon: {
    marginLeft: -12,
    width: 24,
    left: "50%",
    marginTop: -20.5,
    top: "50%",
  },
  home: {
    fontSize: FontSize.size_3xs,
    top: 26,
    marginLeft: -15,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  homeFillParent: {
    width: 30,
    marginLeft: -15,
    height: 41,
    marginTop: -19,
  },
  groupWrapper: {
    backgroundColor: Color.colorMediumvioletred,
    left: 0,
  },
  searchAltIcon: {
    marginLeft: -12.5,
    marginTop: -20.5,
    top: "50%",
    left: "50%",
  },
  search: {
    marginLeft: -17.5,
    top: 26,
    color: Color.colorDarkgray,
  },
  searchAltParent: {
    marginLeft: -18,
    width: 35,
    height: 41,
    marginTop: -19,
  },
  groupContainer: {
    marginLeft: -88,
  },
  requests: {
    marginLeft: -23,
    top: 0,
  },
  requestsWrapper: {
    marginLeft: -24,
    width: 46,
  },
  users1Icon: {
    marginLeft: -12,
    width: 24,
    left: "50%",
    top: 14,
  },
  groupParent: {
    marginLeft: 1,
  },
  chat: {
    marginLeft: -12.5,
    top: 0,
  },
  chatWrapper: {
    marginLeft: -13,
    width: 25,
  },
  chatAlt3Icon: {
    left: 32,
    top: 14,
  },
  framePressable: {
    right: -1,
    backgroundColor: Color.colorWhite,
  },
  frameParent: {
    marginLeft: -174,
    top: 748,
    borderRadius: 24,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 62,
    width: 352,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  termsAndConditionItem: {
    backgroundColor: "rgba(0, 0, 0, 0.71)",
    height: 766,
    left: 0,
  },
  groupInner: {
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderWidth: 1,
    width: 125,
    right: 0,
    bottom: 0,
    backgroundColor: Color.colorMediumvioletred,
  },
  accept: {
    marginTop: -12,
    marginLeft: -27.5,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: "50%",
  },
  rectangleGroup: {
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    height: 42,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 125,
  },
  decline: {
    color: "#585867",
    fontSize: FontSize.size_sm,
  },
  declineWrapper: {
    backgroundColor: "#e3e3fa",
    width: 130,
    padding: 10,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
  },
  groupView: {
    right: 21,
    bottom: 33,
    width: 275,
  },
  contract11: {
    marginLeft: -35.5,
    width: 71,
    height: 71,
    top: 38,
    left: "50%",
    position: "absolute",
  },
  termsAndConditions: {
    marginLeft: -88.5,
    top: 123,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  loremIpsumDolor: {
    marginLeft: -132.5,
    top: 163,
    fontSize: 13,
    color: "#4e4e4e",
    width: 266,
    left: "50%",
    position: "absolute",
  },
  iHaveRead: {
    marginLeft: -107.5,
    top: 478,
    color: "#3d3c3c",
    width: 242,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  frameIcon: {
    top: 476,
    left: 21,
    borderRadius: 4,
    overflow: "hidden",
  },
  frameView: {
    marginTop: -303,
    marginLeft: -158,
    borderRadius: 12,
    width: 317,
    height: 607,
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  termsAndCondition: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  component5Icon: {
    height: 30,
    top: 14,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
    display: "flex",
    flexDirection: "row"
  },
  component5Child: {
    width: 30,
  marginLeft: 80
    
  },
  homeChild: {
    marginLeft: -126,
    top: 374,
    borderRadius: 86,
    width: 205,
    height: 73,
    left: "50%",
    backgroundColor: "#ffffff",
    position: "absolute",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row"
  },
});

export default TermsAndConditionsAfterLogin;
