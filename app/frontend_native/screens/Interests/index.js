import * as React from "react";
import { Text, StyleSheet, View, Pressable, TouchableHighlight } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "./GlobalStyles";

const Interests = () => {
  return (
    <View style={styles.verificationCode}>
      <View style={[styles.funParent, styles.parentShadowBox]}>
        <Text style={[styles.fun, styles.funTypo]}>Fun</Text>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/Rectangle-4104-1.png")}
        />
        <View style={[styles.groupWrapper, styles.groupWrapperBorder6]}>
          <View
            style={[styles.bingeWatchingParent, styles.groupWrapper4Layout]}
          >
            <Text style={[styles.bingeWatching, styles.musicTypo]}>
              Binge-Watching
            </Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/laptop-1.png")}
            />
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupWrapperBorder6]}>
          <View style={styles.bikingParent}>
            <Text style={[styles.biking, styles.musicTypo]}>Biking</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/bycicle-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupFrame, styles.frameBorder]}>
          <View style={styles.clubbingParent}>
            <Text style={[styles.clubbing, styles.musicTypo]}>Clubbing</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/dance-1-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameBorder]}>
          <View style={[styles.gamingParent, styles.parentLayout]}>
            <Text style={[styles.gaming, styles.musicTypo]}>Gaming</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/joystick-1.png")}
            />
             </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper1, styles.groupWrapperBorder6]}>
          <View style={[styles.readingParent, styles.parentPosition5]}>
            <Text style={[styles.reading, styles.musicTypo]}>Reading</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/reading-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper2, styles.groupWrapperBorder6]}>
          <View style={[styles.musicParent, styles.parentPosition4]}>
            <Text style={[styles.music, styles.musicTypo]}>Music</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/music-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper3, styles.groupWrapperLayout3]}>
          <View style={[styles.cinema1Parent, styles.parentPosition3]}>
          <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/cinema-1.png")}
            />
              </TouchableHighlight>
            <Text style={[styles.biking, styles.musicTypo]}>Movie</Text>
          </View>
        </View>
        <View style={[styles.groupWrapper4, styles.groupWrapperLayout3]}>
          <View style={styles.socialMediaParent}>
            <Text style={[styles.socialMedia, styles.musicTypo]}>
              Social Media
            </Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/socialmedia-2-1.png")}
            />
               </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper5, styles.groupWrapperLayout2]}>
          <View style={[styles.shoppingParent, styles.parentPosition2]}>
            <Text style={[styles.shopping, styles.musicTypo]}>Shopping</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/trolley-1.png")}
            />
             </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper6, styles.groupWrapperBorder5]}>
          <View style={[styles.travellingParent, styles.parentPosition2]}>
            <Text style={[styles.shopping, styles.musicTypo]}>Travelling</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/flight-1.png")}
            />
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper7, styles.groupWrapperBorder4]}>
          <View style={styles.theatreEventParent}>
            <Text
              style={[styles.theatreEvent, styles.musicTypo]}
            >{`Theatre & Event`}</Text>
             <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/movietheater-1.png")}
            />
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper8, styles.groupWrapperBorder4]}>
          <View style={[styles.poetryParent, styles.parentPosition1]}>
            <Text style={[styles.poetry, styles.musicTypo]}>Poetry</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/avatar-1.png")}
            />
                 </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper9, styles.groupWrapperLayout1]}>
          <View style={styles.playingInstrumentsParent}>
            <Text
              style={[styles.playingInstruments, styles.swimmingParentPosition]}
            >
              Playing instruments
            </Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/guitar-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper10, styles.groupWrapper10Layout]}>
          <View style={[styles.sportsParent, styles.parentPosition1]}>
            <Text style={[styles.poetry, styles.musicTypo]}>Sports</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/sports-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper11, styles.groupWrapperLayout2]}>
          <View style={styles.standUpsParent}>
            <Text style={[styles.standUps, styles.musicTypo]}>Stand Ups</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/watch-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={[styles.fitnessParent, styles.parentShadowBox]}>
        <Text style={[styles.fun, styles.funTypo]}>Fitness</Text>
        <TouchableHighlight>
        <Image
          style={[styles.frameItem, styles.framePosition]}
          contentFit="cover"
          source={require("./assets/Rectangle-4104.png")}
        />
           </TouchableHighlight>
        <View style={[styles.groupWrapper12, styles.groupWrapperBorder6]}>
          <View style={styles.cyclingParent}>
            <Text style={[styles.cycling, styles.musicTypo]}>Cycling</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/cycling-1.png")}
            />
                 </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper13, styles.groupWrapperBorder6]}>
          <View
            style={[styles.yogaMeditationParent, styles.groupWrapper18Layout]}
          >
            <Text
              style={[styles.yogaMeditation, styles.musicTypo]}
            >{`Yoga & Meditation`}</Text>
               <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/yoga-1.png")}
            />
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupFrame, styles.frameBorder]}>
          <View style={styles.walkingParent}>
            <Text style={[styles.walking, styles.musicTypo]}>Walking</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/walk-1.png")}     
            />
             </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameBorder]}>
          <View style={[styles.gamingParent, styles.parentLayout]}>
            <Text style={[styles.gaming, styles.musicTypo]}>Running</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/training-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper16, styles.groupWrapperLayout2]}>
          <View style={[styles.swimmingParent, styles.groupWrapper10Layout]}>
            <Text style={[styles.swimming, styles.musicTypo]}>Swimming</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/swimming-1-1.png")}
            />
             </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper2, styles.groupWrapperBorder6]}>
          <View style={[styles.readingParent, styles.parentPosition5]}>
            <Text style={[styles.reading, styles.musicTypo]}>Trekking</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/trekking-1.png")}
            />
               </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper18, styles.groupWrapper18Layout]}>
          <View style={[styles.barbell1Parent, styles.parentPosition3]}>
          <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/barbell-1.png")}
            />
            </TouchableHighlight>
            <Text style={[styles.workingOut, styles.musicTypo]}>
              Working Out
            </Text>
          </View>
        </View>
        <View style={[styles.groupWrapper19, styles.groupWrapperBorder5]}>
          <View style={[styles.aerobicszumbaParent, styles.parentPosition]}>
            <Text style={[styles.aerobicszumba, styles.musicTypo]}>
              Aerobics/Zumba
            </Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/socialmedia-2-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={[styles.verificationCodeChild, styles.parentShadowBox]} />
      <View style={[styles.creativeParent, styles.parentShadowBox]}>
        <Text style={[styles.fun, styles.funTypo]}>Creative</Text>
        <View style={[styles.groupWrapper20, styles.groupWrapperPosition]}>
          <View style={[styles.theater1Parent, styles.parentPosition3]}>
          <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/theater-1.png")}
            />
                 </TouchableHighlight>
            <Text style={[styles.acting, styles.musicTypo]}>Acting</Text>
          </View>
        </View>
        <View style={[styles.groupWrapper21, styles.groupWrapperPosition]}>
          <View style={[styles.bloggingParent, styles.parentPosition4]}>
            <Text style={[styles.blogging, styles.musicTypo]}>Blogging</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/blog-1.png")}
            />
                 </TouchableHighlight>
          </View>
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("./assets/Rectangle-4104.png")}
        />
        <View style={[styles.groupWrapper22, styles.groupWrapperBorder3]}>
          <View style={[styles.cookingParent, styles.parentPosition4]}>
            <Text style={[styles.reading, styles.musicTypo]}>Cooking</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/cooking-1.png")}
            />
               </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper23, styles.groupWrapperBorder3]}>
          <View style={[styles.contentCreationParent, styles.parentPosition]}>
            <Text
              style={[styles.contentCreation, styles.paintingParentPosition]}
            >
              Content Creation
            </Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/web-content-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper24, styles.groupWrapperBorder2]}>
          <View style={[styles.cookingParent, styles.parentPosition4]}>
            <Text style={[styles.reading, styles.musicTypo]}>Dancing</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/dance-1.png")}
            />
                    </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper25, styles.groupWrapperLayout]}>
          <View style={styles.diyCraftsParent}>
            <Text style={[styles.diyCrafts, styles.musicTypo]}>DIY Crafts</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/diy-1.png")}
            />
                  </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper26, styles.groupWrapperBorder2]}>
          <View style={styles.designingParent}>
            <Text style={[styles.designing, styles.musicTypo]}>Designing</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/graphic-designer-1.png")}
            />
             </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper27, styles.groupWrapperLayout]}>
          <View style={[styles.bloggingParent, styles.parentPosition4]}>
            <Text style={[styles.blogging, styles.musicTypo]}>Doodling</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/doodles-1.png")}
            />
             </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper28, styles.groupWrapperBorder1]}>
          <View style={styles.gardeningParent}>
            <Text style={[styles.gardening, styles.musicTypo]}>Gardening</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/gardening-1.png")}
            />
             </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper29, styles.groupWrapperBorder1]}>
          <View style={[styles.paintingParent, styles.paintingParentPosition]}>
            <Text style={[styles.gaming, styles.musicTypo]}>Painting</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/paint-palette-1.png")}
            />
                </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper30, styles.groupWrapperLayout1]}>
          <View style={styles.playingInstrumentsParent}>
            <Text
              style={[styles.playingInstruments, styles.swimmingParentPosition]}
            >
              Playing instruments
            </Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/guitar-1.png")}
            />
              </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper31, styles.groupWrapperBorder]}>
          <View style={styles.photographyParent}>
            <Text style={[styles.photography, styles.musicTypo]}>
              Photography
            </Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/photographer-1.png")}
            />
               </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.groupWrapper32, styles.groupWrapperBorder]}>
          <View style={[styles.poetryParent, styles.parentPosition1]}>
            <Text style={[styles.poetry, styles.musicTypo]}>Poetry</Text>
            <TouchableHighlight>
            <Image
              style={styles.laptop1Icon}
              contentFit="cover"
              source={require("./assets/poetry-1.png")}
            />
                  </TouchableHighlight>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildPosition]}
        onPress={() => {}}
      >
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.createProfile, styles.funTypo]}>
          Create Profile
        </Text>
      </Pressable>
      <View style={styles.vectorParent}>
      
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("./assets/vector.svg")}
        />
  
        <Text style={[styles.letsExploreYour, styles.funTypo]}>
          Let's explore your hobbies and interests together
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
  parentShadowBox: {
    width: 369,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_3xs,
    marginLeft: -184,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  funTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameChildLayout: {
    height: 6,
    position: "absolute",
  },
  groupWrapperBorder6: {
    height: 38,
    borderRadius: Border.br_3xl,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    overflow: "hidden",
  },
  groupWrapper4Layout: {
    width: 146,
    position: "absolute",
  },
  musicTypo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    marginTop: -11,
    textAlign: "left",
  },
  frameBorder: {
    top: 119,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  parentLayout: {
    width: 89,
    height: 24,
    marginTop: -12,
  },
  parentPosition5: {
    marginLeft: -45,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  parentPosition4: {
    marginLeft: -47,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapperLayout3: {
    left: 148,
    height: 38,
    borderRadius: Border.br_3xl,
    overflow: "hidden",
  },
  parentPosition3: {
    top: 7,
    height: 24,
    position: "absolute",
  },
  groupWrapperLayout2: {
    width: 135,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    left: 8,
    overflow: "hidden",
    position: "absolute",
  },
  parentPosition2: {
    width: 99,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapperBorder5: {
    left: 159,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  groupWrapperBorder4: {
    top: 343,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  parentPosition1: {
    width: 76,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupWrapperLayout1: {
    width: 198,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  swimmingParentPosition: {
    marginLeft: -52.5,
    top: "50%",
    left: "50%",
  },
  groupWrapper10Layout: {
    width: 105,
    position: "absolute",
  },
  framePosition: {
    width: 350,
    top: 45,
    left: 10,
  },
  groupWrapper18Layout: {
    width: 160,
    position: "absolute",
  },
  parentPosition: {
    marginLeft: -75.5,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapperPosition: {
    top: 71,
    height: 38,
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  groupWrapperBorder3: {
    top: 127,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  paintingParentPosition: {
    marginLeft: -44,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupWrapperBorder2: {
    top: 183,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  groupWrapperLayout: {
    width: 130,
    top: 239,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  groupWrapperBorder1: {
    top: 295,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  groupWrapperBorder: {
    top: 351,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    position: "absolute",
  },
  groupChildPosition: {
    height: 42,
    width: 162,
    marginLeft: -81,
    left: "50%",
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
  fun: {
    top: 11,
    lineHeight: 30,
    textTransform: "capitalize",
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 10,
  },
  frameChild: {
    width: 350,
    top: 45,
    left: 10,
  },
  bingeWatching: {
    marginLeft: -41,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  laptop1Icon: {
    left: 0,
    width: 24,
    top: 0,
    height: 24,
    position: "absolute",
  },
  bingeWatchingParent: {
    marginLeft: -73,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
  },
  groupWrapper: {
    width: 174,
    left: 8,
    top: 63,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  biking: {
    marginLeft: -4.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  bikingParent: {
    marginLeft: -36.5,
    width: 73,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupContainer: {
    width: 109,
    left: 198,
    top: 63,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  clubbing: {
    marginLeft: -16,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  clubbingParent: {
    marginLeft: -48.5,
    width: 96,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupFrame: {
    width: 133,
    left: 8,
  },
  gaming: {
    marginLeft: -12.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  gamingParent: {
    marginLeft: -45,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameView: {
    left: 157,
    width: 126,
  },
  reading: {
    marginLeft: -13,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  readingParent: {
    width: 90,
    height: 24,
    marginTop: -12,
  },
  groupWrapper1: {
    width: 124,
    top: 231,
    left: 8,
    position: "absolute",
  },
  music: {
    marginLeft: -4,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  musicParent: {
    width: 72,
  },
  groupWrapper2: {
    top: 175,
    width: 124,
    left: 8,
    position: "absolute",
  },
  cinema1Parent: {
    left: 22,
    width: 73,
  },
  groupWrapper3: {
    width: 117,
    backgroundColor: Color.colorLavender,
    top: 175,
    position: "absolute",
  },
  socialMedia: {
    marginLeft: -28.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  socialMediaParent: {
    marginLeft: -61,
    width: 121,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper4: {
    top: 231,
    width: 146,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
  },
  shopping: {
    marginLeft: -17.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  shoppingParent: {
    marginLeft: -49.5,
  },
  groupWrapper5: {
    top: 287,
  },
  travellingParent: {
    marginLeft: -51.5,
  },
  groupWrapper6: {
    top: 287,
    width: 133,
  },
  theatreEvent: {
    marginLeft: -38,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  theatreEventParent: {
    marginLeft: -72,
    width: 140,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper7: {
    width: 174,
    left: 8,
  },
  poetry: {
    marginLeft: -6,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  poetryParent: {
    marginLeft: -40,
    height: 24,
    marginTop: -12,
  },
  groupWrapper8: {
    width: 110,
    left: 198,
  },
  playingInstruments: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    marginTop: -11,
    textAlign: "left",
    position: "absolute",
  },
  playingInstrumentsParent: {
    marginLeft: -84,
    width: 169,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper9: {
    top: 399,
    left: 8,
  },
  sportsParent: {
    marginLeft: -38.5,
    height: 24,
    marginTop: -12,
  },
  groupWrapper10: {
    left: 222,
    top: 399,
    height: 38,
    borderRadius: Border.br_3xl,
    borderWidth: 1,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    overflow: "hidden",
  },
  standUps: {
    marginLeft: -20,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  standUpsParent: {
    width: 104,
    marginLeft: -49.5,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper11: {
    top: 455,
  },
  funParent: {
    top: 755,
    height: 526,
    overflow: "hidden",
  },
  frameItem: {
    height: 5,
    position: "absolute",
  },
  cycling: {
    marginLeft: -10,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  cyclingParent: {
    marginLeft: -42.5,
    width: 84,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper12: {
    width: 117,
    left: 8,
    top: 63,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  yogaMeditation: {
    marginLeft: -48,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  yogaMeditationParent: {
    marginLeft: -80.5,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
  },
  groupWrapper13: {
    left: 141,
    width: 191,
    top: 63,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  walking: {
    marginLeft: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  walkingParent: {
    marginLeft: -44.5,
    width: 88,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  swimming: {
    marginLeft: -20.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  swimmingParent: {
    marginLeft: -52.5,
    top: "50%",
    left: "50%",
    height: 24,
    marginTop: -12,
  },
  groupWrapper16: {
    top: 231,
  },
  workingOut: {
    marginLeft: -27,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  barbell1Parent: {
    left: 21,
    width: 118,
  },
  groupWrapper18: {
    backgroundColor: Color.colorLavender,
    left: 148,
    height: 38,
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    top: 175,
  },
  aerobicszumba: {
    marginLeft: -43,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  aerobicszumbaParent: {
    width: 150,
  },
  groupWrapper19: {
    width: 181,
    top: 231,
  },
  fitnessParent: {
    top: 1300,
    height: 302,
    overflow: "hidden",
  },
  verificationCodeChild: {
    top: 1621,
    height: 71,
    overflow: "hidden",
  },
  acting: {
    marginLeft: -6.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  theater1Parent: {
    left: 20,
    width: 77,
  },
  groupWrapper20: {
    width: 117,
    backgroundColor: Color.colorLavender,
    left: 10,
  },
  blogging: {
    marginLeft: -15,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  bloggingParent: {
    width: 94,
  },
  groupWrapper21: {
    left: 143,
    width: 124,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
  },
  cookingParent: {
    width: 90,
  },
  groupWrapper22: {
    left: 207,
    width: 124,
  },
  contentCreation: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    marginTop: -11,
    textAlign: "left",
  },
  contentCreationParent: {
    width: 152,
  },
  groupWrapper23: {
    width: 181,
    left: 10,
  },
  groupWrapper24: {
    width: 124,
    left: 10,
  },
  diyCrafts: {
    marginLeft: -18,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  diyCraftsParent: {
    marginLeft: -50,
    width: 100,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper25: {
    left: 10,
  },
  designing: {
    marginLeft: -18.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  designingParent: {
    marginLeft: -50.5,
    width: 101,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper26: {
    left: 150,
    width: 139,
  },
  groupWrapper27: {
    left: 156,
  },
  gardening: {
    marginLeft: -21,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  gardeningParent: {
    marginLeft: -54.5,
    width: 106,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper28: {
    width: 139,
    left: 10,
  },
  paintingParent: {
    width: 89,
    height: 24,
    marginTop: -12,
  },
  groupWrapper29: {
    left: 165,
    width: 118,
  },
  groupWrapper30: {
    top: 407,
    left: 10,
  },
  photography: {
    marginLeft: -29,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  photographyParent: {
    marginLeft: -60.5,
    width: 122,
    height: 24,
    top: "50%",
    marginTop: -12,
    left: "50%",
    position: "absolute",
  },
  groupWrapper31: {
    width: 151,
    left: 10,
  },
  groupWrapper32: {
    left: 177,
    width: 110,
  },
  creativeParent: {
    top: 227,
    height: 488,
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: "#a0235b",
    shadowColor: "rgba(160, 35, 91, 0.16)",
    shadowRadius: 15,
    elevation: 15,
    borderColor: "#dbdbdb",
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    width: 162,
    marginLeft: -81,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: Border.br_3xs,
  },
  createProfile: {
    marginLeft: -54,
    color: Color.colorWhite,
    textAlign: "center",
    top: "50%",
    marginTop: -12,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
  },
  rectangleParent: {
    top: 746,
  },
  vectorIcon: {
    top: 255,
    left: 93,
    height: 230,
    width: 390,
    position: "absolute",
  },
  letsExploreYour: {
    top: 319,
    left: 153,
    fontSize: 20,
    lineHeight: 37,
    color: "#31425f",
    width: 307,
    textAlign: "left",
  },
  icon: {
    marginTop: 49.14,
    borderRadius: Border.br_5xs,
    height: "100%",
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
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    backgroundColor: Color.colorBlack,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicatordark: {
    bottom: 0,
    height: 34,
    left: "50%",
    position: "absolute",
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
    height: 14,
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
    top: 0,
  },
  verificationCode: {
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Interests;
