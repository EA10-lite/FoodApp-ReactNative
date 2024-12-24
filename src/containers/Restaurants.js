import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Restaurant } from "../compnents/cards";

const Restaurants = ({ handlePress, restaurants, seeAll, isPage }) => {
    return (
        <View style={styles.container}>
            { !isPage && (
                <View style={styles.head}>
                    <Text style={styles.title}>Restaurants </Text>
                    <TouchableOpacity onPress={seeAll}>
                        <Text style={styles.btn}>See all </Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.body}>
                {restaurants.map((restaurant, index)=> (
                    <Restaurant 
                        key={index}
                        data={restaurant}
                        handlePress={handlePress}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    head: {
        marginBottom: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 16,
        fontWeight: 400,
        color: "#32343E",
    },
    btn: {
        color: "#32343E",
    },
})

export default Restaurants;