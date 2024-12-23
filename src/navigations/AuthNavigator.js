import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import EmailVerification from '../screens/EmailVerification';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
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