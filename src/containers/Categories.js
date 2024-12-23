import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Category } from "../compnents/cards";


const Categories = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>Categories </Text>
                <Text style={styles.btn}>See all </Text>
            </View>

            <View style={styles.body}>
                {["Pizza", "Burger", "Chicken"].map((category, index)=> (
                    <Category 
                        key={index}
                        category={category}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
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
    body: {
        display: "flex",
        flexDirection :"row",
        overflow: "scroll",
        gap: 16,
    },
})

export default Categories;