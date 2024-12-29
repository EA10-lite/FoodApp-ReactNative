import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import colors from "../../styles/colors";

const Map = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> Delivery Address  </Text>
            <View style={styles.map}>
                <Icon name="location-pin" size={40} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 140,
        borderRadius: 15,
        backgroundColor: colors.grey,
        marginBottom: 32,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    label: {
        marginBottom: 8,
        fontSize: 13,
        fontWeight: 400,
        color: colors.secondary,
        textTransform: 'uppercase'
    },
})

export default Map;