import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCartContext } from "../../context/CartContext";
import {Header} from "../../compnents";
import { CartItem } from "../../compnents/cards";
import colors from "../../styles/colors";

const Cart = ({navigation}) => {
    const { cart } = useCartContext();
    console.log("cart: ", cart);

    return (
        <SafeAreaView style={styles.cart}>
            <View style={styles.head}>
                <Header 
                    goBack={()=> navigation.goBack()}
                    title="My Cart"
                    color={styles.title}
                />
            </View>
            <View style={styles.body}>
                { cart?.map((item, index)=> (
                    <CartItem 
                        key={index}
                        data={item}
                    />
                ))}
            </View>
            <View style={styles.footer}>
                <View style={styles.location}>
                    <View>
                        <Text style={styles.address_title}>Delivery Address</Text>
                        <Text style={styles.address}>7, Shakiru Yusuf Street</Text>
                    </View>

                    <Text style={styles.edit}> Edit </Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <View style={styles.btn_wrapper}>
                        <Text style={styles.btn_text}>Place order</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cart: {
        backgroundColor: colors.dark,
        flex: 1,
    },
    head: {
        padding: 24,
    },
    title: {
        color: colors.white,
    },
    body: {
        flexGrow: 1,
        paddingHorizontal: 24,
    },

    footer: {
        backgroundColor: colors.white,
        padding: 24,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    btn: {
        backgroundColor: colors.primary,
        paddingVertical: 16,
        borderRadius: 16,
    },
    btn_text: {
        textAlign: "center",
        color: colors.white,
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: 600,
    },
    location: {
        marginBottom: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    address_title: {
        color: colors.primary,
        textTransform: "uppercase",
        fontSize: 13,
    },
    address: {
        fontSize: 14,
        fontWeight: 400,
        color: "#A0A5BA",
    },
    edit: {
        textDecorationLine: "underline",
        color: colors.primary,
        cursor: "pointer",
    }
})

export default Cart;