import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Food } from "../components/cards";

const Foods = ({ handlePress, foods, seeAll, isPage }) => {
    return (
        <View style={styles.container}>
            { !isPage && (
                <View style={styles.head}>
                    <Text style={styles.title}> Fast Foods </Text>
                    { seeAll && (
                        <TouchableOpacity onPress={seeAll}>
                            <Text style={styles.btn}>See all </Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}

            <View style={styles.body}>
                {foods.map((food, index)=> (
                    <Food 
                        key={index}
                        data={food}
                        handlePress={handlePress}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    head: {
        marginBottom: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        color: "#32343E",
    },
    body: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "5%"
    },
    btn: {
        color: "#32343E",
    },
})

export default Foods;