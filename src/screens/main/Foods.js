import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Foods as FoodContainer } from "../../containers";
import food from "../../data/food";
import { Header } from "../../components";

const Foods= ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        title='Fast Foods'
                        goBack={()=> navigation.goBack()}
                    />
                </View>

                <View style={styles.body}>
                    <FoodContainer 
                        handlePress={(data)=> navigation.navigate("FoodDetails", data)}
                        isPage={true}
                        foods={food}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    head: {
        padding: 24,
    },
    body: {
        paddingHorizontal: 24,
    }
})

export default Foods;