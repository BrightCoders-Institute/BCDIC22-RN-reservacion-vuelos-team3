import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Origin from "../screens/Origin";
import Destination from "../screens/Destination";
import Date from "../screens/Date";
import  Passengers  from "../screens/Passengers";
import FlightList from "../screens/FlightList";
import Request from "../screens/Request";


const Stack = createNativeStackNavigator();
export const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{ headerShown: false }}
        />
         <Stack.Screen
            name="Origin"
            component={Origin}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          /> 
        
            <Stack.Screen
            name="Destination"
            component={Destination}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Date"
            component={Date}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Passengers"
            component={Passengers}
            options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Request"
        component={Request}
        options={{headerShown:false}}
        />
        <Stack.Screen
            name="FlightList"
            component={FlightList}
            options={{ headerShown: false }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
