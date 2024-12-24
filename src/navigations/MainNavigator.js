import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home, Food, Restaurant, Search, Foods, Restaurants, Cart } from '../screens/main';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Search"
                component={Search}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
            <Stack.Screen
                name="FoodDetails"
                component={Food}
            />
            <Stack.Screen
                name="Foods"
                component={Foods}
            />
            <Stack.Screen
                name="RestaurantDetails"
                component={Restaurant}
            />
            <Stack.Screen
                name="Restaurants"
                component={Restaurants}
            />
        </Stack.Navigator>
    );
};

export default MainNavigator;