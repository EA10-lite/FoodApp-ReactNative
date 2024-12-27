import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/profile";

const Address = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.view}>
                <View style={styles.head}>
                    <Header
                        isEditable={false}
                        canEdit={true}
                        goToEdit={()=> navigation.navigate("EditAddress")}
                        goBack={()=> navigation.goBack()}
                        title="Address"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {},
    view: {},
});

export default Address;