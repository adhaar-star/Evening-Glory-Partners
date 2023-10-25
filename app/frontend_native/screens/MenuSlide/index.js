import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const MenuSlide = () => {
  return (
    <View style={styles.aMenuSlide}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <View style={[styles.anishMehtaParent, styles.anishLayout]}>
          <Text style={[styles.anishMehta, styles.textTypo]}>Anish Mehta</Text>
          <Pressable
            style={[styles.couple11Parent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.couple11, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/couple-1-1.png")}
            />
            <Text style={[styles.partnerPreferences, styles.aboutUsTypo]}>
              Partner Preferences
            </Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.infoParent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.infoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/info.png")}
            />
            <Text style={[styles.aboutUs, styles.aboutUsTypo]}>About Us</Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.infoGroup, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.infoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/info.png")}
            />
            <Text style={[styles.termsAndCondition, styles.aboutUsTypo]}>
              Terms and Condition
            </Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <View style={[styles.setting1Parent, styles.infoParentLayout]}>
            <Image
              style={[styles.infoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/setting.png")}
            />
            <Text style={[styles.termsAndCondition, styles.aboutUsTypo]}>
              Settings
            </Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </View>
          <Pressable
            style={[styles.onButtonParent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.onButtonIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/on-button.png")}
            />
            <Text style={[styles.aboutUs, styles.aboutUsTypo]}>Log out</Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <View style={styles.groupChildPosition}>
            <LinearGradient
              style={[styles.groupChild, styles.groupChildPosition]}
              locations={[0, 1]}
              colors={["#a0235b", "#110f58"]}
            />
            <Text style={[styles.text, styles.textFlexBox]} />
            <Pressable
              style={[styles.editProfile, styles.editProfilePosition]}
              onPress={() => {}}
            >
              <Text style={[styles.editProfile1, styles.textFlexBox]}>
                Edit Profile
              </Text>
            </Pressable>
            <View style={[styles.groupWrapper, styles.editProfilePosition]}>
              <View style={styles.premiumServices1Parent}>
                <Image
                  style={styles.premiumServices1Icon}
                  contentFit="cover"
                  source={require("./assets/premiumservices-1.png")}
                />
                <Text
                  style={[styles.upgradeToPremium, styles.textClr]}
                >{`Upgrade to Premium `}</Text>
              </View>
            </View>
          </View>
          <View style={styles.logoHereParent}>
            <Text style={[styles.logoHere, styles.textClr]}>Logo Here</Text>
            <Text style={[styles.shubhamSharma, styles.textClr]}>
              Shubham Sharma
            </Text>
          </View>
          <View style={[styles.user41Wrapper, styles.user41Layout]}>
            <Image
              style={[styles.user41, styles.user41Layout]}
              contentFit="cover"
              source={require("./assets/user-4-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <View style={[styles.anishMehtaGroup, styles.anishLayout]}>
          <Text style={[styles.anishMehta, styles.textTypo]}>Anish Mehta</Text>
          <Pressable
            style={[styles.couple11Parent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.couple11, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/couple-1-1.png")}
            />
            <Text style={[styles.partnerPreferences, styles.aboutUsTypo]}>
              Partner Preferences
            </Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.infoParent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.infoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/info.png")}
            />
            <Text style={[styles.aboutUs, styles.aboutUsTypo]}>About Us</Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.infoGroup, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.infoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/info.png")}
            />
            <Text style={[styles.termsAndCondition, styles.aboutUsTypo]}>
              Terms and Condition
            </Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.setting1Parent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.infoIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/setting.png")}
            />
            <Text style={[styles.termsAndCondition, styles.aboutUsTypo]}>
              Account Settings
            </Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.onButtonParent, styles.infoParentLayout]}
            onPress={() => {}}
          >
            <Image
              style={[styles.onButtonIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/on-button.png")}
            />
            <Text style={[styles.aboutUs, styles.aboutUsTypo]}>Log out</Text>
            <Image
              style={[styles.expandRightIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/expand-right.png")}
            />
          </Pressable>
          <View style={styles.groupChildPosition}>
            <LinearGradient
              style={[styles.groupChild, styles.groupChildPosition]}
              locations={[0, 1]}
              colors={["#a0235b", "#110f58"]}
            />
            <Text style={[styles.text, styles.textFlexBox]} />
            <Pressable
              style={[styles.editProfile, styles.editProfilePosition]}
              onPress={() => {}}
            >
              <Text style={[styles.editProfile1, styles.textFlexBox]}>
                Edit Profile
              </Text>
            </Pressable>
            <Pressable
              style={[styles.groupWrapper, styles.editProfilePosition]}
              onPress={() => {}}
            >
              <View style={styles.premiumServices1Parent}>
                <Image
                  style={styles.premiumServices1Icon}
                  contentFit="cover"
                  source={require("./assets/premiumservices-1.png")}
                />
                <Text
                  style={[styles.upgradeToPremium, styles.textClr]}
                >{`Upgrade to Premium `}</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.logoHereParent}>
            <Text style={[styles.logoHere, styles.textClr]}>Logo Here</Text>
            <Text style={[styles.shubhamSharma, styles.textClr]}>
              Shubham Sharma
            </Text>
          </View>
          <View style={[styles.user41Wrapper, styles.user41Layout]}>
            <Image
              style={[styles.user41, styles.user41Layout]}
              contentFit="cover"
              source={require("./assets/user-4-1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 770,
    width: 298,
    left: 329,
    position: "absolute",
  },
  anishLayout: {
    height: "100%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  infoParentLayout: {
    height: 53,
    backgroundColor: Color.colorLavender,
    left: 0,
    width: 298,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 14,
    position: "absolute",
  },
  aboutUsTypo: {
    color: Color.colorDimgray,
    left: 49,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChildPosition: {
    height: 157,
    top: 0,
    left: 0,
    width: 298,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  editProfilePosition: {
    left: 76,
    position: "absolute",
  },
  textClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  user41Layout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  anishMehta: {
    top: 35,
    left: 79,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  couple11: {
    left: 16,
  },
  partnerPreferences: {
    textAlign: "left",
    top: 16,
  },
  expandRightIcon: {
    left: 253,
  },
  couple11Parent: {
    top: 184,
  },
  infoIcon: {
    left: 15,
  },
  aboutUs: {
    textAlign: "center",
    top: 16,
  },
  infoParent: {
    top: 355,
  },
  termsAndCondition: {
    marginTop: -10.5,
    top: "50%",
    textAlign: "left",
  },
  infoGroup: {
    top: 298,
  },
  setting1Parent: {
    top: 241,
  },
  onButtonIcon: {
    left: 14,
  },
  onButtonParent: {
    top: 412,
  },
  groupChild: {
    backgroundColor: "transparent",
  },
  text: {
    top: 19,
    left: 55,
    justifyContent: "center",
    height: 28,
    color: Color.colorWhite,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  editProfile1: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDodgerblue,
    width: 74,
    height: 25,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
  },
  editProfile: {
    top: 79,
  },
  premiumServices1Icon: {
    top: 1,
    width: 20,
    height: 20,
    left: 0,
    position: "absolute",
  },
  upgradeToPremium: {
    left: 24,
    top: 0,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  premiumServices1Parent: {
    top: 7,
    width: 173,
    height: 21,
    left: 16,
    position: "absolute",
  },
  groupWrapper: {
    top: 111,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorDodgerblue,
    width: 204,
    height: 34,
    overflow: "hidden",
  },
  logoHere: {
    top: 0,
    color: Color.colorWhite,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  shubhamSharma: {
    top: 34,
    left: 60,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  logoHereParent: {
    width: 213,
    height: 58,
    left: 16,
    top: 16,
    position: "absolute",
  },
  user41: {
    marginTop: -24,
    marginLeft: -24,
    left: "50%",
    top: "50%",
  },
  user41Wrapper: {
    top: 50,
    borderRadius: Border.br_19xl,
    left: 16,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  anishMehtaParent: {
    top: "0%",
    right: "104.03%",
    bottom: "0%",
    left: "-104.03%",
    backgroundColor: Color.colorWhite,
  },
  property1default: {
    top: 16,
  },
  anishMehtaGroup: {
    top: "-0.26%",
    right: "0%",
    bottom: "0.26%",
    left: "0%",
    backgroundColor: Color.colorWhite,
  },
  property1variant2: {
    top: 832,
  },
  aMenuSlide: {
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    flex: 1,
    height: 1780,
    overflow: "hidden",
    width: "100%",
  },
});

export default MenuSlide;
