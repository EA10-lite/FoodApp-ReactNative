import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView, Text } from "react-native";
import { Header } from "../../components";
import colors from "../../styles/colors";
import { OrderItem } from "../../components/cards";

const Orders = ({navigation}) => {
    const [active, setActive] = useState("history");

    return (
        <SafeAreaView style={styles.orders}>
            <View style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        title="My Orders"
                        goBack={()=> navigation.goBack()}
                    />
                </View>

                <ScrollView style={styles.body}>
                    <View style={styles.nav}>
                        <Text onPress={()=> setActive("ongoing")} style={[styles.nav_item, active === "ongoing" && styles.active_tab]}> Ongoing </Text>
                        <Text onPress={()=> setActive("history")} style={[styles.nav_item, active === "history" && styles.active_tab]}> History </Text>
                    </View>

                    <View style={styles.fields}>
                        { active === "history" ? (
                            <Text> History </Text>
                        ) : (
                            <Text> Ongoing </Text>
                        )}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    head: {
        padding: 24,
    },
    body: {
        padding: 24,
    },
    nav: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 24,
    },
    nav_item: {
        width: "50%",
        textAlign: "center",
        color: colors.secondary,
        fontSize: 16,
        paddingBottom: 4,
        borderBottomWidth: 2,
        borderColor: colors.grey,
    },
    active_tab: {
        color: colors.primary,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
    }
});

export default Orders;