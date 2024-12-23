import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Splash from '../screens/Splash';
import AuthNavigator from './AuthNavigator';
import OnboardingNavigator from './Onboarding';

const AppNavigator = () => {
  const [isFirstTime, setIsFirstTime] = useState(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        setTimeout(async () => {
          const value = await AsyncStorage.getItem('isFirstTime');
          setIsFirstTime(value === 'true');
          setIsSplashVisible(false);
        }, 3000);
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setIsSplashVisible(false);
      }
    };

    initializeApp();
  }, []);

  if (isSplashVisible) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
     { isFirstTime ? <OnboardingNavigator /> : <AuthNavigator /> }
    </NavigationContainer>
  );
};

export default AppNavigator;
