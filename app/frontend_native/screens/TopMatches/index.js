import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Border, Color, Padding } from "./GlobalStyles";

const TopMatches = () => {
  return (
    <View style={styles.home}>
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
      <View style={styles.positiveAttitudeLifeItIsMParent}>
        <Image
          style={styles.positiveAttitudeLifeItIsMIcon}
          contentFit="cover"
          source={require("./assets/positiveattitudelifeitismykeyhappiness-1.png")}
        />
        <LinearGradient
          style={styles.rectangleLineargradient}
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
        <Text style={styles.marathi96Kuli}>Marathi, 96 Kuli Marath</Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={styles.hartwellUsa}>Hartwell, USA</Text>
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
          style={[styles.matchWrapper, styles.matchWrapperLayout]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
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
      <Text style={[styles.topMatches, styles.viewAllLayout]}>Top Matches</Text>
      <Text style={[styles.viewAll, styles.viewAllTypo]}>View All</Text>
      <View style={styles.frameParent}>
        <Pressable
          style={[
            styles.seniorWomanPosingAgainstBlGroup,
            styles.seniorShadowBox,
          ]}
          onPress={() => {}}
        >
          <Image
            style={[
              styles.seniorWomanPosingAgainstBlIcon1,
              styles.seniorIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/senior-woman-posing-against-blue-background-11.png")}
          />
          <Text style={[styles.yrs571, styles.yrs571Typo]}>50 yrs. 5’ 7”</Text>
          <Text style={[styles.marathi96Kuli1, styles.yrs571Typo]}>
            Marathi, 96 Kuli Marath
          </Text>
          <Text style={styles.hartwellUsa1}>Hartwell, USA</Text>
          <View style={styles.vaneetaRoyWrapper}>
            <Text style={styles.vaneetaRoy1}>Vaneeta Roy</Text>
          </View>
          <View style={styles.sendRequestWrapper}>
            <Text style={[styles.sendRequest, styles.viewAllTypo]}>
              Send Request
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[
            styles.seniorWomanPosingAgainstBlContainer,
            styles.seniorShadowBox,
          ]}
          onPress={() => {}}
        >
          <Image
            style={[
              styles.seniorWomanPosingAgainstBlIcon1,
              styles.seniorIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/senior-woman-posing-against-blue-background-12.png")}
          />
          <Text style={[styles.yrs571, styles.yrs571Typo]}>50 yrs. 5’ 7”</Text>
          <Text style={[styles.marathi96Kuli1, styles.yrs571Typo]}>
            Marathi, 96 Kuli Marath
          </Text>
          <Text style={styles.hartwellUsa1}>Hartwell, USA</Text>
          <View style={styles.vaneetaRoyWrapper}>
            <Text style={styles.vaneetaRoy1}>Vaneeta Roy</Text>
          </View>
          <View style={styles.sendRequestWrapper}>
            <Text style={[styles.sendRequest, styles.viewAllTypo]}>
              Send Request
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.framePressableShadowBox]}
          onPress={() => {}}
        >
          <Image
            style={[
              styles.seniorWomanPosingAgainstBlIcon3,
              styles.seniorIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/senior-woman-posing-against-blue-background-11.png")}
          />
          <Text style={[styles.yrs571, styles.yrs571Typo]}>50 yrs. 5’ 7”</Text>
          <Text style={[styles.marathi96Kuli1, styles.yrs571Typo]}>
            Marathi, 96 Kuli Marath
          </Text>
          <Text style={styles.hartwellUsa1}>Hartwell, USA</Text>
          <View style={styles.vaneetaRoyWrapper}>
            <Text style={styles.vaneetaRoy1}>Vaneeta Roy</Text>
          </View>
          <View style={styles.sendRequestWrapper}>
            <Text style={[styles.sendRequest, styles.viewAllTypo]}>
              Send Request
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[
            styles.seniorWomanPosingAgainstBlParent1,
            styles.framePressableShadowBox,
          ]}
          onPress={() => {}}
        >
          <Image
            style={[
              styles.seniorWomanPosingAgainstBlIcon3,
              styles.seniorIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/senior-woman-posing-against-blue-background-12.png")}
          />
          <Text style={[styles.yrs571, styles.yrs571Typo]}>50 yrs. 5’ 7”</Text>
          <Text style={[styles.marathi96Kuli1, styles.yrs571Typo]}>
            Marathi, 96 Kuli Marath
          </Text>
          <Text style={styles.hartwellUsa1}>Hartwell, USA</Text>
          <View style={styles.vaneetaRoyWrapper}>
            <Text style={styles.vaneetaRoy1}>Vaneeta Roy</Text>
          </View>
          <View style={styles.sendRequestWrapper}>
            <Text style={[styles.sendRequest, styles.viewAllTypo]}>
              Send Request
            </Text>
          </View>
        </Pressable>
      </View>
    
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
      
     
      <View style={styles.frameGroup}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.homeFillParent, styles.parentPosition]}>
            <Image
              style={[styles.homeFillIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/home-fill.png")}
            />
            <Text style={styles.home1}>Home</Text>
          </View>
        </View>
        <Pressable
          style={[styles.groupContainer, styles.groupPosition]}
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
          style={[styles.groupParent, styles.groupPosition]}
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
          style={[styles.groupParent1, styles.groupLayout]}
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
      <View style={[styles.homeIndicatordark, styles.component5IconSpaceBlock]}>
        <View style={[styles.homeIndicator, styles.bar1Position]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portraitIconLayout: {
    height: 496,
    position: "absolute",
  },
  yrs57Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
  matchWrapperLayout: {
    height: 34,
    position: "absolute",
  },
  matchPosition: {
    top: 6,
    position: "absolute",
  },
  viewAllLayout: {
    lineHeight: 26,
    textAlign: "left",
  },
  viewAllTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  seniorShadowBox: {
    height: 232,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 182,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  seniorIconPosition: {
    height: 113,
    marginLeft: -91,
    width: 182,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  yrs571Typo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    left: 9,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  framePressableShadowBox: {
    top: -2,
    height: 232,
    width: 182,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  component5IconSpaceBlock: {
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
  sim1SingleSimLayout: {
    width: 20,
    overflow: "hidden",
  },
  barLayout: {
    width: 3,
    borderRadius: Border.br_12xs,
    top: "50%",
  },
  bar1Position: {
    height: 5,
    backgroundColor: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 88,
    height: 62,
    top: 0,
    overflow: "hidden",
    position: "absolute",
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
  groupPosition: {
    backgroundColor: Color.colorGray_200,
    width: 88,
    height: 62,
    top: 0,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  chatTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
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
  portraitWomanSmiling1Icon: {
    width: 331,
    left: 0,
    top: 0,
  },
  frameChild: {
    backgroundColor: Color.colorWhitesmoke,
    left: 0,
    top: 0,
    width: 330,
    height: 496,
  },
  portraitWomanSmiling1Parent: {
    top: 147,
    overflow: "hidden",
    width: 330,
    height: 496,
    borderRadius: Border.br_29xl,
    marginLeft: -165,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  seniorWomanPosingAgainstBlParent: {
    top: 141,
    overflow: "hidden",
    width: 330,
    height: 496,
    borderRadius: Border.br_29xl,
    marginLeft: -165,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  brunetteSmileyWomanPosing1Parent: {
    top: 136,
    overflow: "hidden",
    width: 330,
    height: 496,
    borderRadius: Border.br_29xl,
    marginLeft: -165,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  amazingWomanSittingIndoorsIcon: {
    left: 0,
    top: 0,
    width: 330,
    height: 496,
  },
  amazingWomanSittingIndoorsParent: {
    top: 131,
    overflow: "hidden",
    width: 330,
    height: 496,
    borderRadius: Border.br_29xl,
    marginLeft: -165,
    left: "50%",
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
    backgroundColor: "transparent",
    width: 352,
    position: "absolute",
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
    fontWeight: "600",
    left: 11,
    position: "absolute",
  },
  yrs57: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    top: 395,
    fontWeight: "500",
    position: "absolute",
    left: 11,
  },
  marathi96Kuli: {
    top: 418,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    left: 11,
    position: "absolute",
  },
  productManager: {
    left: 88,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    top: 395,
    fontWeight: "500",
    position: "absolute",
  },
  hartwellUsa: {
    left: 171,
    color: Color.colorOrange,
    top: 418,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 40,
    backgroundColor: "rgba(3, 115, 75, 0.4)",
    left: 0,
    top: 0,
  },
  online: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
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
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    top: 6,
    fontWeight: "600",
    left: "50%",
  },
  matchWrapper: {
    left: 14,
    width: 112,
    borderRadius: Border.br_5xs,
    height: 34,
    top: 16,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  positiveAttitudeLifeItIsMParent: {
    marginLeft: -173,
    top: 101,
    borderRadius: 37,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 351,
    height: 521,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
  topMatches: {
    marginTop: 258,
    fontSize: 18,
    color: "#31425f",
    left: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  viewAll: {
    top: 680,
    left: 317,
    color: "#787878",
    lineHeight: 26,
    textAlign: "left",
  },
  seniorWomanPosingAgainstBlIcon1: {
    marginTop: -116,
  },
  yrs571: {
    top: 115,
  },
  marathi96Kuli1: {
    top: 137,
  },
  hartwellUsa1: {
    top: 159,
    left: 2,
    fontSize: FontSize.size_xs,
    color: Color.colorOrange,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vaneetaRoy1: {
    marginTop: -10.5,
    left: 9,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: "50%",
    position: "absolute",
  },
  vaneetaRoyWrapper: {
    top: 85,
    backgroundColor: Color.colorDarkslategray_100,
    height: 25,
    width: 182,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  sendRequest: {
    marginTop: -11,
    marginLeft: -48,
    color: Color.colorDodgerblue,
    textAlign: "center",
    top: "50%",
    left: "50%",
  },
  sendRequestWrapper: {
    marginLeft: -59,
    top: 188,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorDodgerblue,
    borderWidth: 1,
    width: 118,
    height: 30,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  seniorWomanPosingAgainstBlGroup: {
    left: 20,
  },
  seniorWomanPosingAgainstBlContainer: {
    left: 218,
  },
  seniorWomanPosingAgainstBlIcon3: {
    marginTop: -119,
  },
  framePressable: {
    left: 416,
  },
  seniorWomanPosingAgainstBlParent1: {
    left: 614,
  },
  frameParent: {
    top: 720,
    height: 360,
    width: 390,
    left: 0,
    position: "absolute",
  },
  component5Icon: {
    top: 44,
    height: 48,
    left: "50%",
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
    backgroundColor: Color.colorBlack,
    width: 3,
    borderRadius: Border.br_12xs,
    left: "50%",
    position: "absolute",
  },
  bar3: {
    marginTop: -3.6,
    marginLeft: 1.05,
    height: 10,
    backgroundColor: Color.colorBlack,
    width: 3,
    borderRadius: Border.br_12xs,
    left: "50%",
    position: "absolute",
  },
  bar2: {
    marginTop: -1,
    marginLeft: -4.25,
    height: 7,
    backgroundColor: Color.colorBlack,
    width: 3,
    borderRadius: Border.br_12xs,
    left: "50%",
    position: "absolute",
  },
  bar1: {
    marginTop: 1.4,
    marginLeft: -9.55,
    width: 3,
    borderRadius: Border.br_12xs,
    top: "50%",
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
    backgroundColor: Color.colorWhite,
  },
  homeFillIcon: {
    marginLeft: -12,
    width: 24,
    left: "50%",
    marginTop: -20.5,
    top: "50%",
  },
  home1: {
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
    backgroundColor: "#a0235b",
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
  groupParent1: {
    right: -1,
    backgroundColor: Color.colorWhite,
  },
  frameGroup: {
    marginLeft: -174,
    top: 741,
    borderRadius: 24,
    height: 62,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 352,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    overflow: "hidden",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
  },
  homeIndicatordark: {
    bottom: 0,
    height: 34,
    position: "absolute",
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  home: {
    width: "100%",
    height: 844,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  closeroundOverlap: {
    backgroundColor: "#ffffff",
    borderRadius: 186,
    shadowColor: '#0000001f',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    height: "52px",
    marginLeft: "29px",
    top: "20px",
    width: "52px",
    flex: 0.3
  },
  closeroundOverlapImage: {
    height: 34,
    left: 18,
    position: "relative",
    top: 18,
    width: 34
  },
  doneroundOverlapImage: {
    height: 34,
    left: 8,
    position: "relative",
    top: 8,
    width: 34
  },
  chatOverlapImage: {
    height: 34,
    left: 8,
    position: "relative",
    top: 8,
    width: 34
  },
  doneroundOverlap: {
    backgroundColor: "#03734b",
    borderRadius: 186,
    height: "52px",
    marginLeft: "145px",
    top: "11px",
    width: "52px",
    flex: 0.3
  },
  chatOverlap: {
    backgroundColor: "#110f58",
    borderRadius: 186,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    height: "52px",
    marginLeft: "77px",
    top: "10px",
    width: "52px",
    flex: 0.3
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
  component5IconLayout: {
    width: 30,
    height: 30,
  },
  
});

export default TopMatches;
