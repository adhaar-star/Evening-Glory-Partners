import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border, Padding } from "./GlobalStyles";

const BasicDetails = () => {
  return (
    <ScrollView 
>
  <View style={styles.userProfile1} >

      <View style={styles.womenImage}>
        <Image
          style={styles.positiveAttitudeLifeItIsMIcon}
          contentFit="cover"
          source={require("./assets/positiveattitudelifeitismykeyhappiness-1.png")}
        />
        <LinearGradient
          style={styles.womenImageChild}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={styles.favoriteFillIcon}
          contentFit="cover"
          source={require("./assets/favorite-fill.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyTypo]}>
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
        <Image
          style={[styles.expandLeftIcon, styles.expandIconLayout]}
          contentFit="cover"
          source={require("./assets/expand-left.png")}
        />
        <Image
          style={[styles.expandLeftIcon1, styles.expandIconLayout]}
          contentFit="cover"
          source={require("./assets/expand-left.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.parentWrapperLayout]}>
        <View style={[styles.basicDetailsParent, styles.frameChildLayout]}>
          <Text style={[styles.basicDetails, styles.yrs57Typo]}>
            Basic Details
          </Text>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            contentFit="cover"
            source={require("./assets/vector-176.png")}
          />
        </View>
        <Pressable
          style={[styles.professionalWrapper, styles.parentWrapperLayout]}
          onPress={() => {}}
        >
          <Text style={[styles.professional, styles.professionalTypo]}>
            Professional
          </Text>
        </Pressable>
        <Pressable
          style={[styles.familyDetailsWrapper, styles.parentWrapperLayout]}
          onPress={() => {}}
        >
          <Text style={[styles.familyDetails, styles.professionalTypo]}>
            Family Details
          </Text>
        </Pressable>
      </View>
      <Text style={styles.photos}>Photos</Text>
      <View style={styles.vaneetaRoyParent}>
        <Text style={styles.vaneetaRoy1}>Vaneeta Roy</Text>
        <View style={[styles.nameParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
          
          <Image
            style={styles.groupChildLayout}
            contentFit="cover"
            source={require("./assets/User_circle.png")}
          />
       
        </View>
      </View>
      <View style={styles.june1970Parent}>
        <Text style={styles.vaneetaRoy1}>20 June 1970</Text>
        <View style={[styles.dateOfBirthParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>Date of Birth</Text>
          <Image
            style={styles.groupChildLayout}
            contentFit="cover"
            source={require("./assets/Date_range_fill.png")}
          />
        </View>
      </View>
      <View style={styles.usaParent}>
        <Text style={styles.vaneetaRoy1}>USA</Text>
        <View style={[styles.countryParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>Country</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.coronavirus1Icon}
              contentFit="cover"
              source={require("./assets/coronavirus-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.georgia30643UsaParent}>
        <Text style={styles.vaneetaRoy1}>Georgia 30643, USA</Text>
        <View style={[styles.stateLivesInParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>State lives in</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.unitedStates1Icon}
              contentFit="cover"
              source={require("./assets/unitedstates-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.hartwellParent}>
        <Text style={styles.vaneetaRoy1}>Hartwell</Text>
        <View style={[styles.cityLivesInParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>City lives in</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.unitedStates1Icon}
              contentFit="cover"
              source={require("./assets/location-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.unmarriedParent}>
        <Text style={styles.vaneetaRoy1}>Unmarried</Text>
        <View style={[styles.maritalStatusParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>Marital status</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.unitedStates1Icon}
              contentFit="cover"
              source={require("./assets/weddingring-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.hinduParent}>
        <Text style={styles.vaneetaRoy1}>Hindu</Text>
        <View style={[styles.countryParent, styles.parentPosition]}>
          <Text style={[styles.religion, styles.nameTypo]}>Religion</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.unitedStates1Icon}
              contentFit="cover"
              source={require("./assets/religions-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.marathaParent}>
        <Text style={styles.vaneetaRoy1}>Maratha</Text>
        <View style={[styles.communityParent, styles.parentPosition]}>
          <Text style={[styles.religion, styles.nameTypo]}>Community</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.unitedStates1Icon}
              contentFit="cover"
              source={require("./assets/language-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.marathiHindiEnglishParent}>
        <Text style={styles.vaneetaRoy1}>Marathi, Hindi, English</Text>
        <View style={[styles.motherTongueParent, styles.parentPosition]}>
          <Text style={[styles.religion, styles.nameTypo]}>Mother Tongue</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.unitedStates1Icon}
              contentFit="cover"
              source={require("./assets/groupusers-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.vegetarianParent}>
        <Text style={styles.vaneetaRoy1}>{`Vegetarian `}</Text>
        <View style={[styles.dietParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>Diet</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.unitedStates1Icon}
              contentFit="cover"
              source={require("./assets/healthyfood-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={styles.ftParent}>
        <Text style={styles.vaneetaRoy1}>5” 8ft</Text>
        <View style={[styles.heightParent, styles.parentPosition]}>
          <Text style={[styles.name, styles.nameTypo]}>Height</Text>
          <LinearGradient
            style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
            locations={[0, 1]}
            colors={["#a0235b", "#d3005f"]}
          >
            <Image
              style={styles.unitedStates1Icon}
              contentFit="cover"
              source={require("./assets/height-1.png")}
            />
          </LinearGradient>
        </View>
      </View>
      <View style={[styles.userProfile1Child, styles.parentPosition]} />
      <View style={styles.positiveAttitudeLifeItIsMWrapper}>
        <Image
          style={styles.positiveAttitudeLifeItIsMIcon1}
          contentFit="cover"
          source={require("./assets/positive-attitude-life-it-is-my-key-happiness-2.png")}
        />
      </View>
      <Pressable
        style={[
          styles.bigHappinessBeautifulWomanWrapper,
          styles.beautifulWrapperShadowBox,
        ]}
        onPress={() => {}}
      >
        <Image
          style={styles.positiveAttitudeLifeItIsMIcon1}
          contentFit="cover"
          source={require("./assets/big-happiness-beautiful-woman-1.png")}
        />
      </Pressable>
      <Pressable
        style={[
          styles.shiningFaceBeautifulWomanHWrapper,
          styles.beautifulWrapperShadowBox,
        ]}
        onPress={() => {}}
      >
        <Image
          style={styles.positiveAttitudeLifeItIsMIcon1}
          contentFit="cover"
          source={require("./assets/shining-face-beautiful-woman-home-1.png")}
        />
      </Pressable>
      <View
        style={[
          styles.naturalHappyWomanRelaxingHWrapper,
          styles.beautifulWrapperShadowBox,
        ]}
      >
        <Image
          style={styles.positiveAttitudeLifeItIsMIcon1}
          contentFit="cover"
          source={require("./assets/natural-happy-woman-relaxing-home-1.png")}
        />
      </View>
      <View />
      <View style={[styles.userProfile1Item, styles.parentPosition]} >
      <Pressable
        style={[styles.acceptRequestWrapper, styles.wrapperPosition]}
        onPress={() => {}}
      >
        <Text style={[styles.acceptRequest, styles.cancelPosition]}>
          Accept Request
        </Text>
      </Pressable>
      <View style={[styles.cancelWrapper, styles.wrapperPosition]}>
        <Text style={[styles.cancel, styles.cancelPosition]}>Cancel</Text>
      </View>
      </View>
      <View style={styles.component6}>
        <View style={styles.component6Child} />
        <Pressable
          style={[styles.expandLeft, styles.expandIconLayout]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("./assets/expand-left.png")}
          />
        </Pressable>
        <Text style={[styles.vaneetaRoy2, styles.cancelPosition]}>
          Vaneeta Roy
        </Text>
      </View>
        </View>
      </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  vaneetaRoyTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    fontWeight: "600",
  },
  yrs57Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  hartwellUsaTypo: {
    top: 231,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  expandIconLayout: {
    width: 30,
    position: "absolute",
  },
  parentWrapperLayout: {
    height: 37,
    overflow: "hidden",
  },
  frameChildLayout: {
    width: 106,
    position: "absolute",
  },
  professionalTypo: {
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  nameTypo: {
    color: Color.colorDarkgray,
    lineHeight: 24,
    fontSize: FontSize.size_smi,
    top: 3,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_7xl,
    left: 0,
    height: 30,
    width: 30,
    top: 0,
    overflow: "hidden",
    position: "absolute",
    backgroundColor: "linear-gradient(180deg, rgb(160, 35, 91) 0%, rgb(211.44, 0, 94.72) 100%)"

  },
  beautifulWrapperShadowBox: {
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    height: 50,
    width: 50,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 2,
    },
    borderRadius: Border.br_9xs,
    top: 422,
    overflow: "hidden",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  wrapperPosition: {
    height: 42,
    top: 748,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 2,
    },
    overflow: "hidden",
    position: "absolute",
  },
  cancelPosition: {
    marginTop: -12,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  barPosition: {
    width: 3,
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorBlack,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  positiveAttitudeLifeItIsMIcon: {
    marginTop: -135.5,
    width: 393,
    height: 371,
    top: "50%",
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  womenImageChild: {
    top: 151,
    height: 120,
    backgroundColor: "transparent",
    width: 391,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  favoriteFillIcon: {
    left: 296,
    width: 52,
    height: 46,
    top: 0,
    position: "absolute",
  },
  vaneetaRoy: {
    top: 173,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.colorWhite,
    left: 23,
    position: "absolute",
  },
  yrs57: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    position: "absolute",
    top: 208,
    color: Color.colorWhite,
    left: 23,
  },
  marathi96Kuli: {
    color: Color.colorWhite,
    left: 23,
  },
  productManager: {
    left: 100,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    position: "absolute",
    top: 208,
    color: Color.colorWhite,
  },
  hartwellUsa: {
    left: 183,
    color: Color.colorOrange,
  },
  expandLeftIcon: {
    marginTop: -19.5,
    left: 8,
    display: "none",
    height: 30,
    borderRadius: Border.br_5xs,
    top: "50%",
  },
  expandLeftIcon1: {
    marginTop: 10.5,
    left: 382,
    display: "none",
    height: 30,
    borderRadius: Border.br_5xs,
    top: "50%",
  },
  womenImage: {
    top: 104,
    height: 271,
    overflow: "hidden",
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  basicDetails: {
    marginLeft: -46,
    color: Color.colorMediumvioletred,
    marginTop: -10.5,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  frameChild: {
    marginLeft: -53,
    top: 35,
    height: 1,
    left: "50%",
  },
  basicDetailsParent: {
    left: 20,
    height: 37,
    overflow: "hidden",
    top: 0,
  },
  professional: {
    marginTop: -9.5,
    marginLeft: -42,
  },
  professionalWrapper: {
    marginLeft: -53.5,
    width: 108,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  familyDetails: {
    marginLeft: -48,
    marginTop: -10.5,
  },
  familyDetailsWrapper: {
    marginLeft: 71.5,
    width: 104,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  frameParent: {
    top: 490,
    backgroundColor: "#f6f6f6",
    left: 0,
    position: "absolute",
    width: 391,
  },
  photos: {
    top: 388,
    lineHeight: 30,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_base,
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vaneetaRoy1: {
    left: 171,
    lineHeight: 24,
    fontSize: FontSize.size_smi,
    top: 3,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  name: {
    left: 40,
  },
  nameParent: {
    width: 79,
    height: 30,
    top: 0
  

  },

  vaneetaRoyParent: {
    top: 541,
    width: 255,
    left: 20,
    height: 30,
    position: "absolute",
  },
  dateOfBirthParent: {
    width: 120,
    height: 30,
    top: 0,
  },
  june1970Parent: {
    top: 585,
    width: 256,
    left: 20,
    height: 30,
    position: "absolute",
  },
  coronavirus1Icon: {
    marginTop: -10,
    marginLeft: -10,
    height: 20,
    width: 20,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  coronavirus1Wrapper: {
    backgroundColor: "transparent",
  },
  countryParent: {
    width: 92,
    height: 30,
    top: 0,
  },
  usaParent: {
    top: 629,
    width: 197,
    left: 20,
    height: 30,
    position: "absolute",
  },
  unitedStates1Icon: {
    marginTop: -9,
    marginLeft: -9,
    width: 18,
    height: 18,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  stateLivesInParent: {
    width: 121,
    height: 30,
    top: 0,
  },
  georgia30643UsaParent: {
    top: 673,
    width: 301,
    left: 20,
    height: 30,
    position: "absolute",
  },
  cityLivesInParent: {
    width: 113,
    height: 30,
    top: 0,
  },
  hartwellParent: {
    top: 717,
    width: 225,
    left: 20,
    height: 30,
    position: "absolute",
  },
  maritalStatusParent: {
    width: 128,
    height: 30,
    top: 0,
  },
  unmarriedParent: {
    top: 849,
    width: 241,
    left: 20,
    height: 30,
    position: "absolute",
  },
  religion: {
    left: 41,
  },
  hinduParent: {
    top: 893,
    left: 19,
    width: 210,
    height: 30,
    position: "absolute",
  },
  communityParent: {
    width: 118,
    height: 30,
    top: 0,
  },
  marathaParent: {
    top: 937,
    width: 228,
    left: 20,
    height: 30,
    position: "absolute",
  },
  motherTongueParent: {
    width: 139,
    height: 30,
    top: 0,
  },
  marathiHindiEnglishParent: {
    top: 981,
    width: 315,
    left: 20,
    height: 30,
    position: "absolute",
  },
  dietParent: {
    width: 65,
    height: 30,
    top: 0,
  },
  vegetarianParent: {
    top: 761,
    width: 245,
    left: 20,
    height: 30,
    position: "absolute",
  },
  heightParent: {
    width: 82,
    height: 30,
    top: 0,
  },
  ftParent: {
    top: 805,
    width: 205,
    left: 20,
    height: 30,
    position: "absolute",
  },
  userProfile1Child: {
    top: 959,
    height: 46,
    overflow: "hidden",
    width: 390,
  },
  positiveAttitudeLifeItIsMIcon1: {
    marginTop: -23,
    marginLeft: -23,
    width: 46,
    borderRadius: Border.br_9xs,
    height: 46,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  positiveAttitudeLifeItIsMWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 7,
    elevation: 7,
    height: 50,
    width: 50,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 2,
    },
    top: 422,
    backgroundColor: Color.colorMediumvioletred,
    borderRadius: Border.br_9xs,
    left: 20,
    overflow: "hidden",
    position: "absolute",
  },
  bigHappinessBeautifulWomanWrapper: {
    left: 82,
  },
  shiningFaceBeautifulWomanHWrapper: {
    left: 144,
  },
  naturalHappyWomanRelaxingHWrapper: {
    left: 206,
  },
  userProfile1Item: {
    top: 280,
  // height: 10,
   width: 391,
   // overflow: "hidden",
  },
  acceptRequest: {
    marginLeft: -62,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  acceptRequestWrapper: {
    left: 200,
    borderRadius: 10,
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderWidth: 1,
    width: 170,
    backgroundColor: Color.colorMediumvioletred,
    top: 48,
  },
  cancel: {
    marginLeft: -31.5,
    color: "#585867",
    fontFamily: FontFamily.poppinsRegular,
    marginTop: -12,
    left: "50%",
  },
  cancelWrapper: {
    borderRadius: 6,
    backgroundColor: "#e3e3fa",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 10,
    elevation: 10,
    width: 169,
    left: 20,
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
    marginLeft: -195,
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
    marginLeft: 2,
    display: "none",
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
    width: 20,
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
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  expandLeft: {
    left: 12,
    top: 7,
    height: 36,
  },
  vaneetaRoy2: {
    left: 50,
    color: "#31425f",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  component6: {
    top: 53,
    height: 48,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  userProfile1: {
    width: "100%",
    height: 1200,
    backgroundColor: Color.colorWhite,
  },

  
});

export default  BasicDetails;
