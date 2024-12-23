import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";


const Header = ({ title, subtitle }) => {
    return (
        <View style={styles.header}>
            <Image 
                style={styles.img} 
                source={require('../../../assets/img/ellipse.png')} 
            />
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
        top: 0,
        left: 0,
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