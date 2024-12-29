import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../styles/colors";


const OrderItem = ({data}) => {

    const cancelOrder = () => {
    }

    return (
       <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.left}>
                    <Image src={data?.picture} style={styles.img} />
                </View>
                <View style={styles.right}>
                    <Text style={styles.name}> Chicken Shawarma </Text>
                    <Text style={styles.price}> $12.99 </Text>
                    <View style={[styles.row, styles.btns]}>
                        <TouchableOpacity style={[styles.btn, styles.cancel_btn]}>
                            <Icon name="close" size={18} color={colors.error} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.view_btn]}>
                            <Icon name="eye" size={18} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 24,
        overflow: "hidden",
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 12,
        position: "relative",
        borderWidth: 0.2,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 15,
    },
    left: {
        width: "30%"
    },
    right: {
        width: "60%"
    },
    img: {
        width: "100%",
        minHeight: 88,
        objectFit: "cover",
        borderRadius: 25,
        borderWidth: 0.2,
    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        marginTop: 6,
    },
    price: {
        fontSize: 12,
        fontWeight: 490,
    },
    btns: {
        gap: 8,
        marginTop: 12,
        justifyContent: "flex-end"
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 32,
        borderWidth: 0.5,
        borderRadius: 4,
    },
    cancel_btn: {
        borderColor: colors.error,
    },
    view_btn: {
        borderColor: colors.primary
    }
})

export default OrderItem;