import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo"
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
                        <View style={styles.left}>
                            <Text style={styles.name}>{data.name}</Text>
                            <View style={styles.row}>
                                <Icon name="location-pin" size={20} />
                                <Text style={styles.category}>{data?.address}</Text>
                            </View>
                        </View>

                        <View style={styles.right}>
                            <View style={styles.rating_box}>
                                <Text style={styles.rating}>4.7</Text>
                            </View>
                        </View>
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
        marginLeft: 26,
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
    footer_bottom: {
        display: "flex",
        flexDirection: "row",
        gap: 7,
        flexWrap: "wrap",
        display: "none",
        marginTop: 23,
    },
    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    rating: {
        color: colors.primary,
        fontWeight: 600,
        fontSize: 14,
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