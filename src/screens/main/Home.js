import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Navbar, Search } from "../../compnents";
import { Categories, Restaurants } from "../../containers";
import restaurant from "../../data/restaurant";
import food from "../../data/food";

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Navbar 
                        goToCart={()=> navigation.navigate("Cart")}
                    />
                </View>

                <ScrollView style={styles.view}>
                    <Search handlePress={()=> navigation.navigate("Search")} />
                    <Categories />
                    <Restaurants 
                        handlePress={(data)=> navigation.navigate("RestaurantDetails", data)}
                        seeAll={()=> navigation.navigate("Restaurants")}
                        restaurants={restaurant?.slice(0,2)}
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