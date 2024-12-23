import React from 'react';

import GlobalProvider from './src/context/GlobalContext';
import { ProfileNavigator } from './src/navigations';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <ProfileNavigator />
      </NavigationContainer>
    </GlobalProvider>
    );
}

export default App;
