import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize, Padding } from "./GlobalStyles";

const Home = () => {
  return (
    <View style={[styles.home, styles.homeLayout]}>
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
              style={[styles.groupItem, styles.groupItemPosition]}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={styles.matchWrapper}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={styles.match}>90% Match</Text>
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
            <Text style={styles.home1}>Home</Text>
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
      <View style={styles.homeItem} />
      <View style={styles.aMenuSlide}>
        <View style={[styles.anishMehtaParent, styles.homeLayout]}>
          <Text style={[styles.anishMehta, styles.text1Typo]}>Anish Mehta</Text>
          <Pressable
            style={[styles.couple11Parent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.couple11, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/couple-1-1.png")}
            />
            <Text style={[styles.partnerPreferences, styles.aboutUsTypo]}>
              Partner Preferences
            </Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.infoParent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.infoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/info.png")}
            />
            <Text style={[styles.aboutUs, styles.aboutUsTypo]}>About Us</Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.infoGroup, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.infoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/info.png")}
            />
            <Text style={[styles.termsAndCondition, styles.aboutUsTypo]}>
              Terms and Condition
            </Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <View style={[styles.setting1Parent, styles.infoParentLayout]}>
     
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </View>
          <Pressable
            style={[styles.onButtonParent, styles.infoParentLayout]}
            onPress={() => {}}
          >
         
            <Text style={[styles.aboutUs, styles.aboutUsTypo]}>Log out</Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <View style={styles.groupPosition}>
            <LinearGradient
              style={[styles.groupInner, styles.groupPosition]}
              locations={[0, 1]}
              colors={["#a0235b", "#110f58"]}
            />
            <Text style={[styles.text1, styles.text1FlexBox]} />
            <Pressable
              style={[styles.editProfile, styles.groupFramePosition]}
              onPress={() => {}}
            >
              <Text style={[styles.editProfile1, styles.text1FlexBox]}>
                Edit Profile
              </Text>
            </Pressable>
            <View style={[styles.groupFrame, styles.groupFramePosition]}>
              <View
                style={[
                  styles.premiumServices1Parent,
                  styles.groupItemPosition,
                ]}
              >
                <Image
                  style={styles.premiumServices1Icon}
                  contentFit="cover"
                  source={require("./assets/premiumservices-1.png")}
                />
                <Text
                  style={[styles.upgradeToPremium, styles.yrs57Typo]}
                >{`Upgrade to Premium `}</Text>
              </View>
            </View>
          </View>
          <View style={styles.logoHereParent}>
            <Text style={[styles.logoHere, styles.text1Typo]}>Logo Here</Text>
            <Text style={[styles.shubhamSharma, styles.text1Typo]}>
              Shubham Sharma
            </Text>
          </View>
          <View style={[styles.user41Wrapper, styles.user41Layout]}>
            <Image
              style={[styles.user41, styles.user41Layout]}
              contentFit="cover"
              source={require("./assets/user-4-1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  iphoneWithNotchPosition: {
    width: 390,
    marginLeft: -195,
    left: "50%",
  },
  timeFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  barPosition: {
    width: 3,
    borderRadius: Border.br_12xs,
    top: "50%",
    backgroundColor: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  portraitIconLayout: {
    height: 496,
    position: "absolute",
  },
  yrs57Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "left",
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
    width: 82,
    height: 28,
    position: "absolute",
  },
  onlinePosition: {
    left: 12,
    position: "absolute",
  },
  groupItemPosition: {
    top: 7,
    position: "absolute",
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
  text1Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  infoParentLayout: {
    height: 53,
    backgroundColor: Color.colorLavender,
    width: 298,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  aboutUsTypo: {
    color: Color.colorDimgray,
    left: 49,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupPosition: {
    height: 157,
    width: 298,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  groupFramePosition: {
    left: 76,
    position: "absolute",
  },
  user41Layout: {
    width: 48,
    height: 48,
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
    width: 20,
    height: 14,
    overflow: "hidden",
  },
  networkWifiFull: {
    marginLeft: 4,
    height: 12,
    width: 20,
    overflow: "hidden",
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
    left: 11,
    fontWeight: "600",
    position: "absolute",
  },
  yrs57: {
    top: 395,
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
    top: 395,
    fontWeight: "500",
    position: "absolute",
  },
  hartwellUsa: {
    left: 171,
    color: "#fbbc05",
  },
  groupChild: {
    borderRadius: 40,
    backgroundColor: "rgba(3, 115, 75, 0.4)",
    height: 28,
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
    width: 8,
    height: 8,
    left: 0,
  },
  onlineParent: {
    top: 4,
    width: 58,
    height: 21,
  },
  rectangleParent: {
    top: 446,
    height: 28,
    left: 11,
  },
  match: {
    marginLeft: -39,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    top: 6,
    textAlign: "left",
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  matchWrapper: {
    borderRadius: 8,
    width: 112,
    left: 14,
    backgroundColor: "transparent",
    top: 16,
    height: 34,
    position: "absolute",
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
    left: "50%",
    position: "absolute",
    overflow: "hidden",
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
    width: 46,
    marginLeft: -24,
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
    top: 548,
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
  homeItem: {
    backgroundColor: "rgba(0, 0, 0, 0.71)",
    height: 766,
    left: 0,
    top: 44,
    width: 390,
    position: "absolute",
  },
  anishMehta: {
    top: 35,
    left: 79,
    textAlign: "center",
    color: Color.colorBlack,
  },
  couple11: {
    left: 16,
    top: 14,
  },
  partnerPreferences: {
    textAlign: "left",
    top: 16,
  },
  expandRightIcon: {
    left: 253,
    top: 14,
  },
  couple11Parent: {
    top: 184,
  },
  infoIcon: {
    left: 15,
    top: 14,
  },
  aboutUs: {
    textAlign: "center",
    top: 16,
  },
  infoParent: {
    top: 355,
  },
  termsAndCondition: {
    marginTop: -10.5,
    top: "50%",
    textAlign: "left",
  },
  infoGroup: {
    top: 298,
  },
  setting1Parent: {
    top: 241,
  },
  onButtonIcon: {
    left: 14,
    top: 14,
  },
  onButtonParent: {
    top: 412,
  },
  groupInner: {
    backgroundColor: "transparent",
  },
  text1: {
    top: 19,
    left: 55,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    height: 28,
    textAlign: "center",
    color: Color.colorWhite,
    justifyContent: "center",
  },
  editProfile1: {
    color: Color.colorDodgerblue,
    width: 74,
    height: 25,
    fontFamily: FontFamily.poppinsRegular,
    display: "flex",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  editProfile: {
    top: 79,
  },
  premiumServices1Icon: {
    top: 1,
    height: 20,
    left: 0,
    width: 20,
    position: "absolute",
  },
  upgradeToPremium: {
    left: 24,
    top: 0,
    position: "absolute",
  },
  premiumServices1Parent: {
    width: 173,
    left: 16,
    height: 21,
  },
  groupFrame: {
    top: 111,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorDodgerblue,
    width: 204,
    height: 34,
    overflow: "hidden",
  },
  logoHere: {
    textAlign: "center",
    color: Color.colorWhite,
    left: 0,
    top: 0,
  },
  shubhamSharma: {
    top: 34,
    left: 60,
    color: Color.colorWhite,
    textAlign: "left",
  },
  logoHereParent: {
    width: 213,
    height: 58,
    left: 16,
    top: 16,
    position: "absolute",
  },
  user41: {
    marginTop: -24,
    marginLeft: -24,
    top: "50%",
    left: "50%",
  },
  user41Wrapper: {
    top: 50,
    borderRadius: Border.br_19xl,
    left: 16,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  anishMehtaParent: {
    height: "100%",
    top: "0%",
    right: "104.03%",
    bottom: "0%",
    left: "-104.03%",
    position: "absolute",
  },
  aMenuSlide: {
    top: 45,
    height: 765,
    width: 298,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    height: 844,
    overflow: "hidden",
    flex: 1,
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
  }
  
});

export default Home;
