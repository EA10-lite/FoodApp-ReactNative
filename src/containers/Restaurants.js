import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Restaurant } from "../compnents/cards";


const Restaurants = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>Restaurants </Text>
                <Text style={styles.btn}>See all </Text>
            </View>

            <View style={styles.body}>
                {[1,2].map((restaurant, index)=> (
                    <Restaurant 
                        key={index}
                        data={restaurant}
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