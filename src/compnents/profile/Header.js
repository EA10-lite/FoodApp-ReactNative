import React from "react";
import {  Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import colors from "../../styles/colors";

const Header = ({ isEditable, canEdit, goToEdit, goBack, title="Profile"}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.nav, styles.row]}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.box, styles.row]} onPress={goBack}>
                        <Icon name="arrow-back-ios" size={18} color="#747783" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                </View>

                { canEdit && (
                    <Text style={styles.btn} onPress={goToEdit}> Edit </Text>
                )}
            </View>


            { !isEditable && (
                <View style={styles.profile}>
                    <View style={styles.profile_img}>
                        <Image source={require("../../../assets/img/profile.jpg")} style={styles.img} />
                    </View>
                    <Text style={styles.name}>Chris Emmanuel</Text>
                    <Text style={styles.bio}>Enough said about me, what is it that you want to know? That you don't know already!</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        marginBottom: 32,
        paddingHorizontal: 16,
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
    profile_img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: "auto",
        backgroundColor: "#FFC6AE",
        marginBottom: 12,
        overflow: "hidden",
    },
    img: {
        width: 100,
        height: 100,
        objectFit: "cover",
    },
    name: {
        fontSize: 18, 
        fontWeight: 400,
        color: colors.dark,
        marginBottom: 10,
        textAlign: "center",
    },
    bio: {
        fontSize: 14,
        color: "#A0A5BA",
        textAlign: "center",
    },
    btn: {
        color: colors.primary,
        fontSize: 14,
        textTransform: "uppercase",
        textDecorationLine: "underline",
    },
})

export default Header;