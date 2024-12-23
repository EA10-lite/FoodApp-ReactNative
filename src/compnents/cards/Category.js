import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../../styles/colors";


const Category = ({category, index}) => {
    return (
       <View style={[styles.card, index === 0 && styles.active]}>
            <Text style={[styles.name, index === 0 && styles.active]}>{category}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: "#98A8B8",
        borderRadius: 133.33,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        justifyContent: "center",
        // paddingLeft: 8,
        // paddingRight: 24,
        paddingVertical: 4,
        height:44,
        width: 109,
    },
    active: {
        backgroundColor: colors.primary,
        color: colors.white,
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#98A8B8",
    },
    details: {

    },
    name: {
        fontSize: 16,
        fontWeight: 500,
    }
})

export default Category;