import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily, Padding } from "./GlobalStyles";
import { SelectList } from 'react-native-dropdown-select-list'

const FamilyDetails = () => {

  const sons = [
    {key:'1', value:0},
    {key:'2', value:1},
    {key:'3', value:2},
    {key:'4', value:3},
    {key:'5', value:4},
    {key:'6', value:5},
    {key:'7', value:6},
    {key:'8', value:7},
    {key:'9', value:8},
    {key:'10', value:9},
    {key:'11', value:10},
]

const daughters = [
  {key:'1', value:0},
  {key:'2', value:1},
  {key:'3', value:2},
  {key:'4', value:3},
  {key:'5', value:4},
  {key:'6', value:5},
  {key:'7', value:6},
  {key:'8', value:7},
  {key:'9', value:8},
  {key:'10', value:9},
  {key:'11', value:10},
]


  return (
    <View style={styles.profilePhoto}>
      <LinearGradient
        style={styles.addSomeFamilyDetailsParent}
        locations={[0, 1]}
        colors={["#e8e7e8", "#f6e6ed"]}
      >
        <Text style={styles.addSomeFamily}>{`Add Some Family Details `}</Text>
        <Text style={styles.optional}>(Optional)</Text>
        <Pressable
          style={[styles.expandLeft, styles.expandLeftPosition]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("./assets/expand-left.png")}
          />
        </Pressable>
      </LinearGradient>

     
      <View style={[styles.parent, styles.groupBorder]}>
       
<SelectList  
        setSelected={(val) => setSelected(val)} 
        data={sons} 
        save="value"
    />

      </View>
      <View style={[styles.group, styles.groupBorder]}>
       
               
<SelectList  
        setSelected={(val) => setSelected(val)} 
        data={sons} 
        save="value"
    />
      </View>
      <View style={[styles.container, styles.containerLayout]}>
        <SelectList  
        setSelected={(val) => setSelected(val)} 
        data={daughters} 
        save="value"
    />
      </View>
      <View style={[styles.frameView, styles.containerLayout]}>
        <SelectList  
        setSelected={(val) => setSelected(val)} 
        data={daughters} 
        save="value"
    />
      </View>
      <Text style={[styles.noOfSons, styles.noOfSonsTypo]}>No. of Son’s</Text>
      <Text style={[styles.noOfDaughters, styles.noOfSonsTypo]}>
        No. of Daughter’s
      </Text>
      <Text style={[styles.ofWhichMarried, styles.whichTypo]}>
        of which married
      </Text>
      <Text style={[styles.ofWhichMarried1, styles.whichTypo]}>
        of which married
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildPosition]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.continue}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  expandLeftPosition: {
    top: "50%",
    position: "absolute",
  },
  iphoneWithNotchSpaceBlock: {
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
  areaFlexBox: {
    flex: 1,
    height: 44,
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
  groupBorder: {
    height: 42,
    borderColor: Color.colorGainsboro_100,
    left: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  expandIconPosition: {
    height: 24,
    width: 24,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  containerLayout: {
    width: 86,
    left: 285,
    height: 42,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  noOfSonsTypo: {
    color: Color.colorDarkslategray_200,
    left: 20,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  whichTypo: {
    color: Color.colorSlategray,
    left: 153,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChildPosition: {
    width: 162,
    marginLeft: -81,
    height: 42,
    left: "50%",
    position: "absolute",
  },
  addSomeFamily: {
    marginLeft: -101,
    top: 76,
    lineHeight: 23,
    textAlign: "center",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  optional: {
    top: 99,
    left: 159,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    position: "absolute",
  },
  icon: {
    marginTop: -4.5,
    height: "100%",
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  expandLeft: {
    width: 50,
    height: 50,
    left: 12,
    top: "50%",
  },
  addSomeFamilyDetailsParent: {
    left: 0,
    height: 133,
    backgroundColor: "transparent",
    width: 390,
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
  },
  iphoneWithNotch: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: -195,
    width: 390,
    top: 0,
    justifyContent: "center",
  },
  text1: {
    top: 8,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    left: 12,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  expandDownIcon: {
    left: 92,
  },
  parent: {
    width: 121,
    top: 192,
  },
  group: {
    width: 124,
    top: 293,
  },
  expandDownIcon2: {
    left: 52,
  },
  container: {
    top: 192,
  },
  frameView: {
    top: 293,
  },
  noOfSons: {
    top: 160,
  },
  noOfDaughters: {
    top: 261,
  },
  ofWhichMarried: {
    top: 200,
  },
  ofWhichMarried1: {
    top: 301,
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: "#a0235b",
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderColor: "#dbdbdb",
    borderWidth: 1,
    borderStyle: "solid",
    marginLeft: -81,
    top: 0,
  },
  continue: {
    marginLeft: -37,
    color: Color.colorWhite,
    marginTop: -12,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 748,
  },
  profilePhoto: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
});

export default FamilyDetails;
