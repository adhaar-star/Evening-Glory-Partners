import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color, Padding } from "./GlobalStyles";

const Chat = () => {
  return (
    <View style={styles.chat}>
     
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.homeParent, styles.parentGroupLayout]}
          onPress={() => {}}
        >
          <Image
            style={[styles.homeIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("./assets/home-fill.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <Pressable
          style={[styles.groupWrapper, styles.parentGroupLayout]}
          onPress={() => {}}
        >
          <View style={[styles.searchAltParent, styles.homeIconPosition]}>
            <Image
              style={[styles.searchAltIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("./assets/search-alt.png")}
            />
            <Text style={[styles.search, styles.chatTypo]}>Search</Text>
          </View>
        </Pressable>
        <View style={[styles.groupParent, styles.parentGroupLayout]}>
          <View style={[styles.requestsWrapper, styles.wrapperPosition]}>
            <Text style={[styles.requests, styles.homeTypo]}>Requests</Text>
          </View>
          <Image
            style={[styles.users1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/users-1.png")}
          />
        </View>
        <View style={[styles.groupContainer, styles.parentGroupLayout]}>
          <View style={[styles.chatWrapper, styles.wrapperPosition]}>
            <Text style={[styles.chat1, styles.chatTypo]}>Chat</Text>
          </View>
          <Image
            style={[styles.chatAlt3Icon, styles.frameChild5Position]}
            contentFit="cover"
            source={require("./assets/chat-alt-3.png")}
          />
        </View>
      </View>
      <View style={styles.searchParent}>
        <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
        <Image
          style={[styles.searchAltLightIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("./assets/search-alt.png")}
        />
      </View>
      <View style={styles.frameGroup}>
        <View
          style={[
            styles.expressiveMiddleAgedWomanPWrapper,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.expressiveMiddleAgedWomanPIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/expressive-middle-aged-woman-posing-1.png")}
          />
        </View>
        <View
          style={[
            styles.amazingWomanSittingIndoorsWrapper,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.amazingWomanSittingIndoorsIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/amazingwomansittingindoorstable-1.png")}
          />
        </View>
        <View
          style={[
            styles.positiveAttitudeLifeItIsMWrapper,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.amazingWomanSittingIndoorsIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/positiveattitudelifeitismykeyhappiness-1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/group-57440.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/group-57439.png")}
        />
        <View
          style={[
            styles.seniorWomanPosingAgainstBlWrapper,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.amazingWomanSittingIndoorsIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/seniorwomanposingagainstbluebackground-1.png")}
          />
        </View>
        <Image
          style={[styles.frameInner, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/group-57441.png")}
        />
        <View
          style={[
            styles.brunetteSmileyWomanPosing1Wrapper,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.amazingWomanSittingIndoorsIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/brunettesmileywomanposing-1.png")}
          />
        </View>
        <Image
          style={[styles.groupIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/group-57442.png")}
        />
        <View
          style={[
            styles.amazingWomanSittingIndoorsContainer,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.amazingWomanSittingIndoorsIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/amazingwomansittingindoorstable-1.png")}
          />
        </View>
        <View
          style={[
            styles.positiveAttitudeLifeItIsMContainer,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.amazingWomanSittingIndoorsIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/positiveattitudelifeitismykeyhappiness-1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/group-57440.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/group-57439.png")}
        />
        <View
          style={[
            styles.seniorWomanPosingAgainstBlContainer,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.amazingWomanSittingIndoorsIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/seniorwomanposingagainstbluebackground-1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/group-57441.png")}
        />
        <View
          style={[
            styles.brunetteSmileyWomanPosing1Container,
            styles.positiveWrapperLayout,
          ]}
        >
          <Image
            style={[
              styles.amazingWomanSittingIndoorsIcon,
              styles.womanIconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/brunettesmileywomanposing-1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/group-57442.png")}
        />
        <Text style={[styles.luccyDesy, styles.luccyClr]}>Luccy Desy</Text>
        <Text style={[styles.luccyDesy1, styles.luccyClr]}>Luccy Desy</Text>
        <Text style={[styles.luccyDesy2, styles.luccyClr]}>Luccy Desy</Text>
        <Text style={[styles.amrutaShetty, styles.luccyClr]}>
          Amruta shetty
        </Text>
        <Text style={[styles.amrutaShetty1, styles.luccyClr]}>
          Amruta shetty
        </Text>
        <Text style={[styles.amrutaShetty2, styles.luccyClr]}>
          Amruta shetty
        </Text>
        <Text style={[styles.adhiDessoza, styles.luccyClr]}>Adhi Dessoza</Text>
        <Text style={[styles.adhiDessoza1, styles.luccyClr]}>Adhi Dessoza</Text>
        <Text style={[styles.adhiDessoza2, styles.luccyClr]}>Adhi Dessoza</Text>
      </View>
      <Text style={[styles.messages, styles.messagesTypo]}>Messages</Text>
      <Pressable
        style={[styles.frameContainer, styles.frameParentLayout]}
        onPress={() => {}}
      >
        <View
          style={[
            styles.expressiveMiddleAgedWomanPContainer,
            styles.womanPosition,
          ]}
        >
          <Image
            style={[
              styles.expressiveMiddleAgedWomanPIcon1,
              styles.iconPosition,
            ]}
            contentFit="cover"
            source={require("./assets/expressive-middle-aged-woman-posing-1.png")}
          />
        </View>
        <View style={[styles.luccyDesyParent, styles.luccyGroupPosition]}>
          <Text style={[styles.luccyDesy3, styles.textClr]}>Luccy_Desy</Text>
          <Text style={[styles.active3hrAge, styles.luccyTypo]}>
            Active 3hr age
          </Text>
        </View>
      </Pressable>
      <View style={[styles.frameView, styles.frameParentLayout]}>
        <View
          style={[
            styles.expressiveMiddleAgedWomanPContainer,
            styles.womanPosition,
          ]}
        >
          <Image
            style={[styles.positiveAttitudeLifeItIsMIcon2, styles.iconPosition]}
            contentFit="cover"
            source={require("./assets/positiveattitudelifeitismykeyhappiness-1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild5, styles.frameChild5Position]}
          contentFit="cover"
          source={require("./assets/group-57440.png")}
        />
        <View style={[styles.adhiDessozaParent, styles.luccyGroupPosition]}>
          <Text style={[styles.luccyDesy3, styles.textClr]}>Adhi_Dessoza</Text>
          <Text style={[styles.active3hrAge, styles.luccyTypo]}>
            Hi, adipiscing elit, sed do eiusmod tempor
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent1, styles.frameParentLayout]}>
        <View style={styles.womanPosition}>
          <Image
            style={[styles.positiveAttitudeLifeItIsMIcon2, styles.iconPosition]}
            contentFit="cover"
            source={require("./assets/amazingwomansittingindoorstable-1.png")}
          />
        </View>
        <View style={[styles.amrutaShettyParent, styles.luccyGroupPosition]}>
          <Text style={[styles.luccyDesy3, styles.textClr]}>Amruta_Shetty</Text>
          <Text style={[styles.active3hrAge, styles.luccyTypo]}>
            Hi, Lorem ipsum dolor sit amet, consectetur
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent2, styles.frameParentLayout]}>
        <View
          style={[
            styles.expressiveMiddleAgedWomanPContainer,
            styles.womanPosition,
          ]}
        >
          <Image
            style={[styles.positiveAttitudeLifeItIsMIcon2, styles.iconPosition]}
            contentFit="cover"
            source={require("./assets/seniorwomanposingagainstbluebackground-1.png")}
          />
        </View>
        <View style={[styles.luccyDesyGroup, styles.luccyGroupPosition]}>
          <Text style={[styles.luccyDesy3, styles.textClr]}>Luccy_Desy</Text>
          <Text style={[styles.active3hrAge, styles.luccyTypo]}>
            Hi, incididunt ut labore et
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent3, styles.frameParentLayout]}>
        <View
          style={[
            styles.expressiveMiddleAgedWomanPContainer,
            styles.womanPosition,
          ]}
        >
          <Image
            style={[styles.positiveAttitudeLifeItIsMIcon2, styles.iconPosition]}
            contentFit="cover"
            source={require("./assets/brunettesmileywomanposing-1.png")}
          />
        </View>
        <View style={[styles.amrutaShettyGroup, styles.luccyGroupPosition]}>
          <Text style={[styles.luccyDesy3, styles.textClr]}>Amruta_Shetty</Text>
          <Text style={[styles.active3hrAge, styles.luccyTypo]}>
            Hi, dolore magna aliqua. Ut enim ad
          </Text>
        </View>
      </View>
      <View style={styles.component6}>
        <View style={styles.component6Child} />
        <Text style={[styles.chat2, styles.chatTypo]}>Chat</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  iphoneWithNotchSpaceBlock: {
    marginLeft: -195,
    width: 390,
  },
  parentGroupLayout: {
    width: 88,
    top: 0,
    height: 62,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    left: "50%",
    position: "absolute",
  },
  homeIconPosition: {
    marginTop: -19,
    top: "50%",
  },
  chatTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  wrapperPosition: {
    height: 15,
    top: 38,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    top: 14,
    height: 24,
    width: 24,
  },
  frameChild5Position: {
    left: 32,
    position: "absolute",
  },
  search1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  positiveWrapperLayout: {
    width: 54,
    borderRadius: Border.br_29xl,
    top: 8,
    height: 54,
    position: "absolute",
    overflow: "hidden",
  },
  womanIconPosition: {
    marginLeft: -27,
    marginTop: -27,
    width: 54,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    width: 10,
    top: 52,
    height: 10,
    position: "absolute",
  },
  luccyClr: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  messagesTypo: {
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameParentLayout: {
    height: 56,
    width: 354,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  womanPosition: {
    width: 42,
    marginTop: -21,
    borderRadius: Border.br_29xl,
    height: 42,
    top: "50%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    marginLeft: -21,
    marginTop: -21,
    width: 54,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  luccyGroupPosition: {
    height: 40,
    left: 56,
    top: 9,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  luccyTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
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
    position: "absolute",
  },
  homeIcon: {
    top: "50%",
    marginLeft: -12,
    left: "50%",
    marginTop: -19,
  },
  home: {
    marginLeft: -15,
    color: Color.colorDarkgray,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    top: 38,
  },
  homeParent: {
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  searchAltIcon: {
    marginTop: -20.5,
    top: "50%",
    marginLeft: -12,
    left: "50%",
  },
  search: {
    marginLeft: -18,
    top: 26,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    left: "50%",
    position: "absolute",
    color: Color.colorDarkgray,
  },
  searchAltParent: {
    marginLeft: -19,
    width: 36,
    height: 41,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupWrapper: {
    marginLeft: -88,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  requests: {
    marginLeft: -23,
    color: Color.colorDarkgray,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
  },
  requestsWrapper: {
    marginLeft: -24,
    width: 46,
  },
  users1Icon: {
    marginLeft: -12,
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    marginLeft: 1,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  chat1: {
    marginLeft: -12.5,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    left: "50%",
    position: "absolute",
    fontWeight: "500",
    top: 0,
  },
  chatWrapper: {
    marginLeft: -13,
    width: 25,
  },
  chatAlt3Icon: {
    top: 14,
    height: 24,
    width: 24,
  },
  groupContainer: {
    right: -1,
    backgroundColor: "#a0235b",
  },
  frameParent: {
    marginLeft: -174,
    top: 748,
    borderRadius: 24,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 16,
    elevation: 16,
    width: 352,
    height: 62,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  search1: {
    top: 11,
    left: 43,
    lineHeight: 22,
    color: "#787878",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  searchAltLightIcon: {
    top: 10,
    left: 9,
  },
  searchParent: {
    top: 110,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    height: 42,
    width: 354,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  expressiveMiddleAgedWomanPIcon: {
    height: 58,
  },
  expressiveMiddleAgedWomanPWrapper: {
    height: 54,
    left: 20,
    backgroundColor: Color.colorWhite,
  },
  amazingWomanSittingIndoorsIcon: {
    height: 54,
  },
  amazingWomanSittingIndoorsWrapper: {
    left: 86,
    height: 54,
  },
  positiveAttitudeLifeItIsMWrapper: {
    left: 152,
    height: 54,
    backgroundColor: Color.colorWhite,
  },
  frameChild: {
    left: 190,
    height: 10,
  },
  frameItem: {
    left: 124,
    height: 10,
  },
  seniorWomanPosingAgainstBlWrapper: {
    left: 217,
    height: 54,
    backgroundColor: Color.colorWhite,
  },
  frameInner: {
    left: 256,
    height: 10,
  },
  brunetteSmileyWomanPosing1Wrapper: {
    left: 283,
    height: 54,
    backgroundColor: Color.colorWhite,
  },
  groupIcon: {
    left: 322,
    height: 10,
  },
  amazingWomanSittingIndoorsContainer: {
    left: 349,
    height: 54,
  },
  positiveAttitudeLifeItIsMContainer: {
    left: 415,
    height: 54,
    backgroundColor: Color.colorWhite,
  },
  frameChild1: {
    left: 453,
    height: 10,
  },
  frameChild2: {
    left: 387,
    height: 10,
  },
  seniorWomanPosingAgainstBlContainer: {
    left: 480,
    height: 54,
    backgroundColor: Color.colorWhite,
  },
  frameChild3: {
    left: 519,
    height: 10,
  },
  brunetteSmileyWomanPosing1Container: {
    left: 546,
    height: 54,
    backgroundColor: Color.colorWhite,
  },
  frameChild4: {
    left: 585,
    height: 10,
  },
  luccyDesy: {
    left: 25,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  luccyDesy1: {
    left: 221,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  luccyDesy2: {
    left: 420,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  amrutaShetty: {
    left: 85,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  amrutaShetty1: {
    left: 284,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  amrutaShetty2: {
    left: 482,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  adhiDessoza: {
    left: 153,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  adhiDessoza1: {
    left: 350,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  adhiDessoza2: {
    left: 548,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    lineHeight: 12,
    fontSize: FontSize.size_5xs,
    top: 65,
    color: Color.colorGray_100,
  },
  frameGroup: {
    top: 160,
    height: 95,
    left: 0,
    width: 390,
    position: "absolute",
  },
  messages: {
    top: 255,
    lineHeight: 26,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  expressiveMiddleAgedWomanPIcon1: {
    height: 58,
  },
  expressiveMiddleAgedWomanPContainer: {
    backgroundColor: Color.colorWhite,
  },
  luccyDesy3: {
    fontSize: FontSize.size_sm,
    position: "absolute",
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 0,
  },
  active3hrAge: {
    top: 22,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 0,
  },
  luccyDesyParent: {
    width: 86,
  },
  frameContainer: {
    top: 283,
  },
  positiveAttitudeLifeItIsMIcon2: {
    height: 54,
  },
  frameChild5: {
    top: 39,
    width: 8,
    height: 8,
  },
  adhiDessozaParent: {
    width: 248,
  },
  frameView: {
    top: 407,
  },
  amrutaShettyParent: {
    width: 256,
  },
  frameParent1: {
    top: 345,
  },
  luccyDesyGroup: {
    width: 148,
  },
  frameParent2: {
    top: 469,
  },
  amrutaShettyGroup: {
    width: 213,
  },
  frameParent3: {
    top: 531,
  },
  component6Child: {
    height: "100%",
    width: "92.31%",
    top: "0%",
    right: "7.69%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  chat2: {
    marginTop: -11,
    fontSize: 16,
    lineHeight: 23,
    color: "#31425f",
    textAlign: "left",
    left: 20,
    top: "50%",
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
      height: -4,
    },
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
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
    backgroundColor: Color.colorWhite,
  },
  chat: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Chat;
