import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Navbar, Search } from "../../compnents";
import { Categories, Restaurants } from "../../containers";

const Home = () => {
    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Navbar />
                </View>

                <ScrollView style={styles.view}>
                    <Search />
                    <Categories />
                    <Restaurants />
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
        marginBottom: 16,
        padding: 24,
    },
    view: {
        padding: 24,
    },
})

export default Home;