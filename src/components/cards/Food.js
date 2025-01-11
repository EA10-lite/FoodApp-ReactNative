import React, { useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import { FoodModal } from "../modals";

const Food = ({ 
    data, 
    handlePress = () => null, 
    isRestaurantPage
}) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> setOpen(true)} style={styles.foodContainer}>
                <View style={styles.food}>
                    <View style={styles.img_box}>
                        <Image 
                            src={data?.pictures[0]} 
                            style={styles.img}
                        />
                    </View>

                    <Text style={styles.name}>{data?.name}</Text>
                    {!isRestaurantPage && <Text style={styles.restaurant}>{data?.restaurant}</Text> }
                    <View style={styles.row}>
                        <Text style={styles.price}>{data?.price}$</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <FoodModal 
                closeModal={()=> setOpen(false)}
                isOpen={open}
                food={data}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '47.5%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 12,
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
        fontSize: 14,
        marginBottom: 2,
    },
    restaurant: {
        fontSize: 13, 
        color: colors.secondary,
    },
    price: {
        fontSize: 12,
        fontWeight: 500,
        marginTop: 8,
    },
})

export default Food;