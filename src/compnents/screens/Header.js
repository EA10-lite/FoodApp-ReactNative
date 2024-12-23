import React from "react";
import {View, StyleSheet, ImageBackground} from "react-native";


const Header = ({ img_source }) => {
    return (
        <View style={styles.header}>
            <View style={styles.image_box}>
                <ImageBackground style={styles.image} source={img_source}>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
    },
    image_box: {
        height: 321,
        marginBottom: 16,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
    },
    image: {
        height: 321,

    },
})

export default Header;