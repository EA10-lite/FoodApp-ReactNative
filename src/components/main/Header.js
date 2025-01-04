import React from "react";
import {  Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import colors from "../../styles/colors";

const Header = ({ goBack, title, color}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.nav, styles.row]}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.box, styles.row]} onPress={goBack}>
                        <Icon name="arrow-back-ios" size={18} color="#747783" />
                    </TouchableOpacity>
                    <Text style={[styles.title, color]}>{title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        marginBottom: 16,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        fontWeight: 400,
        color: colors.dark,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
    box: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#ECF0F4",
        justifyContent: 'center',
    },
})

export default Header;