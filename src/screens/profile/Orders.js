import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView} from "react-native";
import { Header } from "../../components";

const Orders = ({navigation}) => {
    return (
        <SafeAreaView style={styles.orders}>
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        title="My Orders"
                        goBack={()=> navigation.goBack()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    head: {
        padding: 24,
    }
});

export default Orders;