import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/auth/Header";

const Auth = ({ children }) => {
    return (
        <SafeAreaView style={styles.auth}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.body}>s
                    { children }
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Auth;