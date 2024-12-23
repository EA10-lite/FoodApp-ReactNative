import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../../styles/colors";


const Restaurant = () => {
    return (
       <View style={styles.card}>
            <View style={styles.body}>
                <View style={styles.img} />
            </View>
            <View style={styles.footer}>
                <View style={styles.details}>
                    <Text style={styles.name}>Rose Garden Restaurant</Text>
                    <Text style={styles.category}>Pizza - Burger - Chicken</Text>
                </View>

                <View style={[styles.row, styles.footer_bottom]}>
                    <View style={[styles.row, styles.rating]}>
                        <Image source={require("../../../assets/img/Star.png")} style={styles.icon} />
                        <Text style={styles.p}>4.7</Text>
                    </View>
                    <View style={[styles.row, styles.service]}>
                        <Image source={require("../../../assets/img/Delivery.png")} style={styles.truck} />
                        <Text style={styles.p}>Free</Text>
                    </View>
                    <View style={[styles.row, styles.time]}>
                        <Image source={require("../../../assets/img/Clock.png")} style={styles.icon} />
                        <Text style={styles.p}>20min</Text>
                    </View>
                </View>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 24,
    },
    body: {
        marginBottom: 12,
    },
    img: {
        height: 137,
        backgroundColor: "#98A8B8",
        borderRadius: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 400,
        color: colors.dark,
        marginBottom: 4,
    },
    category: {
        color: "#A0A5BA",
        fontSize: 14,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    footer: {
        padding: 10,
    },
    footer_bottom: {
        gap: 24,
    },
    details: {
        marginBottom: 16,
    },
    icon: {
        objectFit: "cover",
        width: 20,
        height: 20,
    },
    truck: {
        width: 24,
        height: 16,
    },
    p: {
        fontSize: 16,
        fontWeight: 600,
        color: colors.dark,
    }
})

export default Restaurant;