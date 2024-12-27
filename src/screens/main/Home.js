import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Navbar, Search } from "../../components";
import { Categories, Restaurants, Foods } from "../../containers";
import restaurant from "../../data/restaurant";
import food from "../../data/food";

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Navbar 
                        goToCart={()=> navigation.navigate("Cart")}
                        goToProfile={()=> navigation.navigate("Profile")}
                    />
                </View>

                <ScrollView style={styles.view}>
                    <Search handlePress={()=> navigation.navigate("Search")} />
                    <Restaurants 
                        handlePress={(data)=> navigation.navigate("RestaurantDetails", data)}
                        seeAll={()=> navigation.navigate("Restaurants")}
                        restaurants={restaurant?.slice(0,2)}
                    />
                    <Foods 
                        handlePress={(data)=> navigation.navigate("FoodDetails", data)}
                        seeAll={()=> navigation.navigate("Foods")}
                        foods={food?.slice(0,4)}
                    />
                </ScrollView>
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    container: {
    },
    header: {
        padding: 24,
    },
    view: {
        paddingHorizontal: 24,
    },
})

export default Home;