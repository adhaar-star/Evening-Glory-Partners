import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color, Padding } from "./GlobalStyles";
import { SelectList } from 'react-native-dropdown-select-list'

const ProfileGeneral = () => {
    const state = [
        {key:'1', value:"CA"},
        {key:'2', value:'NY'},
        {key:'3', value:'NV'}
     
    ]

    const city = [
        {key:'1', value:"New York City"},
        {key:'2', value:'Los Angeles'},
        {key:'3', value:'Las Vegas'}
     
    ]

    const martial_status = [
        {key:'1', value:"Never Married"},
        {key:'2', value:'Married'}
     
    ]

    const diet = [
        {key:'1', value:"Vegetarian"},
        {key:'2', value:'Non Vegetarian'}
     
    ]

    const height = [
        {key:'1', value:"<5'0"},
        {key:'2', value:"5'2"},
        {key:'3', value:"5'3"},
        {key:'4', value:"5'4"},
        {key:'5', value:"5'5"},
        {key:'6', value:"5'6"},
        {key:'7', value:"5'7"},
        {key:'8', value:"5'8"},
        {key:'9', value:"5'9"},
        {key:'10', value:"5'10"},
        {key:'11', value:"5'11"},
        {key:'12', value:"6'0"},
        {key:'13', value:"6'1"},
        {key:'14', value:"6'2"},
        {key:'15', value:"6'3"},
        {key:'16', value:"6'4"},
        {key:'17', value:">6'4"},
     
    ]

    const religion = [
        {key:'1', value:"Hindu"},
        {key:'2', value:"Muslim"},
        {key:'3', value:"Sikh"},
        {key:'4', value:"Christan"},
    ]

    const community = [
        {key:'1', value:"Maratha"},
        {key:'2', value:"Jain"},
        {key:'3', value:"Brahmin"}
    
    ]

    const mother_tongue = [
        {key:'1', value:"Hindi"},
        {key:'2', value:"Marathi"},
        {key:'3', value:"English"}
    
    ]


  return (
    <View style={styles.verificationCode}>
      <View style={[styles.frameParent, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>

          <SelectList  style={[styles.expandDownIcon, styles.expandIconLayout]}
        setSelected={(val) => setSelected(val)} 
        data={state} 
        save="value"
    />
        </View>
        <Text style={[styles.stateYouLivesContainer, styles.containerTypo]}>
          <Text style={styles.stateYouLives}>State you lives in</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.frameGroup, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>
      
     
<SelectList  style={[styles.expandDownIcon, styles.expandIconLayout]}
        setSelected={(val) => setSelected(val)} 
        data={city} 
        save="value"
    />


        </View>
        <Text style={[styles.stateYouLivesContainer, styles.containerTypo]}>
          <Text style={styles.stateYouLives}>City you lives in</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.frameContainer, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>
         
      
          <SelectList  style={[styles.expandDownIcon2, styles.continuePosition1]}
        setSelected={(val) => setSelected(val)} 
        data={martial_status} 
        save="value"
    />
        </View>
        <Text style={[styles.stateYouLivesContainer, styles.containerTypo]}>
          <Text style={styles.stateYouLives}>Your marital status</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>
        
      
          <SelectList  style={[styles.expandDownIcon2, styles.continuePosition1]}
        setSelected={(val) => setSelected(val)} 
        data={diet} 
        save="value"
    />
        </View>
        <Text style={[styles.yourDiet, styles.containerTypo]}>Your Diet</Text>
      </View>
      <View style={[styles.frameParent1, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>
        

<SelectList  style={[styles.expandDownIcon2, styles.continuePosition1]}
        setSelected={(val) => setSelected(val)} 
        data={height} 
        save="value"
    />
        </View>
        <Text style={[styles.stateYouLivesContainer, styles.containerTypo]}>
          <Text style={styles.stateYouLives}>Your Height</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.frameParent2, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>
     

          <SelectList  style={[styles.expandDownIcon2, styles.continuePosition1]}
        setSelected={(val) => setSelected(val)} 
        data={religion} 
        save="value"
    />
        </View>
        <Text style={[styles.stateYouLivesContainer, styles.containerTypo]}>
          <Text style={styles.stateYouLives}>Religion</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.frameParent3, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>
        
<SelectList  style={[styles.expandDownIcon2, styles.continuePosition1]}
        setSelected={(val) => setSelected(val)} 
        data={community} 
        save="value"
    />
        </View>
        <Text style={[styles.stateYouLivesContainer, styles.containerTypo]}>
          <Text style={styles.stateYouLives}>Community</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <View style={[styles.frameParent4, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>
        <SelectList  style={[styles.expandDownIcon2, styles.continuePosition1]}
        setSelected={(val) => setSelected(val)} 
        data={mother_tongue} 
        save="value"
    />
        </View>
        <Text style={[styles.motherTongue, styles.containerTypo]}>
          <Text style={styles.stateYouLives}>Mother Tongue</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildPosition]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.continue, styles.continuePosition]}>Continue</Text>
      </Pressable>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("./assets/vector.svg")}
        />
        <Text style={[styles.thanksForInfoContainer, styles.containerTypo]}>
          <Text style={styles.thanksForInfo}>{`Thanks for Info
`}</Text>
          <Text
            style={styles.letsBuildXyz}
          >{`Let’s Build Xyz Abc Profile `}</Text>
        </Text>
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
  groupFrameLayout: {
    height: 74,
    width: 351,
    left: 20,
    position: "absolute",
  },
  hinduTypo: {
    fontFamily: FontFamily.poppinsRegular,
    left: 12,
    top: 8,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  expandIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  containerTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  continuePosition1: {
    marginTop: -12,
    top: "50%",
  },
  groupChildPosition: {
    width: 162,
    marginLeft: -81,
    left: "50%",
    height: 42,
    position: "absolute",
  },
  continuePosition: {
    left: "50%",
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
  iphoneWithNotchSpaceBlock: {
    marginLeft: -195,
    width: 390,
  },
  selectState: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  expandDownIcon: {
    top: 9,
    left: 317,
  },
  selectStateParent: {
    top: 32,
    borderColor: Color.colorGainsboro_100,
    overflow: "hidden",
    height: 42,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: 351,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  stateYouLives: {
    color: Color.colorDarkslategray_100,
  },
  text: {
    color: Color.colorRed,
  },
  stateYouLivesContainer: {
    top: 0,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  frameParent: {
    top: 231,
  },
  frameGroup: {
    top: 327,
  },
  expandDownIcon2: {
    left: 316,
    top: "50%",
    height: 24,
    width: 24,
    position: "absolute",
  },
  frameContainer: {
    top: 615,
  },
  yourDiet: {
    color: Color.colorDarkslategray_100,
    top: 0,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  groupView: {
    top: 423,
  },
  frameParent1: {
    top: 519,
  },
  hindu: {
    color: Color.colorGray_200,
    textAlign: "left",
  },
  frameParent2: {
    top: 711,
  },
  frameParent3: {
    top: 807,
  },
  motherTongue: {
    textTransform: "capitalize",
    top: 0,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  frameParent4: {
    top: 903,
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
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    marginLeft: -81,
  },
  continue: {
    marginLeft: -37,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "50%",
    marginTop: -12,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    top: 1012,
  },
  vectorIcon: {
    top: 255,
    left: 93,
    height: 230,
    width: 390,
    position: "absolute",
  },
  thanksForInfo: {
    fontSize: 22,
  },
  letsBuildXyz: {
    fontSize: FontSize.size_base,
  },
  thanksForInfoContainer: {
    top: 321,
    left: 153,
    color: "#31425f",
    width: 229,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    marginTop: 50.14,
    height: "100%",
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  expandLeft: {
    left: 105,
    width: 50,
    height: 50,
    top: "50%",
    position: "absolute",
  },
  vectorParent: {
    top: -255,
    left: -93,
    width: 565,
    height: 534,
    position: "absolute",
  },
  text7: {
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
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    marginLeft: -195,
  },
  verificationCode: {
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ProfileGeneral;
