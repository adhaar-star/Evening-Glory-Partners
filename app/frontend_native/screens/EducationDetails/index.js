import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize, Padding } from "./GlobalStyles";
import { SelectList } from 'react-native-dropdown-select-list'

const EducationDetails = () => {
    const qualification = [
        {key:'1', value:"Masters"},
        {key:'2', value:'Bachelors'},
        {key:'3', value:'Phd'}
    ]

    const working_with = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'Google'},
        {key:'3', value:'Amazon'},
   
    ]

    const profession = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'Engineer'},
        {key:'3', value:'Doctor'}
   
    ]

    const income = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value: "$10,000 - $50,000"},
        {key:'3', value:'$50,000 - $100,000'},
        {key:'4', value:'>$100,000'}

    ]

    const college = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value: "Boston University"},
        {key:'3', value:'Harvard University'},
        {key:'4', value:'New York University'},
        {key:'5', value:'Stanford University'}
       

    ]

  return (
    <View style={styles.verificationCode}>
     
      <Pressable style={styles.rectangleParent} onPress={() => {}}>
        <View style={styles.groupChild} />
        <Text style={[styles.continue, styles.yourTypo]}>Continue</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("./assets/vector.svg")}
      />
      
      <Text style={[styles.yourAlmostThereContainer, styles.yourTypo]}>
        <Text style={styles.yourAlmostThere}>{`Your Almost There!
`}</Text>
        <Text
          style={styles.fillEducationAnd}
        >{`Fill Education and Work `}</Text>
      </Text>
      <View style={[styles.frameParent, styles.groupFrameLayout]}>
     
            <SelectList  
        setSelected={(val) => setSelected(val)} 
        data={qualification} 
        save="value"
    />
       
        <Text style={[styles.highestQualification, styles.selectStateTypo]}>
          <Text
            style={[
              styles.highestQualification1,
              styles.collegeYouAttendedTransform,
            ]}
          >
            Highest qualification
          </Text>
          <Text style={styles.text1}>*</Text>
        </Text>
      </View>
      <View style={[styles.frameGroup, styles.groupFrameLayout]}>
      
        <SelectList   
        
        setSelected={(val) => setSelected(val)} 
        data={college} 
        save="value"
    />
        <Text
          style={[
            styles.collegeYouAttended,
            styles.collegeYouAttendedTransform,
          ]}
        >
          College You attended
        </Text>
      </View>
      <View style={[styles.frameContainer, styles.groupFrameLayout]}>
      
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={working_with} 
        save="value"
    />
  
        <Text style={[styles.yourWorkWith, styles.selectStateTypo]}>
          Your Work With
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupFrameLayout]}>
       
             <SelectList   style={[styles.expandDownIcon1, styles.expandIconLayout]}
        setSelected={(val) => setSelected(val)} 
        data={profession} 
        save="value"
    />
    
        <Text style={[styles.yourWorkWith, styles.selectStateTypo]}>
          Your Work As
        </Text>
      </View>
      <View style={[styles.frameParent1, styles.groupFrameLayout]}>
        <View style={styles.selectStateParent}>
          
            <SelectList   style={[styles.expandDownIcon1, styles.expandIconLayout]}
        setSelected={(val) => setSelected(val)} 
        data={income} 
        save="value"
    />
        </View>
        <Text style={[styles.highestQualification, styles.selectStateTypo]}>
          <Text style={styles.yourAnnualIncome}>Your Annual Income</Text>
          <Text style={styles.text1}>*</Text>
        </Text>
      </View>
      <Pressable style={styles.expandLeft} onPress={() => {}}>
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
  vectorIconLayout: {
    width: 390,
    position: "absolute",
  },
  yourTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  vectorIconPosition: {
    left: 0,
    top: 0,
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
  groupFrameLayout: {
    height: 74,
    left: 20,
    width: 351,
    position: "absolute",
  },
  selectStateTypo: {
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  expandIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  collegeStyle: {
    top: 82,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_5xs,
    width: "100%",
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    height: 42,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  collegeYouAttendedTransform: {
    textTransform: "capitalize",
    color: Color.colorDarkslategray_100,
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
    marginLeft: -195,
    width: 390,
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
    top: 0,
    height: 42,
    width: 162,
    marginLeft: -81,
    left: "50%",
    position: "absolute",
  },
  continue: {
    marginLeft: -37,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 746,
    height: 42,
    width: 162,
    marginLeft: -81,
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    height: 230,
    width: 390,
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
    justifyContent: "center",
    width: 390,
    marginLeft: -195,
  },
  yourAlmostThere: {
    fontSize: 22,
  },
  fillEducationAnd: {
    fontSize: FontSize.size_base,
  },
  yourAlmostThereContainer: {
    top: 65,
    left: 60,
    color: "#31425f",
    width: 229,
    textAlign: "left",
    position: "absolute",
  },
  selectState: {
    top: 8,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
    left: 12,
  },
  expandDownIcon: {
    top: 9,
    left: 317,
  },
  selectStateParent: {
    top: 32,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_5xs,
    width: 351,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    height: 42,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  highestQualification1: {
    color: Color.colorDarkslategray_100,
  },
  text1: {
    color: Color.colorRed,
  },
  highestQualification: {
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameParent: {
    top: 231,
  },
  collegeYouAttended: {
    color: Color.colorDarkslategray_100,
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameGroup: {
    top: 327,
  },
  expandDownIcon1: {
    left: 316,
    top: "50%",
    marginTop: -12,
  },
  yourWorkWith: {
    color: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameContainer: {
    top: 423,
  },
  groupView: {
    top: 519,
  },
  yourAnnualIncome: {
    color: Color.colorDarkslategray_100,
  },
  frameParent1: {
    top: 615,
  },
  icon: {
    marginTop: -360,
    height: "100%",
    borderRadius: Border.br_5xs,
    width: "100%",
  },
  expandLeft: {
    width: 50,
    height: 50,
    left: 12,
    top: "50%",
    position: "absolute",
  },
  verificationCode: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default EducationDetails;
