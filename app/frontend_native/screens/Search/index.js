import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyles";

const Search = () => {
  return (
    <View style={[styles.profilePhoto, styles.iconLayout]}>
      <View style={[styles.homeIndicatordark, styles.component6Layout]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.component6, styles.component6ShadowBox]}>
        <View style={styles.component6Child} />
        <Text style={styles.search}>Search</Text>
        <Image
          style={[styles.searchAltIcon, styles.searchIconLayout]}
          contentFit="cover"
          source={require("./assets/search-alt-1.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.homeParent, styles.parentGroupLayout]}
          onPress={() => {}}
        >
          <Image
            style={[styles.homeIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("./assets/home.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <View style={[styles.groupWrapper, styles.parentGroupLayout]}>
          <View style={[styles.searchAltParent, styles.homeIconPosition]}>
            <Image
              style={[styles.searchAltIcon1, styles.iconPosition1]}
              contentFit="cover"
              source={require("./assets/search-alt-1.png")}
            />
            <Text style={[styles.search1, styles.searchTypo]}>Search</Text>
          </View>
        </View>
        <Pressable
          style={[styles.groupParent, styles.parentGroupLayout]}
          onPress={() => {}}
        >
          <View style={[styles.requestsWrapper, styles.wrapperPosition]}>
            <Text style={[styles.requests, styles.homeTypo]}>Requests</Text>
          </View>
          <Image
            style={[styles.users1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("./assets/users-1-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.groupContainer, styles.parentGroupLayout]}
          onPress={() => {}}
        >
          <View style={[styles.chatWrapper, styles.wrapperPosition]}>
            <Text style={[styles.chat, styles.homeTypo]}>Chat</Text>
          </View>
          <Image
            style={[styles.chatAlt3Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("./assets/chat-alt-3.png")}
          />
        </Pressable>
      </View>

      <View style={styles.searchYourMatchProfileParent}>
        <Text style={[styles.searchYourMatch, styles.iconPosition]}>
          Search your match profile
        </Text>
        <Image
          style={[styles.searchIcon, styles.searchIconLayout]}
          contentFit="cover"
          source={require("./assets/search.png")}
        />
        <Pressable style={styles.iconexlightfilter} onPress={() => {}}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/Filter.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildPosition]}
        onPress={() => {}}
      >
        <LinearGradient
          style={[styles.groupChild, styles.groupChildPosition]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        />
        <Text style={[styles.searchNow, styles.searchTypo]}>Search Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  component6Layout: {
    width: 390,
    marginLeft: -195,
  },
  component6ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  searchIconLayout: {
    height: 24,
    width: 24,
  },
  parentGroupLayout: {
    width: 88,
    top: 0,
    height: 62,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    marginLeft: -12,
    height: 24,
    width: 24,
    left: "50%",
  },
  homeTypo: {
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xs,
    left: "50%",
    position: "absolute",
  },
  homeIconPosition: {
    marginTop: -19,
    top: "50%",
    position: "absolute",
  },
  searchTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    height: 15,
    top: 38,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 14,
    position: "absolute",
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  statusAreaPosition: {
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
  groupChildPosition: {
    height: 42,
    width: 162,
    marginLeft: -81,
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
  search: {
    marginTop: -11,
    left: 52,
    lineHeight: 23,
    color: "#31425f",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  searchAltIcon: {
    marginLeft: -175,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  component6: {
    top: 44,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    width: 390,
    marginLeft: -195,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  homeIcon: {
    marginTop: -19,
    top: "50%",
    position: "absolute",
  },
  home: {
    marginLeft: -15,
    top: 38,
    color: Color.colorDarkgray,
  },
  homeParent: {
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  searchAltIcon1: {
    marginTop: -20.5,
    top: "50%",
    position: "absolute",
  },
  search1: {
    marginLeft: -18,
    top: 26,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
  },
  searchAltParent: {
    marginLeft: -19,
    width: 36,
    height: 41,
    left: "50%",
  },
  groupWrapper: {
    marginLeft: -88,
    backgroundColor: "#a0235b",
    left: "50%",
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
    height: 24,
    width: 24,
    left: "50%",
  },
  groupParent: {
    marginLeft: 1,
    backgroundColor: "rgba(255, 255, 255, 0)",
    left: "50%",
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
    height: 24,
    width: 24,
  },
  groupContainer: {
    right: -1,
    backgroundColor: Color.colorWhite,
  },
  frameParent: {
    marginLeft: -174,
    top: 348,
    borderRadius: 24,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 16,
    elevation: 16,
    width: 352,
    height: 62,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    left: "50%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
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
    backgroundColor: Color.colorWhite,
  },
  searchYourMatch: {
    left: 38,
    fontSize: 12,
    color: "#afb5c9",
    fontFamily: FontFamily.poppinsRegular,
    top: 14,
    textAlign: "left",
  },
  searchIcon: {
    top: 11,
    left: 8,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconexlightfilter: {
    left: "89.83%",
    top: "23.91%",
    right: "3.39%",
    bottom: "23.91%",
    width: "6.78%",
    height: "52.17%",
    position: "absolute",
  },
  searchYourMatchProfileParent: {
    top: 119,
    left: 20,
    backgroundColor: "#f5f5f5",
    width: 354,
    height: 46,
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    backgroundColor: "transparent",
    borderRadius: Border.br_5xs,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  searchNow: {
    marginLeft: -48,
    marginTop: -12,
    top: "50%",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
  },
  rectangleParent: {
    top: 268,
  },
  profilePhoto: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Search;
