import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../../styles/colors";


const Restaurant = ({ handlePress, data }) => {
    return (
        <TouchableOpacity onPress={()=> handlePress(data)}>
            <View style={styles.card}>
                <View style={styles.body}>
                    <View style={styles.img}>
                        <Image src={data?.pictures[0]} style={styles.img} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.details}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.category}>{data?.address}</Text>
                    </View>

                    <View style={[styles.footer_bottom]}>
                        { data?.categories?.map((category)=> (
                            <Text style={styles.category} key={category}>{ category }</Text>
                        ))}
                    </View>
                </View>
            </View>
       </TouchableOpacity>
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
        height: 157,
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 7,
        flexWrap: "wrap",
        width: "60%",
        marginLeft: "40%",
        marginTop: 23,
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