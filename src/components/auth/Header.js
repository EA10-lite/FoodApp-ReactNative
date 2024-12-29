import React from "react";
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import colors from "../../styles/colors";


const Header = ({ title, subtitle, goBack}) => {
    return (
        <View style={styles.header}>
            { goBack && (
                <TouchableOpacity style={styles.img} onPress={goBack}>
                    <Icon name="arrow-back-ios" size={18} color="#747783" />
                </TouchableOpacity>
            )}
            <View>
                <Text style={styles.title}> { title } </Text>
                <Text style={styles.subtitle}> { subtitle } </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    img: {
        position: 'absolute',
        top: 12,
        left: 12,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#ECF0F4",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize:  30,
        fontWeight: 600,
        marginBottom: 16
    },
    subtitle: {
        color: "#FFF2E0",
        textAlign: 'center',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 26,
    },
})

export default Header;