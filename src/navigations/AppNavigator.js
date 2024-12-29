import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from '../screens/Splash';
import AuthNavigator from './AuthNavigator';
import OnboardingNavigator from './Onboarding';
import { useGlobalContext } from '../context/GlobalContext';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
  const [isFirstTime, setIsFirstTime] = useState(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const { user } = useGlobalContext();

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
    <>
     { isFirstTime ? <OnboardingNavigator /> :  user ? <MainNavigator />: <AuthNavigator /> }
    </>
  );
};

export default AppNavigator;
