import React from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../styles/colors";

const Success = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}> 
                <View style={styles.success_box}>
                    <View style={styles.img_box}>
                        <Image 
                            source={require('../../../assets/img/success.png')} 
                            style={styles.img} 
                        />
                    </View>
                    <Text style={styles.title}> Congratulations </Text>
                    <Text style={styles.subtitle}> Your order is being process at the moment, we will notify you when your order is being processed! </Text>
                </View>

                <TouchableOpacity style={styles.action_btn} onPress={()=> navigation.navigate("Home")}>
                    <Text style={styles.btn_text}> Go Home </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 24,
        position: "relative",
    },
    success_box: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    img_box: {
        height: 240,
        width: "100%",
        marginBottom: 20,
        borderRadius: 32
    },
    img: {
        width: "100%",
        objectFit: "cover",
        height: 240,
    },
    title: {
        fontSize: 28,
        fontWeight: 600,
        color: colors.dark,
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 400,
        color: colors.secondary,
        textAlign: "center",
    },
    action_btn: {
        backgroundColor: colors.primary,
        width: "100%",
        paddingVertical: 16,
        borderRadius: 12,
    },
    btn_text: {
        color: colors.white,
        textAlign: "center",
        fontSize: 16,
        fontWeight: 600,
    }
});

export default Success;