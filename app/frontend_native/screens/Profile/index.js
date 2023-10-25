import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <LinearGradient
          style={[styles.basicInfoParent, styles.basicInfoParentPosition]}
          locations={[0, 1]}
          colors={["#a0235b", "#d3005f"]}
        >
          <Text style={[styles.basicInfo, styles.basicInfoTypo]}>
            <Text style={styles.b}>B</Text>
            <Text style={styles.asic}>{`ASIC `}</Text>
            <Text style={styles.i}>i</Text>
            <Text style={styles.asic}>NFO</Text>
          </Text>
          <Image
            style={[styles.editFillIcon, styles.expandLeftLayout]}
            contentFit="cover"
            source={require("./assets/edit-fill.png")}
          />
        </LinearGradient>
        <View style={[styles.shubhamSharmaParent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            Shubham Sharma
          </Text>
          <View style={styles.nameParent}>
            <Text style={[styles.name, styles.nameTypo]}>Name</Text>
            <Image
              style={styles.groupChildLayout}
              contentFit="cover"
              source={require("./assets/User_circle.png")}
            />
          </View>
        </View>
        <View style={[styles.june1970Parent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            20 June 1970
          </Text>
          <View style={styles.dateOfBirthParent}>
            <Text style={[styles.name, styles.nameTypo]}>Date of Birth</Text>
            <Image
              style={styles.groupChildLayout}
              contentFit="cover"
              source={require("./assets/Date_range_fill.png")}
            />
          </View>
        </View>
        <View style={[styles.usaParent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            USA
          </Text>
          <View style={styles.countryParent}>
            <Text style={[styles.name, styles.nameTypo]}>Country</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.coronavirus1Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("./assets/coronavirus-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.georgia30643UsaParent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            Georgia 30643, USA
          </Text>
          <View style={styles.stateLivesInParent}>
            <Text style={[styles.name, styles.nameTypo]}>State lives in</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/unitedstates-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.hartwellParent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            Hartwell
          </Text>
          <View style={styles.cityLivesInParent}>
            <Text style={[styles.name, styles.nameTypo]}>City lives in</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/location-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.unmarriedParent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            Unmarried
          </Text>
          <View style={styles.maritalStatusParent}>
            <Text style={[styles.name, styles.nameTypo]}>Marital status</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/weddingring-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.hinduParent, styles.parentPosition1]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            Hindu
          </Text>
          <View style={styles.countryParent}>
            <Text style={[styles.religion, styles.nameTypo]}>Religion</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/religions-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.marathaParent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            Maratha
          </Text>
          <View style={styles.communityParent}>
            <Text style={[styles.religion, styles.nameTypo]}>Community</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/language-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.marathiHindiEnglishParent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            Marathi, Hindi, English
          </Text>
          <View style={styles.motherTongueParent}>
            <Text style={[styles.religion, styles.nameTypo]}>
              Mother Tongue
            </Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/groupusers-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.vegetarianParent, styles.parentPosition]}>
          <Text
            style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}
          >{`Vegetarian `}</Text>
          <View style={styles.dietParent}>
            <Text style={[styles.name, styles.nameTypo]}>Diet</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/healthyfood-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.ftParent, styles.parentPosition]}>
          <Text style={[styles.shubhamSharma, styles.shubhamSharmaTypo]}>
            5” 8ft
          </Text>
          <View style={styles.heightParent}>
            <Text style={[styles.name, styles.nameTypo]}>Height</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#a0235b", "#d3005f"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/height-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameParentLayout]}>
        <LinearGradient
          style={[styles.basicInfoParent, styles.basicInfoParentPosition]}
          locations={[0, 1]}
          colors={["#c99501", "#f3b604"]}
        >
          <Text style={[styles.basicInfo, styles.basicInfoTypo]}>
            <Text style={styles.b}>B</Text>
            <Text style={styles.asic}>{`ASIC `}</Text>
            <Text style={styles.i}>i</Text>
            <Text style={styles.asic}>NFO</Text>
          </Text>
          <Image
            style={[styles.editFillIcon, styles.expandLeftLayout]}
            contentFit="cover"
            source={require("./assets/edit-fill.png")}
          />
        </LinearGradient>
        <View style={[styles.beInElectricalParent, styles.parentPosition1]}>
          <Text style={[styles.beInElectrical, styles.shubhamSharmaTypo]}>
            B.E in Electrical
          </Text>
          <View style={styles.highestQualificationParent}>
            <Text style={[styles.name, styles.nameTypo]}>
              Highest Qualification
            </Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#c39100", "#fbbc05"]}
            >
              <Image
                style={[styles.diploma1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/diploma-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.jbParent, styles.jbParentPosition]}>
          <Text style={[styles.beInElectrical, styles.shubhamSharmaTypo]}>
            JB
          </Text>
          <View
            style={[
              styles.collegeAttendedParent,
              styles.shubhamSharmaWrapperLayout,
            ]}
          >
            <Text style={[styles.name, styles.nameTypo]}>College Attended</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#c39100", "#fbbc05"]}
            >
              <Image
                style={[styles.coronavirus1Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("./assets/school-2-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.xyzCompanyParent, styles.parentPosition1]}>
          <Text style={[styles.beInElectrical, styles.shubhamSharmaTypo]}>
            xyz Company
          </Text>
          <View style={styles.workWithParent}>
            <Text style={[styles.name, styles.nameTypo]}>Work With</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#c39100", "#fbbc05"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/suitcase-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.uiuxDesignerParent, styles.parentPosition1]}>
          <Text style={[styles.beInElectrical, styles.shubhamSharmaTypo]}>
            UI/UX Designer
          </Text>
          <View style={styles.workAsParent}>
            <Text style={[styles.name, styles.nameTypo]}>Work As</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#c39100", "#fbbc05"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/freelance-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.l30lParent, styles.parentPosition1]}>
          <Text style={[styles.beInElectrical, styles.shubhamSharmaTypo]}>
            20L-30L
          </Text>
          <View style={styles.annualIncomeParent}>
            <Text style={[styles.name, styles.nameTypo]}>Annual Income</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#c39100", "#fbbc05"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/cash-1-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameParentLayout]}>
        <LinearGradient
          style={[styles.basicInfoParent, styles.basicInfoParentPosition]}
          locations={[0, 1]}
          colors={["#191765", "#6d69e8"]}
        >
          <Text style={[styles.basicInfo, styles.basicInfoTypo]}>
            <Text style={styles.b}>B</Text>
            <Text style={styles.asic}>{`ASIC `}</Text>
            <Text style={styles.i}>i</Text>
            <Text style={styles.asic}>NFO</Text>
          </Text>
          <Image
            style={[styles.editFillIcon, styles.expandLeftLayout]}
            contentFit="cover"
            source={require("./assets/edit-fill.png")}
          />
        </LinearGradient>
        <View style={[styles.beInElectricalParent, styles.parentPosition1]}>
          <Text style={[styles.beInElectrical, styles.shubhamSharmaTypo]}>
            1 (of 1 Married)
          </Text>
          <View style={styles.noOfSonsParent}>
            <Text style={[styles.name, styles.nameTypo]}>No. of Son’s</Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#110f58", "#7471f3"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/man-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.of1MarriedGroup, styles.jbParentPosition]}>
          <Text style={[styles.beInElectrical, styles.shubhamSharmaTypo]}>
            1 (of 1 Married)
          </Text>
          <View style={styles.noOfDaughtersParent}>
            <Text style={[styles.name, styles.nameTypo]}>
              No. of Daughter’s
            </Text>
            <LinearGradient
              style={[styles.coronavirus1Wrapper, styles.groupChildLayout]}
              locations={[0, 1]}
              colors={["#110f58", "#7471f3"]}
            >
              <Image
                style={[styles.unitedStates1Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/womanavatar-1.png")}
              />
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        <LinearGradient
          style={[styles.groupInner, styles.groupInnerLayout]}
          locations={[0, 1]}
          colors={["#a0235b", "#110f58"]}
        />
        <Text style={styles.text} />
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={styles.premiumServices1Parent}>
            <Image
              style={[styles.premiumServices1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/premiumservices-1.png")}
            />
            <Text
              style={[styles.upgradeToPremium, styles.basicInfoTypo]}
            >{`Upgrade to Premium `}</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.shubhamSharmaWrapper, styles.shubhamSharmaWrapperLayout]}
      >
        <Text style={styles.shubhamSharma1}>Shubham Sharma</Text>
      </View>
      <View style={[styles.user41Wrapper, styles.user41Layout]}>
        <Image
          style={[styles.user41, styles.user41Layout]}
          contentFit="cover"
          source={require("./assets/user-4-1.png")}
        />
      </View>
      <Image
        style={[styles.profileChild, styles.iconLayout]}
        contentFit="cover"
        source={require("./assets/Variant3.png")}
      />
      <View style={[styles.homeIndicatordark, styles.component7Position]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.component7, styles.component7Position]}>
        <View style={styles.component7Child} />
        <Text style={styles.myProfile}>My Profile</Text>
        <Pressable
          style={[styles.expandLeft, styles.expandLeftLayout]}
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
  frameParentLayout: {
    width: 367,
    overflow: "hidden",
    position: "absolute",
  },
  basicInfoParentPosition: {
    top: 1,
    left: 0,
  },
  basicInfoTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  expandLeftLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  parentPosition: {
    left: 21,
    height: 30,
    position: "absolute",
  },
  shubhamSharmaTypo: {
    color: Color.colorDarkslategray,
    lineHeight: 24,
    fontSize: FontSize.size_smi,
    top: 3,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nameTypo: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    fontSize: FontSize.size_smi,
    top: 3,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 30,
    borderRadius: Border.br_7xl,
    top: 0,
    height: 30,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  iconPosition: {
    height: 18,
    marginTop: -9,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  parentPosition1: {
    left: 20,
    height: 30,
    position: "absolute",
  },
  jbParentPosition: {
    top: 111,
    height: 30,
    left: 20,
    position: "absolute",
  },
  shubhamSharmaWrapperLayout: {
    width: 153,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 205,
    width: 391,
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 34,
    position: "absolute",
  },
  user41Layout: {
    height: 48,
    position: "absolute",
  },
  component7Position: {
    width: 390,
    marginLeft: -195,
    left: "50%",
  },
  timeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  b: {
    textTransform: "uppercase",
  },
  asic: {
    textTransform: "lowercase",
  },
  i: {
    textTransform: "capitalize",
  },
  basicInfo: {
    top: 4,
    lineHeight: 32,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 20,
  },
  editFillIcon: {
    top: 8,
    left: 334,
    height: 24,
  },
  basicInfoParent: {
    height: 40,
    backgroundColor: "transparent",
    left: 0,
    overflow: "hidden",
    width: 367,
    position: "absolute",
  },
  shubhamSharma: {
    left: 171,
  },
  name: {
    left: 40,
  },
  nameParent: {
    width: 79,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  shubhamSharmaParent: {
    top: 64,
    width: 292,
    height: 30,
  },
  dateOfBirthParent: {
    width: 120,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  june1970Parent: {
    top: 108,
    width: 256,
    height: 30,
  },
  coronavirus1Icon: {
    marginTop: -10,
    marginLeft: -10,
    top: "50%",
    left: "50%",
  },
  coronavirus1Wrapper: {
    backgroundColor: "transparent",
  },
  countryParent: {
    width: 92,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  usaParent: {
    width: 197,
    top: 152,
    height: 30,
  },
  unitedStates1Icon: {
    marginLeft: -9,
    width: 18,
  },
  stateLivesInParent: {
    width: 121,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  georgia30643UsaParent: {
    top: 196,
    width: 301,
    height: 30,
  },
  cityLivesInParent: {
    width: 113,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  hartwellParent: {
    top: 240,
    width: 225,
    height: 30,
  },
  maritalStatusParent: {
    width: 128,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  unmarriedParent: {
    top: 372,
    width: 241,
    height: 30,
  },
  religion: {
    left: 41,
  },
  hinduParent: {
    top: 416,
    width: 210,
    height: 30,
  },
  communityParent: {
    width: 118,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  marathaParent: {
    top: 460,
    width: 228,
    height: 30,
  },
  motherTongueParent: {
    width: 139,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  marathiHindiEnglishParent: {
    top: 504,
    width: 315,
    height: 30,
  },
  dietParent: {
    width: 65,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  vegetarianParent: {
    top: 284,
    width: 245,
    height: 30,
  },
  heightParent: {
    width: 82,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  ftParent: {
    top: 328,
    width: 205,
    height: 30,
  },
  frameParent: {
    top: 272,
    height: 559,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_3xs,
    width: 367,
    left: "50%",
    backgroundColor: Color.colorWhite,
    marginLeft: -183,
  },
  beInElectrical: {
    left: 185,
  },
  diploma1Icon: {
    marginLeft: -7,
    width: 15,
  },
  highestQualificationParent: {
    width: 174,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  beInElectricalParent: {
    top: 67,
    width: 283,
    height: 30,
  },
  collegeAttendedParent: {
    top: 0,
    height: 30,
    left: 0,
  },
  jbParent: {
    width: 201,
  },
  workWithParent: {
    width: 105,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  xyzCompanyParent: {
    top: 155,
    width: 275,
    height: 30,
  },
  workAsParent: {
    width: 93,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  uiuxDesignerParent: {
    top: 199,
    width: 284,
    height: 30,
  },
  annualIncomeParent: {
    width: 138,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  l30lParent: {
    top: 243,
    width: 237,
    height: 30,
  },
  frameGroup: {
    top: 851,
    height: 305,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_3xs,
    width: 367,
    left: "50%",
    backgroundColor: Color.colorWhite,
    marginLeft: -183,
  },
  noOfSonsParent: {
    width: 114,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  noOfDaughtersParent: {
    width: 150,
    top: 0,
    height: 30,
    left: 0,
    position: "absolute",
  },
  of1MarriedGroup: {
    width: 283,
  },
  frameContainer: {
    marginLeft: -184,
    top: 1176,
    height: 177,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_3xs,
    width: 367,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  groupInner: {
    top: 0,
    backgroundColor: "transparent",
    left: 0,
  },
  text: {
    top: 19,
    left: 55,
    textAlign: "center",
    display: "flex",
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    position: "absolute",
  },
  premiumServices1Icon: {
    left: 0,
    top: 1,
  },
  upgradeToPremium: {
    left: 24,
    fontSize: 14,
    top: 0,
  },
  premiumServices1Parent: {
    top: 7,
    left: 16,
    width: 173,
    height: 21,
    position: "absolute",
  },
  groupWrapper: {
    marginLeft: -101.5,
    borderRadius: 28,
    backgroundColor: "#4294ff",
    width: 204,
    top: 152,
    overflow: "hidden",
    left: "50%",
  },
  rectangleParent: {
    left: -1,
    top: 44,
  },
  shubhamSharma1: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: 0,
    textAlign: "left",
    color: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  shubhamSharmaWrapper: {
    top: 161,
    left: 118,
    height: 24,
  },
  user41: {
    marginTop: -24,
    marginLeft: -24,
    width: 48,
    height: 48,
    top: "50%",
    left: "50%",
  },
  user41Wrapper: {
    top: 105,
    borderRadius: 38,
    width: 48,
    height: 48,
    left: 171,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  profileChild: {
    top: 141,
    left: 186,
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
    backgroundColor: Color.colorWhite,
  },
  component7Child: {
    width: "92.31%",
    top: "0%",
    right: "7.69%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  myProfile: {
    marginTop: -13,
    left: 45,
    lineHeight: 23,
    fontSize: FontSize.size_base,
    top: "50%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  expandLeft: {
    left: 13,
    top: 12,
    height: 24,
  },
  component7: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    position: "absolute",
    top: 44,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginLeft: -195,
  },
  text1: {
    letterSpacing: -0.7,
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mid,
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
    width: 390,
    marginLeft: -195,
    left: "50%",
    justifyContent: "center",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  profile: {
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
