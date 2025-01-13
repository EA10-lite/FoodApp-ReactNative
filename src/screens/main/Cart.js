import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCartContext } from "../../context/CartContext";
import {Header} from "../../components/main";
import { CartItem } from "../../components/cards";
import colors from "../../styles/colors";

const Cart = ({navigation}) => {
    const { cart } = useCartContext();
    return (
        <View style={styles.cart}>
            <View style={styles.head}>
                <Header 
                    goBack={()=> navigation.goBack()}
                    title="My Cart"
                    color={styles.title}
                />
            </View>
            <View style={styles.body}>
                <ScrollView>
                    { cart?.length > 0 ? cart?.map((item, index)=> (
                        <CartItem 
                            key={index}
                            data={item}
                        />
                    )) : (
                        <View style={styles.empty_cart}>
                            <Text style={styles.title}> No Item Added </Text>
                            <Text style={styles.subtitle}> You have not added any food to your cart! </Text>
                        </View>
                    )}
                </ScrollView>
            </View>
            { cart?.length > 0 && (
                <View style={styles.footer}>
                    <View style={styles.location}>
                        <View>
                            <Text style={styles.address_title}>Delivery Address</Text>
                            <Text style={styles.address}>7, Shakiru Yusuf Street</Text>
                        </View>

                        <Text style={styles.edit}> Edit </Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Checkout")}>
                        <View style={styles.btn_wrapper}>
                            <Text style={styles.btn_text}>Place order</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    cart: {
        backgroundColor: colors.dark,
        flex: 1,
        paddingTop: 80,
    },
    head: {
        paddingHorizontal: 24,
    },
    title: {
        color: colors.white,
        fontSize: 17,
        fontWeight: 600,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 500,
        color: colors.white,
        textAlign: "center",
        marginTop: 4,
    },
    body: {
        paddingHorizontal: 24,
        height: "68%",
        overflow: "hidden"
    },

    footer: {
        backgroundColor: colors.white,
        padding: 24,
        paddingVertical: 32,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        height: "25%",
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
    },
})

export default Cart;