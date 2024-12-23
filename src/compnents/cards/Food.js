import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Food = ({ name, price }) => {
    return (
        <View style={styles.food}>
            <View style={styles.img_box}>
                <Image 
                    source={require("../../../assets/img/burger.jpg")} 
                    style={styles.img}
                />
            </View>

            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
                <Text style={styles.price}>{price}$</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    food: {
        width: '47.5%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
    },
    img_box: {
        marginBottom: 10,
    },
    img: {
        width: '100%',
        height: 100,
        borderRadius: 15,
    },
    name: {
        fontWeight: 600,
        fontSize: 16,
        marginBottom: 2,
    },
    price: {
        fontSize: 14,
        fontWeight: 500,
    },
})

export default Food;