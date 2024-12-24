import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Restaurants as Shops } from "../../containers"
import restaurant from "../../data/restaurant";

const Restaurants = ({navigation}) => {
    return (
        <SafeAreaView style={styles.restaurants}>
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <TouchableOpacity style={styles.icon} onPress={()=> navigation.goBack()}>
                        <Icon name="arrow-back-ios" size={18} style={{marginLeft: 8}} />
                    </TouchableOpacity>
                    <Text style={styles.title}> Restaurants </Text>
                </View>

                <View style={styles.body}>
                    <Shops 
                        handlePress={(data)=> navigation.navigate("RestaurantDetails", data)}
                        isPage={true}
                        restaurants={restaurant}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    head: {
        paddingHorizontal: 24,
        marginBottom: 32,
        display: "flex",
        flexDirection: "row",
        gap: 7,
        alignItems: "center",
    },
    title: {
        fontSize: 18, 
        fontWeight: 400,
    },
    body: {
        paddingHorizontal: 24,
    },
    icon: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
})

export default Restaurants;