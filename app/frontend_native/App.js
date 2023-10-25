import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import VerifyMobileNumber from "./screens/VerifyMobileNumber";
import OTPVerification from "./screens/OTPVerification";
import VerificationCode from "./screens/VerificationCode";
import ResetPassword from "./screens/ResetPassword";
import SignUp from "./screens/SignUp";
import ForgetPassword from "./screens/ForgetPassword";
import ProfilePhoto from "./screens/ProfilePhoto";
import UploadDocument from "./screens/UploadDocument";
import UploadDocumentVerfication from "./screens/UploadDocumentVerfication";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Home_Logout from "./screens/Home_Logout";
import TermsAndConditions from "./screens/TermsAndConditions";
import AboutUs from "./screens/AboutUs";
import PartnerPreferences from "./screens/PartnerPreferences";
import Settings from "./screens/Settings";
import Relationship from "./screens/Relationship";
import WelcomeProfile from "./screens/WelcomeProfile";
import ProfileGeneral from "./screens/ProfileGeneral";
import EducationDetails from "./screens/EducationDetails";
import FamilyDetails from "./screens/FamilyDetails";
import Interests from "./screens/Interests";
import UploadPhotos from "./screens/UploadPhotos";
import RecommendedPartnerPreference from "./screens/RecommendedPartnerPreferences";
import TermsAndConditionsAfterLogin from "./screens/TermsandConditionsAfterLogin";
import TopMatches from "./screens/TopMatches";
import Search from "./screens/Search";
import SearchByCriteria from "./screens/SearchByCriteria";
import UsersList from "./screens/UsersList";
import Notifications from "./screens/Notifications";
import MenuSlide from "./screens/MenuSlide";
import NewRequests from "./screens/NewRequests";
import AcceptedRequests from "./screens/AcceptedRequests";
import SentRequests from "./screens/SentRequests";
import CancelRequests from "./screens/CancelRequests";
import RecentlyViewed from "./screens/RecentlyViewed";
import Chat from "./screens/Chat";
import Messages from "./screens/Messages";
import BasicDetails from "./screens/BasicDetails";
import ScrollViewTest from "./screens/ScrollViewTest";


const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="VerifyMobileNumber" component={VerifyMobileNumber} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ProfilePhoto" component={ProfilePhoto} />
        <Stack.Screen name="UploadDocument" component={UploadDocument} />
        <Stack.Screen name="UploadDocumentVerfication" component={UploadDocumentVerfication} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home_Logout" component={Home_Logout} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="PartnerPreferences" component={PartnerPreferences} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Relationship" component={Relationship} />
        <Stack.Screen name="WelcomeProfile" component={WelcomeProfile} />
        <Stack.Screen name="ProfileGeneral" component={ProfileGeneral} />
        <Stack.Screen name="EducationDetails" component={EducationDetails} />
        <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
        <Stack.Screen name="Interests" component={Interests} />
        <Stack.Screen name="UploadPhotos" component={UploadPhotos} />
        <Stack.Screen name="RecommendedPartnerPreference" component={RecommendedPartnerPreference} />
        <Stack.Screen name="TermsAndConditionsAfterLogin" component={TermsAndConditionsAfterLogin} />
        <Stack.Screen name="TopMatches" component={TopMatches} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchByCriteria" component={SearchByCriteria} />
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="MenuSlide" component={MenuSlide} />
        <Stack.Screen name="NewRequests" component={NewRequests} />
        <Stack.Screen name="AcceptedRequests" component={AcceptedRequests} />
        <Stack.Screen name="SentRequests" component={SentRequests} />
        <Stack.Screen name="CancelRequests" component={CancelRequests} />
        <Stack.Screen name="RecentlyViewed" component={RecentlyViewed} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="BasicDetails" component={BasicDetails} />
        <Stack.Screen name="ScrollViewTest" component={ScrollViewTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
