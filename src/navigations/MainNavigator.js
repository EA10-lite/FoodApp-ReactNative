import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home, Food, Restaurant, Search, Foods, Restaurants, Cart } from '../screens/main';
import { Address, EditAddress, EditPersonalInfo, PersonalInfo, Profile, Favorites, Payment, Orders } from '../screens/profile';

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

            <Stack.Screen
                name="Favorites"
                component={Favorites}
            />
            <Stack.Screen
                name="Orders"
                component={Orders}
            />
            <Stack.Screen
                name="Payment"
                component={Payment}
            />
        </Stack.Navigator>
    );
};

export default MainNavigator;