import * as React from "react";
import Config from "react-native-config";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Border, Color, FontSize, FontFamily, Padding } from "./GlobalStyles";

const Login = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationMessages, setValidationMessages] = useState([]);
  const [userNameValue, setuserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');




  useEffect( ()=>{
    const  getCurrentUser = async ()=>{
      const currentUser = await AsyncStorage.getItem('userId');;
      if (currentUser !== null) {
        navigation.navigate("Home");
      }
    
    }
    getCurrentUser();
    
  },[])



  const onLogInClicked = async () => {
    console.log("userNameValue-"+userNameValue)
    console.log("passwordValue-"+passwordValue)
    const url = `${Config.REACT_APP_BACKEND_URL}/user/login`
    console.log("login_url-",url)
    try {
     const response =  await axios.post(url, {
            username: userNameValue,
            password: passwordValue,
        }
          );
        
      
          

          console.log("response-")
        console.log(response)

         if(response.data.status === 200){

            const currentToken =  await AsyncStorage.setItem(
              'token',
              response.data.JWT
            );
            console.log("token-"+response.data.JWT)
           
            const currentUser =  await AsyncStorage.setItem(
              'userId',
              response.data.user_id.toString()
            );
            console.log("userId-"+currentUser)
            setValidationMessages(response.data.msgs)
            navigation.navigate("Home");
         }
         else{
            setValidationMessages(response.data.msgs)
         }
          
    } catch (e) {

        console.log("err->",e.message )
      //  setValidationMessages(e.response.data.msgs)

       // setValidationMessages(e.response.data.errors)
    }
}

  return (
    <View style={styles.login}>
      <Image
        style={styles.loginChildPosition}
        contentFit="cover"
        source={require("./assets/15847314-v960ning11-1.png")}
      />
      <View style={[styles.loginChild, styles.loginChildPosition]} />
      <View
        style={[styles.emailMobileNumberWrapper, styles.passwordParentLayout]}
      >
        
        <TextInput
        style={[styles.emailMobile, styles.dontHaveAnTypo]}
        onChangeText={newUsername=>setuserNameValue(newUsername)} autoCapitalize={"none"}
        value={userNameValue} placeholder="Email/Mobile Number"
      />

      </View>
      <View style={[styles.passwordParent, styles.passwordParentLayout]}>

        <TextInput
        style={[styles.emailMobile, styles.dontHaveAnTypo]}
        onChangeText={newPassword=>setPasswordValue(newPassword)} autoCapitalize={"none"}
        value={passwordValue} placeholder="Password"
      />
        <Image
          style={styles.viewHideIcon}
          contentFit="cover"
          source={require("./assets/view-hide.png")}
        />
      </View>
      <Text style={styles.welcomeBackYouve}>{`Welcome back you’ve
been missed`}</Text>
      <Text style={[styles.login1, styles.text1FlexBox]}>Login</Text>
      <Pressable style={styles.rectangleParent} onPress={onLogInClicked}>
        <View style={styles.groupChild} />
        <Text style={[styles.login2, styles.loginTypo]}>Login</Text>
      </Pressable>
      <Pressable style={styles.forgetPassword} onPress={() => {}}>
        <Text style={styles.forgetPassword1}>Forget Password?</Text>
      </Pressable>
      <Pressable
        style={[styles.loginInner, styles.loginInnerLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupWrapper, styles.groupBorder]}>
          <View style={[styles.superGParent, styles.parentPosition]}>
            <Image
              style={[styles.superGIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("./assets/superg.png")}
            />
            <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
              Continue with Google
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.loginInnerLayout]}
        onPress={() => {}}
      >
        <View style={[styles.groupContainer, styles.groupBorder]}>
          <View style={[styles.smartphoneCall1Parent, styles.parentPosition]}>
            <Image
              style={[styles.smartphoneCall1Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("./assets/smartphonecall-1.png")}
            />
            <Text style={[styles.continueWithMobile, styles.continueTypo]}>
              Continue with Mobile OTP
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.dontHaveAnContainer} onPress={() => {}}>
        <Text style={styles.text}>
          <Text
            style={[styles.dontHaveAn, styles.dontHaveAnTypo]}
          >{`Don’t have an account? `}</Text>
          <Text style={[styles.signUp, styles.loginTypo]}>Sign Up</Text>
        </Text>
      </Pressable>
      <View style={[styles.component5, styles.component5SpaceBlock]}>
        <View style={styles.component5Child} />
        <Pressable
          style={[styles.expandLeft, styles.login2Position]}
          onPress={() => {}}
        >
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
  loginChildPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  passwordParentLayout: {
    width: 350,
    borderRadius: Border.br_5xs,
    marginLeft: -175,
    height: 44,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    overflow: "hidden"
  },
  dontHaveAnTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
  },
  text1FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  loginInnerLayout: {
    height: 42,
    width: 210,
    position: "absolute",
  },
  groupBorder: {
    borderColor: Color.colorWhite,
    height: 42,
    width: 210,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  parentPosition: {
    bottom: "21.43%",
    top: "21.43%",
    height: "57.14%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continueTypo: {
    marginTop: -9,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  component5SpaceBlock: {
    marginLeft: -195,
    width: 390,
  },
  login2Position: {
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
  loginChild: {
    backgroundColor: "rgba(243, 243, 243, 0.8)",
  },
  emailMobile: {
    marginTop: -10,
    left: 20,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    top: "50%",
    position: "absolute",
  },
  emailMobileNumberWrapper: {
    top: 217,
    height: 44,
  },
  viewHideIcon: {
    top: 11,
    left: 313,
    width: 24,
    height: 24,
    position: "absolute",
  },
  passwordParent: {
    top: 285,
    height: 44,
  },
  welcomeBackYouve: {
    marginLeft: -88,
    top: 140,
    color: "#5a5a5a",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  login1: {
    marginLeft: -27,
    top: 100,
    fontSize: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: 12,
    backgroundColor: Color.colorMediumvioletred,
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    borderColor: "#dbdbdb",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    height: 40,
    width: 208,
    marginLeft: -104,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  login2: {
    marginTop: -12,
    marginLeft: -22,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    left: "50%",
  },
  rectangleParent: {
    top: 385,
    height: 40,
    width: 208,
    marginLeft: -104,
    left: "50%",
    position: "absolute",
  },
  forgetPassword1: {
    marginLeft: 70,
    color: "#0a66c2",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  forgetPassword: {
    top: 343,
    left: "50%",
    position: "absolute",
  },
  superGIcon: {
    width: "14.46%",
    right: "85.54%",
  },
  continueWithGoogle: {
    left: "20.48%",
    color: "#353535",
  },
  superGParent: {
    width: "79.05%",
    right: "10.48%",
    left: "10.48%",
  },
  groupWrapper: {
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorWhite,
  },
  loginInner: {
    top: 483,
    left: 90,
  },
  smartphoneCall1Icon: {
    width: "12.9%",
    right: "87.1%",
  },
  continueWithMobile: {
    left: "16.67%",
    color: Color.colorWhite,
  },
  smartphoneCall1Parent: {
    width: "88.57%",
    right: "5.71%",
    left: "5.71%",
  },
  groupContainer: {
    backgroundColor: "#4285f4",
  },
  groupPressable: {
    top: 540,
    left: 91,
  },
  dontHaveAn: {
    color: "#0d0d0d",
    fontFamily: FontFamily.poppinsRegular,
  },
  signUp: {
    color: Color.colorMediumvioletred,
    fontSize: FontSize.size_base,
  },
  text: {
    marginLeft: -117,
    textAlign: "center",
  },
  dontHaveAnContainer: {
    top: 439,
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
  component5Child: {
    width: "92.31%",
    right: "7.69%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    marginTop: -23,
    height: "100%",
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  expandLeft: {
    left: 12,
    width: 50,
    height: 50,
  },
  component5: {
    marginTop: -373,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    marginLeft: -195,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  text1: {
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
  login: {
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
