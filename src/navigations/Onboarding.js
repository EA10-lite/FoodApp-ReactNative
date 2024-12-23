import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Onboarding from '../screens/Onboarding';

const OnboardingNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen
                name="Onboarding"
                component={Onboarding}
            />
        </Stack.Navigator>
    );
};

export default OnboardingNavigator;