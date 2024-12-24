import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Food = ({ data, handlePress, }) => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <View style={styles.food}>
                <View style={styles.img_box}>
                    <Image 
                        src={data?.pictures[0]} 
                        style={styles.img}
                    />
                </View>

                <Text style={styles.name}>{data?.name}</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>{data?.price}$</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
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