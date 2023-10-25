import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";




const Stack = createNativeStackNavigator();

 const AppContainer = () => {
    <NavigationContainer>
    <Stack.Navigator initialRouteName="VerifyMobileNumber">
      <Stack.Screen name="Home" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
}
export default AppContainer;