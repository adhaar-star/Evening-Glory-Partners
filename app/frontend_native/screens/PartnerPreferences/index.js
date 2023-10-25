import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyles";
import RangeSlider from 'rn-range-slider';

import Label from "../../components/RangeSlider/Label";
import Notch from "../../components/RangeSlider/Notch";
import Rail from "../../components/RangeSlider/Rail";
import RailSelected from "../../components/RangeSlider/RailSelected";
import Thumb from "../../components/RangeSlider/Thumb";
import { SelectList } from 'react-native-dropdown-select-list'



const PartnerPreferences = () => {
    const [selected, setSelected] = React.useState("");
    const renderThumb = React.useCallback(() => <Thumb/>, []);
    const renderRail = React.useCallback(() => <Rail/>, []);
    const renderRailSelected = React.useCallback(() => <RailSelected/>, []);
    const diet = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'Vegeterian'},
        {key:'3', value:'Non Vegeterian'}
     
    ]

    const martial_status = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'Never Married'},
        {key:'3', value:'Married'}
     
    ]

    const religion = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'Hindu'},
        {key:'3', value:'Sikh'},
        {key:'4', value:'Muslim'},
        {key:'5', value:'Christian'}
  
    ]

    const country_living = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'India'},
        {key:'3', value:'USA'}

    ]


    const state_living = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'CA'},
        {key:'3', value:'NY'}
    
    ]

    const country_grew_up = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'India'},
        {key:'3', value:'USA'}
      
    ]

    const qualification = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'Masters'},
        {key:'3', value:'Bachelors'},

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

    const community = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'Maratha'},
        {key:'3', value:'Jain'},
        {key:'4', value:'Brahmin'},
    ]
    const mother_tongue = [
        {key:'1', value:"Doesn't matter"},
        {key:'2', value:'Hindi'},
        {key:'3', value:'English'},
        {key:'4', value:'Marathi'},
    ]

    const updateSlider = () => (low, high, fromUser) => {
      this.setState({rangeLow: low, rangeHigh: high})
  }
  return (
    <View style={styles.profilePhoto}>
      <View style={[styles.frameParent, styles.groupFrameLayout]}>
      <View style={styles.doesntMatterParent}>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={diet} 
        save="value"
    />
</View>
        <Text style={[styles.diet, styles.dietTypo]}>Diet</Text>
      </View>
      
      <View style={[styles.ageRangeParent, styles.rangeParentLayout]}>
       
      <Text style={[styles.ageRange, styles.textClr]}>Age Range</Text>
        <Text style={[styles.min50Yrs, styles.yrsTypo]}>Min 50 yrs</Text>
        <Text style={[styles.max70Yrs, styles.yrsTypo]}>Max 70 yrs</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <RangeSlider
    style={{width: "100%", height: 80}}
    gravity={'center'}
    min={200}
    max={1000}
    step={20}
    renderThumb={renderThumb}
    renderRail={renderRail}
    renderRailSelected={renderRailSelected}
    selectionColor="#3df"
    blankColor="#f618"
    onValueChanged={updateSlider}/>
</View>
      </View>
      <View style={[styles.heightRangeParent, styles.rangeParentLayout]}>
      <Text style={[styles.ageRange, styles.textClr]}>Height Range</Text>
        <Text style={[styles.min50Yrs, styles.yrsTypo]}>4.0 ft</Text>
        <Text style={[styles.ft1, styles.yrsTypo]}>6.0 ft</Text>

        <View style={{flex: 1, flexDirection: 'row'}}>
        <RangeSlider
    style={{width: "100%", height: 80}}
    gravity={'center'}
    min={200}
    max={1000}
    step={20}
    renderThumb={renderThumb}
    renderRail={renderRail}
    renderRailSelected={renderRailSelected}
    selectionColor="#3df"
    blankColor="#f618"
    onValueChanged={updateSlider}/>
</View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild4, styles.groupChildLayout]} />
        <Text style={[styles.basicDetails, styles.detailsTypo]}>
          Basic Details
        </Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.frameGroup, styles.groupFrameLayout]}>
        <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={country_living} 
        save="value"
    />
    </View>
          <Text style={[styles.diet, styles.dietTypo]}>Country Living in</Text>
        </View>
        <View style={[styles.frameContainer, styles.groupFrameLayout]}>
        <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={state_living} 
        save="value"
    />
    </View>
          <Text style={[styles.diet, styles.dietTypo]}>State Living in</Text>
        </View>
        <View style={[styles.groupView, styles.groupFrameLayout]}>
        <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={country_grew_up} 
        save="value"
    />
    </View>
          <Text style={[styles.diet, styles.dietTypo]}>Country grew up in</Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupChildLayout]}>
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <Text style={[styles.locationsDetails, styles.detailsTypo]}>
          Locations Details
        </Text>
      </View>
      <View style={[styles.profilePhotoInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
      </View>
      <View style={[styles.groupContainer, styles.groupContainerPosition]}>
        <View style={[styles.groupParent1, styles.groupChildLayout]}>
          <View style={[styles.groupParent1, styles.groupChildLayout]}>
            <View style={[styles.groupChild7, styles.groupChildLayout]} />
          </View>
          <Text
            style={[styles.educationWork, styles.detailsTypo]}
          >{`Education & Work `}</Text>
        </View>
        <View style={styles.groupParent2}>
          <View style={[styles.frameGroup, styles.groupFrameLayout]}>
          <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={qualification} 
        save="value"
    />
    </View>
            <Text style={[styles.diet, styles.dietTypo]}>Qualification</Text>
          </View>
          <View style={[styles.frameContainer, styles.groupFrameLayout]}>
          <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={working_with} 
        save="value"
    />
    </View>
            <Text style={[styles.diet, styles.dietTypo]}>Working with</Text>
          </View>
          <View style={[styles.groupView, styles.groupFrameLayout]}>
          <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={profession} 
        save="value"
    />
    </View>
            <Text style={[styles.diet, styles.dietTypo]}>Profession Area</Text>
          </View>
          <View style={styles.rectangleContainer}>
            <View style={styles.groupChild8} />
            <View style={styles.doesntMatterWrapper}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={income} 
        save="value"
    />
    </View>
         
            <View style={[styles.incomeRangeWrapper, styles.wrapperLayout]}>
              <Text style={[styles.incomeRange, styles.saveClr]}>
                Income Range
              </Text>
            </View>
  
            <Text style={[styles.diet, styles.dietTypo]}>Annual Income</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.appearance, styles.detailsTypo]}>Appearance</Text>
      <View style={[styles.profilePhotoChild, styles.groupContainerPosition]} />
      <Pressable
        style={[styles.groupPressable, styles.groupPressableLayout]}
        onPress={() => {}}
      >
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.component6ShadowBox]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        />
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
      <View style={[styles.frameParent4, styles.groupFrameLayout]}>
      <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={martial_status} 
        save="value"
    />
    </View>
        <Text style={[styles.diet, styles.dietTypo]}>Marital Status</Text>
      </View>
  
      <View style={[styles.frameParent6, styles.groupFrameLayout]}>
      <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={religion} 
        save="value"
    />
    </View>
        <Text style={styles.dietTypo}>Religion</Text>
      </View>
     
      <View style={[styles.frameParent8, styles.groupFrameLayout]}>
      <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={community} 
        save="value"
    />
    </View>
        <Text style={styles.dietTypo}>Community</Text>
      </View>
      <View style={[styles.frameParent9, styles.groupFrameLayout]}>
      <View style={styles.doesntMatterParent}>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={mother_tongue} 
        save="value"
    />
    </View>
        <Text style={[styles.diet, styles.dietTypo]}>Mother Tongue</Text>
      </View>
      
      <View style={[styles.component6, styles.component6SpaceBlock]}>
        <View style={styles.component6Child} />
        <Text style={[styles.partnerPreference, styles.saveTypo]}>
          Partner Preference
        </Text>
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
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  groupFrameLayout: {
    height: 74,
    width: 351,
    position: "absolute",
  },
  expandIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  dietTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  textClr: {
    color: Color.colorSilver,
    textAlign: "left",
    position: "absolute",
  },
  rangeParentLayout: {
    height: 87,
    left: 20,
    width: 351,
    position: "absolute",
  },
  yrsTypo: {
    top: 45,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupLayout1: {
    height: 6,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 14,
    top: 50,
    height: 14,
    position: "absolute",
  },
  textTypo: {
    top: 67,
    color: Color.colorSilver,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 390,
    left: 0,
    position: "absolute",
  },
  detailsTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    top: "50%",
    textAlign: "left",
    lineHeight: 26,
    position: "absolute",
  },
  groupContainerPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    height: 36,
    width: 172,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    top: 32,
    position: "absolute",
  },
  statusAreaPosition: {
    left: "50%",
    position: "absolute",
  },
  minPosition: {
    marginTop: -0.5,
    left: "50%",
    top: "50%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  saveClr: {
    color: Color.colorWhite,
    left: "50%",
  },
  groupLayout: {
    width: 155,
    top: 129,
    overflow: "hidden",
    height: 42,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupPressableLayout: {
    width: 139,
    top: "50%",
    height: 42,
  },
  component6ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    left: "50%",
    position: "absolute",
  },
  saveTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  component6SpaceBlock: {
    marginLeft: -195,
    width: 390,
    backgroundColor: Color.colorWhite,
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
    backgroundColor: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  doesntMatter: {
    top: 8,
    left: 12,
    textAlign: "left",
    lineHeight: 26,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  expandDownIcon: {
    left: 316,
    top: "50%",
    marginTop: -12,
  },
  doesntMatterParent: {
    overflow: "hidden",
    height: 42,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    top: 32,
    borderRadius: Border.br_5xs,
    left: 0,
    width: 351,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  diet: {
    textTransform: "capitalize",
  },
  frameParent: {
    top: 1929,
    left: 21,
  },
  text: {
    top: 338,
    lineHeight: 20,
    left: 20,
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
  },
  ageRange: {
    fontSize: FontSize.size_xs,
    lineHeight: 17,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorSilver,
    top: 25,
    left: 0,
  },
  min50Yrs: {
    left: 0,
  },
  max70Yrs: {
    left: 278,
    width: 73,
    lineHeight: 20,
  },
  groupChild: {
    backgroundColor: Color.colorGhostwhite_100,
    borderRadius: Border.br_8xl,
    top: 54,
    height: 6,
    left: 0,
    width: 351,
  },
  groupItem: {
    left: 174,
    width: 62,
    backgroundColor: Color.colorMidnightblue,
    borderRadius: Border.br_8xl,
    top: 54,
    height: 6,
  },
  groupInner: {
    left: 160,
    height: 14,
  },
  ellipseIcon: {
    left: 236,
    height: 14,
  },
  text1: {
    left: 1,
  },
  text2: {
    left: 328,
  },
  ageRangeParent: {
    top: 168,
  },
  ft1: {
    lineHeight: 20,
    left: 316,
  },
  text3: {
    left: 337,
  },
  heightRangeParent: {
    top: 275,
  },
  groupChild4: {
    backgroundColor: "#fff4ed",
    top: 0,
  },
  basicDetails: {
    marginTop: -14,
    color: "#f28d54",
    left: 19,
  },
  rectangleParent: {
    top: 108,
  },
  frameGroup: {
    top: 0,
    left: 0,
  },
  frameContainer: {
    top: 94,
    left: 0,
  },
  groupView: {
    top: 188,
    left: 0,
  },
  groupParent: {
    top: 1014,
    height: 262,
    left: 20,
    width: 351,
    position: "absolute",
  },
  groupChild5: {
    backgroundColor: "#fcf6e4",
    top: 0,
  },
  locationsDetails: {
    color: "#f8d05e",
    left: 20,
    marginTop: -12,
  },
  rectangleGroup: {
    top: 954,
  },
  groupChild6: {
    backgroundColor: "#fbf3fc",
    top: 0,
  },
  profilePhotoInner: {
    top: 1869,
  },
  groupChild7: {
    backgroundColor: "#f5f5ff",
    top: 0,
  },
  groupParent1: {
    top: 0,
  },
  educationWork: {
    color: "#9493d2",
    left: 19,
    marginTop: -12,
  },
  groupChild8: {
    top: 87,
    backgroundColor: "#f5f5f5",
    height: 108,
    left: 0,
    width: 351,
    position: "absolute",
  },
  doesntMatter6: {
    marginLeft: -51,
    marginTop: -13,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    left: "50%",
  },
  doesntMatterWrapper: {
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  min: {
    marginLeft: -167.5,
  },
  max: {
    marginLeft: 11.5,
  },
  incomeRange: {
    marginLeft: -51,
    marginTop: -13,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  incomeRangeWrapper: {
    left: 178,
    backgroundColor: Color.colorMidnightblue,
  },
  expandDownIcon7: {
    left: 123,
    top: "50%",
    marginTop: -12,
  },
  parent: {
    left: 8,
  },
  group: {
    left: 187,
  },
  rectangleContainer: {
    top: 282,
    height: 195,
    left: 0,
    width: 351,
    position: "absolute",
  },
  groupParent2: {
    top: 60,
    height: 477,
    left: 19,
    width: 351,
    position: "absolute",
  },
  groupContainer: {
    top: 1304,
    height: 537,
  },
  appearance: {
    marginTop: 1454,
    color: "#cd93d2",
    left: 21,
  },
  profilePhotoChild: {
    bottom: -1403,
    height: 72,
    overflow: "hidden",
  },
  rectangleLineargradient: {
    marginTop: -21,
    marginLeft: -69.5,
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    backgroundColor: "transparent",
    width: 139,
    top: "50%",
    height: 42,
    borderRadius: Border.br_5xs,
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  save: {
    marginLeft: -19.5,
    textAlign: "center",
    color: Color.colorWhite,
    left: "50%",
    marginTop: -12,
  },
  groupPressable: {
    marginTop: 1629,
    marginLeft: -81,
    left: "50%",
    position: "absolute",
  },
  frameParent4: {
    top: 382,
    left: 20,
  },
  frameParent5: {
    top: 570,
    left: 19,
  },
  frameParent6: {
    top: 476,
    left: 20,
  },
  frameParent7: {
    top: 664,
    left: 19,
  },
  frameParent8: {
    top: 558,
    left: 19,
  },
  frameParent9: {
    top: 652,
    left: 19,
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
  partnerPreference: {
    left: 45,
    lineHeight: 23,
    color: "#31425f",
    marginTop: -13,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  expandLeft: {
    left: 13,
    top: 12,
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
      height: 12,
    },
    left: "50%",
    position: "absolute",
  },
  text6: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    fontWeight: "600",
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
  },
  privacyIndicatorNone: {
    top: 6,
    left: 6,
    width: 6,
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
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  profilePhoto: {
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default PartnerPreferences;
