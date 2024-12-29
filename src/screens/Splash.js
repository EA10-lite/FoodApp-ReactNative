import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image 
                    source={require('../../assets/img/Logo.png')}
                    style={styles.logo}
                />
                <Image 
                    source={require('../../assets/img/top_icon.png')}
                    style={styles.top_img}
                />
                <Image 
                    source={require('../../assets/img/bottom_icon.png')}
                    style={styles.bottom_img}
                />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        position: 'relative',
    },
    top_img: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    bottom_img: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
})

export default Splash;