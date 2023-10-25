import * as React from "react";
import { useMemo, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { RadioButton } from 'react-native-paper';
import { FontFamily, Border, Color, FontSize, Padding } from "./GlobalStyles";

const Relationship = () => {

    const [checked, setChecked] = useState('My Self');

  return (
    <View style={styles.verificationCode}>
   
      <Pressable
        style={[styles.rectangleParent, styles.groupChildPosition]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.continue, styles.mySelfTypo]}>Continue</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("./assets/vector.svg")}
      />
   
      <Text style={[styles.forWhomIs, styles.mySelfTypo]}>
        For whom is this profile intended?
      </Text>
      <View style={[styles.mysonParent, styles.parentLayout]}>
        <Text style={[styles.myson, styles.mysonPosition]}>MySon</Text>   
          <RadioButton.Android style={[styles.groupItem, styles.groupIconPosition]}
        value="MySon" 
        status={ checked === 'MySon' ? 'checked' : 'unchecked' } //if the value of checked is Apple, then select this button
        onPress={() => setChecked('MySon')} //when pressed, set the value of the checked Hook to 'Apple'
      />
      </View>
      
      <View style={[styles.parentPosition,styles.mySisterParent]}>
        <Text style={[styles.myson, styles.mysonPosition]}>My Sister</Text>
     
          <RadioButton.Android style={[styles.groupItem, styles.groupIconPosition]}
        value="MySister" 
        status={ checked === 'MySister' ? 'checked' : 'unchecked' } //if the value of checked is Apple, then select this button
        onPress={() => setChecked('MySister')} //when pressed, set the value of the checked Hook to 'Apple'
      />
      </View>
      <View style={[styles.myBrotherParent, styles.parentPosition]}>
        <Text style={[styles.myson, styles.mysonPosition]}>My Brother</Text>
          <RadioButton.Android style={[styles.groupItem, styles.groupIconPosition]}
        value="MyBrother" 
        status={ checked === 'MyBrother' ? 'checked' : 'unchecked' } //if the value of checked is Apple, then select this button
        onPress={() => setChecked('MyBrother')} //when pressed, set the value of the checked Hook to 'Apple'
      />
      </View>
      <View style={[styles.myFriendParent, styles.parentLayout]}>
        <Text style={[styles.myson, styles.mysonPosition]}>My Friend</Text>
               <RadioButton.Android style={[styles.groupItem, styles.groupIconPosition]}
        value="MyFriend" 
        status={ checked === 'MyFriend' ? 'checked' : 'unchecked' } //if the value of checked is Apple, then select this button
        onPress={() => setChecked('MyFriend')} //when pressed, set the value of the checked Hook to 'Apple'
      />
      </View>
      <View style={[styles.myDaughterGroup, styles.daughterLayout]}>
        <Text style={[styles.myson, styles.mysonPosition]}>My Daughter</Text>
        <RadioButton.Android style={[styles.groupItem, styles.groupIconPosition]}
        value="MyDaughter" 
        status={ checked === 'MyDaughter' ? 'checked' : 'unchecked' } //if the value of checked is Apple, then select this button
        onPress={() => setChecked('MyDaughter')} //when pressed, set the value of the checked Hook to 'Apple'
      />
      </View>
      <View style={[styles.mySelfParent, styles.parentLayout]}>
        <Text style={[styles.mySelf, styles.mysonPosition]}>My Self</Text>
        <RadioButton.Android style={[styles.groupItem, styles.groupIconPosition]}
        value="MySelf" 
        status={ checked === 'MySelf' ? 'checked' : 'unchecked' } //if the value of checked is Apple, then select this button
        onPress={() => setChecked('MySelf')} //when pressed, set the value of the checked Hook to 'Apple'
      />
      </View>
      <Pressable
        style={[styles.expandLeft, styles.continuePosition]}
        onPress={() => {}}
      >
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
  iphoneWithNotchSpaceBlock: {
    marginLeft: -195,
    width: 390,
  },
  groupChildPosition: {
    height: 42,
    width: 162,
    marginLeft: -81,
    left: "50%",
    position: "absolute",
  },
  mySelfTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupIconPosition: {
    left: 0,
    position: "absolute",
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
  parentLayout: {
    height: 27,
    position: "absolute",
  },
  mysonPosition: {
    fontSize: FontSize.size_lg,
    left: 36,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  daughterLayout: {
    width: 151,
    top: 322,
    height: 27,
    position: "absolute",
  },
  parentPosition: {
    top: 373,
    height: 27,
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
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderWidth: 1,
    top: 0,
  },
  continue: {
    marginTop: -12,
    marginLeft: -37,
    fontSize: 16,
    color: Color.colorWhite,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    left: "50%",
  },
  rectangleParent: {
    top: 742,
  },
  vectorIcon: {
    height: 230,
    top: 0,
    width: 390,
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    textAlign: "left",
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
  },
  forWhomIs: {
    top: 71,
    left: 60,
    fontSize: 20,
    color: "#31425f",
    width: 235,
    textAlign: "left",
    position: "absolute",
  },
  myson: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
  },
  groupItem: {
    top: 3,
    width: 21,
    height: 21
  },
  mysonParent: {
    width: 96,
    left: 220,
    top: 271,
    height: 27,
  },
  myDaughterParent: {
    left: 20,
  },
  mySisterParent: {
    width: 116,
    left: 20,
    top: 323
  },
  myBrotherParent: {
    width: 132,
    left: 220,
  },
  myFriendParent: {
    top: 374,
    width: 122,
    left: 20,
  },
  myDaughterGroup: {
    left: 220,
  },
  mySelf: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupIcon: {
    top: 2,
    width: 24,
    height: 24,
  },
  mySelfParent: {
    width: 100,
    left: 20,
    top: 271,
    height: 27,
  },
  icon: {
    marginTop: -360,
    borderRadius: Border.br_5xs,
    height: "100%",
    width: "100%",
  },
  expandLeft: {
    left: 12,
    width: 50,
    height: 50,
  },
  verificationCode: {
    backgroundColor: Color.colorWhite,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Relationship;
