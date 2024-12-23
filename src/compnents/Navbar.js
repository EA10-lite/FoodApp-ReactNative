import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../styles/colors";


const Navbar = () => {
    return (
        <View>
            <View style={styles.navbar}>
                <View style={styles.left}>
                    <View style={styles.menu}>
                        <Image source={require("../../assets/img/Menu.png")} style={styles.icon} />
                     </View>
                    <View style={styles.location}>
                        <Text style={styles.location}>Deliver TO</Text>
                        <Text style={styles.address}>Igbe Road, Off Dr. Bakare</Text>
                    </View>
                </View>

                <View style={styles.right}>
                    <View style={styles.cart}>
                        <Image source={require("../../assets/img/shopping-bag.png")} style={styles.icon} />
                    </View>
                </View>
            </View>

            <Text style={styles.greeting}>Hello Chris, <Text style={styles.bold}>Good Afternoon!</Text></Text>
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
    }
})

export default Navbar;