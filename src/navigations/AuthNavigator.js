import * as React from 'react';
import { Login, Signup, ForgotPassword, EmailVerification } from "../screens/Auth";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />
            <Stack.Screen
                name="EmailVerification"
                component={EmailVerification}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;