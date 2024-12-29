import React from 'react';

import {GlobalProvider, CartProvider, FavoriteProvider} from './src/context/';
import { AppNavigator } from './src/navigations';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <GlobalProvider>
      <CartProvider>
        <FavoriteProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </FavoriteProvider>
      </CartProvider>
    </GlobalProvider>
    );
}

export default App;
