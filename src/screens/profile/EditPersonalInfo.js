import React from "react";
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Header } from "../../compnents/profile";

const EditPersonalInfo = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.view}>
                <View style={styles.head}>
                    <Header 
                        isEditable={true}
                        goBack={()=> navigation.goBack()}
                        title="Edit Personal Info"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});

export default EditPersonalInfo;