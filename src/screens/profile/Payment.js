import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView} from "react-native";
import { Header } from "../../components";

const Payment = ({navigation}) => {
    return (
        <SafeAreaView style={styles.favorites}>
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        title="Payment Method"
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

export default Payment;