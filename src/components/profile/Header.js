import React from "react";
import {  Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import AntIcon from "react-native-vector-icons/AntDesign"
import colors from "../../styles/colors";
import { useGlobalContext } from "../../context/GlobalContext";

const Header = ({ isEditable, canEdit, goToEdit, goBack, title="Profile"}) => {
    const { user } = useGlobalContext();

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
                        {user?.picture && <Image source={require("../../../assets/img/profile.jpg")} style={styles.img} />}
                        {!user?.picture && <AntIcon name="user" size={40} />}
                    </View>
                    <Text style={styles.name}>{ user?.name }</Text>
                    {user?.about && <Text style={styles.bio}>{user?.about}</Text>}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        marginBottom: 8,
        padding: 24,
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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