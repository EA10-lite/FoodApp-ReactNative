import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Address, EditAddress, EditPersonalInfo, PersonalInfo, Profile } from '../screens/profile';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Profile' 
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name="PersonalInfo"
                component={PersonalInfo}
            />
            <Stack.Screen
                name="EditPersonalInfo"
                component={EditPersonalInfo}
            />
            <Stack.Screen
                name="Address"
                component={Address}
            />
            <Stack.Screen
                name="EditAddress"
                component={EditAddress}
            />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;