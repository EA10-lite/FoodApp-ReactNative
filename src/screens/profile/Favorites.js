import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import { useFavoriteContext } from "../../context/FavoriteContext";
import { Header } from "../../components/main";
import { Restaurants } from "../../containers";

const Favorites = ({navigation}) => {
    const { favorites } = useFavoriteContext();
    return (
        <SafeAreaView style={styles.favorites}>
            <ScrollView style={styles.container}>
                <View style={styles.head}>
                    <Header 
                        title="My Favorites"
                        goBack={()=> navigation.goBack()}
                    />
                </View>

                <View style={styles.body}>
                    <View style={styles.restaurant}>
                        <Restaurants 
                            handlePress={(data)=> navigation.navigate("RestaurantDetails", data)}
                            restaurants={favorites?.filter(favorite => favorite.type === "Restaurant")}
                        />
                    </View>
                    <View style={styles.food}>
                        { favorites?.filter(favorite => favorite.type === "Food")?.map((item, index)=> (
                            <Text key={index}>{item.name}</Text>
                        ))}
                    </View>
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
});

export default Favorites;