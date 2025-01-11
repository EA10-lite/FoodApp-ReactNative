import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useGlobalContext } from "../../context/GlobalContext";
import { useCartContext } from "../../context/CartContext";
import Icon from "react-native-vector-icons/MaterialIcons";
import UserIcon from "react-native-vector-icons/AntDesign";
import colors from "../../styles/colors";


const Navbar = ({ goToCart, goToProfile }) => {
    const { user } = useGlobalContext();
    const { cart } = useCartContext();

    let total_item = 0;
    for(let i = 0; i < cart.length; i++) {
        total_item += cart[i]?.quantity
    }
    

    return (
        <View>
            <View style={styles.navbar}>
                <View style={styles.left}>
                    <TouchableOpacity style={styles.menu} onPress={goToProfile}>
                        <UserIcon name="user" color={colors.dark} size={24} />
                     </TouchableOpacity>
                    <View style={styles.location}>
                        <Text style={styles.location}>Deliver TO</Text>
                        <Text style={styles.address}>{ user?.address?.street || "No Address added"}</Text>
                    </View>
                </View>

                <View style={styles.right}>
                    <TouchableOpacity style={styles.cart} onPress={goToCart}>
                        <View style={styles.cart}>
                            <Text style={styles.cart_count}>{total_item}</Text>
                            <Icon name="shopping-cart" color="#fff" size={20} style={{marginTop: 12,}} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.greeting}>Hello {user?.name?.split(" ")[0]}, <Text style={styles.bold}>Good Afternoon!</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
        width: '100%',
        marginBottom: 16,
    },
    left: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        flexDirection: "row",
        gap: 8,
    },
    menu: {
        width: 48,
        height: 48,
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ECF0F4",
    },
    location: {
        color: colors.primary,
        textTransform: 'uppercase',
        fontSize: 13,
        fontWeight: 400,
        marginBottom: 2,
    },
    address: {
        fontSize: 12,
        fontWeight: 400,
        color: "#676767",
    },
    cart: {
        width: 48,
        height: 48,
        backgroundColor: colors.dark,
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 14,
        lineHeight: 26,
        fontWeight: 400,
    },
    bold: {
        fontWeight: 600,
    },
    icon: {
        width: 20,
        height: 20,
        objectFit: "cover"
    },
    cart_count: {
        color: colors.white,
        fontSize: 13,
        fontWeight: 800, 
        position: "absolute",
        top: 6,
    },
})

export default Navbar;